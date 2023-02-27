---
tags:
- HowTo
prev: ./
---
# Kalender
![icons_odoo_calendar](assets/icons_odoo_calendar.png)

Termine Team- und Anwendungs-übergreifend organisieren.

## Konfiguration

### Outlook-Kalender-Synchronisation aktivieren

Erstellen oder Aktualisieren Sie die OAuth-App, welche Sie der Anleitung [Odoo als OAuth-Client auf Azure registrieren](Einstellungen%20OAuth.md#Odoo%20als%20OAuth-Client%20auf%20Azure%20registrieren) erstellt haben. Fügen Sie die  *Redirect URI* `https://odoo.example.com/microsoft_account/authentication` hinzu.

Navigieren Sie nach *Einstellungen > Allgemeine Einstellungen > Integration*. Aktivieren Sie die Option *Outlook-Kalender*. Füllen Sie die Felder *Client ID* und *Client Secret* mit den Werten aus der Registration der OAuth-app aus.

## Verwendung

### Terminserie erstellen

Auf jedem Odoo-Eintrag können Sie als Aktivität einen Termin erstellen. Dieser Termin kann auch eine Serie sein. Hier ein Beispiel wie man auf einem Kontakt-Eintrag eine Terminserie erstellt:

![Kalender Terminserie](assets/Kalender%20Terminserie.gif)

## Benachrichtigungen

### Versand Einladungen verhindern

Standardmässig versendet Odoo beim Hinzufügen von Teilnehmer an einen Termin an jeden Teilnehmer eine Einladung. Dieses Verhalten kann mit einer Einstellung in den Systemparameter verhindert werden.

Öffnen Sie *Einstellungen > Technisch > Parameter > Systemparameter* und erstellen Sie einen Eintrag mit Schlüssel `calendar.block_mail` und Wert `True` an.

::: warning
Werden Termine beispielsweise mit dem Google-Kalender synchronisiert, ist mit dieser Einstellung nicht ausgeschlossen, dass Google eine Einladungsmail verschickt.
:::

## Verknüpfung

### Google-Kalender-Synchronisation einrichten

Wurde die Google-Kalender-Synchronisation in den Einstellungen aktiviert, können Sie ihren *Kalender* aufrufen und auf *Synchronsieren mit Google* klicken. Bestätigen Sie den Dialog mit *Ok*.

![](assets/Calendar%20Redirect.png)

Loggen Sie sich mit ihrem Google-Konto ein. Falls nun eine Warnung *Google hasn't verified this app* erscheint klicken Sie auf *Advanced* und anschliessen auf *Go to example.com (unsafe)*.

![](assets/Calendar%20Unverified.png)

Erlbauen Sie den Zugriff auf ihren Kalender. Anschliessend werden Sie zu Odoo zurückgeleitet.

### Outlook-Kalender-Synchronisation einrichten

Wenn Sie die [Outlook-Kalender-Synchronisation aktivieren](#Outlook-Kalender-Synchronisation%20aktivieren), können Mitarbeitende den Odoo Kalender mit dem Outlook Kalender synchronsieren.

Als Mitarbeitenden öffnen Sie die *Kalender* App und klicken auf *🔃 Outlook*. Sie werden zur Microsoft-Login-Seite umgeleitet. Loggen Sie sich mit ihrem Microsoft-Account ein und erlauben Sie den Zugriff von Odoo auf ihr Profil.

![](assets/Kalender%20Microsoft%20Zugriff.png)