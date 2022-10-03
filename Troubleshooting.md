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

Stellen Sie sicher, dass auf dem Journal die Einstellung *Kommunkationsstandard* auf *Schweiz* eingestellt ist.

![](assets/Troubleshooting%20QR-IBAN%20Lösung%202.png)

Entfernen Sie auf dem Bankkonto die *ISR Client Identification Number*. Wird diese gesetzt, kann eine mit QR-Bill inkompatible Referenz generiert werden.

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

Aktualisieren Sie die App *Abrechnung* (`account`).

## Eingehende Mail werden nicht verarbeitet

#### Problem

Antworten auf E-Mails, die mit Odoo versendet werden, werden von Odoo nicht verarbeitet.

#### Ursache

Werden die ausgehenden E-Mail Server bearbeitet oder zurückgesetzt, werden in den Systemparameter die Einstellungen für den Mail-Alias verändert.

#### Lösung

Prüfen Sie die Systemparater und stellen sicher sich, dass die Schlüssel `mail.catchall.domain` und `mail.catchall.alias`.

##  Kein Zugriff auf Ansicht

### Problem

Beim erstellen eines Bericht erscheint diese Fehlermeldung:

```
odoo.exceptions.AccessError: Sie haben keinen Zugriff auf 'Ansicht' (ir.ui.view) Datensätze.

This operation is allowed for the following groups:
	- Administration/Settings

Contact your administrator to request access if necessary.

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/lib/python3/dist-packages/odoo/tools/cache.py", line 85, in lookup
    r = d[key]
  File "/usr/lib/python3/dist-packages/odoo/tools/func.py", line 71, in wrapper
    return func(self, *args, **kwargs)
  File "/usr/lib/python3/dist-packages/odoo/tools/lru.py", line 34, in __getitem__
    a = self.d[obj]
KeyError: ('ir.model.access', <function IrModelAccess.check at 0x7f125fa22e18>, 10, False, 'ir.ui.view', 'read', True, ('de_CH',))

During handling of the above exception, another exception occurred:
```

### Ursache

Der angezeigte Bericht wird nicht korrekt vom System aufgerufen.

### Lösung

Geben Sie den Benutzern Leserechte auf das Datenmodell `ir.ui.view`.

![](assets/ir.ui.view%20user%20read.png)


## Berichtsformatierung in PDF nicht vorhanden

### Problem

Wenn wkhtmltopdf die PDF-Datei erstellt, wird dieser Fehler geworfen:

```
2022-06-13 20:03:37,244 1 WARNING odoo odoo.addons.base.models.ir_actions_report: wkhtmltopdf: b'Exit with code 1 due to network error: ConnectionRefusedError\n'
```

Oder dieser Fehler:

```
2022-06-20 16:43:05,267 1 WARNING odoo odoo.addons.base.models.ir_actions_report: wkhtmltopdf: b'Exit with code 1 due to network error: ContentNotFoundError\n'
2
```

Das generierte PDF enthält keine Formatierungen.

### Ursache

Wkhtmltopdf kann kein CSS oder Bilder über HTTPS laden.

Quelle: <https://github.com/wkhtmltopdf/wkhtmltopdf/issues/4462>

### Lösung

In den Systemparameter von Odoo muss beim Eintrag `web.base.url`  die URL von https auf http gewechselt werden.

## Externe ID User Admin nicht gefunden

### Problem 

Beim Einloggen oder Ausführen einer Aktion erscheint diese Fehlermeldung:

```
External ID not found in the system: base.user_admin
```

### Ursache

Der Admin-Benutzer wurde gelöscht oder dessen externe ID entfernt.

### Lösung

Sie müssen eine [Externe ID erfassen](Entwicklung.md#Externe%20ID%20erfassen) mit diesen Parameter erfassen:

* **Modul**: `base`
* **Externe Identifkation**: `user_admin`
* **Modellname**: `res.users`
* **Datensatz-ID**: Tragen Sie hier die *ID* aus den [Metadaten anzeigen](Entwicklung.md#Metadaten%20anzeigen) eines Benutzers ein.

Mit der neuen externen ID bestimmen Sie einen anderen Bentuzer als Administrator.

## Office 365 SMTP-Auth deaktiviert

### Problem

Beim Testen der SMTP-Verbindung mit Office 365 erscheint dieser Fehler:

```
5.7.139 Authentication unsuccessful, SmtpClientAuthentication is disabled for the Tenant.
```

### Lösung

Prüfen Sie die SMTP-Einstellungen für den Benutzer und den Nachrichtenfluss von Exchange Online.

![](assets/Troubleshooting%20Exchange%20Mail.png)

Gehen Sie in die Konto-Einstellungen des Postfachs und prüfen Sie ob die Verbindungsinformationen für SMTP und IMAP augezeigt werden.

![](assets/Office%20365%20E-Mail%20synchronisieren.png)