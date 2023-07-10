---
title: Personalabrechnung Eingaben
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
prev: ./hr-payroll
---
# Personalabrechnung Eingaben
![icons_odoo_hr_payroll](attachments/icons_odoo_hr_payroll.png)

Berichte für Lohnbuchhaltung erstellen.

## Berichte

### Bericht für Lohnabrechnung bestimmen

Navigieren Sie nach *Personalabrechnung > Structures* und wählen Sie hier eine Lohnstruktur aus. Im Feld *Bericht* legen Sie den Standardbericht für diese Lohnstruktur fest.

### Rekapitulation Lohnabrechnung Mitarbeiter erstellen

Öffnen Sie *Personalabrechnung > Berichtswesen > Lohnabrechnungszeilen* und wechseln Sie in die Privot-Ansicht. Auf der X-Achse wählen Sie *Bis > Monat* und auf der Y-Achse *Mitarbeiter > Name*. Zuletzt wählen Sie als Wert *Betrag*. Nun erhalten Sie eine Aufstellung der Lohnabrechnungszeilen für jeden Monat und Mitarbeiter.

![](attachments/Personalabrechnung%20Berichte%20Lohnabrechnungszeilen.png)

Für eine Aufstellung der Arbeitgeber-Anteile filtern Sie die Lohnabrechnungszeilen nach Partner:

![](attachments/Personalabrechnung%20Berichte%20Lohnabrechnungszweilen%20Partner.png)

Oder die Codes der Lohnarten nach *B*.

![](attachments/Personalabrechnung%20Berichte%20Lohnabrechnungszweilen%20Code%20B.png)

### Buchhaltung Lohn anzeigen

Öffnen Sie *Finanzen > Berichtswesen > Hauptbuch* und filtern die Journale nach dem Lohnjournal.

![](attachments/Personalabrechnung%20Berichte%20Lohnjournal.png)

Nun erhalten Sie alle Konten der Lohnabrechnung.