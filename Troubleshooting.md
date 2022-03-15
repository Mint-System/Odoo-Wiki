---
tags:
- HowTo
prev: ./
---
# Troubleshooting
![icons_odoo_website_forum](assets/icons_odoo_website_forum.png)

Probleme und Lösungen rund um Odoo.

## QR-Code Rechnung kann nicht erstellt werden

#### Problem

Beim Erstellen  einer QR-Rechnung werden diese Fehlermeldungen angezeigt:

![](assets/Troubleshooting%20Swiss%20QR%20bill%20error%201.png)

::: warning
The following error prevented 'Swiss QR bill' QR-code to be generated though it was detected as eligible: When using a QR-IBAN as the destination account of a QR-code, the payment reference must be a QR-reference.
:::

![](assets/Troubleshooting%20Swiss%20QR%20bill%20error%202.png)

::: warning
Cannot generate the QR-bill. Please check you have configured the address of your company and debtor. If you are using a QR-IBAN, also check the invoice's payment reference is a QR reference.
:::

#### Ursache

Damit die QR-Rechnung generiert werden kann, muss die Zahlungsreferenz nach einem bestimmten Muster gebildet werden.

Es wird dasselbe Verfahren wie für eine ISR-Zahlungsschein verwendet.

#### Lösung

Stellen sie sicher, dass auf dem Journal die Einstellung *Kommunkationsstandard* auf *Schweiz* eingestellt ist.

![](assets/Troubleshooting%20QR-IBAN%20Lösung%202.png)

Entfernen sie auf dem Bankkonto die *ISR Client Identification Number*. Wird diese gesetzt, kann eine mit QR-Bill inkompatible Referenz generiert werden.

## Fehlermeldung - Something went wrong

#### Problem

Beim öffnen der Eisntellung erscheint der folgende Fehler:

![Berechtigungsfehler - Something went wrong](assets/Troubleshooting%20Berechtigungsfehler%20-%20Something%20went%20wrong.png)

Ein Zugriff auf die Benutzerliste ist nicht mehr möglich.

#### Ursache

Dem Benutzer wurde mit wiedersprüchlichen Berechtigungen ausgestattet.

#### Lösung

Den Entwickler-Modus aktivieren und in den Superuser wechseln. Nun ist es möglich über die Einstellungen zur Benutzerliste zu navigieren. Dort den eigenen Benutzer mit Berechtigungen ausstatten.


## Zahlungsmethode gelöscht

#### Problem

Eine Zahlungsmethode steht nicht mehr zur Verfügung.

#### Ursache

Im Zahlungsvorgang von Rechnungen wurde eine Zahlungsmethode gelöscht.

#### Lösung

Aktualisieren sie die App *Abrechnung* (`account`).

## Eingehende Mail werden nicht verarbeitet

#### Problem

Antworten auf E-Mails, die mit Odoo versendet werden, werden von Odoo nicht verarbeitet.

#### Ursache

Werden die ausgehenden E-Mail Server bearbeitet oder zurückgesetzt, werden in den Systemparameter die Einstellungen für den Mail-Alias verändert.

#### Lösung

Prüfen sie die Systemparater und stellen sicher sich, dass die Schlüssel `mail.catchall.domain` und `mail.catchall.alias`.