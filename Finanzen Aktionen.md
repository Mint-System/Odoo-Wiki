---
tags:
- HowTo
- Aktionen
prev: ./finanzen
---
# Finanzen Aktionen
![icons_odoo_account_accountant](assets/icons_odoo_account_accountant.png)

Neue Aktionen für Buchungen und Abstimmungen.

## Aktionen

### Aktion "Als gesendet markieren" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Als gesendet markieren`\
Modell: `account.move`\
Folgeaktion: `Python-Code ausführen`

```python
for record in records:
	record.write({ 'is_move_sent': True })
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Buchungssätze erscheint nun in der Auswahl *Aktion* das Menu *Als gesendet markieren*.


### Aktion "Als ungebucht markieren" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Als ungebucht markieren`\
Modell: `account.move`\
Folgeaktion: `Python-Code ausführen`

```python
for record in records:
	if record.state != 'cancel':
		UserError('Can only unpost entry if it is cancelled.')
	record.write({ 'posted_before': False })
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Buchungssätze erscheint nun in der Auswahl *Aktion* das Menu *Als ungebucht markieren*.

### Aktion "Bankauszug zurücksetzen" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Bankauszug zurücksetzen`\
Modell: `account.bank.statement`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```python
for record in records:  
  record.button_reopen()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Belege erscheint nun in der Auswahl *Aktion* das Menu *Bankauszug zurücksetzen*.

### Aktion "Buchungszeilen aktualisieren" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Buchungszeilen aktualisieren`\
Modell: `account.move`\
Folgeaktion: `Python-Code ausführen`

```python
records.filtered(lambda r: r.state == "draft").with_context(check_move_validity=False)._move_autocomplete_invoice_lines_values()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Buchungssätze erscheint nun in der Auswahl *Aktion* das Menu *Buchungszeilen aktualisieren*.

![Finanzen Buchungszeilen aktualisieren](assets/Finanzen%20Buchungszeilen%20aktualisieren.gif)

### Aktion "Reset to Draft" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Reset to Draft`
Modell: `account.move`
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```python
for record in records:  
  record.button_draft()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Buchungssätze erscheint nun in der Auswahl *Aktion* das Menu *Reset to Draft*.

### Aktion "Abstimmung zurücksetzen" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Abstimmung zurücksetzen`\
Modell: `account.bank.statement.line`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```python
for record in records:  
  record.button_undo_reconciliation()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Vorgänge erscheint nun in der Auswahl *Aktion* das Menu *Abstimmung zurücksetzen*.

### Aktion "Reset to Posted" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Reset to Posted`
Modell: `account.move`
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```python
for record in records:  
  record.write({'state': 'posted'})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Buchungssätze erscheint nun in der Auswahl *Aktion* das Menu *Reset to Posted*.

### Aktion  "Zahlung gesendet zurücksetzen" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Zahlung gesendet zurücksetzen`\
Modell: `account.payment`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```python
for record in records:  
  record.write({'is_move_sent': False})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Zahlung erscheint nun in der Auswahl *Aktion* das Menu *Zahlung gesendet zurücksetzen*.