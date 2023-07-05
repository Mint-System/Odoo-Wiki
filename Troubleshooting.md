---
title: Troubleshooting
description: Probleme und Lösungen rund um Odoo.
tags:
- HowTo
prev: ./
---

# Troubleshooting
![icons_odoo_website_forum](assets/icons_odoo_website_forum.png)

{{ $frontmatter.description }}

## Abrechnung

### QR-Code Rechnung kann nicht erstellt werden

**Problem**

Beim Erstellen  einer QR-Rechnung werden diese Fehlermeldungen angezeigt:

![](assets/Troubleshooting%20Swiss%20QR%20bill%20error%201.png)

::: warning
The following error prevented 'Swiss QR bill' QR-code to be generated though it was detected as eligible: When using a QR-IBAN as the destination account of a QR-code, the payment reference must be a QR-reference.
:::

![](assets/Troubleshooting%20Swiss%20QR%20bill%20error%202.png)

::: warning
Cannot generate the QR-bill. Please check you have configured the address of your company and debtor. If you are using a QR-IBAN, also check the invoice's payment reference is a QR reference.
:::

**Ursache**

Damit die QR-Rechnung generiert werden kann, muss die Zahlungsreferenz nach einem bestimmten Muster gebildet werden.

Es wird dasselbe Verfahren wie für eine ISR-Zahlungsschein verwendet.

**Lösung**

Stellen Sie sicher, dass auf dem Journal die Einstellung *Kommunkationsstandard* auf *Schweiz* eingestellt ist.

![](assets/Troubleshooting%20QR-IBAN%20Lösung%202.png)

Entfernen Sie auf dem Bankkonto die *ISR Client Identification Number*. Wird diese gesetzt, kann eine mit QR-Bill inkompatible Referenz generiert werden.

### Zahlungsmethode gelöscht

**Problem**

Eine Zahlungsmethode steht nicht mehr zur Verfügung.

**Ursache**

Im Zahlungsvorgang von Rechnungen wurde eine Zahlungsmethode gelöscht.

**Lösung**

Aktualisieren Sie die App *Abrechnung* (`account`).

## Einstellungen

### Fehlermeldung - Something went wrong

**Problem**

Beim öffnen der Eisntellung erscheint der folgende Fehler:

![Berechtigungsfehler - Something went wrong](assets/Troubleshooting%20Berechtigungsfehler%20-%20Something%20went%20wrong.png)

Ein Zugriff auf die Benutzerliste ist nicht mehr möglich.

**Ursache**

Dem Benutzer wurde mit wiedersprüchlichen Berechtigungen ausgestattet.

**Lösung**

Den Entwickler-Modus aktivieren und in den Superuser wechseln. Nun ist es möglich über die Einstellungen zur Benutzerliste zu navigieren. Dort den eigenen Benutzer mit Berechtigungen ausstatten.

## E-Mail

### Eingehende Mails werden nicht verarbeitet

**Problem**

Antworten auf E-Mails, die mit Odoo versendet werden, werden von Odoo nicht verarbeitet.

**Ursache**

Werden die ausgehenden E-Mail Server bearbeitet oder zurückgesetzt, werden in den Systemparameter die Einstellungen für den Mail-Alias verändert.

**Lösung**

Prüfen Sie die Systemparameter und stellen Sie sicher sich, dass die Schlüssel `mail.catchall.domain` und `mail.catchall.alias` festgelegt sind.

### Office 365 SMTP-Auth deaktiviert

**Problem**

Beim Testen der SMTP-Verbindung mit Office 365 erscheint dieser Fehler:

```
5.7.139 Authentication unsuccessful, SmtpClientAuthentication is disabled for the Tenant.
```

**Lösung**

Prüfen Sie die SMTP-Einstellungen für den Benutzer und den Nachrichtenfluss von Exchange Online.

![](assets/Troubleshooting%20Exchange%20Mail.png)

Gehen Sie in die Konto-Einstellungen des Postfachs und prüfen Sie ob die Verbindungsinformationen für SMTP und IMAP augezeigt werden.

![](assets/Office%20365%20E-Mail%20synchronisieren.png)

### Versandlimit für E-Mails erreicht

**Problem**

```
Daily email limit exceeded: retry later.
```

**Ursache**

Odoo.sh schränkt die Anzahl E-Mails, die an einem Tag verschickt werden können ein.

**Lösung**

Konfigurieren Sie den ausgehenden E-Mail-Server mit einem Anbieter, der eine höhrere Limite hat.

### Office 365 Zugangstoken abgelaufen

**Problem**

E-Mails können nicht versendet werden. Als Fehlerursache werden folgende Angaben gemacht:

```
Beim Abrufen des Zugangstokens ist ein Fehler aufgetreten. AADSTS7000222: The provided client secret keys for app '8cccc1f5-0e91-4b8d-885f-2345c10ca415' are expired. Visit the Azure portal to create new keys for your app: https://aka.ms/NewClientSecret, or consider using certificate credentials for added security: https://aka.ms/certCreds. Trace ID: 3786a52f-0991-40c1-899e-f7c8182c4500 Correlation ID: c922836e-efe6-4bee-becc-257b575557ef Timestamp: 2023-04-17 11:47:22Z 
```

