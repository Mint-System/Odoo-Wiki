---
title: Apps Aktionen
description: Aktionen für Apps einrichten.
kind: howto
prev: ./apps
---
# Apps Aktionen
![icons_odoo_hr_appraisal](attachments/icons_odoo_hr_appraisal.png)

{{ $frontmatter.description }}

## Aktionen

### Modul aktualisieren

Navigieren Sie nach *Einstellungen > Technisch > Server-Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Modul aktualisieren`\
Modell: `ir.module.module`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python-Code*:

```python
for record in records:
	record.button_immediate_upgrade()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Apps erscheint nun in der Auswahl *Aktion* das Menu *Modul aktualisieren*.

## Automatisierte Aktionen

### SQL-Grants nach Modul-Installation ausführen

Mit dieser Aktion werden SQL-Grants für einen bestimmten Benutzer (hier `dwh`) nach der Installation eines Moduls angewendet.

Erstellen Sie unter *Einstellungen > Technisch > Automation > Automatisierte Aktionen* einen Eintrag mit diesen Werten:

Name der Aktion: `SQL-Grants nach Modul-Installation ausführen`\
Modell: `module.module`\
Auslöser: Beim Aktualisierung\
Trigger-Felder: `state`\
Domain vor Aktualisierung: `[]`\
Anzuwenden auf: `[]`\
Python Code:

```python
query = "GRANT SELECT ON ALL TABLES IN SCHEMA public TO dwh;"; env.cr.execute(query)
query = "REVOKE SELECT ON public.hr_employee FROM dwh;"; env.cr.execute(query)
query = "REVOKE SELECT ON public.hr_contract FROM dwh;"; env.cr.execute(query)
query = "REVOKE SELECT ON public.hr_contract_history FROM dwh;"; env.cr.execute(query)
query = "REVOKE SELECT ON public.hr_payslip FROM dwh;"; env.cr.execute(query)
query = "REVOKE SELECT ON public.hr_payslip_grosswage_line FROM dwh;"; env.cr.execute(query)
query = "REVOKE SELECT ON public.account_move_line FROM dwh;"; env.cr.execute(query)
query = "REVOKE SELECT ON public.account_move_line_salary FROM dwh;"; env.cr.execute(query)
query = "REVOKE SELECT ON public.hr_salary_attachment FROM dwh;"; env.cr.execute(query)
query = "REVOKE SELECT ON public.hr_employee_calculationparameter_bvg FROM dwh;"; env.cr.execute(query)
query = "REVOKE SELECT ON public.hr_contract_employee_report FROM dwh;"; env.cr.execute(query)
query = "REVOKE SELECT ON public.hr_payroll_register FROM dwh;"; env.cr.execute(query)
query = "REVOKE SELECT ON public.hr_bvg_basis FROM dwh;"; env.cr.execute(query)
query = "REVOKE SELECT ON public.bt_swissdec_transmitter FROM dwh;"; env.cr.execute(query)
query = "REVOKE SELECT ON public.ahv_mutation_table FROM dwh;"; env.cr.execute(query)
query = "REVOKE SELECT ON public.bvg_import_data FROM dwh;"; env.cr.execute(query)
query = "REVOKE SELECT ON public.qst_mutation_table FROM dwh;"; env.cr.execute(query)
query = "REVOKE SELECT ON public.hr_payroll_register FROM dwh;"; env.cr.execute(query)
query = "REVOKE SELECT ON public.account_move_line_salary FROM dwh;"; env.cr.execute(query)
query = "REVOKE SELECT ON public.bt_swissdec_report FROM dwh;"; env.cr.execute(query)
query = "REVOKE SELECT ON public.bt_swissdec_report_line FROM dwh;"; env.cr.execute(query)
log("Executed SQL grant statements.")
```