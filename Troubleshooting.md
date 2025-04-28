---
title: Troubleshooting
description: Probleme und Lösungen rund um Odoo.
tags:
- HowTo
prev: ./
---

# Troubleshooting
![icons_odoo_website_forum](attachments/icons_odoo_website_forum.png)

{{ $frontmatter.description }}

[[TOC]]

## Abrechnung

### QR-Code Rechnung kann nicht erstellt werden

**Problem**

Beim Erstellen  einer QR-Rechnung werden diese Fehlermeldungen angezeigt:

![](attachments/Troubleshooting%20Swiss%20QR%20bill%20error%201.png)

::: warning
The following error prevented 'Swiss QR bill' QR-code to be generated though it was detected as eligible: When using a QR-IBAN as the destination account of a QR-code, the payment reference must be a QR-reference.
:::

![](attachments/Troubleshooting%20Swiss%20QR%20bill%20error%202.png)

::: warning
Cannot generate the QR-bill. Please check you have configured the address of your company and debtor. If you are using a QR-IBAN, also check the invoice's payment reference is a QR reference.
:::

**Ursache**

Damit die QR-Rechnung generiert werden kann, muss die Zahlungsreferenz nach einem bestimmten Muster gebildet werden.

Es wird dasselbe Verfahren wie für eine ISR-Zahlungsschein verwendet.

**Lösung**

Stellen Sie sicher, dass auf dem Journal die Einstellung *Kommunkationsstandard* auf *Schweiz* eingestellt ist.

![](attachments/Troubleshooting%20QR-IBAN%20Lösung%202.png)

Entfernen Sie auf dem Bankkonto die *ISR Client Identification Number*. Wird diese gesetzt, kann eine mit QR-Bill inkompatible Referenz generiert werden.

### Zahlungsmethode gelöscht

**Problem**

Eine Zahlungsmethode steht nicht mehr zur Verfügung.

**Ursache**

Im Zahlungsvorgang von Rechnungen wurde eine Zahlungsmethode gelöscht.

**Lösung**

Aktualisieren Sie die App *Rechnungsstellung* (`account`).

## Buchhaltung

### Zahlungsanbieter können nicht aufgerufen werden

**Problem**

Beim Versucht einen Zahlungsanbieter anzuzeigen erscheint dieser Fehler:

> Einige Zahlungsmethoden, die einzigartig sein sollen, gibt es bereits an anderer Stelle.

**Lösung**

In der Liste der Zahlungsmethoden sind Duplikate vorhanden. Bereinigen Sie die Liste der Zahlungsmethoden.

## Einstellungen

### Fehlermeldung - Something went wrong

**Problem**

Beim öffnen der Eisntellung erscheint der folgende Fehler:

![Berechtigungsfehler - Something went wrong](attachments/Troubleshooting%20Berechtigungsfehler%20-%20Something%20went%20wrong.png)

Ein Zugriff auf die Benutzerliste ist nicht mehr möglich.

**Ursache**

Dem Benutzer wurde mit wiedersprüchlichen Berechtigungen ausgestattet.

**Lösung**

Den Entwickler-Modus aktivieren und in den Superuser wechseln. Nun ist es möglich über die Einstellungen zur Benutzerliste zu navigieren. Dort den eigenen Benutzer mit Berechtigungen ausstatten.

### Nicht mehr als ein Benutzertyp

**Problem**

Beim Hinzufügen einer Gruppe erscheint diese Meldung:

> Der Benutzer kann nicht mehr als einen Benutzertyp haben.

**Ursache**

Ausgewählte Gruppen definieren zusätzlich den Benutzertyp (Intern, Portal, Öffentlich). Es ist nur ein Benutzertyp möglich.

**Lösung**

Entfernen Sie die bestehende Benutzertyp-Gruppe oder entfernen Sie die neue Gruppe für den Benutzer.

## E-Mail

### Eingehende Mails werden nicht verarbeitet

**Problem**

