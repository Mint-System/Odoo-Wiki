---
title: Mitgliedschaft
description: Mitglieder und Mitgliedschaften verwalten.
kind: howto
prev: ./
partner: Odoo S.A.
---

# Mitgliedschaft
![icons_odoo_membership](attachments/icons_odoo_membership.png)

{{ $frontmatter.description }}

Technischer Name: `membership`

## Konfiguration

### Mitgliedschaftsprodukt erfassen

Der Preis und Typ einer Mitgliedschaft wird über ein ausgewähltes Produkt definiert. Navigieren Sie nach *Mitglieder > Konfiguration > Mitgliedschaftsprodukte* und erstellen Sie einen neuen Eintrag.

* **Produktname**: Bezeichnung der Mitgliedschaft, beispielsweise *Aktiv 2024*
* **Mitgliedschaftsdauer**: Zeitraum der Mitgliedschaft, beispielsweise 01.01.2024 - 31.12.2024
* **Mitgliedsbetrag**: Kosten für die Mitgliedschaft, beispielsweise 100 CHF

## Verwendung

### Mitglieder anzeigen

Wählen Sie die App *Mitglieder* aus. Hier werden alle Kontakte mit einer aktiven Mitgliedschaft angezeigt.

### Mitglied erfassen

Zeigen Sie die App *Mitglieder* an und erstellen Sie einen neuen Eintrag. Geben Sie Kontaktinformationen ein und wählen Sie den Tab *Mitgliedschaft*. Die Option *Freie Mitglieder* ist aktiv und somit ist der neue Kontakt bereits ein aktives Mitglied.

Wenn Sie die Option *Freie Mitglieder* deaktivieren, muss der Kontakt eine Mitgliedschaft erwerben um als aktives Mitlgied angezeigt zu werden.

### Mitgliedschaft erwerben

Zeigen Sie die App *Mitglieder* und entfernen Sie den Filter *Mitglieder*. Wählen Sie einen Kontakt aus und klicken Sie im Tab *Mitgliedschaft* auf *Mitgliedschaft erwerben*. Wählen Sie das Mitgliedschaftsprodukt aus und passen Sie wenn nötig den Preis an. Bestätigen Sie den Vorgang *Mitgliedsbeitragsrechnung* und Odoo erstellt eine Rechnung. Sobald die Rechnung gebucht ist, wird die Mitgliedschaft aktiviert.
