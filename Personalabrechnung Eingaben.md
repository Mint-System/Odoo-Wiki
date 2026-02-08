---
title: Personalabrechnung Eingaben
description: Lohnabrechnungen mit variablen Eingaben.
kind: howto
section: true
prev: ./hr-payroll
---

# Personalabrechnung Eingaben

![icons_odoo_hr_payroll](attachments/icons_odoo_hr_payroll.png)

{{ $frontmatter.description }}

## Abrechung

### Bruttolohn basierend auf Zeiterfassung berechnen

Öffnen Sie die Regel _Bruttolohn_ der Gehaltsstruktur für Stundenlohn. Passen Sie die Formel zur Berechnung des Bruttolohns wie folgt an:

**Python Code**

```python
if payslip.contract_id.wage_type == 'hourly':
	lines = env['account.analytic.line'].search([
		('employee_id', '=', payslip.employee_id.id),
		('x_timesheet_invoice_type', '=', 'billable_time'),
		('date', '>=', payslip.date_from),
		('date', '<=', payslip.date_to),
	])
	result = payslip.contract_id.hourly_wage*sum(lines.mapped('unit_amount'))
else:
	result = payslip.paid_amount + (inputs.BASIC13.amount if inputs.BASIC13 else 0)
```

### Variable Eingaben mit Lohnart verbuchen

Um variable Eingaben in der Lohnzahlungen abzurechnen, müssen Sie diese Eingaben definieren und einer Lohnart hinterlegen. Bei der Abrechnung wird die Lohnart mitgerechnet.

Als erstes müssen Sie für eine bestehende Lohnstruktur eine Eingabe definieren. Navigieren Sie nach _Personalabrechnung > Konfiguration > Structure_ und wählen Sie die Lohnstruktur aus. Erstellen Sie im Tab _Ohter Input_ eine Eingabe. Hierzu ein Beispiel für einen zusätzlichen Quellensteuerabzug:

![](attachments/Personalabrechnung%20Eingabe%20Quellensteuer.png)

Damit der Betrag in der Lohnabrechnung berücksichtigt wird, muss dieser als Lohnart definiert werden. Erstellen Sie eine neue Lohnart in der bestehenden Lohnstruktur. Dazu ein Beispiel wie man diese für den Quellensteuerabzug definiert:

Name: `Quellensteuer Nachbelastung`\
Kategorie: `Abzüge`\
Code: `2280`\
Reihenfolge: `190`\
Vergütungsstruktur: `Lohnabrechnung`\
Bedinung basiert auf: `Python Ausdruck`\
Python Bedinung: `result = inputs["QUELLEN"].amount > 0.0 if inputs.get("QUELLEN") else False` \
Berechnungsart: `Python Code`\
Python Code: `result = inputs["QUELLEN"].amount if inputs.get("QUELLEN") else 0`

![](attachments/Personalabrechnung%20Lohnart%20von%20Inputs.png)

Beim Berechnen werden variable Eingaben in der Lohnabrechnung miteinbezogen.

### Lohnabzug Kurzarbeit konfigurieren

Im Falle von Kurzarbeit kann man die variablen Abzüge mit einer neuen Eingabe und Lohnart geltend machen.

Navigieren Sie nach _Personalabrechnung > Konfiguration > Other Input Types_. Erstellen Sie dort einen Eintrag mit _Beschreibung_ `Lohnabzug Kurzarbeit` und _Code_ `KURZ`.

Navigieren Sie nach _Personalabrechnung > Konfiguration > Regeln_ und wählen Sie _Neu_. Erstellen Sie eine Lohnart mit folgenden Definitionen:

Name: `Lohnabzug Kurzarbeit`\
Kategorie: `Freie Zuwendung`\
Code: `KURZ`\
Reihenfolge: `15`\
Vergütungsstruktur: `Lohnabrechnung`\
Bedinung basiert auf: `Python Ausdruck`
Python Bedinung: `result = inputs["KURZ"].amount > 0.0 if inputs.get("KURZ") else False`\
Berechnungsart: `Python Code`\
Python Code: `result = -inputs["KURZ"].amount if inputs.get("KURZ") else 0`

Im Tab _Buchhaltung_ wählen sie:

Sollkonto: `1098 Durchlaufkonto Löhne`\
Habenkonto: `5000 Löhne`

Speichern Sie die Lohnart, fügen Sie einer ausgewählte Lohnabrechnung mit der zugehörigen Lohnstruktur eine Spesen-Eingabe hinzu und berechnen die Abrechnung neu.

### Spesen als Zuwendung konfigurieren

Spesen können als variable Eingabe in der Lohnabrechnung hinzugefügt werden. Navigieren Sie nach _Personalabrechnung > Konfiguration > Other Input Types_. Erstellen Sie dort einen Eintrag mit _Beschreibung_ `Spesen` und _Code_ `SPESEN`.

Damit die Eingabe in der Lohnabrechnung berücksichtigt wird, muss eine neue Lohnart definiert werden. Navigieren Sie nach _Personalabrechnung > Konfiguration > Regeln_ und wählen Sie _Neu_. Erstellen Sie eine Lohnart mit folgenden Definitionen:

