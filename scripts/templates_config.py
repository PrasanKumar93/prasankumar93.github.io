"""Single list of resume templates, shared by render_templates.py and
export_pdfs.py so the set of templates only has to be defined once."""

TEMPLATES = [
    {
        "id": "ats-safe",
        "file": "ats-safe.html.j2",
        "title": "ATS-Safe",
        "desc": "Plain single-column layout with no graphics or columns — safe for automated resume-parsing systems.",
    },
    {
        "id": "modern-minimal",
        "file": "modern-minimal.html.j2",
        "title": "Modern Minimal",
        "desc": "Clean single-column design with refined typography, generous whitespace, and subtle dividers.",
    },
    {
        "id": "sidebar-timeline",
        "file": "sidebar-timeline.html.j2",
        "title": "Sidebar Timeline",
        "desc": "Two-column layout with a dark sidebar for contact/skills/education and a timeline-style experience section.",
    },
]
