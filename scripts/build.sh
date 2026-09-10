#!/usr/bin/env bash
# One-shot local build: installs deps (if missing), renders every resume
# template from data/cv.yaml, and exports each to PDF via headless Chromium.
#
# Usage: bash scripts/build.sh
# Output: dist/index.html (picker page) + dist/<template>/index.html + dist/<template>/resume.pdf
set -euo pipefail

cd "$(dirname "$0")/.."

echo "== Checking Python dependencies =="
python3 -c "import jinja2, yaml, markupsafe, playwright" 2>/dev/null || {
  echo "Installing jinja2, pyyaml, playwright..."
  pip install jinja2 pyyaml playwright
}

echo "== Ensuring headless Chromium is installed =="
python3 -c "
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    p.chromium.launch().close()
" 2>/dev/null || playwright install --with-deps chromium

echo "== Rendering templates =="
python3 scripts/render_templates.py

echo "== Exporting PDFs =="
python3 scripts/export_pdfs.py

echo "== Done. Open dist/index.html to preview. =="
