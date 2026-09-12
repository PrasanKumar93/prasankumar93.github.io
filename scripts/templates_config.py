"""Single list of resume templates, shared by render_templates.py and
export_pdfs.py so the set of templates only has to be defined once.

`short` is the label shown in the on-page template-switcher dock (kept short
since the dock is only ~108px wide). `url` is the canonical path for that
template, root-relative but WITHOUT a leading slash — ats-safe lives at the
site root ("") since it's the default landing design (see
render_templates.py: the ats-safe render is written to both
dist/ats-safe/index.html and dist/index.html), the other two keep their own
directories ("modern-minimal/", "sidebar-timeline/"). No leading slash is
important: the switcher builds the real href as `root_prefix + tpl.url`,
where `root_prefix` is "./" for the site-root page and "../" for every
nested per-template page. This keeps the whole site working when previewed
from a subpath (e.g. a local dev server serving dist/ as a subdirectory)
instead of only when served from a domain root like GitHub Pages.
"""

TEMPLATES = [
    {
        "id": "ats-safe",
        "file": "ats-safe.html.j2",
        "title": "ATS-Safe",
        "short": "ATS-Safe",
        "url": "",
        "desc": "Plain single-column layout with no graphics or columns — safe for automated resume-parsing systems.",
    },
    {
        "id": "modern-minimal",
        "file": "modern-minimal.html.j2",
        "title": "Basic Minimal",
        "short": "Basic",
        "url": "modern-minimal/",
        "desc": "Clean single-column design with refined typography, generous whitespace, and subtle dividers.",
    },
    {
        "id": "sidebar-timeline",
        "file": "sidebar-timeline.html.j2",
        "title": "Sidebar Timeline",
        "short": "Timeline",
        "url": "sidebar-timeline/",
        "desc": "Two-column layout with a dark sidebar for contact/skills/education and a timeline-style experience section.",
    },
]
