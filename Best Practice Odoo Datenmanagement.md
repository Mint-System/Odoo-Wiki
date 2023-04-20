---
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- Best-Practice
prev: ./best-practice
---
# Odoo Datenmanagement

Beim Import von Daten besteht keine grosse Flexibilität. Entsprechend hoch muss die Datenqualität vor dem Import sein.

Damit Daten einfacher Import werden können, werden hier Vorlagen bereitgestellt und erklärt wo genau die Daten importiert werden können.

## Exportvorlagen

Damit Daten miteinanderverknüpft werden können, ist die Spalte **id** sehr wichtig. Beim Export wird diese im Dialog mit der Option *Ich will Daten aktualisieren* oben links hinzugefügt.

Die Spalte **id** ist eine eindeutige Referenz für jeden Eintrag. Damit können bestehende Einträge überschrieben werden und in bestimmten Fällen möchte man die Berechnungen im Erstellvorgang umgehen indem zwei Importvorgänge durchführt und so die berechneten Werte überschreibt.

### Personal
Listenansicht: *Kontakte*

Felder:
```
id
name
work_email
deparment_id/id
job_id/id
user_id/id
```
Datei: `hr.employee.csv`

### E-Mail-Server
Listenansicht: *Einstellungen > Diskussion > Externe E-Mail-Server > Ausgehender Mail-Server*

Felder:
```
sequence
name
smtp_host
smtp_user
smtp_pass
smtp_encryption
smtp_port
```
Datei: `ir.mail_server.csv`

Listenansicht: *Einstellungen > Diskussion > Externe E-Mail-Server > Eingehender Mail-Server*

Felder:
```
Name
Servertyp
SSL/TLS
Einen neuen Datensatz erzeugen
Letztes Abholdatum
Nachrichten
Status
Passwort
Port
Servername
Benutzername 
```
Datei: `fetchmail.server.csv`

### OAuth Provider
Listenansicht: *Provider*

Felder:
```
Provider Name
Client ID
Erlaubt
Keycloak
Nachrichtentext
Gültigkeitsbereich
Validierungs URL
Authorisierungs URL
```
Datei: `auth.oauth.provider.csv`

### Fertigung
Listenansicht: *Fertigung > Stammdaten > Produkt*

Felder:
```
Interne Referenz
Name
Lieferanten/Lieferant/Externe ID
Lieferant/Menge
Lieferanten/Preis
```
Datei: `product.template.csv`

Listenansicht: *Fertigung > Stammdaten > Arbeitsplätze*

Felder:
```
Sequenz
Code
Arbeitsplatz
```
Datei: `mrp.workcenter.csv`



### Abwesenheitszeiten
Listenansicht: *Abwesenheitszeiten > Abwesenheiten*

Felder:
```
id
employee_id
holiday_status_id
name
state
x_synced
request_date_from
date_from
request_date_to
date_to
number_of_days
```
Datei: `hr.leave.csv`

::: warning
Währen dem Importvorgang wird die Dauer mit dem Start- und Enddatum berechnet, das heisst nach dem ersten Import stimmt die Dauer nicht (Wochenende wird nicht abgezählt). Um das zu lösen kann man den Import-Vorgang nochmals durchführen. Anhand der *id* werden dann die bestehenden Einträge überschrieben statt erstellt. Dann stimmt auch die Dauer des Eintrags.
:::

Beispiel:

![](assets/Abwesenheiten%20Beispiel%20Export.png)

### Arbeitszeit

Felder:
```
Name
Arbeitszeit
Arbeitszeit/Arbeitszeit von
Arbeitszeit/Arbeitszeit bis
```
Datei: `resource.calendar.csv`

### Arbeitsverträge

Felder:
```
Vergütung
```
Datei: `hr.contract.csv`

### Lohnarten

Felder:
```
Name
Code
Kategorie
Vergütungsstruktur/ID
Berechnungsart
Prozent (%)
Prozent basierend auf
Python Bedingung
Python Code
Fester Betrag
Habenkonto
Sollkonto
```
Datei: `hr.salary.rule.csv`

### Unternehmen
Listenansicht: *Einstellungen > Benutzer und Unternehmen > Unternehmen*

