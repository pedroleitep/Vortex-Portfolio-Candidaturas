# Portfólio — sites de campanha

Landing page de apresentação para leads: mostra as campanhas já entregues e leva
para o WhatsApp. Site estático, sem build e sem dependência — HTML, CSS e um JS.

```
index.html                    estrutura e textos fixos
ativos/estilo.css             design system (cores, tipografia, layout)
ativos/app.js                 CONFIG, lista de projetos e comportamento
ativos/thumbs/<id>.jpg        tela de abertura de cada site (960x600)
ativos/og.jpg                 imagem de compartilhamento (1200x630)
ativos/favicon.svg            ícone da aba
ferramentas/capturar-telas.sh recaptura as thumbs com o Chrome headless
```

## Design system

| Papel | Token | Valor |
|---|---|---|
| Fundo | `--breu` | `#0a0c16` |
| Superfície / cartão | `--breu-2` `--breu-3` | `#10131f` `#161a29` |
| Bordas | `--linha` `--linha-2` | `#262c40` `#39415c` |
| Texto | `--papel` `--bruma` `--bruma-2` | `#f1efe8` `#9ba3b8` `#6d768f` |
| Ação (botões, marcações) | `--ambar` | `#f2a93b` |
| Tempo (contagem, hoje) | `--rosa` | `#ff4a78` |

Regra da casa: **âmbar só para ação, rosa só para tempo**. A cor forte vem das
campanhas — o fundo escuro existe para as telas dos sites acenderem a página.
A barra de rolagem segue os mesmos tokens (trilho `--breu`, punho `--linha-2`,
âmbar no hover).

Tipografia: **Bricolage Grotesque** nos títulos, **IBM Plex Sans** no texto,
**IBM Plex Mono** em números, rótulos e datas.

## O que trocar antes de publicar

Tudo o que muda no dia a dia está no topo de `ativos/app.js`, no objeto `CONFIG`:

| Campo | Hoje | Trocar por |
|---|---|---|
| `marca` | `Primeiro Turno` | nome definitivo da empresa |
| `linhaMarca` | `sites de campanha` | descritor curto abaixo do nome |
| `whatsapp` | `5511999999999` | número real, só dígitos, com DDI 55 |
| `email` | `contato@exemplo.com.br` | e-mail real |
| `prazoPrimeiraVersao` | `5 dias` | prazo que vocês assumem de verdade |
| `prazoAjustes` | `até o dia da eleição` | idem |

Outros pontos provisórios:

- **Logo**: quadrado com gradiente âmbar→rosa, definido em `.marca__glifo`
  (`ativos/estilo.css`) e em `ativos/favicon.svg`.
- **`og:image`**: `ativos/og.jpg` traz o nome provisório. Refazer com o nome
  definitivo e apontar a meta tag para a **URL absoluta** do domínio — WhatsApp
  e LinkedIn não leem caminho relativo.
- **`<title>` e `<meta name="description">`** no `index.html`.

## Como adicionar uma campanha nova

1. Capturar a tela de abertura:

```bash
bash ferramentas/capturar-telas.sh sobrenome https://site-da-campanha.com.br/
```

2. Acrescentar o item no array `PROJETOS` em `ativos/app.js`. Ele entra sozinho
   na parede da capa, na faixa de bordões, no filtro e na grade:

```js
{
  id: "sobrenome",                 // precisa bater com ativos/thumbs/sobrenome.jpg
  nome: "Nome do Candidato",
  numero: "1234",
  cargo: "Deputado Federal",
  uf: "SP",
  estado: "São Paulo",
  partido: "PSB",                  // string vazia se preferir não exibir
  lema: "O bordão da campanha.",
  nota: "Uma ou duas frases sobre o que o site resolveu.",
  cor: "#123456",                  // cor dominante da campanha
  grupo: "federal",                // governo | senado | federal | estadual | modelo
  url: "https://site-da-campanha.com.br/"
}
```

3. Conferir os números fixos da seção **placar** no `index.html` (campanhas no
   ar, estados, cargos, partidos).

A cor do número no cartão é escolhida sozinha: o texto sai escuro ou claro
conforme o que tiver mais contraste com `cor`.

## Como as telas dos sites aparecem

- **Capa**: três colunas de thumbs subindo e descendo em ritmos diferentes.
  Passar o mouse pausa o movimento. Com `prefers-reduced-motion`, a parede fica parada.
- **Grade**: a thumb é a tela de abertura real, atualizada pelo script de captura.
- **Ao vivo**: clicar no cartão abre o site de verdade num visor em tela cheia,
  com alternância computador/celular. Só aí um iframe é carregado — a página em
  si não embute nenhum site.

Os oito sites aceitam ser embutidos (não enviam `X-Frame-Options` nem
`frame-ancestors`). Se alguma campanha nova bloquear iframe, o visor fica vazio;
nesse caso, apontar o cartão direto para o link externo.

Reveja as thumbs quando um site de campanha mudar a dobra — é só rodar
`ferramentas/capturar-telas.sh` de novo.

## Rodar local

```bash
python -m http.server 4173
```

Depois, abrir `http://localhost:4173`.

## Publicar na Vercel

Pasta estática, sem build:

```bash
npx vercel --prod
```

Ou arrastar a pasta em vercel.com/new. Framework: **Other**. Build command: vazio.
Output directory: a própria raiz.

## Acessibilidade e desempenho

- Contraste alto, foco visível em âmbar, `prefers-reduced-motion` respeitado
  (parede e faixa param).
- Nenhuma imagem pesada: as oito thumbs somam cerca de 650 KB, e só a primeira
  coluna da capa carrega em `eager`.
- Nenhum script de terceiro. As únicas requisições externas são as fontes do
  Google e, quando o visor abre, o próprio site da campanha.

## Pendências conhecidas

- Nome, logo e favicon provisórios.
- WhatsApp, e-mail e prazos com valores de exemplo — trocar antes de divulgar.
- Sem fotos da equipe ou bastidores: a página se sustenta nas telas dos sites.
