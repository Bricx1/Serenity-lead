from jinja2 import Environment, BaseLoader
from weasyprint import HTML
from datetime import datetime
from pathlib import Path
from typing import Dict

TEMPLATE = """
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Lead Submission</title>
  <style>
    body { font-family: sans-serif; font-size: 12px; }
    h1 { font-size: 18px; margin-bottom: 0; }
    small { color: #555; }
    .box { border: 1px solid #ddd; padding: 12px; border-radius: 8px; margin-top: 16px; }
    .row { margin: 6px 0; }
    .label { color: #666; width: 180px; display: inline-block; }
    .value { font-weight: 600; }
  </style>
</head>
<body>
  <h1>Lead Submission PDF</h1>
  <small>Generated {{ now }}</small>

  <div class="box">
    <div class="row"><span class="label">First Name</span><span class="value">{{ lead.first_name }}</span></div>
    <div class="row"><span class="label">Last Name</span><span class="value">{{ lead.last_name }}</span></div>
    <div class="row"><span class="label">Email</span><span class="value">{{ lead.email or "-" }}</span></div>
    <div class="row"><span class="label">Phone</span><span class="value">{{ lead.phone or "-" }}</span></div>
    <div class="row"><span class="label">Has Insurance</span><span class="value">{{ "Yes" if lead.has_insurance else "No" }}</span></div>
    <div class="row"><span class="label">Insurance Provider</span><span class="value">{{ lead.insurance_provider or "-" }}</span></div>
    <div class="row"><span class="label">Notes</span><span class="value">{{ lead.notes or "-" }}</span></div>
    <div class="row"><span class="label">Created At</span><span class="value">{{ lead.created_at }}</span></div>
  </div>
</body>
</html>
"""

def generate_lead_pdf(lead: Dict, out_dir: str = "./pdf_out") -> str:
    Path(out_dir).mkdir(parents=True, exist_ok=True)
    env = Environment(loader=BaseLoader())
    tpl = env.from_string(TEMPLATE)
    html = tpl.render(lead=lead, now=datetime.now().isoformat())
    filename = f"{lead['id']}_lead.pdf"
    out_path = str(Path(out_dir) / filename)
    HTML(string=html).write_pdf(out_path)
    return out_path