Name: `Spesen`\
Kategorie: `Freie Zuwendung`\
Code: `2000`\
Reihenfolge: `10`\
Vergütungsstruktur: `Lohnabrechnung`\
Bedinung basiert auf: `Python Ausdruck`
Python Bedinung: `result = inputs["SPESEN"].amount > 0.0 if inputs.get("SPESEN") else False`\
Berechnungsart: `Python Code`\
Python Code: `result = inputs["SPESEN"].amount if inputs.get("SPESEN") else 0`

Im Tab _Buchhaltung_ wählen sie:

Sollkonto: `5082 Spesen`\
Habenkonto: `1098 Durchlaufkonto Löhne`

Speichern Sie die Lohnart, fügen Sie einer ausgewählte Lohnabrechnung mit der zugehörigen Lohnstruktur eine Spesen-Eingabe hinzu und berechnen die Abrechnung neu.

### Lohnakonto mit Nachberechnung konfigurieren

Machen Sie Lohnabzüge nach Berechnung des Nettolohn, muss die Lohnabrechnung etwas umstrukturiert werden. Einerseits muss wieder ein variabler Lohntyp konfiguriert werden und anderer

Navigieren Sie nach _Personalabrechnung > Konfiguration > Other Input Types_. Erstellen Sie dort einen Eintrag mit _Beschreibung_ `Lohnakonto` und _Code_ `LNKT`.

Damit die Eingabe in der Lohnabrechnung berücksichtigt wird, muss eine neue Lohnart definiert werden. Navigieren Sie nach _Personalabrechnung > Konfiguration > Regeln_ und wählen Sie _Neu_. Erstellen Sie eine Lohnart mit folgenden Definitionen:

Name: `Lohnakonto`\
Kategorie: `Nachberechnung`\
Code: `5800`\
Reihenfolge: `205`\
Vergütungsstruktur: `Lohnabrechnung`\
Berechnungsart: `Python Code`\
Bedinung basiert auf: `Python Ausdruck`
Python Bedinung: `result = inputs["LNKT"].amount != 0.0 if inputs.get("LNKT") else False`\
Berechnungsart: `Python Code`\
Python Code: `result = inputs["LNKT"].amount if inputs["LNKT"] else 0`

Damit der Auszahlungsbetrag überschrieben werden kann, müssen Sie eine neue Lohnart anlegen:

Name: `Auszahlung`\
Kategorie: `Auszahlung` (Anlegen mit Code `ASZ`)\
Code: `NET`\
Reihenfolge: `999`\
Vergütungsstruktur: `Lohnabrechnung`\
Berechnungsart: `Python Code`\
Python Code: `result = categories.NET + categories.NBR`

Und bei der Lohnart _Nettolohn_ den Code auf `SUM` setzen (Code muss immer eindeutig sein).

## Lohnart

### 13er Monatslohn konfigurieren

Navigieren Sie nach _Personalabrechnung > Konfiguration > Other Input Types_. Erstellen Sie dort einen Eintrag mit _Beschreibung_ `13er Monatslohn` und _Code_ `BASIC13`.

Damit die Eingabe in der Lohnabrechnung berücksichtigt wird, muss eine bestehende Lohnart angepasst werden. Navigieren Sie nach _Personalabrechnung > Konfiguration > Regeln_ und wählen Sie die Lohnart mit Code _BASIC_. Passen Sie die Lohnart wie folgt an:

Python Code: `result = payslip.paid_amount + (inputs["BASIC13"].amount if inputs.get("BASIC13") else 0)`

Speichern Sie die Lohnart, fügen Sie einer ausgewählte Lohnabrechnung mit der zugehörigen Lohnstruktur eine Spesen-Eingabe hinzu und berechnen die Abrechnung neu.

::: tip
Falls Sie für den 13en Monatslohn eine eigene Lohnart aufführen, können Sie diesen Python Code verwenden: `result = inputs["BASIC13"].amount if inputs.get("BASIC13") else 0`
Als Bedinung verwenden Sie diesen Code: `result = inputs["BASIC13"].amount != 0.0 if inputs.get("BASIC13") else False`
:::

### Bruttolohn basierend auf abrechenbaren Stunden berechnen

Navigieren Sie nach _Personalabrechnung > Konfiguration > Other Input Types_. Erstellen Sie dort einen Eintrag mit _Beschreibung_ `Abrechenbare Stunden` und _Code_ `BILLABLE_HOURS`.

Damit die Eingabe in der Lohnabrechnung berücksichtigt wird, muss eine bestehende Lohnart angepasst werden. Navigieren Sie nach _Personalabrechnung > Konfiguration > Regeln_ und wählen Sie die Lohnart mit Code _BASIC_. Passen Sie die Lohnart wie folgt an:

Python Code: `result = payslip.contract_id.hourly_wage*inputs.BILLABLE_HOURS.amount if inputs.BILLABLE_HOURS else 0`

Speichern Sie die Lohnart, fügen Sie einer ausgewählte Lohnabrechnung mit der zugehörigen Lohnstruktur eine Eingabe hinzu und berechnen die Abrechnung neu.
