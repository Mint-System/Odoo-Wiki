---
tags:
- HowTo
prev: ./einstellungen
---
# Einstellungen E-Mail
![icons_odoo_settings](assets/icons_odoo_settings.png)

Odoo mit Plattformen von Dritten integrieren.

## Ausgehender Mail-Server konfigurieren

Damit Odoo Mail verschicken kann, muss ein ausgehender Mail-Server konfiguriert werden.

Unter *Einstellungen > Diskussion > Externe E-Mail-Server* aktivieren Sie das Feature, wenn noch nicht erledigt und wählen *Ausgehender Mail-Server*. Klicken Sie auf *Anlegen* um eine Verbindung zu einem Mail-Account einzurichten.

::: tip
Für Vorgänge wie das Zurücksetzen eines Passworts oder Versand einer Einladung, versendet Odoo die E-Mail im Namen des Unternehmens und verwendet dazu die E-Mail-Adresse aus den Unternehmenseinstellungen.
:::

## Ausgehender Mail-Server Office 365 konfigurieren

Wenn Sie [Ausgehender Mail-Server konfigurieren](#Ausgehender%20Mail-Server%20konfigurieren) und Office 365 verwenden möchten, wählen Sie diese Parameter als Verbindungsoptionen (bis Odoo 14):

* **Beschreibung**: Office 365 Outgoing
* **SMTP Server**: `smtp.outlook.com`
* **SMTP Port**: 587
* **Verbindungssicherheit**: TLS
* **Benutzername**: Mail-Adresse des Odoo Postfach
* **Passwort**: Passwort des Odoo Postfach

Ab Odoo 15 müssen Sie lediglich diese Parameter wählen:

* **Beschreibung**: Office 365 Outgoing
* **Outlook**: Option markieren
* **Benutzername**: Mail-Adresse des Odoo Postfach

Und anschliessen den E-Mail-Benutzer gemäss Hinweis authentisieren.

::: warning
Die Relay-Funktion von Odoo funktioniert mit Office 365 nicht. Sie müssen eine feste Absender-Adresse gemäss [Absender-Adresse überschreiben](#Absender-Adresse%20überschreiben) wählen.
:::

## Eingehender Mail-Server konfigurieren
Aufgabenträger: [Administrator](Rollen.md#Administrator)

Damit Odoo Mails empfanen und verarbeiten kann, muss ein eingehender Mail-Server konfiguriert werden.

Unter *Einstellungen > Diskussion > Externe E-Mail-Server* aktivieren Sie das Feature, wenn noch nicht erledigt und wählen *Eingehender Mail-Server*. Klicken Sie auf *Anlegen* um eine Verbindung zu einem Mail-Account einzurichten.

## Eingehender Mail-Server Office 365 konfigurieren

Wenn Sie [Eingehender Mail-Server konfigurieren](#Eingehender%20Mail-Server%20konfigurieren) und Office 365 verwenden möchten, wählen Sie diese Parameter als Verbindungsoptionen (bis Odoo 14):

* **Beschreibung**: Office 365 Incoming
* **Servertyp**: IMAP Server
* **Servername**: `imap.outlook.com`
* **Port**: 587
* **SSL/TLS**: Option markieren
* **Benutzername**: Mail-Adresse des Odoo Postfach
* **Passwort**: Passwort des Odoo Postfach

Ab Odoo 15 müssen Sie lediglich diese Parameter wählen:

* **Beschreibung**: Office 365 Outgoing
* **Outlook**: Option markieren
* **Benutzername**: Mail-Adresse des Odoo Postfach

Und anschliessen den E-Mail-Benutzer gemäss Hinweis authentisieren.

## Catchall-Alias anpassen

Unter der Catchall-Mail-Adresse versendet Odoo Nachrichten. Auf diese Adresse können die Empfänger antworten und Odoo kann die eingegangenen Nachrichten verarbeiten.

Falls Sie die Adresse ändern möchten, öffnen Sie *Einstellungen > Technisch > Parameter > Systemparameter* und passen den Wert für `mail.catchall.alias` an.

Angenommen Sie geben als Wert `erp` ein, so ist die resultierende Absender-Aresse `From: "FIRSTNAME LASTNAME" <erp@example.com>`.

::: tip
Bestimmte Mail-Hoster erlauben keine Mail-Aliase für *catchall* und *no-reply*.
:::

## Antwort-Adresse überschreiben

Wenn Odoo eine E-Mail versendet, wird im E-Mail eine Von- und Antwort-Adresse hinterlegt. In den E-Mail-Kopfzeilen sieht das so aus:

```txt
From: "FIRSTNAME LASTNAME" <firstname.lastname@example.com>
Reply-To: "My Company" <catchall@example.com>
```

Wenn Sie die Von-Adresse überschreiben möchten, öffnen Sie *Einstellungen > Technisch > Parameter > Systemparameter* und erstellen einen Eintrag mit Schlüssel `mail.force.smtp.from` (bis Odoo 14) `mail.default.from` (ab Odoo 15) und Wert `name@example.com` als gewünschte E-Mail-Adresse. Angenommen Sie geben `erp@example.com` ein, sehen die E-Mail-Kopfzeilen folgendermassen aus:

```txt
From: "FIRSTNAME LASTNAME" <erp@example.com>
Reply-To: "My Company" <catchall@example.com>
```

## Antwort-Adresse mit Konfiguration von E-Mail-Vorlage überschreiben

Damit die Antwort-Adresse aud der Konfiguration der Mail-Vorlage übernommen wird, muss 
der Systemparameter `mail.catchall.domain` entfernt werden.


