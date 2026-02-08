---
title: Einstellungen E-Mail
description: Odoo mit Plattformen von Dritten integrieren.
kind: howto
section: true
prev: ./settings
---

# Einstellungen E-Mail

![icons_odoo_settings](attachments/icons_odoo_settings.png)

{{ $frontmatter.description }}

## Konfiguration

### E-Mail-Domain festlegen

Gilt bis #Odoo16.

Navigieren Sie nach _Einstellungen > Dialog_ und aktivieren Sie die Option _Benutzerdefinierte E-Mail-Server_. Geben Sie im Feld _Alias-Domain_ die E-Mail-Domain ein.

Gilt ab #Odoo17.

Navigieren Sie nach _Einstellungen_ und klicken Sie bei _Unternehmen_ auf _Info aktualisieren_. Im Feld _E-Mail-Domain_ geben Sie ihre Domain ein, beispielsweise `example.com`. Odoo generiert die zum Versand benötigten Systemparameter.

### Catchall-Alias anpassen

Unter der Catchall-Mail-Adresse versendet Odoo Nachrichten. Auf diese Adresse können die Empfänger antworten und Odoo kann die eingegangenen Nachrichten verarbeiten.

Gilt bis #Odoo16.

Falls Sie die Adresse ändern möchten, öffnen Sie _Einstellungen > Technisch > Parameter > Systemparameter_ und passen den Wert für `mail.catchall.alias` an.

Angenommen Sie geben als Wert `reply` ein, so ist die resultierende Reply-Aresse `From: "FIRSTNAME LASTNAME" <reply@example.com>`.

Gilt ab #Odoo17.

Im Entwicklermodus navigieren Sie nach _Einstellungen > Allgemeine Einstellungen > Diskussion_ und öffnen Sie den Eintrag bei _Alias-Domain_. Im Feld _Catchall-Alias_ geben Sie den gewünschten Wert ein.

::: tip
Eine Liste von Mail-Provider und ob diese die _catchall_ und _no-reply_ E-Mail-Aliase erlauben:

- ❌ Infomaniak
- ❌ Outlook
- ❌ Gmail
- ✅ Proton
  :::

### Bounce-Alias anpassen

In jeder versendeten E-Mail wird im Header `Return-Path` die Mail-Adresse für Retouren mitgeteilt. Diese setzt sich aus dem Bounce-Alias und der Mail-Domain zusammen, beispielsweise `bounce@example.com`.

Gilt bis #Odoo16.

Falls Sie den Bounce-Alias ändern möchten, öffnen Sie _Einstellungen > Technisch > Parameter > Systemparameter_ und passen den Wert für `mail.bounce.alias` an.

Gilt ab #Odoo17.

Im Entwicklermodus navigieren Sie nach _Einstellungen > Allgemeine Einstellungen > Diskussion_ und öffnen Sie den Eintrag bei _Alias-Domain_. Im Feld _Zuzustellbarkeitsalias_ geben Sie den gewünschten Wert ein.

### Allgemeine Absender-Adresse festlegen

Wenn Odoo eine E-Mail versendet, wird im E-Mail eine Von- und Antwort-Adresse hinterlegt. In den E-Mail-Kopfzeilen sieht das so aus:

```txt
...
From: "FIRSTNAME LASTNAME" <firstname.lastname@example.com>
Reply-To: "My Company" <odoo@example.com>
...
```

