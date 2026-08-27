$raiz = Split-Path -Parent $PSScriptRoot
$app = Get-Content -Raw (Join-Path $raiz "ativos\app.js")
$css = Get-Content -Raw (Join-Path $raiz "ativos\estilo.css")
$html = Get-Content -Raw (Join-Path $raiz "index.html")

if ($app -notmatch 'marca:\s*"Vortex"') {
  throw "A marca deve ser Vortex."
}

if ($app -notmatch 'whatsapp:\s*"5537988271126"') {
  throw "O WhatsApp deve apontar para o número informado, com DDI do Brasil."
}

if ($app -notmatch 'email:\s*"vortexsoftwareco@gmail\.com"') {
  throw "O e-mail corporativo deve estar configurado."
}

if ($css -match '(?s)\.sobrancelha::before\s*\{') {
  throw "Os subtítulos não devem manter o traço decorativo."
}

if ($css -notmatch '(?s)\.sobrancelha\s*\{.*?color:\s*var\(--ambar\)') {
  throw "Os subtítulos devem usar o amarelo padrão do site."
}

if ($html -notmatch 'Todo candidato tem' -or $html -notmatch 'uma história pra contar\.' -or $html -notmatch 'A questão é onde' -or $html -notmatch 'ela vai ser contada\.') {
  throw "A headline deve usar o texto aprovado."
}

Write-Host "Marca e subtítulos validados."