Antworten auf E-Mails, die mit Odoo versendet werden, werden von Odoo nicht verarbeitet.

**Ursache**

Wenn die ausgehenden E-Mail Server bearbeitet oder zurückgesetzt werden, werden in den Systemparameter die Einstellungen für den Mail-Alias verändert.

**Lösung**

Prüfen Sie die Systemparameter und stellen Sie sicher sich, dass die Schlüssel `mail.catchall.domain` und `mail.catchall.alias` festgelegt sind.

### Eingehende Office 365 Mails werden nicht verarbeitet

**Problem**

Die E-Mails im Office 365 Odoo Postfach werden nicht abgeraufen. Bei Erneuerung des Zugriffs-Token erscheint diese Fehlermeldung:

```
 Beim Abrufen des Zugriffstokens ist ein Fehler aufgetreten. AADSTS7000222: The provided client secret keys for app 'a06c1e36-dd3f-4240-94d1-1bb4dd78a5fa' are expired. Visit the Azure portal to create new keys for your app: https://aka.ms/NewClientSecret, or consider using certificate credentials for added security: https://aka.ms/certCreds. Trace ID: dbf54f8e-c294-4b29-bc08-2f4e66153f00 Correlation ID: c275ea40-8426-45cd-917d-04c812744798 Timestamp: 2025-04-28 06:18:12Z 
```

**Lösung**

Erstellen Sie ein neues Client-Secret und speichern Sie es in den Odoo EInstellungen.

### Office 365 SMTP-Auth deaktiviert

