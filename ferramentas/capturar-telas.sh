#!/usr/bin/env bash
# Recaptura as telas de abertura dos sites e regrava ativos/thumbs/<id>.jpg.
#
# Uso (Git Bash, na raiz do projeto):
#   bash ferramentas/capturar-telas.sh
#   bash ferramentas/capturar-telas.sh igor https://lp-igor-eto.vercel.app/   # só um
#
# Precisa do Chrome instalado e do Python com Pillow (pip install pillow).

set -u
RAIZ="$(cd "$(dirname "$0")/.." && pwd)"
DESTINO="$RAIZ/ativos/thumbs"
CHROME="${CHROME:-/c/Program Files/Google/Chrome/Application/chrome.exe}"

# id|url — a mesma lista que está em ativos/app.js
SITES=(
  "bruno|https://lp-bruno-resende.vercel.app/"
  "aurea|https://lp-aurea-carolina.vercel.app/"
  "fabio|https://lp-fabio-trad.vercel.app/"
  "angela|https://lp-angela-aguida.vercel.app/"
  "zereis|https://ze-reis.vercel.app/"
  "jacqueline|https://jacquelinemoraes.com/"
  "igor|https://lp-igor-eto.vercel.app/"
  "modelo|https://candidato-template.vercel.app/"
)

if [ $# -eq 2 ]; then
  SITES=("$1|$2")
fi

mkdir -p "$DESTINO"
[ -x "$CHROME" ] || { echo "Chrome não encontrado em: $CHROME"; exit 1; }

for par in "${SITES[@]}"; do
  id="${par%%|*}"
  url="${par#*|}"
  echo "capturando $id …"
  # --force-prefers-reduced-motion desliga as animações de entrada dos sites;
  # sem isso a dobra sai pela metade.
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --no-sandbox \
    --force-prefers-reduced-motion --window-size=1440,900 \
    --virtual-time-budget=15000 \
    --screenshot="$DESTINO/$id.png" "$url" </dev/null >/dev/null 2>&1

  python - "$DESTINO/$id" <<'PY'
import sys, os
from PIL import Image
base = sys.argv[1]
im = Image.open(base + ".png").convert("RGB")
im.resize((960, 600), Image.LANCZOS).save(base + ".jpg", quality=82, optimize=True, progressive=True)
os.remove(base + ".png")
PY
done

echo "pronto — arquivos em ativos/thumbs/"
