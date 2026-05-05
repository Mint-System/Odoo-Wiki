---
title: Kalender
description: Termine Team- und Anwendungs-übergreifend organisieren.
kind: howto
prev: ./
partner: Odoo S.A.
extensions: true
---

# Kalender

![icons_odoo_calendar](attachments/icons_odoo_calendar.png)

{{ $frontmatter.description }}

## Bereiche

| Bereich                                    | Beschreibung                      |
| ------------------------------------------ | --------------------------------- |
| [Kalender Aktionen](Calendar%20Actions.md) | Kalender-Prozesse automatisieren. |

## Erweiterungen

| Erweiterung                     | Beschreibung                              |
| ------------------------------- | ----------------------------------------- |
| [CalDAV Sync](CalDAV%20Sync.md) | Odoo Kalender mit CalDav synchronisieren. |
| [HR Calendar User Color](HR%20Calendar%20User%20Color.md) | Farbdarstellung von Events |                           |                                           |

## Konfiguration

### Outlook-Kalender-Synchronisation aktivieren

::: tip
Wir empfehlen [Infomaniak E-Mail-Hosting](https://www.infomaniak.com/goto/de/hosting.mail?utm_term=67ff9acbaabca) anstatt Outlook zu verwenden.
:::

Damit die Kalender-Synchronisation möglich ist, müssen Sie [Odoo als OAuth-App auf Azure registrieren](Settings%20OAuth.md#Odoo%20als%20OAuth-App%20auf%20Azure%20registrieren). Verwenden Sie diese Angaben:

- **Name**: Odoo Kalender
- **Unterstützte Kontentypen**: Konten in einem beliebigen Organisationsverziechnis (mehrinstanzenfähig)
- **Redirect URI**: `https://$HOSTNAME/microsoft_account/authentication`

::: warning
Bitten ersetzen Sie `$HOSTNAME` mit dem Hostnamen ihrer Odoo-Installation.
:::

Navigieren Sie nach _Einstellungen > Allgemeine Einstellungen > Integration_. Aktivieren Sie die Option _Outlook-Kalender_. Füllen Sie die Felder _Client ID_ und _Client Secret_ mit den Werten aus der Registration der OAuth-app aus.

## Verwendung

### Terminserie erstellen

Auf jedem Odoo-Eintrag können Sie als Aktivität einen Termin erstellen. Dieser Termin kann auch eine Serie sein. Hier ein Beispiel wie man auf einem Kontakt-Eintrag eine Terminserie erstellt:

![Kalender Terminserie](attachments/Kalender%20Terminserie.gif)

## Benachrichtigung

### Versand Einladungen verhindern

Standardmässig versendet Odoo beim Hinzufügen von Teilnehmer an einen Termin an jeden Teilnehmer eine Einladung. Dieses Verhalten kann mit einer Einstellung in den Systemparameter verhindert werden.

Öffnen Sie _Einstellungen > Technisch > Parameter > Systemparameter_ und erstellen Sie einen Eintrag mit Schlüssel `calendar.block_mail` und Wert `True` an.

::: warning
Werden Termine beispielsweise mit dem Google-Kalender synchronisiert, ist mit dieser Einstellung nicht ausgeschlossen, dass Google eine Einladungsmail verschickt.
:::

## Verknüpfung

### Google-Kalender-Synchronisation einrichten

Wurde die Google-Kalender-Synchronisation in den Einstellungen aktiviert, können Sie ihren _Kalender_ aufrufen und auf _Synchronsieren mit Google_ klicken. Bestätigen Sie den Dialog mit _Ok_.

![](attachments/Calendar%20Redirect.png)

Loggen Sie sich mit ihrem Google-Konto ein. Falls nun eine Warnung _Google hasn't verified this app_ erscheint klicken Sie auf _Advanced_ und anschliessend auf _Go to example.com (unsafe)_.

![](attachments/Calendar%20Unverified.png)

Erlbauen Sie den Zugriff auf ihren Kalender. Anschliessend werden Sie zu Odoo zurückgeleitet.

::: tip
Der Google-Account und der Odoo-Account sollten die gleiche E-Mail-Adresse haben.
:::

### Outlook-Kalender-Synchronisation einrichten

::: tip
Wir empfehlen [Infomaniak E-Mail-Hosting](https://www.infomaniak.com/goto/de/hosting.mail?utm_term=67ff9acbaabca) anstatt Outlook zu verwenden.
:::

Wenn Sie die [Outlook-Kalender-Synchronisation aktivieren](#Outlook-Kalender-Synchronisation%20aktivieren), können Mitarbeitende den Odoo Kalender mit dem Outlook Kalender synchronsieren.

::: warning
Entfernen Sie vor der Synchronisation alle Termine mit Teilnehmer aus ihrem Odoo-Kalender. Die Aktivierung der Kalender-Synchronisation führt dazu, dass Outlook Einladung für Termine mit Teilnehmer versendet.
:::

Als Mitarbeitenden öffnen Sie die _Kalender_ App und klicken auf _🔃 Outlook_. Sie werden zur Microsoft-Login-Seite umgeleitet. Loggen Sie sich mit ihrem Microsoft-Account ein und erlauben Sie den Zugriff von Odoo auf ihr Profil.

![](attachments/Kalender%20Microsoft%20Zugriff.png)

Anschliessend werden Sie zurück nach Odoo umgleitet und die Termine werden synchronisiert. Im Kalender wird die erfolgreiche Synchronisierung mit dieser Anzeige markiert:

![](attachments/Kalender%20Outlook%20Sync.png)

### Kalender-Synchronisation Zugriff-Tokens anzeigen

Für jeden Odoo-Benutzer, der die Kalender-Synchronisation einrichtet, speichert Odoo sog. Tokens ab. Zeigen Sie einen Benutzer via _Einstellungen > Benutzer und Unternehmen > Benutzer_ an und öffnen Sie den Tab _Kalender_. Hier sehen Sie die Tokens, die Odoo für die Benutzer speichert, um auf die Schnittstelle des Kalender-Anbieter zuzugreifen.

![](attachments/Kalender%20Benutzer%20Outlook%20Tokens.png)

### Google-Kalender-Synchronisation zurücksetzen

Rufen Sie die ihren Benutzer unter _Einstellungen > Benutzer und Unternehmen > Benutzer_ auf und zeigen Sie den Tab _Kalender_ an. Wählen Sie die Aktion _Account Zurücksetzen_
