---
title: Abrechnung Stundenlohn
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- Best-Practice
prev: ./best-practice
---

# Abrechnung Stundenlohn

Wenn Sie die Erweiterung [Swiss Payroll](Gio%20Payroll%20Custom.md) für Schweizer Lohnabrechnung verwenden, können Sie damit auch Stundenlöhner abrechnen.

## Vorbereitung

Lohntyp auf Arbeitsvertrag auf Stundenlohn setzen.
Auf dem Arbeitsvertrag der Stundenlöhner, müssen Sie *Stundenlohn* als [Lohntyp festlegen](Gio%20Payroll%20Custom.md#Lohntyp%20festlegen)

Damit die gearbeiteten Stunden automatisch aus der Lohnabrechnung ausgelesen werden muss auf der Lohnart *Monatslohn* die Berechnung ersetzt werden. Sie können die [Lohnart anpassen](HR%20Payroll.md#Lohnart%20anpassen) und diesen Code verwenden:

**Python Code**

```python
if contract.gio_wage_type == 'hourly':
	if payslip.gio_worked_hours > 0.0:
		result = contract.gio_wage_hourly*payslip.gio_worked_hours
	else:
		attendances = contract.employee_id.attendance_ids.search([
			('employee_id', '=', contract.employee_id.id),
			('check_in', '>=', payslip.date_from),
			('check_out', '<=', payslip.date_to),
		])
		result = contract.gio_wage_hourly*sum(attendances.mapped('worked_hours'))
else:
    result = contract.gio_wage_monthly
```

**Basic Python Code**

```python
if contract.gio_wage_type == 'hourly':
	if payslip.gio_worked_hours > 0.0:
		result = payslip.gio_worked_hours
	else:
		attendances = contract.employee_id.attendance_ids.search([
			('employee_id', '=', contract.employee_id.id),
			('check_in', '>=', payslip.date_from),
			('check_out', '<=', payslip.date_to),
		])
		result = sum(attendances.mapped('worked_hours'))
else:
    result = 0.0
```

Damit beim Erstellen der Abrechnung die korrekte Gehaltsstruktur geladen wird, müssen Sie auf dem Strukturtyp die entsprechende Gehaltsstruktur festlegen. Führen Sie dazu [Gehaltsstruktur auf Strukturtyp festlegen](Gio%20Payroll%20Custom.md#Gehaltsstruktur%20auf%20Strukturtyp%20festlegen) aus.

Auf den Verträgen der Mitarbeitenden muss der korrekte Strukturtyp erfasst sein: [Strukturtyp auf Arbeitsvertrag festlegen](Gio%20Payroll%20Custom.md#Strukturtyp%20auf%20Arbeitsvertrag%20festlegen).

## Abrechnung

Damit auf der Lohnabrechnung die gearbeiteten Stunden eingetragen werden, muss die Lohnabrechnung über die Arbeitseinträge erstellt werden. Führen Sie dazu die Aktion [Lohnabrechnungen mit Batch erstellen](HR%20Payroll.md#Lohnabrechnungen%20mit%20Batch%20erstellen) aus.

## Beispiel

Wenn die Vorlage der Lohnabrechnung angepasst wurde, können Sie Lohnabrechnungen wie die folgende erstellen:

![](attachments/Best%20Practice%20Stundenlohn%20abrechnen%20Beispiel.png)