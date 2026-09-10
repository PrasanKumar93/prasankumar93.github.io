# prasankumar93.github.io

Resume site + PDF, generated from a single YAML source with
[RenderCV](https://docs.rendercv.com/).

## How it works

1. **`data/cv.yaml`** is the only content file. It's a distilled, public
   subset of the private `personal-agent-memory` repo's
   `professional/career/*.md` files — no internal colleague names, no
   internal-only quotes, no personal data (DOB, marital status, etc.).
2. On every push to `master` that touches `data/**`, `.github/workflows/build.yml`
   runs `rendercv render` to produce:
   - `index.html` — the resume page (this site)
   - `Prasan_Kumar_Resume.pdf` — downloadable PDF, linked from the page
3. Both are deployed straight to GitHub Pages via `actions/upload-pages-artifact`
   + `actions/deploy-pages` — no generated files are committed to git history.

## Updating the resume

1. Update the relevant company file(s) in `personal-agent-memory/professional/career/`
   first (that's the master record).
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

## Local preview (optional)

```bash
pip install rendercv
rendercv render data/cv.yaml --watch
```

This opens a local preview that re-renders on save. Requires Python 3.9+.

## Design

- Theme: `classic` (RenderCV built-in). Change via `design.theme` in
  `data/cv.yaml` — see [available themes](https://docs.rendercv.com/user_guide/cli_reference/#rendercv-new).
- To fully re-theme instead of using a built-in, see RenderCV's
  [Override Default Templates](https://docs.rendercv.com/user_guide/how_to/override_default_templates/) guide.
