/* =========================================================
   Primeiro Turno — portfólio de sites de campanha
   Tudo o que muda no dia a dia está em CONFIG e PROJETOS.
   ========================================================= */

const CONFIG = {
  marca: "Vortex",
  linhaMarca: "sites de campanha",

  // Contato. O telefone entra só com dígitos, com DDI 55.
  whatsapp: "5537988271126",
  mensagemZap:
    "Olá! Vi o portfólio de sites de campanha e quero falar sobre o site da minha candidatura.",
  email: "v0rtexangency@gmail.com",
  assuntoEmail: "Site de campanha — Eleições 2026",

  // Prazos exibidos na página. Confirmar antes de publicar.
  prazoPrimeiraVersao: "5 dias",
  prazoAjustes: "até o dia da eleição",

  // Calendário eleitoral de 2026.
  inicioPropaganda: "2026-08-16",
  primeiroTurno: "2026-10-04",
  segundoTurno: "2026-10-25",
};

const PROJETOS = [
  {
    id: "bruno",
    nome: "Dr. Bruno Resende",
    numero: "4400",
    cargo: "Deputado Federal",
    uf: "ES",
    estado: "Espírito Santo",
    partido: "União Brasil",
    lema: "Fazer o cuidado chegar mais longe.",
    nota:
      "Médico oncologista, primeiro mandato estadual. Ensaio de voto, trajetória da roça ao plenário e as entregas do mandato em números.",
    cor: "#E8447F",
    grupo: "federal",
    url: "https://lp-bruno-resende.vercel.app/",
  },
  {
    id: "aurea",
    nome: "Áurea Carolina",
    numero: "500",
    cargo: "Senado Federal",
    uf: "MG",
    estado: "Minas Gerais",
    partido: "PSOL",
    lema: "Com Áurea são outros 500.",
    nota:
      "Campanha majoritária ao Senado: tipografia pesada, bordões em movimento e uma página de bandeiras que sustenta o discurso.",
    cor: "#FAC400",
    grupo: "senado",
    url: "https://lp-aurea-carolina.vercel.app/",
  },
  {
    id: "fabio",
    nome: "Fábio Trad",
    numero: "13",
    cargo: "Governo do Estado",
    uf: "MS",
    estado: "Mato Grosso do Sul",
    partido: "PT",
    lema: "Coragem pra sonhar.",
    nota:
      "Chapa majoritária com vice: apresentação em vídeo, trajetória no Congresso e galeria de rua com a militância.",
    cor: "#E01B3C",
    grupo: "governo",
    url: "https://fabiotrad13.com.br/",
  },
  {
    id: "angela",
    nome: "Ângela Águida Portella",
    numero: "11120",
    cargo: "Deputada Estadual",
    uf: "RR",
    estado: "Roraima",
    partido: "PP",
    lema: "É pra todos. É pra já.",
    nota:
      "Quarto mandato: contadores de leis em vigor e uma seção inteira para o TEAMARR, o centro de acolhimento ao autista que ela criou.",
    cor: "#FE00B0",
    grupo: "estadual",
    url: "https://lp-angela-aguida.vercel.app/",
  },
  {
    id: "zereis",
    nome: "Zé Reis",
    numero: "20456",
    cargo: "Deputado Estadual",
    uf: "MG",
    estado: "Minas Gerais",
    partido: "Podemos",
    lema: "Trabalho que fica.",
    nota:
      "Norte de Minas: compromissos assumidos um a um, vídeos da estrada e agenda de quem vive rodando o interior.",
    cor: "#2B62E8",
    grupo: "estadual",
    url: "https://zereis.com.br/",
  },
  {
    id: "jacqueline",
    nome: "Jacqueline Moraes",
    numero: "40400",
    cargo: "Deputada Estadual",
    uf: "ES",
    estado: "Espírito Santo",
    partido: "PSB",
    lema: "Coragem para virar o jogo.",
    nota:
      "Da camelô à candidata: a história pessoal é o eixo do site inteiro. No ar em domínio próprio, jacquelinemoraes.com.",
    cor: "#F1862A",
    grupo: "estadual",
    url: "https://jacquelinemoraes.com/",
  },
  {
    id: "igor",
    nome: "Igor Eto",
    numero: "7077",
    cargo: "Deputado Federal",
    uf: "MG",
    estado: "Minas Gerais",
    partido: "Avante",
    lema: "O dinheiro do seu imposto de volta pra você.",
    nota:
      "Pauta econômica explicada em desenho: como o imposto sai da sua mão e volta, mais as pautas de cada região de Minas.",
    cor: "#FFD740",
    grupo: "federal",
    url: "https://igoreto7077.com.br/",
  },
  {
    id: "modelo",
    nome: "Ana Marques",
    numero: "15300",
    cargo: "Modelo base",
    uf: "—",
    estado: "Candidata fictícia",
    partido: "demonstração",
    lema: "Trabalho que se vê.",
    nota:
      "O esqueleto da casa, com dados fictícios. É daqui que sai o site da sua campanha: entra a sua identidade, a sua história e o seu número.",
    cor: "#7C8B5E",
    grupo: "modelo",
    url: "https://candidato-template.vercel.app/",
  },
];

