---
title: Overdue Invoice Reminder
description: Einfache Lösung zum Versenden von Zahlungserinnerungen.
kind: howto
partner: OCA
prev: ./accounting
---

# Overdue Invoice Reminder

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `account_invoice_overdue_reminder`\
Repository: <https://github.com/OCA/credit-control/tree/18.0/account_invoice_overdue_reminder>

## Konfiguration

### E-Mail-Vorlage für Zahlungserinnerung anpassen

Wenn Sie die [E-Mail-Vorlagen anzeigen](Settings%20E-Mail.md#E-Mail-Vorlagen%20anzeigen) finden Sie den Eintrag _Erinnerung an überfällige Rechnungen_. Diese Vorlage wird beim Versenden der Zahlungserinnerung verwendet.

### Optionen für Assisten festlegen

Navigieren Sie nach _Einstellungen > Abrechnung > Erinnerung an überfällige Rechnungen_ und legen Sie hier die Optionen für den Asisstenten zur Zahlungserinnerungen fest:

- **Hängen Sie Rechnungen an überfällige Erinnerungs-E-Mails an**: Aktivieren wenn die Rechnung als Anhang zur Erinenrungsmail hinzugefügt werden soll.
- **Kontakt zur Erinnerung**: Filter aufgrund welcher Information die Erinnerung versendet werden soll.
- **Standardschnittstelle Assistent**: E-Mails einzeln oder alle gleichzeitig versenden.
- **Standardverzögerung für Erinnerungsauslöser**: Nach wie vielen Tagen eine Erinnerung versendet werden kann.
- **Standard Mindestintervall für Erinnerungen**: Nach wie vielen Tagen eine neue Erinnerung versendet werden kann.

### Auswahl Ergebnis Zahlungserinnerung festlegen

Navigieren Sie nach _Rechnungsstellung > Konfiguration > Invoice Reminder Results_. Hier legen Sie Auswahl für mögliche Ergebnisse aus der Zahlungserinnerung fest.

## Verwendung

### Assistent Zahlungserinnerung starten

Der Versand der Zahlungserinnerung erfolgt über einen Assistenten. Den Assistent rufen Sie unter _Rechnungsstellung > Kunden > Erinnerung an überfällige Rechnungen_ auf. Filtern Sie nach Bedarf die Kunden im Feld _Kunden_ oder Verkäufer im Feld _Verkäufer(-in)_.

Bis #Odoo15:

Um den Vorgang zu starten aktivieren Sie die Option _I consider that payments are up-to-date_. Damit bestätigen Sie, dass die neusten Zahlungen importiert wurden. Klicken Sie anschliessend auf _Start_.

Ab #Odoo16:

Um den Vorgang zu starten aktivieren Sie auf _Start_.

### Versand von Zahlungserinnerungen schrittweise validieren

Nachdem Sie den [Assistent Zahlungserinnerung starten](#Assistent%20Zahlungserinnerung%20starten) erscheint für jede Zahlungserinnerung der Dialog _Schritt Überfällige Rechnung_.

![](attachments/Account%20Invoice%20Overdue%20Reminder.png)

Validieren oder überspringen Sie hier den Versand der Erinnerungs-Mail. Nach dem Versand der E-Mail zählt Odoo das Feld _Neuer Erinnerungszähler_ auf der Rechnung um 1 hoch.

::: tip
Wenn mehrere Rechnungen des gleichen Kontakts überfällig sind, werden diese im E-Mai zusammengefasst:

![](attachments/Account%20Invoice%20Overdue%20Reminder%20Multiple.png)
:::

### Status Zahlungserinnerung anzeigen

Navigieren Sie nach _Rechnungsstellung > Kunden > Rechnung_ und zeigen Sie die Spalte _Anzahl überfälliger Erinnerungen_ an. Öffnen Sie eine Rechnung mit einem Wert von mindestes 1 und zeigen Sie den Tab _Überfällige Erinnerung_ an. Hier erhalten Sie die Angaben zu den versendeten Zahlungserinnerungen.

### Resultat der Zahlungserinnerung festhalten

Wenn Sie den [Status Zahlungserinnerung anzeigen](#Status%20Zahlungserinnerung%20anzeigen) können Sie einen Eintrag öffnen und im Feld _Info/Ergebnis_ sowie _Notizen_ das Ergebnis festhalten.

![](attachments/Account%20Invoice%20Overdue%20Reminder%20Result.png)

### Assistent Zahlungserinnerung auf Rechnung starten

Gilt bis #Odoo15:

Haben Sie eine überfällige Rechnung geöffnet _Rechnungsstellung > Kunden > Rechnungen_ so erscheint die Meldung _Diese Kundenrechnung ist überfällig._ und dazu ein Link _Sende überfällige Erinnerung_. Klicken Sie auf den Link und Sie gelangen zum Assistenten. Der Kunde wird als Filter für das Feld _Kunde_ übertragen.