Wenn Sie die Von-Adresse überschreiben möchten, öffnen Sie _Einstellungen > Technisch > Parameter > Systemparameter_ und erstellen einen Eintrag mit Schlüssel `mail.force.smtp.from` (bis #Odoo14 ) `mail.default.from` (ab #Odoo15 ) und Wert `name@example.com` als gewünschte E-Mail-Adresse. Angenommen Sie geben `erp@example.com` ein, sehen die E-Mail-Kopfzeilen folgendermassen aus:

```txt
...
From: "FIRSTNAME LASTNAME" <erp@example.com>
Reply-To: "My Company" <reply@example.com>
...
```

::: warning
Abhängig vom Mail-Provider darf die Absender-Adresse nicht von der Adresse des Postfachs abweichen und die sogenannten _Senden als_-Freigaben müssen explizit konfiguriert werden.
:::

## Empfang

### Eingehender Mail-Server konfigurieren

Damit Odoo Mails empfangen und verarbeiten kann, muss ein eingehender Mail-Server konfiguriert werden.

Unter _Einstellungen > Dialog > Externe E-Mail-Server_ aktivieren Sie das Feature, wenn noch nicht erledigt und wählen _Eingehender Mail-Server_. Klicken Sie auf _Neu_ um eine Verbindung zu einem Mail-Account einzurichten. Dazu ein Beispiel mit Infomaniak:

- **Beschreibung**: Infomaniak Incoming
- **Servertyp**: IMAP Server
- **Servername**: `mail.infomaniak.com`
- **Port**: 993
- **SSL/TLS**: Option aktivieren
- **Benutzername**: Mail-Adresse des Odoo Postfach
- **Passwort**: Passwort des Odoo Postfach

### Eingehender Mail-Server Office 365 konfigurieren

::: tip
Wir empfehlen [Infomaniak kSuite](https://www.infomaniak.com/de/ksuite?utm_term=67ff9acbaabca) anstatt Office 365 zu verwenden.
:::

Wenn Sie [Eingehender Mail-Server konfigurieren](#Eingehender%20Mail-Server%20konfigurieren) und Office 365 verwenden möchten, wählen Sie diese Parameter als Verbindungsoptionen:

- **Beschreibung**: Office 365 Incoming
- **Outlook**: Option markieren
- **Benutzername**: Mail-Adresse des Odoo Postfach

Und anschliessend die Aktion [Outlook OAuth-Verbindung einrichten](Settings%20OAuth.md#Outlook%20OAuth-Verbindung%20einrichten) ausführen.

::: warning
Das verwendete Outlook-Postfach darf keine Shared Mailbox sein. Der Benutzer und Postfach müssen lizenziert sein.
:::

## Versand

### Ausgehender Mail-Server konfigurieren

Damit Odoo Mail verschicken kann, muss ein ausgehender Mail-Server konfiguriert werden.

Unter _Einstellungen > Dialog > Externe E-Mail-Server_ aktivieren Sie das Feature, wenn noch nicht erledigt und wählen _Ausgehender Mail-Server_. Klicken Sie auf _Neu_ um eine Verbindung zu einem Mail-Account einzurichten. Dazu ein Beispiel für Infomaniak:

- **Beschreibung**: Infomaniak Outgoing
- **SMTP Server**: `mail.infomaniak.com`
- **SMTP Port**: 587
- **Verbindungssicherheit**: TLS
- **Benutzername**: Mail-Adresse von Odoo Postfach
- **Passwort**: Passwort des Odoo Postfach
- **Von-Filter**: Mail-Adresse von Odoo Postfach oder Mail-Domain

::: tip
Für Vorgänge wie das Zurücksetzen eines Passworts oder Versand einer Einladung, versendet Odoo die E-Mail im Namen des Unternehmens und verwendet dazu die E-Mail-Adresse aus den Unternehmenseinstellungen.
:::

### Ausgehender Mail-Server Office 365 konfigurieren

::: tip
Wir empfehlen [Infomaniak kSuite](https://www.infomaniak.com/de/ksuite?utm_term=67ff9acbaabca) anstatt Office 365 zu verwenden.
:::

Wenn Sie [Ausgehender Mail-Server konfigurieren](#Ausgehender%20Mail-Server%20konfigurieren) und Office 365 verwenden möchten, wählen Sie diese Parameter als Verbindungsoptionen:

- **Beschreibung**: Office 365 Outgoing
- **Outlook**: Option markieren
- **Benutzername**: Mail-Adresse des Odoo Postfach

Und anschliessend die Aktion [Outlook OAuth-Verbindung einrichten](Settings%20OAuth.md#Outlook%20OAuth-Verbindung%20einrichten) ausführen.

::: warning
Das verwendete Outlook-Postfach darf keine Shared Mailbox sein. Der Benutzer und Postfach müssen lizenziert sein.
:::

::: warning
Die Relay-Funktion von Odoo funktioniert mit Office 365 nicht. Sie müssen eine feste Absender-Adresse gemäss [Absender-Adresse überschreiben](#Absender-Adresse%20überschreiben) wählen.
:::

### Ausgehender Mail-Server Mailgun konfigurieren

Wenn Sie [Ausgehender Mail-Server konfigurieren](#Ausgehender%20Mail-Server%20konfigurieren) und Mailgun verwenden möchten, wählen Sie diese Parameter als Verbindungsoptionen:

- **Beschreibung**: Mailgun Outgoing
- **Von-Filterung**: Leer lassen oder Absender-Adresse mit `mail@example.com` fixieren.
- **Authentifizierung mit**: Benutzername
- **Verschlüsselung der Verbindung**: TLS (STARTTLS)
- **SMTP-Server**: smtp.eu.mailgun.org
- **SMTP-Port**: 587
- **Benutzername**: Gemäss _SMTP credentials_ aus Mailgun
- **Passwort**: Gemäss _SMTP credentials_ aus Mailgun

## Alias

### E-Mail-Aliasse anzeigen

Navigieren Sie nach _Einstellungen > Technisch > E-Mail > Aliase_. Hier sehen Sie alle die von Odoo registrierten Aliase und verknüpften Dokumente.

::: tip
Der Empfänger der eingehenden E-Mails werden mit der Liste der Aliase verglichen. Wenn das E-Mail keine Antwort auf einen bestehenden Chatter-Thread ist, wird die Aktion des registrierten Aliases ausgelöst.
:::

### E-Mail-Alias erstellen

Sie können für eine Ressource, beispielsweise Kundendienst Team, mehrere Alias haben. Navigieren Sie nach _Einstellungen > Technisch > E-Mail > Aliase_ und zeigen Sie einen bestehenden Alias an. Wählen Sie _Aktionen > Duplizieren_ und passen Sie die Adresse des Alias an.

### E-Mail Alias im Postfach erstellen

Damit der Odoo E-Mail-Alias funktioniert müssen Sie diese im E-Mail-Postfach ebenfalls erstellen. Dazu ein Beispiel vom Mail-Provider Infomaniak:

![](attachments/Settings%20E-Mail%20Aliasse.png)

::: tip
Wenn Subaddressing "+" aktiviert ist, wird eine E-Mail mit einem "+" nach dem Alias, beispielsweise <project+xy@mint-system.ch> aufgrund des Mail-Alias <project@mint-system.ch>, ebenfalls zugestellt.
:::

::: warning
Der Wildcard-E-Mail-Alias _catchall_ wird nicht von allen Mail-Provider unterstützt.
:::

## Erweitert

### Aktion für eingehende nicht zuordbare E-Mails konfigurieren

Navigieren Sie nach _Einstellungen > Technisch > Eingehender Mail-Server_ und zeigen Sie einen aktiven Eintrag an. Im Feld _Einen neuen Datensatz erzeugen_ können Sie ein Datenmodell auswählen. Wenn Odoo eine E-Mail verarbeitet und dieses nicht einem laufenden Dialog zugeordnet werden kann, erstellt Odoo einen Datensatz im ausgewählten Datenmodell.

::: tip
Als ausgewähltes Datenmodell empfehlen wir _Kanal_ oder _Notiz_.
:::

### Antwort-Adresse mit Konfiguration von E-Mail-Vorlage überschreiben

Damit die Antwort-Adresse aus der Konfiguration der E-Mail-Vorlage übernommen wird, muss der Eintrag `mail.catchall.domain` unter _Einstellungen > Technisch > Parameter > Systemparameter_ entfernt werden.

In der E-Mail-Vorlage muss im Tab _E-Mail-Konfiguration_ das Feld _Antwort an_ gesetzt sein.

![](attachments/Einstellungen%20E-Mail%20Konfiguration.png)

### E-Mail nach Versand nicht löschen

Damit E-Mail nach dem Versand nicht aus der Odoo-Datenbank und dem Postfach gelöscht wird, können Sie in den E-Mail-Vorlagen unter _Einstellungen > Technisch > E-Mail > E-Mail-Vorlagen > Vorlage auswählen > Tab Einstellungen_ die Option _Autom. Löschen_ deaktivieren.

## Testen

### DKIM-Signatur verifizieren

Öffnen Sie die Webapp <https://www.appmaildev.com/en/dkim/> und klicken Sie auf _Next Step_. Kopieren Sie die generierte E-Mail-Adresse und erstellen Sie in Odoo einen neuen Kontakt _DKIM_. Fügen Sie die E-Mail-Adresse dem Kontakt hinzu und verschicken Sie über den Chatter eine Nachricht. Kehren Sie zur Webapp zurück und prüfen Sie den generierten Bericht.

## Troubleshooting

### Bounce-Nachricht erhalten

**Problem**

Sie haben eine E-Mail an das Odoo Postfach geschickt und diese Antwort erhalten:

```
Hallo,

Die E-Mail senden an Odoo Demo <odoo@example.com> kann nicht verarbeitet werden. Diese Adresse wird verwendet, um Antworten zu sammeln und sollte nicht zur direkten Kontaktaufnahme verwendet werden example.com.

Bitte kontaktieren Sie uns stattdessen unter Verwendung von contact@example.com

Grüsse,

Das example.com Team.
```

**Ursache**

Odoo bounced die E-Mail, wenn diese direkt an den Catchall- oder den Bounce-Alias geschickt wird.

**Lösung**

Sie müssen den [Catchall-Alias anpassen](#Catchall-Alias%20anpassen) oder den [Bounce-Alias anpassen](#Bounce-Alias%20anpassen), damit die E-Mail nicht gebounced wird.

### Weitergeleitetes Mail via Exchange wird von Odoo nicht verarbeitet

::: tip
Wir empfehlen [Infomaniak kSuite](https://www.infomaniak.com/de/ksuite?utm_term=67ff9acbaabca) anstatt Office 365 zu verwenden.
:::

**Problem**

Sie haben eine E-Mail innerhalb der Exchange-Domäne an einen Odoo Mail-Alias weitergeleitet. Der Alias wird von Odoo nicht erkannt und das Mail wird nicht verarbeitet.

**Ursache**

Microsoft Exchange Alias-Adressen werden bei internen Absendern aufgelöst und im Header wird das `to:`-Attribut überschrieben.

**Lösung**

Verwenden Sie als Odoo-Postfach einen externen Mail-Provider und konfigurieren Sie die Mail-Domain als _Internal Relay_.