**Ursache**

Das Client-Secret der Azure-App ist abglaufen.

![](assets/Office%20365%20Token%20abgelaufen.png)

**Lösung**

Erstellen Sie ein neues Client-Secret und speichern Sie es in den Odoo EInstellungen.

## Entwicklung

###  Kein Zugriff auf Ansicht

**Problem**

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

**Ursache**

Der angezeigte Bericht wird nicht korrekt vom System aufgerufen.

**Lösung**

Geben Sie den Benutzern Leserechte auf das Datenmodell `ir.ui.view`.

![](assets/ir.ui.view%20user%20read.png)

### Externe ID User Admin nicht gefunden

**Problem** 

Beim Einloggen oder Ausführen einer Aktion erscheint diese Fehlermeldung:

```
External ID not found in the system: base.user_admin
```

**Ursache**

Der Admin-Benutzer wurde gelöscht oder dessen externe ID entfernt.

**Lösung**

Sie müssen eine [Externe ID erfassen](Development.md#Externe%20ID%20erfassen) mit diesen Parameter erfassen:

* **Modul**: `base`
* **Externe Identifkation**: `user_admin`
* **Modellname**: `res.users`
* **Datensatz-ID**: Tragen Sie hier die *ID* aus den [Metadaten anzeigen](Development.md#Metadaten%20anzeigen) eines Benutzers ein.

Mit der neuen externen ID bestimmen Sie einen anderen Bentuzer als Administrator.

## Berichte

### Berichtsformatierung in PDF nicht vorhanden

**Problem**

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

**Ursache**

Wkhtmltopdf kann kein CSS oder Bilder über HTTPS laden.

Quelle: <https://github.com/wkhtmltopdf/wkhtmltopdf/issues/4462>

Eine weitere Ursache kann auch sein, dass die Host-Adresse von Odoo innerhalb des Server-Netzwerks nicht korrekt aufgelöst wird.

**Lösung**

In den Systemparameter von Odoo muss beim Eintrag `web.base.url`  die URL von https auf http gewechselt werden.

Stellen Sie sicher, dass der Systemparameter `report.url` nicht existiert.

Verifizieren Sie, dass die Host-Adresse von Odoo korrekt aufgelöst wird.

```
docker exec -it odoo28 bash
odoo@0e915a4496a8:/$ curl https://odoo.example.com
curl: (60) SSL certificate problem: certificate has expired
More details here: https://curl.se/docs/sslcerts.html
```

## Finanzen

### Abstimmungsvorgang kann nicht bestätigt werden

**Problem**

Bei der Bestätigung eines Abgleichs erscheint dieser Fehler:

```
Fehler: You can only reconcile posted entries.
```

**Ursache**

Die Buchung des Kontoauszug ist im Entwurfsstatus.

**Lösung**

Vor der Abstimmung muss der Kontoauszug gebucht werden.

## Personalabrechnung

### Batch in Personalabrechnung kann nicht abgeschlossen werden

**Problem**

Beim Bestätigen einer Personalabrechnung erscheint dieser Fehler:

```
Der Vorgang kann nicht abgeschlossen werden: ein anderes Modell erfordert, dass der Datensatz gelöscht wird. Wenn möglich, archivieren Sie es stattdessen.

Model: Salary Rule (hr.salary.rule), Einschränkung: hr_salary_rule_struct_id_fkey
```

**Ursache**

Das [Gio Payroll Custom](Gio%20Payroll%20Custom.md) App ist nicht akutell und muss aktualisiert werden.

**Lösung**

Löschen Sie die Lohnstruktur *Stundenlohn* in der Personalabrechnung und aktualisieren Sie die App.

## Lager

### Reservierung im Lager aufheben nicht möglich

**Problem**

Beim Bestätigen eines Lagertransfers erscheint dieser Fehler:

```
Es ist nicht möglich, die Reservierung für mehr Produkte von [XXX] PRODUCTNAME aufzuheben als im Lager vorhanden sind.
```

**Ursache**

Es gibt höchstwahrscheinlich ungültige Produktlieferungen für das genannte Produkt.

**Lösung**

Zeigen Sie die offenen Produktlieferungen des Produkts an, identifizieren und entfernen Sie die Lieferungen, welche den Lagertransfer blockieren.

## Dashboard

### Fehler in Dashboard-Definition

**Problem**

Beim Aufruf des Dashboards erscheint ein Fehler.

```
Traceback (most recent call last):
  File "/usr/lib/python3/dist-packages/odoo/http.py", line 641, in _handle_exception
    return super(JsonRequest, self)._handle_exception(exception)
  File "/usr/lib/python3/dist-packages/odoo/http.py", line 317, in _handle_exception
    raise exception.with_traceback(None) from new_cause
psycopg2.ProgrammingError: column report_project_task_user.hours_planned does not exist
LINE 2: ..."report_project_task_user".id) AS "__count" , sum("report_pr...
```

**Ursache**

In der Definition des Dashboards gibt es ungültige Elemente.

**Lösung**

Sie müssen die [Dashboard-Definition anzeigen](Dashboards.md#Dashboard-Definition%20anzeigen) und bearbeiten. Falls nötig Löschen Sie die Definition.