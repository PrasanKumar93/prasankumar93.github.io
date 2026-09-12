#!/usr/bin/env python3
"""Render data/cv.yaml through each HTML template in templates/ into dist/.

Single source of truth: data/cv.yaml. Each template is a plain Jinja2 HTML
file with embedded CSS (no external assets) so headless Chrome can print it
to PDF without any relative-path surprises.

Usage: python3 scripts/render_templates.py
Requires: jinja2, pyyaml (both already used by this repo's tooling).
"""
import html as html_lib
import re
from datetime import date
from pathlib import Path

import yaml
from jinja2 import Environment, FileSystemLoader, select_autoescape
from markupsafe import Markup

from templates_config import TEMPLATES

ROOT = Path(__file__).resolve().parent.parent
DATA_PATH = ROOT / "data" / "cv.yaml"
TEMPLATES_DIR = ROOT / "templates"
DIST_DIR = ROOT / "dist"

# Canonical domain for <link rel="canonical">. Every rendered page (all three
# template variants) points its canonical at the site root — see the note in
# templates_config.py: ats-safe is the default landing design, so the root
# gets a full duplicate of the ats-safe render rather than a template picker.
SITE_URL = "https://prasankumar93.github.io"

MONTH_NAMES = [
    "", "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
]


def _format_date(value):
    if value is None:
        return ""
    value = str(value).strip()
    if value.lower() == "present":
        return "Present"
    m = re.match(r"^(\d{4})-(\d{2})$", value)
    if m:
        year, month = m.groups()
        return f"{MONTH_NAMES[int(month)]} {year}"
    if re.match(r"^\d{4}$", value):
        return value
    return value


def date_range(dates):
    start, end = dates
    s = _format_date(start) if start else ""
    e = _format_date(end) if end else ""
    if s and e:
        return f"{s} – {e}"
    return s or e


def md_bold(text):
    """Escape HTML, then convert simple **bold** markdown to <strong>."""
    if text is None:
        return Markup("")
    escaped = html_lib.escape(str(text))
    escaped = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", escaped)
    return Markup(escaped)


def load_cv():
    with open(DATA_PATH, "r", encoding="utf-8") as f:
        data = yaml.safe_load(f)
    return data["cv"]


def build_env():
    env = Environment(
        loader=FileSystemLoader(str(TEMPLATES_DIR)),
        autoescape=select_autoescape(["html"]),
        trim_blocks=True,
        lstrip_blocks=True,
    )
    env.filters["date_range"] = date_range
    env.filters["md_bold"] = md_bold
    return env


def render_all():
    cv = load_cv()
    env = build_env()
    DIST_DIR.mkdir(parents=True, exist_ok=True)
    build_date = date.today().strftime("%Y-%m-%d")

    for tpl in TEMPLATES:
        template = env.get_template(tpl["file"])
        out_dir = DIST_DIR / tpl["id"]
        out_dir.mkdir(parents=True, exist_ok=True)

        # Per-template pages live one level below dist/ (dist/<id>/index.html),
        # so their relative links need "../" to reach the site root and any
        # sibling template. See templates_config.py for the root_prefix scheme.
        nested_html = template.render(
            cv=cv,
            templates=TEMPLATES,
            current_id=tpl["id"],
            site_url=SITE_URL,
            root_prefix="../",
            build_date=build_date,
        )
        (out_dir / "index.html").write_text(nested_html, encoding="utf-8")
        print(f"Rendered {tpl['id']} -> {out_dir / 'index.html'}")

        # ats-safe is the default landing design (see templates_config.py),
        # so it's also rendered a second time as the site root — no separate
        # picker page. This has to be a separate render (not a reused copy of
        # nested_html) because dist/index.html sits one level shallower than
        # dist/ats-safe/index.html, so its relative links need root_prefix
        # "./" instead of "../". dist/ats-safe/index.html is still kept too,
        # purely so export_pdfs.py has a per-template path to print from; its
        # canonical tag points back at "/" so search engines treat the root
        # as the one page to index, not a duplicate.
        if tpl["id"] == "ats-safe":
            root_html = template.render(
                cv=cv,
                templates=TEMPLATES,
                current_id=tpl["id"],
                site_url=SITE_URL,
                root_prefix="./",
                build_date=build_date,
            )
            (DIST_DIR / "index.html").write_text(root_html, encoding="utf-8")
            print(f"Rendered ats-safe -> {DIST_DIR / 'index.html'} (site root)")


if __name__ == "__main__":
    render_all()
