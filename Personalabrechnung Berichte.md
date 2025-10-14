---
title: Personalabrechnung Berichte
description: Berichte für Lohnbuchhaltung erstellen.
kind: howto
prev: ./hr-payroll
---

# Personalabrechnung Berichte

![icons_odoo_hr_payroll](attachments/icons_odoo_hr_payroll.png)

{{ $frontmatter.description }}

## Berichte

### Bericht für Lohnabrechnung bestimmen

Navigieren Sie nach _Personalabrechnung > Structures_ und wählen Sie hier eine Lohnstruktur aus. Im Feld _Bericht_ legen Sie den Standardbericht für diese Lohnstruktur fest.

### Rekapitulation Lohnabrechnung Mitarbeiter erstellen

Öffnen Sie _Personalabrechnung > Berichtswesen > Lohnabrechnungszeilen_ und wechseln Sie in die Privot-Ansicht. Auf der X-Achse wählen Sie _Bis > Monat_ und auf der Y-Achse _Mitarbeiter > Name_. Zuletzt wählen Sie als Wert _Betrag_. Nun erhalten Sie eine Aufstellung der Lohnabrechnungszeilen für jeden Monat und Mitarbeiter.

![](attachments/Personalabrechnung%20Berichte%20Lohnabrechnungszeilen.png)

Für eine Aufstellung der Arbeitgeber-Anteile filtern Sie die Lohnabrechnungszeilen nach Partner:

![](attachments/Personalabrechnung%20Berichte%20Lohnabrechnungszweilen%20Partner.png)

Oder die Codes der Lohnarten nach _B_.

![](attachments/Personalabrechnung%20Berichte%20Lohnabrechnungszweilen%20Code%20B.png)

### Buchhaltung Lohn anzeigen

Öffnen Sie _Buchhaltung > Berichtswesen > Hauptbuch_ und filtern die Journale nach dem Lohnjournal.

![](attachments/Personalabrechnung%20Berichte%20Lohnjournal.png)

Nun erhalten Sie alle Konten der Lohnabrechnung.
