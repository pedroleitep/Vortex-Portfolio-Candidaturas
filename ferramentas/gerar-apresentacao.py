"""Gera a apresentação comercial a partir de ferramentas/apresentacao-fonte.html.

A fonte é o arquivo que se edita: HTML, CSS e JS do deck, com marcadores
__IMG_<id>__ no lugar das imagens. Este script troca cada marcador pela
imagem embutida em data URI e escreve as duas saídas:

    apresentacao/index.html   página autônoma, publicada junto com o site
    apresentacao/deck.html    mesmo conteúdo sem <html>/<head>/<body>,
                              para colar em hospedagens que embrulham a página

Embutir as imagens deixa o arquivo em ~900 KB, mas o deck passa a abrir sem
rede — o que importa quando a apresentação é numa sala com Wi-Fi ruim.

    python ferramentas/gerar-apresentacao.py
"""

import base64
import os
import sys

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ATIVOS = os.path.join(RAIZ, "ativos")
FONTE = os.path.join(RAIZ, "ferramentas", "apresentacao-fonte.html")
DESTINO = os.path.join(RAIZ, "apresentacao")

CAMPANHAS = ["angela", "aurea", "bruno", "fabio", "igor", "jacqueline", "modelo", "zereis"]

META = """<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<meta name="theme-color" content="#0a0c16" />
<meta name="description" content="Apresentação comercial da Vortex: sete campanhas no ar em quatro estados e o que vem em todo site, em onze slides." />
<meta name="robots" content="noindex" />
<link rel="icon" href="../ativos/vortex-marca.png" type="image/png" />
"""


def uri(caminho, mime):
    with open(caminho, "rb") as arquivo:
        return "data:%s;base64,%s" % (mime, base64.b64encode(arquivo.read()).decode("ascii"))


def main():
    if not os.path.exists(FONTE):
        sys.exit("fonte não encontrada: %s" % FONTE)

    with open(FONTE, encoding="utf-8") as arquivo:
        html = arquivo.read()

    imagens = {"__IMG_marca__": (os.path.join(ATIVOS, "vortex-marca.png"), "image/png")}
    for nome in CAMPANHAS:
        imagens["__IMG_%s__" % nome] = (os.path.join(ATIVOS, "thumbs", "%s.jpg" % nome), "image/jpeg")

    ausentes = [caminho for caminho, _ in imagens.values() if not os.path.exists(caminho)]
    if ausentes:
        sys.exit("imagens ausentes:\n  " + "\n  ".join(ausentes))

    for marcador, (caminho, mime) in imagens.items():
        if marcador not in html:
            sys.exit("marcador não encontrado na fonte: %s" % marcador)
        html = html.replace(marcador, uri(caminho, mime))

    if "__IMG_" in html:
        sys.exit("sobraram marcadores __IMG_ na saída")

    corte = '<div class="palco">'
    if corte not in html:
        sys.exit("marcador de início do corpo não encontrado na fonte")
    cabeca, corpo = html.split(corte, 1)
    corpo = corte + corpo

    os.makedirs(DESTINO, exist_ok=True)
    saidas = {
        os.path.join(DESTINO, "index.html"):
            META + cabeca.strip() + "\n</head>\n<body>\n" + corpo.strip() + "\n</body>\n</html>\n",
        os.path.join(DESTINO, "deck.html"): html,
    }

    for caminho, conteudo in saidas.items():
        with open(caminho, "w", encoding="utf-8") as arquivo:
            arquivo.write(conteudo)
        print("%s (%.2f MB)" % (os.path.relpath(caminho, RAIZ), os.path.getsize(caminho) / 1048576))


if __name__ == "__main__":
    main()
