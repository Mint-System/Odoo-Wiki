---
title: Overdue Invoice Reminder
description: Einfache Lösung zum Versenden von Zahlungserinnerungen.
tags:
- HowTo
- OCA
prev: ./finance
---
# Overdue Invoice Reminder
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `account_invoice_overdue_reminder`\
Repository: <https://github.com/OCA/credit-control/tree/16.0/account_invoice_overdue_reminder>

## Konfiguration

### E-Mail-Vorlage für Zahlungserinnerung anpassen

Wenn Sie die [E-Mail-Vorlagen anzeigen](Settings%20E-Mail.md#E-Mail-Vorlagen%20anzeigen) finden Sie den Eintrag *Erinnerung an überfällige Rechnungen*. Diese Vorlage wird beim Versenden der Zahlungserinnerung verwendet.

### Optionen für Assisten festlegen

Navigieren Sie nach *Einstellungen > Abrechnung > Erinnerung an überfällige Rechnungen* und legen Sie hier die Optionen für den Asisstenten zur Zahlungserinnerungen fest:

* **Hängen Sie Rechnungen an überfällige Erinnerungs-E-Mails an**: Aktivieren wenn die Rechnung als Anhang zur Erinenrungsmail hinzugefügt werden soll.
* **Kontakt zur Erinnerung**: Filter aufgrund welcher Information die Erinnerung versendet werden soll.
* **Standardschnittstelle Assistent**: E-Mails einzeln oder alle gleichzeitig versenden. 
* **Standardverzögerung für Erinnerungsauslöser**: Nach wie vielen Tagen eine Erinnerung versendet werden kann.
* **Standard Mindestintervall für Erinnerungen**: Nach wie vielen Tagen eine neue Erinnerung versendet werden kann.

### Auswahl Ergebnis Zahlungserinnerung festlegen

Navigieren Sie nach *Rechnungsstellung > Konfiguration > Invoice Reminder Results*. Hier legen Sie Auswahl für mögliche Ergebnisse aus der Zahlungserinnerung fest.

## Verwendung

### Assistent Zahlungserinnerung starten

Der Versand der Zahlungserinnerung erfolgt über einen Assistenten. Den Assistent rufen Sie unter *Rechnungsstellung > Kunden > Erinnerung an überfällige Rechnungen* auf. Filtern Sie nach Bedarf die Kunden im Feld *Kunden* oder Verkäufer im Feld *Verkäufer(-in)*.

Bis #Odoo15:

Um den Vorgang zu starten aktivieren Sie die Option *I consider that payments are up-to-date*. Damit bestätigen Sie, dass die neusten Zahlungen importiert wurden. Klicken Sie anschliessend auf *Start*.

Ab #Odoo16:

Um den Vorgang zu starten aktivieren Sie auf *Start*.

### Versand von Zahlungserinnerungen schrittweise validieren

Nachdem Sie den [Assistent Zahlungserinnerung starten](#Assistent%20Zahlungserinnerung%20starten) erscheint für jede Zahlungserinnerung der Dialog *Schritt Überfällige Rechnung*.

![](attachments/Account%20Invoice%20Overdue%20Reminder.png)

Validieren oder überspringen Sie hier den Versand der Erinnerungs-Mail. Nach dem Versand der E-Mail zählt Odoo das Feld *Neuer Erinnerungszähler* auf der Rechnung um 1 hoch.

::: tip
Wenn mehrere Rechnungen des gleichen Kontakts überfällig sind, werden diese im E-Mai zusammengefasst:

![](attachments/Account%20Invoice%20Overdue%20Reminder%20Multiple.png)
:::

### Status Zahlungserinnerung anzeigen

Navigieren Sie nach *Rechnungsstellung > Kunden > Rechnung* und zeigen Sie die Spalte *Anzahl überfälliger Erinnerungen* an. Öffnen Sie eine Rechnung mit einem Wert von mindestes 1 und zeigen Sie den Tab *Überfällige Erinnerung* an. Hier erhalten Sie die Angaben zu den versendeten Zahlungserinnerungen.

### Resultat der Zahlungserinnerung festhalten

Wenn Sie den [Status Zahlungserinnerung anzeigen](#Status%20Zahlungserinnerung%20anzeigen) können Sie einen Eintrag öffnen und im Feld *Info/Ergebnis* sowie *Notizen* das Ergebnis festhalten.

![](attachments/Account%20Invoice%20Overdue%20Reminder%20Result.png)

### Assistent Zahlungserinnerung auf Rechnung starten

Gilt bis #Odoo15:

Haben Sie eine überfällige Rechnung geöffnet *Rechnungsstellung > Kunden > Rechnungen* so erscheint die Meldung *Diese Kundenrechnung ist überfällig.* und dazu ein Link *Sende überfällige Erinnerung*. Klicken Sie auf den Link und Sie gelangen zum Assistenten. Der Kunde wird als Filter für das Feld *Kunde* übertragen.