$raiz = Split-Path -Parent $PSScriptRoot
$html = Get-Content -Raw (Join-Path $raiz "index.html")
$css = Get-Content -Raw (Join-Path $raiz "ativos\estilo.css")
$logo = Join-Path $raiz "ativos\vortex-marca.png"

if (-not (Test-Path $logo)) {
  throw "A marca Vortex recortada deve existir em ativos/vortex-marca.png."
}

if ($html -notmatch 'rel="icon" href="ativos/vortex-marca\.png"') {
  throw "O favicon deve usar a marca Vortex recortada."
}

if ($html -notmatch '<img class="marca__glifo" src="ativos/vortex-marca\.png"') {
  throw "A navegação deve exibir a marca Vortex recortada."
}

if ($html -notmatch 'class="capa__marca" src="ativos/vortex-marca\.png"') {
  throw "A hero deve usar a marca Vortex como elemento visual."
}

if ($css -match '(?s)\.capa__brilho\s*\{' -or $css -match '(?s)\.botao--acao\s*\{[^}]*box-shadow') {
  throw "A hero não deve manter o brilho em degradê e os botões não devem ter brilho."
}

if ($css -notmatch '(?s)\.capa__marca\s*\{[^}]*filter:\s*blur\([4-8]px\)') {
  throw "A marca d’água da hero deve ter um desfoque leve."
}

Add-Type -AssemblyName System.Drawing
$imagem = [System.Drawing.Image]::FromFile($logo)
try {
  if ($imagem.Width -ne $imagem.Height -or $imagem.Width -lt 256) {
    throw "A marca deve ser uma imagem quadrada adequada para favicon."
  }
  if ($imagem.GetPixel(0, 0).A -ne 0) {
    throw "A marca recortada deve ter fundo transparente."
  }
  $corDaMarca = $imagem.GetPixel(256, 110)
  if ($corDaMarca.R -lt 240 -or $corDaMarca.G -lt 240 -or $corDaMarca.B -lt 240) {
    throw "A marca Vortex deve ser branca."
  }
} finally {
  $imagem.Dispose()
}

Write-Host "Identidade Vortex validada."
