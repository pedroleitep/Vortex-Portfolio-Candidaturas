"""Gera apresentacao/vortex-apresentacao.pdf a partir do deck já publicado.

Tira um print de cada slide com o Chrome headless, na resolução 1280x720 —
a mesma testada sem rolagem — e junta as páginas num PDF, uma por slide.

Não usa @page/@media print: o motor de impressão do Chrome calcula `vw`/`vh`
e os breakpoints de largura contra um viewport diferente do tamanho de
página declarado em @page, o que reativa a grade "estreita" do celular por
engano e corta conteúdo dos slides mais densos. Tirar print da página normal
(tela, não impressão) evita esse problema por completo.

Precisa do Chrome instalado e do Python com Pillow (pip install pillow).
Rodar depois de ferramentas/gerar-apresentacao.py, que produz
apresentacao/index.html:

    python ferramentas/gerar-apresentacao.py
    python ferramentas/gerar-pdf.py
"""

import os
import re
import subprocess
import sys
import tempfile
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
INDEX = RAIZ / "apresentacao" / "index.html"
SAIDA = RAIZ / "apresentacao" / "vortex-apresentacao.pdf"
CHROME = Path(os.environ.get("CHROME", r"C:\Program Files\Google\Chrome\Application\chrome.exe"))


def contar_slides():
    html = INDEX.read_text(encoding="utf-8")
    return len(re.findall(r"<section[^>]*\bdata-cena\b", html))


def capturar(n, destino):
    url = INDEX.as_uri() + "?export#%d" % n
    subprocess.run(
        [
            str(CHROME),
            "--headless=new",
            "--disable-gpu",
            "--no-sandbox",
            "--hide-scrollbars",
            "--force-prefers-reduced-motion",  # trava a animação de entrada no estado final
            "--window-size=1280,720",
            "--virtual-time-budget=4000",
            "--screenshot=%s" % destino,
            url,
        ],
        stdin=subprocess.DEVNULL,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
        check=True,
    )


def main():
    if not INDEX.exists():
        sys.exit("não encontrado: %s — rode antes: python ferramentas/gerar-apresentacao.py" % INDEX)
    if not CHROME.exists():
        sys.exit("Chrome não encontrado em: %s (defina a variável de ambiente CHROME)" % CHROME)

    total = contar_slides()
    if not total:
        sys.exit("nenhum slide encontrado em %s" % INDEX)

    from PIL import Image

    with tempfile.TemporaryDirectory() as tmp:
        paginas = []
        for n in range(1, total + 1):
            destino = Path(tmp) / ("slide-%02d.png" % n)
            capturar(n, destino)
            if not destino.exists():
                sys.exit("falha ao capturar o slide %d" % n)
            paginas.append(Image.open(destino).convert("RGB"))
            print("slide %d/%d capturado" % (n, total))

        paginas[0].save(SAIDA, save_all=True, append_images=paginas[1:])

    print("%s (%.2f MB, %d paginas)" % (SAIDA.relative_to(RAIZ), SAIDA.stat().st_size / 1048576, total))


if __name__ == "__main__":
    main()