::: tip
Wir empfehlen [Infomaniak kSuite](https://www.infomaniak.com/de/ksuite?utm_term=67ff9acbaabca) anstatt Office 365 zu verwenden.
:::

**Problem**

Beim Testen der SMTP-Verbindung mit Office 365 erscheint dieser Fehler:

```
Der Server hat die Absenderadresse (﻿﻿[odoo@example.com)](https://odoo@localfish.ch))﻿﻿ mit dem Fehler b'5.7.57 Client not authenticated to send mail. Error: 535 5.7.139 Authentication unsuccessful, SmtpClientAuthentication is disabled for the Tenant. Visit ﻿﻿[https://aka.ms/smtp_auth_disabled](https://aka.ms/smtp_auth_disabled)﻿﻿ for more information. [﻿﻿[FR3P281CA0113.DEUP281.PROD.OUTLOOK.COM](https://FR3P281CA0113.DEUP281.PROD.OUTLOOK.COM)﻿﻿ 2024-05-03T07:54:23.031Z 08DC6AD071D7DE27]' abgelehnt
```

**Lösung**

SMTP muss auf der Organisation und dem Postfach-Konto erlaubt werden: [https://aka.ms/smtp_auth_disabled](https://aka.ms/smtp_auth_disabled)

Prüfen Sie die SMTP-Einstellungen für den Benutzer und den Nachrichtenfluss von Exchange Online.

![](attachments/Troubleshooting%20Exchange%20Mail.png)

Gehen Sie in die Konto-Einstellungen des Postfachs und prüfen Sie ob die Verbindungsinformationen für SMTP und IMAP aufezeigt werden.

![](attachments/Office%20365%20E-Mail%20synchronisieren.png)

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

::: tip
Wir empfehlen [Infomaniak kSuite](https://www.infomaniak.com/de/ksuite?utm_term=67ff9acbaabca) anstatt Office 365 zu verwenden.
:::

**Problem**

E-Mails können nicht versendet werden. Als Fehlerursache werden folgende Angaben gemacht:

```
Beim Abrufen des Zugangstokens ist ein Fehler aufgetreten. AADSTS7000222: The provided client secret keys for app '8cccc1f5-0e91-4b8d-885f-2345c10ca415' are expired. Visit the Azure portal to create new keys for your app: https://aka.ms/NewClientSecret, or consider using certificate credentials for added security: https://aka.ms/certCreds. Trace ID: 3786a52f-0991-40c1-899e-f7c8182c4500 Correlation ID: c922836e-efe6-4bee-becc-257b575557ef Timestamp: 2023-04-17 11:47:22Z 
```

**Ursache**

Das Client-Secret der Entra-App ist abglaufen.

![](attachments/Office%20365%20Token%20abgelaufen.png)

**Lösung**

Erstellen Sie ein neues Client-Secret und speichern Sie es in den Odoo EInstellungen.

### Office 365 Refreshtoken abgelaufen

::: tip
Wir empfehlen [Infomaniak kSuite](https://www.infomaniak.com/de/ksuite?utm_term=67ff9acbaabca) anstatt Office 365 zu verwenden.
:::

**Problem**

E-Mails können nicht versendet werden. Als Fehlerursache werden folgende Angaben gemacht:

```
Beim Abrufen des Zugangstokens ist ein Fehler aufgetreten. AADSTS700082: The refresh token has expired due to inactivity. The token was issued on 2023-04-17T12:24:41.7389404Z and was inactive for 90.00:00:00. Trace ID: f569f9b6-0510-4fc7-9903-5fb1ee204100 Correlation ID: c9c6ce28-6740-4abc-9835-5371032bd8ab Timestamp: 2023-07-17 09:44:06Z
```

**Ursache**

Das Refreshtoken, welches in Odoo gespeichert wird, ist abgelafufen.

**Lösung**

Sie müssen das [OAuth-Token regenerieren](Settings%20OAuth.md#OAuth-Token%20regenerieren).

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

![](attachments/ir.ui.view%20user%20read.png)

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

## Buchhaltung

### Abstimmungsvorgang kann nicht bestätigt werden

**Problem**

Bei der Bestätigung einer Abstimmung erscheint dieser Fehler:

```
Fehler: You can only reconcile posted entries.
```

**Ursache**

Die Buchung des Kontoauszug ist im Entwurfsstatus.

**Lösung**

Vor der Abstimmung muss der Kontoauszug gebucht werden.

### Zahlung kann nicht erstellt werden

**Problem**

```
Sie können keine neue Zahlung erstellen, ohne dass ein Konto für ausstehende Zahlungen/Eingänge entweder für die Firma oder die SEPA Kreditübertragung Zahlung im Bank Journal eingerichtet ist.
```

**Ursache**

Die Buchung der Zahlung erfordert ein Zwischenkonto.

**Lösung**

Navigieren Sie nach *Einstellungen > Buchhaltung > Standardkonto* und legen Sie bei *Konto für ausstehende Zahlungen* ein Konto fest.

### Nur eine Konto für ausstehende Zahlungen und Eingänge

**Problem**

Wenn Sie versuchen auf einem Buchhungssatz ein anderes Zahlungs-Konto zu definieren erscheint diese Fehlermeludng?

```
Die Journalbuchung Entwurfsbuchung DIV/2024/10/0001 (201740) ist nicht gültig. Um fortzufahren, dürfen die Buchungszeilen genau ein Konto für ausstehende Zahlungen und Eingänge enthalten.
```

**Ursache**

Für jedes Journal ist definiert welche Konto als Liquiditäts-Konten verwendet werden dürfen.

**Lösung**

Korrigieren Sie die verfügbaren Konten in den Journalkonfigurationen.

### Journalbuchung muss ein Fälligkeitsdatum haben

**Problem**

Wenn Sie eine Lieferantrechnung  buchen wollen erscheint diese Fehlermeldung:

```
Jede Journalbuchung in einem Kreditorenkonto muss ein Fälligkeitsdatum haben und umgekehrt.
```

**Lösung**

Prüfen Sie den Typ des Kreditoren-Kontos. Dieser muss auf *Verbindlichkeit* sein.

## Personalabrechnung

### Batch in Personalabrechnung kann nicht abgeschlossen werden

**Problem**

Beim Bestätigen einer Personalabrechnung erscheint dieser Fehler:

```
Der Vorgang kann nicht abgeschlossen werden: ein anderes Modell erfordert, dass der Datensatz gelöscht wird. Wenn möglich, archivieren Sie es stattdessen.

Model: Salary Rule (hr.salary.rule), Einschränkung: hr_salary_rule_struct_id_fkey
```

**Ursache**

Das [Swiss Payroll](Gio%20Payroll%20Custom.md) App ist nicht aktuell und muss aktualisiert werden.

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

### Anlieferung mit Subunternehmer kann nicht abgeschlossen werden

**Problem**

```
Sie müssen die Qualitätsprüfungen in der Tablet-Ansicht abschließen, bevor Sie den Arbeitsauftrag als erledigt markieren.
```

**Lösung**

Erledigen Sei die Fertigungsaufträge des Subunternehmers vor der Anlieferung.

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

## Datenbank

### Database backup error

**Problem**

Beim Erstellen des Backup via Datenbankmanager erscheint diese Fehlermeldung:

```
Database backup error: Postgres subprocess ('/usr/bin/pg_dump', '--no-owner', '--file=/tmp/tmp8ron8tnq/dump.sql', 'odoo') error 1
```

**Ursache**

Die psql Version auf dem Datenbank- und Odoo-Container sind unterschiedlich.

Quelle: <https://stackoverflow.com/questions/53989761/odoo12-database-backup-no-owner>

**Lösung**

Aktualisieren Sie die Version des Datenbank-Containers oder Downgraden Sie den Client im Odoo-Container.

## Kalender

### Google Synchronisation schlägt fehl

**Problem**

Termine werden nur noch beim anlegen mit dem Google-Kalender synchronisiert. Umgekehrt erfolgt keine Synchronisation.

**Ursache**

**Lösung**

Sie müssen die [Google-Kalender-Synchronisation zurücksetzen](Calendar.md#Google-Kalender-Synchronisation%20zurücksetzen).

### Fehler Kalender mit Wiederholungstermin

**Problem**

Beim Aufruf des Kalenders erscheint diese Meldung:

```
Sie müssen mindestens einen Tag der Woche auswählen.
You have to choose at least one day in the week
```

**Ursache**

Ein Termin mit Wiederholung konnte nicht korrekt synchronisiert werden.

**Lösung**

Sie müssen die [Google-Kalender-Synchronisation zurücksetzen](Calendar.md#Google-Kalender-Synchronisation%20zurücksetzen).

## Abwesenheiten

### Mitarbeiter sollen in Zeitraum nicht arbeiten

***Problem**

Beim Bestätigen einer Anwesenheit mit benutzerdefinierten Stunden, erscheint dieser Fehler:

```
Die folgenden Mitarbeiter sollen in diesem Zeitraum nicht arbeiten:
Mitchell Admin
```

**Ursache**

Validierung des "Number of Days" Felds. Der Wert wird auf 0 abgerundet.

**Lösung**

Das Modul [HR Holidays Working Time](HR%20Holidays%20Working%20Time.md) deaktiviert den Check.

## Abwesenheiten

### Es kann kein Anwesenheitseintrag angelegt werden

**Problem**

```
Es kann kein neuer Anwesenheitseintrag für Mitchel Admin angelegt werden. Der Mitarbeiter ist seit 26.11.2024 02:00:00 angemeldet.
```

**Lösung**

Der Mitarbeitende hat einen nicht abgeschlossen Anwesenheitseintrag.

## Kontakte

### Der Datenbankabfrage fehlen IDs

**Problem**

Bei der Erstellung oder Bearbeitung eines Kontakts erscheint diese Fehlermeldung:

```
Der Datenbankabfrage fehlen IDs ((<NewId origin=29672>,)) und hat zusätzliche IDs ((29672,)), kann durch eine Typinkohärenz in einer früheren Abfrage verursacht worden sein
```

**Lösung**

Prüfen die Fehlermeldung in den Entwicklertools des Browser. Sie sollte mehr Details zur Fehler-Rückverfolgung enthalten. Wenn automatische Server-Aktionen involviert sind, wird empfohlen diese zu deaktiveiren.