Felder:
```
Unternehmensname
Strasse
Stadt
PLZ
Land/Land
Website-Link
E-Mail
USt-IdNr.
```
Datei: `res.company.csv`

### Fenster öffnen/schliessen ...
Listenansicht: *Einstellungen > Technisch > Aktionen > Fenster öffnen/schliessen ...*

Felder:
```
Name der Aktion
Zielmodell
Aktionsart
```
Datei: `ir.actions.act_window.csv`

### Menüeinträge
Listenansicht: *Einstellungen > Technisch > Benutzer-Interface > Menüeinträge*

Felder:
```
id
name
parent_id/id
sequence
action
```
Datei: `ir.ui.menu.csv`

### Exportvorlagen
Listenansicht: *Einstellungen > Technisch > Exportvorlagen*

Felder:
```
Exportbezeichnung
Ressource (Objekt)
Export ID/Feldname
```
Datei: `ir.exports.csv`

### Produktkategorien
Listenansciht: *Finanzen > Konfiguration > Finanzen > Produktkategorien*

Felder:
```
id
name
parent_id/id
```
Datei: `product.category.csv`

### Produkte
Listenansicht: *Verkauf > Produkte > Produkte*

Felder:
```
id
name
default_code
barcode
sale_ok
purchase_ok
recurring_invoice
detailed_type
categ_id/id
list_price
taxes_id/id
uom_id/id
uom_po_id/id
route_ids/id
tracking
subscription_template_id
```
Datei: `product.temlate.csv`

### Preislisten
Listenansicht: *Verkauf > Produkte > Preislisten*

Felder: 
```
id
name
item_ids/id
item_ids/product_tmpl_id/id
item_ids/product_tmpl_id/name
item_ids/fixed_price
```
Datei: `product.pricelist.csv`

### Stücklisten
Listenansicht: *Fertigung > Produkte > Stücklisten*

Felder: 
```
id
name
item_ids/id
item_ids/product_tmpl_id/id
item_ids/product_tmpl_id/name
item_ids/fixed_price
```
Datei: `product.pricelist.csv`

### Buchungssätze
Listenansicht: *Fertigung > Finanzen > Buchungssätze*

Felder: 
```
id
journal_id
date
line_ids/account_id/id
line_ids/name
line_ids/debit
line_ids/credit
```
Datei: `account.move.csv`

## Importvorgänge

### Produkt
Navigation: *Verkauf > Prodoukte > Produktvarianten*

Die Datei `product.template.csv` importieren.

### Preislisten
Navigation: *Einkauf > Konfiguration > Preislisten*

Die Datei `product.supplierinfo.csv` importieren.

### Bankverzeichnis
Navigation: *Kontakte > Konfiguration > Bankverzeichnis*

Die Datei `res.bank.csv` importieren.

### Arbeitszeiten
Navigation: *Einstellungen > Technisch > Ressource (Objekt) > Arbeitszeit*

Die Datei `resource.calendar.csv` importieren.

### Kontakte
Navigation: *Kontakte*

Die Datei `res.partner.csv` importieren.

### Bankkonten
Navigation: *Kontakte > Konfiguration > Bankkonten*

Die Datei `res.partner.bank.csv` importieren.

### Abteilungen
Navigation: *Personal > Konfiguration > Abteilungen*

Die Datei `hr.departement.csv` importieren.

### Arbeitsstellen
Navigation: *Personal > Konfiguration > Arbeitstellen*

Die Datei `hr.job.csv` importieren.

### Personal
Navigation: *Personal*

Die Datei `hr.employee.csv` importieren.

### Arbeitsverträge
Navigation *Personal > Verträge*

Die Datei `hr.contract.csv` importieren.

### Lohnarten
Navigation *Personalabrechnung > Konfiguration > Regeln*

Die Datei  `hr.salary.rule.basis.csv` importieren.

### Preislisten

Die Datei  `product.pricelist.csv` importieren.

### Arbeitsplätze

Die Datei  `mrp.workcenter.csv` importieren.

### Routen

Die Datei  `mrp.routing.workcenter.csv` importieren.

### Stücklisten

Die Datei `mrp.bom.csv` importieren.