# prasankumar93.github.io

Resume site with three selectable designs, all generated from a single
YAML source with Jinja2 + headless Chrome (Playwright).

## How it works

1. **`data/cv.yaml`** is the only content file. It's a distilled, public
   subset of the private `personal-agent-memory` repo's
   `professional/career/*.md` files — no internal colleague names, no
   internal-only quotes, no personal data (DOB, marital status, etc.).
2. **`templates/*.html.j2`** are the resume designs. Each is a self-contained
   Jinja2 HTML template (inline CSS, no external assets) that reads directly
   from `cv.yaml` — no duplicated content, no separate data format per
   template:
   - `ats-safe.html.j2` — plain single column, no graphics, safe for
     automated resume-parsing systems.
   - `modern-minimal.html.j2` — clean single column, refined typography,
     generous whitespace.
   - `sidebar-timeline.html.j2` — two-column layout with a dark sidebar and
     a timeline-style experience section.
   - `picker.html.j2` — the landing page listing all designs with
     view/download links; not a resume itself.
3. On every push to `master` that touches `data/**`, `templates/**`,
   `scripts/**`, or `.github/workflows/build.yml`, the workflow:
   - runs `scripts/render_templates.py` to render `cv.yaml` through each
     template into `dist/<template>/index.html`, plus `dist/index.html`
     (the picker page);
   - runs `scripts/export_pdfs.py` to print each rendered page to
     `dist/<template>/resume.pdf` using headless Chromium (Playwright).
4. The whole `dist/` folder is deployed straight to GitHub Pages via
   `actions/upload-pages-artifact` + `actions/deploy-pages` — nothing
   generated is committed to git history.

## Adding or changing a design

1. Add a new `templates/<name>.html.j2` (or edit an existing one) — pull
   whatever fields you need from the `cv` object (see `data/cv.yaml`'s
   structure: `cv.name`, `cv.sections.experience`, etc.). Two Jinja2 filters
   are available: `date_range` (formats a `(start_date, end_date)` tuple)
   and `md_bold` (escapes HTML, then converts `**bold**` markdown to
   `<strong>`).
2. Register it in `scripts/templates_config.py` (the single list shared by
   the renderer and the PDF exporter) with an `id`, `file`, `title`, and
   `desc`.
3. Push to `master` — the workflow picks it up automatically.

## Updating the resume content

1. Update the relevant company file(s) in
   `personal-agent-memory/professional/career/` first (that's the master
   record).
2. Re-distill the change into `data/cv.yaml` here (strongest bullets only,
   public-safe).
3. Push to `master`. The workflow renders and redeploys automatically —
   usually live within a minute or two. Check the **Actions** tab if it
   doesn't show up.

## One-time repo setup (do this once, manually)

GitHub Pages must be set to deploy from **GitHub Actions**, not "Deploy from
a branch":

Repo → **Settings → Pages → Build and deployment → Source** → select
**GitHub Actions**.

Without this, `actions/deploy-pages` will fail with a permissions/environment
error even though the build step succeeds.

## Local build / preview

Run the one-shot build script — it installs missing Python deps
(`jinja2`, `pyyaml`, `playwright`), installs headless Chromium if needed,
renders every template, and exports every PDF:

```bash
bash scripts/build.sh
```

Then open `dist/index.html` (or `python3 -m http.server -d dist`) to preview.

This is the same script an agent picking up this repo later should run to
regenerate output locally — it needs no arguments and is safe to re-run.

If you only need the HTML (no PDFs, e.g. no network for Chromium), run
`python3 scripts/render_templates.py` on its own — it only needs `jinja2`
and `pyyaml`, both far lighter than Playwright.