const ITENS = [
  ["Simulador de urna", "O eleitor treina o seu número antes de chegar na seção. Está em toda campanha acima."],
  ["Trajetória em linha do tempo", "A história contada por etapas: origem, profissão, mandatos e o que vem agora."],
  ["Mandato em números", "Leis, votos, municípios e obras em contadores que sobem conforme a pessoa rola a página."],
  ["Propostas por eixo", "Cada bandeira com espaço próprio, escrita em linguagem de gente, não de projeto de lei."],
  ["Galeria e vídeos", "Rua, plenária e apresentação em vídeo, carregando leve mesmo em rede fraca."],
  ["Fale com a campanha", "WhatsApp, redes e formulário de apoio no mesmo lugar, sem plugin de terceiro."],
  ["Prévia de compartilhamento", "Título, texto e imagem prontos para o link cair bonito no grupo e no story."],
  ["Domínio próprio e HTTPS", "seunome.com.br no ar, com certificado e hospedagem inclusa na entrega."],
  ["Celular primeiro", "Contraste, navegação por teclado e leitor de tela testados. A maioria do eleitorado abre pelo celular."],
];

const GRUPOS = [
  ["todos", "Tudo"],
  ["governo", "Governo"],
  ["senado", "Senado"],
  ["federal", "Câmara Federal"],
  ["estadual", "Assembleia Estadual"],
  ["modelo", "Modelo base"],
];

/* ---------------------------------------------------------
   utilidades
   --------------------------------------------------------- */
const $ = (s, raiz = document) => raiz.querySelector(s);
const $$ = (s, raiz = document) => Array.from(raiz.querySelectorAll(s));

