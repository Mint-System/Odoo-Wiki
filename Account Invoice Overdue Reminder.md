---
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
- OCA
prev: ./finanzen
---
# Overdue Invoice Reminder
![icon_oca_app](assets/icon_oca_app.png)

Einfache Lösung zum Versenden von Zahlungserinnerungen.

Technischer Name: `account_invoice_overdue_reminder`\
Repository: <https://github.com/OCA/credit-control/tree/15.0/account_invoice_overdue_reminder>

## Konfiguration

### E-Mail-Vorlage für Zahlungserinnerung anpassen

Wenn Sie die [E-Mail-Vorlagen anzeigen](Einstellungen%20E-Mail.md#E-Mail-Vorlagen%20anzeigen) finden Sie den Eintrag *Overdue Invoice Reminder*. Diese Vorlage wird beim Versenden der Zahlungserinnerung verwendet.

### Optionen für Assisten festlegen

Navigieren Sie nach *Einstellungen > Abrechnung > Overdue Invoice Reminder* und legen Sie hier die Optionen für den Asisstenten zur Zahlungserinnerungen fest:

* **Attach Invoices to Overdue Reminder E-mails**: Aktivieren wenn die Rechnung als Anhang zur Erinenrungsmail hinzugefügt werden soll.
* **Contact to Remind**: Filter aufgrund welcher Information die Erinnerung versendet werden soll.
* **Default Wizard Interface**: E-Mails einzeln oder alle gleichzeitig versenden. 
* **Default Reminder Trigger Delay days**: Nach wie vielen Tagen eine Erinnerung versendet werden kann.
* **Default Reminder Minimum Interval**: Nach wie vielen Tagen eine neue Erinnerung versendet werden kann.

### Auswahl Ergebnis Zahlungserinnerung festlegen

Navigieren Sie nach *Abrechnung > Konfiguration > Invoice Reminder Results*. Hier legen Sie Auswahl für mögliche Ergebnisse aus der Zahlungserinnerung fest.

## Verwendung

### Assistent Zahlungserinnerung starten

Der Versand der Zahlungserinnerung erfolgt über einen Assistenten. Den Assisten rufen Sie unter *Abrechnung > Kunden > Overdue Invoice Remind* auf. Filtern Sie nach Bedarf die Kunden im Feld *Customers* oder Verkäufer im Feld *Salesman*.

Um den Vorgang zu starten aktivieren Sie die Option *I consider that payments are up-to-date*. Damit bestätigen Sie, dass die neusten Zahlungen importiert wurden. Klicken Sie anschliessend auf *Start*.

### Versand von Zahlungserinnerungen validieren

Nachdem Sie den [Assistent Zahlungserinnerung starten](#Assistent%20Zahlungserinnerung%20starten) erscheint für jede Zahlungserinnerung der Dialog *Overdue Invoice Step*.

![](assets/Account%20Invoice%20Overdue%20Reminder.png)

Validieren oder überspringen Sie hier den Versand der Erinnerungs-Mail. Nach dem Versand der E-Mail zählt Odoo das Feld *Overdue Reminder Count* auf der Rechnung um 1 hoch.

::: tip
Wenn mehrere Rechnungen des gleichen Kontakts überfällig sind, werden diese im E-Mai zusammengefasst:

![](assets/Account%20Invoice%20Overdue%20Reminder%20Multiple.png)
:::

### Status Zahlungserinnerung anzeigen

Navigieren Sie nach *Abrechnung > Kunden > Rechnung* und zeigen Sie die Spalte *Overdue Reminder Count* an. Öffnen Sie eine Rechnung mit einem Wert von mindestes 1 und zeigen Sie den Tab *Overdue Reminder* an. Hier erhalten Sie die Angaben zu den versendeten Zahlungserinnerungen.

### Resultat der Zahlungserinnerung festhalten

Wenn Sie den [Status Zahlungserinnerung anzeigen](#Status%20Zahlungserinnerung%20anzeigen) können Sie einen Eintrag öffnen und im Feld *Info/Result* sowie *Note* das Ergebnis festhalten.

![](assets/Account%20Invoice%20Overdue%20Reminder%20Result.png)

### Assistent Zahlungserinnerung auf Rechnung starten

Haben Sie eine überfällige Rechnung geöffnet *Abrechnung > Kunden > Rechnungen* so erscheint die Meldung *This customer invoice is overdue.* und dazu ein Link *Send an overdue reminder*. Klicken Sie auf den Link und Sie gelangen zum Aisstenten. Der Kunde wird als Filter für das Feld *Customers* übertragen.