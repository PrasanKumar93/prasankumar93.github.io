#!/usr/bin/env python3
"""Print each rendered dist/<template>/index.html to dist/<template>/resume.pdf
using headless Chromium via Playwright.

Run scripts/render_templates.py first so dist/ is populated.

Usage: python3 scripts/export_pdfs.py
Requires: playwright (pip install playwright && playwright install chromium --with-deps)
"""
from pathlib import Path

from playwright.sync_api import sync_playwright

from templates_config import TEMPLATES

ROOT = Path(__file__).resolve().parent.parent
DIST_DIR = ROOT / "dist"


def export_pdfs():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        for tpl in TEMPLATES:
            html_path = DIST_DIR / tpl["id"] / "index.html"
            pdf_path = DIST_DIR / tpl["id"] / "resume.pdf"
            if not html_path.exists():
                raise FileNotFoundError(
                    f"{html_path} not found — run scripts/render_templates.py first"
                )
            page.goto(html_path.resolve().as_uri())
            page.pdf(
                path=str(pdf_path),
                print_background=True,
                prefer_css_page_size=True,
            )
            print(f"Exported {pdf_path}")
        browser.close()


if __name__ == "__main__":
    export_pdfs()