const thumb = (p) => "ativos/thumbs/" + p.id + ".jpg";
const semProtocolo = (u) => u.replace(/^https?:\/\//, "").replace(/\/$/, "");

const TINTA_ESCURA = "#14110a";
const TINTA_CLARA = "#f1efe8";

function luminancia(hex) {
  const n = parseInt(hex.slice(1), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// Texto escuro ou claro sobre a cor da campanha: fica o que tiver mais
// contraste, não o que a cor "parece" pedir.
function textoSobre(hex) {
  const fundo = luminancia(hex);
  const razao = (a, b) => (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
  return razao(fundo, luminancia(TINTA_ESCURA)) >= razao(fundo, luminancia(TINTA_CLARA))
    ? TINTA_ESCURA
    : TINTA_CLARA;
}

function dataLocal(iso) {
  const [a, m, d] = iso.split("-").map(Number);
  return new Date(a, m - 1, d);
}

function diasAte(iso) {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  return Math.ceil((dataLocal(iso) - hoje) / 86400000);
}

function porExtenso(iso) {
  return dataLocal(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
}

/* ---------------------------------------------------------
   marca, contato e prazos
   --------------------------------------------------------- */
function aplicarConfig() {
  $$("[data-marca-nome]").forEach((n) => (n.textContent = CONFIG.marca));
  $$("[data-marca-linha]").forEach((n) => (n.textContent = CONFIG.linhaMarca));

  const zap =
    "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(CONFIG.mensagemZap);
  $$("[data-zap]").forEach((a) => {
    a.href = zap;
    a.target = "_blank";
    a.rel = "noopener";
  });

  $$("[data-email]").forEach((a) => {
    a.href = "mailto:" + CONFIG.email + "?subject=" + encodeURIComponent(CONFIG.assuntoEmail);
  });

  const rodapeCartao = $("[data-prazo-cartao]");
  if (rodapeCartao) {
    rodapeCartao.textContent =
      "Primeira versão no ar em " + CONFIG.prazoPrimeiraVersao + ". Ajustes " + CONFIG.prazoAjustes + ".";
  }
}

/* ---------------------------------------------------------
   parede de campanha (capa)
   --------------------------------------------------------- */
function montarParede() {
  const parede = $("[data-parede]");
  if (!parede) return;

  const duracoes = [54, 46, 62];
  parede.innerHTML = "";

  for (let c = 0; c < 3; c++) {
    const col = document.createElement("div");
    col.className = "parede__col parede__col--" + (c + 1) + (c === 1 ? " parede__col--tras" : "");

    const fita = document.createElement("div");
    fita.className = "parede__fita";
    fita.style.setProperty("--dur", duracoes[c] + "s");

    // Cada coluna começa num ponto diferente da lista, para não repetir a mesma
    // campanha lado a lado. O conjunto entra duas vezes: é o que fecha o laço
    // da animação sem salto.
    const inicio = [0, 3, 5][c];
    const lista = [];
    for (let i = 0; i < 6; i++) lista.push(PROJETOS[(inicio + i) % PROJETOS.length]);

    [...lista, ...lista].forEach((p) => {
      const fig = document.createElement("figure");
      fig.className = "tela";
      fig.style.setProperty("--cor", p.cor);
      const img = document.createElement("img");
      img.src = thumb(p);
      img.alt = "";
      img.loading = c === 0 ? "eager" : "lazy";
      img.decoding = "async";
      img.width = 960;
      img.height = 600;
      fig.appendChild(img);
      fita.appendChild(fig);
    });

    col.appendChild(fita);
    parede.appendChild(col);
  }
}

function montarFaixa() {
  const trilho = $("[data-faixa]");
  if (!trilho) return;
  const pedaco = PROJETOS.map((p) => p.nome.toUpperCase() + " " + p.numero).join("  ✦  ");
  trilho.innerHTML = "";
  for (let i = 0; i < 2; i++) {
    const s = document.createElement("span");
    s.textContent = pedaco + "  ✦  ";
    trilho.appendChild(s);
  }
}

/* ---------------------------------------------------------
   grade de campanhas
   --------------------------------------------------------- */
function montarFiltros() {
  const alvo = $("[data-filtros]");
  alvo.innerHTML = "";
  GRUPOS.forEach(([id, rot], i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "filtro" + (i === 0 ? " is-on" : "");
    b.textContent = rot;
    b.setAttribute("aria-pressed", i === 0 ? "true" : "false");
    b.addEventListener("click", () => {
      $$(".filtro").forEach((f) => {
        f.classList.toggle("is-on", f === b);
        f.setAttribute("aria-pressed", f === b ? "true" : "false");
      });
      $$(".cartao").forEach((c) => {
        c.classList.toggle("is-fora", id !== "todos" && c.dataset.grupo !== id);
      });
    });
    alvo.appendChild(b);
  });
}

function montarGrade() {
  const grade = $("[data-grade]");
  grade.innerHTML = "";

  PROJETOS.forEach((p) => {
    const li = document.createElement("li");
    li.className = "cartao";
    li.dataset.grupo = p.grupo;
    li.style.setProperty("--cor", p.cor);
    li.style.setProperty("--corTexto", textoSobre(p.cor));

    li.innerHTML =
      '<div class="cartao__tela">' +
      '<img alt="" width="960" height="600" loading="lazy" decoding="async" />' +
      '<button class="cartao__abrir" type="button"><span>Abrir o site ao vivo</span></button>' +
      "</div>" +
      '<div class="cartao__corpo">' +
      '<div class="cartao__linha"><h3 class="cartao__nome"></h3><span class="cartao__num"></span></div>' +
      '<p class="cartao__meta"></p>' +
      '<p class="cartao__lema"></p>' +
      '<p class="cartao__nota"></p>' +
      '<div class="cartao__pe">' +
      '<button class="botao botao--linha botao--p" type="button" data-ver>Ver aqui dentro</button>' +
      '<a class="cartao__link" target="_blank" rel="noopener"></a>' +
      "</div>" +
      "</div>";

    const img = li.querySelector("img");
    img.src = thumb(p);
    img.alt = "Tela de abertura do site de " + p.nome;

    li.querySelector(".cartao__nome").textContent = p.nome;
    li.querySelector(".cartao__num").textContent = p.numero;
    li.querySelector(".cartao__meta").textContent =
      p.cargo + " · " + (p.uf === "—" ? p.estado : p.uf) + (p.partido ? " · " + p.partido : "");
    li.querySelector(".cartao__lema").textContent = p.lema;
    li.querySelector(".cartao__nota").textContent = p.nota;

    const link = li.querySelector(".cartao__link");
    link.href = p.url;
    link.textContent = semProtocolo(p.url) + " ↗";

    const abrir = li.querySelector(".cartao__abrir");
    abrir.setAttribute("aria-label", "Abrir o site de " + p.nome + " ao vivo");
    abrir.addEventListener("click", () => abrirVisor(p));
    li.querySelector("[data-ver]").addEventListener("click", () => abrirVisor(p));

    grade.appendChild(li);
  });
}

/* ---------------------------------------------------------
   listas de texto
   --------------------------------------------------------- */
function montarItens() {
  const alvo = $("[data-itens]");
  if (!alvo) return;
  alvo.innerHTML = "";
  ITENS.forEach(([titulo, texto]) => {
    const li = document.createElement("li");
    li.className = "item";
    li.innerHTML = '<span class="item__marca" aria-hidden="true"></span><h3></h3><p></p>';
    li.querySelector("h3").textContent = titulo;
    li.querySelector("p").textContent = texto;
    alvo.appendChild(li);
  });
}

function montarPassos() {
  const alvo = $("[data-passos]");
  if (!alvo) return;
  const passos = [
    ["Conversa", "Trinta minutos", "Número, cargo, história e o que já foi entregue no mandato. Sem formulário de agência."],
    ["Estrutura no ar", "Em " + CONFIG.prazoPrimeiraVersao, "Você recebe o link da primeira versão para revisar com a sua equipe, no seu celular."],
    ["Campanha viva", "Ajustes " + CONFIG.prazoAjustes, "Conteúdo novo, seção nova, agenda nova. O site acompanha a campanha em vez de envelhecer nela."],
  ];
  alvo.innerHTML = "";
  passos.forEach(([titulo, prazo, texto]) => {
    const li = document.createElement("li");
    li.className = "passo";
    li.innerHTML = "<b></b><h3></h3><p></p>";
    li.querySelector("b").textContent = prazo;
    li.querySelector("h3").textContent = titulo;
    li.querySelector("p").textContent = texto;
    alvo.appendChild(li);
  });
}

/* ---------------------------------------------------------
   contagem regressiva e linha do tempo
   --------------------------------------------------------- */
function montarPrazo() {
  const d1 = diasAte(CONFIG.primeiroTurno);
  const d2 = diasAte(CONFIG.segundoTurno);

  $$("[data-dias-1t], [data-dias-1t-2], [data-dias-1t-3]").forEach(
    (n) => (n.textContent = Math.max(d1, 0))
  );
  $$("[data-dias-2t]").forEach((n) => (n.textContent = Math.max(d2, 0)));

  const linha = $("[data-linha]");
  if (!linha) return;

  const ini = dataLocal(CONFIG.inicioPropaganda).getTime();
  const fim = dataLocal(CONFIG.segundoTurno).getTime();
  const hoje = Date.now();
  const pos = (t) => Math.min(100, Math.max(0, ((t - ini) / (fim - ini)) * 100));

  const marcos = [
    { t: ini, rot: porExtenso(CONFIG.inicioPropaganda), leg: "propaganda liberada" },
    { t: hoje, rot: "hoje", leg: "você está aqui", agora: true },
    { t: dataLocal(CONFIG.primeiroTurno).getTime(), rot: porExtenso(CONFIG.primeiroTurno), leg: "1º turno" },
    { t: fim, rot: porExtenso(CONFIG.segundoTurno), leg: "2º turno" },
  ];

  linha.innerHTML = "";
  const preenche = document.createElement("div");
  preenche.className = "linha__preenche";
  preenche.style.width = pos(hoje) + "%";
  linha.appendChild(preenche);

  marcos.forEach((m) => {
    const x = pos(m.t);
    const el = document.createElement("div");
    el.className =
      "marco" + (m.agora ? " marco--hoje" : "") + (x <= 1 ? " marco--ini" : "") + (x >= 99 ? " marco--fim" : "");
    el.style.left = x + "%";
    el.innerHTML = "<b></b><span></span>";
    el.querySelector("b").textContent = m.rot;
    el.querySelector("span").textContent = m.leg;
    linha.appendChild(el);
  });
}

/* ---------------------------------------------------------
   visor ao vivo
   --------------------------------------------------------- */
const visor = $("[data-visor]");
const frameVisor = $("[data-frame-visor]");
const palco = $("[data-palco]");
let focoAnterior = null;

function abrirVisor(p) {
  if (!p) return;
  focoAnterior = document.activeElement;
  $("[data-visor-nome]").textContent = p.nome;
  $("[data-visor-meta]").textContent =
    p.numero + " · " + p.cargo + " · " + p.estado + (p.partido ? " · " + p.partido : "");
  $("[data-visor-link]").href = p.url;

  palco.classList.remove("is-pronto");
  frameVisor.src = p.url;
  visor.hidden = false;
  document.body.style.overflow = "hidden";
  $(".visor__x").focus();
}

function fecharVisor() {
  visor.hidden = true;
  frameVisor.src = "about:blank";
  palco.classList.remove("is-pronto");
  document.body.style.overflow = "";
  if (focoAnterior) focoAnterior.focus();
}

function montarVisor() {
  frameVisor.addEventListener("load", () => {
    if (frameVisor.src.startsWith("http")) palco.classList.add("is-pronto");
  });

  $$("[data-fechar-visor]").forEach((b) => b.addEventListener("click", fecharVisor));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !visor.hidden) fecharVisor();
  });
  $$("[data-tela]").forEach((b) => {
    b.addEventListener("click", () => {
      $$("[data-tela]").forEach((o) => o.classList.toggle("is-on", o === b));
      palco.classList.toggle("is-celular", b.dataset.tela === "celular");
    });
  });
}

/* ---------------------------------------------------------
   início
   --------------------------------------------------------- */
function iniciar() {
  aplicarConfig();
  montarParede();
  montarFaixa();
  montarFiltros();
  montarGrade();
  montarItens();
  montarPassos();
  montarPrazo();
  montarVisor();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", iniciar);
} else {
  iniciar();
}
