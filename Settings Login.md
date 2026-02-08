---
title: Einstellungen Login
description: Odoo-Einstellungen zum Benutzer und Anmeldeverfahren.
kind: howto
section: true
prev: ./settings
---

# Einstellungen Login

![icons_odoo_settings](attachments/icons_odoo_settings.png)

{{ $frontmatter.description }}

## Konfiguration

### Interne Benutzer-Vorlage bearbeiten

Wenn Sie neue interne Benutzer erstellen, verwendet Odoo dazu die interne Benutzer-Vorlage. Navigieren Sie nach _Einstellungen > Benutzer und Unternehmen > Benutzer_ und wählen Sie _Filter > Inaktive Benutzer_. Klicken Sie auf _Default User Template_ und passen Sie die Vorlage gemäss ihren Anforderungen an.

### Portal-Benutzer-Vorlage bearbeiten

Wenn sich neue Portal-Benutzer registrieren oder erstellt werden, verwendet Odoo dazu die Portal-Benutzer-Vorlage. Navigieren Sie nach _Einstellungen > Benutzer und Unternehmen > Benutzer_ und wählen Sie _Filter > Inaktive Benutzer_. Klicken Sie auf _Portal User Template_ und passen Sie die Vorlage gemäss ihren Anforderungen an.

## Benutzerverwaltung

### Benutzer anzeigen

Benutzer verwalten Sie unter _Einstellungen > Benutzer und Unternehmen > Benutzer_.

### Benutzer erstellen

Navigieren Sie nach _Einstellungen > Benutzer und Unternehmen > Benutzer_ und wählen Sie _Neu_. Geben Sie einen Namen und eine E-Mail-Adresse ein. Legen Sie Berechtigungen fest und speichern Sie den Eintrag. Odoo verschickt automatisch eine Einladung an die E-Mail-Adresse mit der Aufforderung das Passwort festzulegen.

::: tip
Wenn Sie die Berechtigungen eines bestehenden Benutzers übernehmen wollen, können Sie den Benutzer duplizieren.
:::

::: warning
Wenn ein Benutzerwechsel stattfindet, sollten Sie nicht den Namen eines bestehenden Benutzer anpassen. Stattdessen duplizieren Sie den bestehenden Benutzer, passen Sie den Namen auf dem neuen Benutzer an und archivieren Sie den alten Benutzer.
:::

### Benutzername ändern

Navigieren Sie nach _Einstellungen > Benutzer und Unternehmen > Benutzer_ und wählen Sie einen bestehenden Benutzer aus. Im Feld _E-Mail-Adresse_ können Sie das Login ändern.

::: warning
Benutzer für welche das Benutzernamen geändert wurde, werden von Odoo augeloggt und müssen sich dem neuen Benutzernamen einloggen.
:::

### Benutzer entfernen

Wenn Sie Benutzer entfernen möchten, müssen Sie diesen archivieren. Navigieren Sie nach _Einstellungen > Benutzer und Unternehmen > Benutzer_ und wählen Sie den zu entfernden Benutzer aus. Kicken Sie auf _Aktionen > Archiv_.

::: tip
Der Benutzer wird mit dieser Aktion nicht gelöscht, sondern nur ausgeblendet.
:::

### Benutzertyp festlegen

Odoo unterscheidet zwischen internen und externen Benutzer. Den Benutzertyp legen Sie unter Einstellungen > Benutzer und Unternehmen > Benutzer* im Feld *Benutzertyp\* fest:

- **Interner Benutzer**: Odoo-Benutzer des Unternehmens
- **Portal**: Portal-Benutzer mit erweiterten Rechten. Beispielsweise Kunden und Lieferanten.
- **Öffentlich**: Portal-Benutzer mit eingeschränkten Rechten. Beispielsweise Webshop-Kunden.

### Kundenkonto Einladungsverfahren festlegen

Für Kunden, Teilnehmer und Partner kann ein Odoo-Zugang eingerichtet werden. Unter _Einstellungen > Benutzer > Kundenkonto_ hat man zwei Optionen:

- **Auf Einladung**: Benutzer werden explizit mit einer E-Mail eingeladen.
- **Kostenlose Anmeldung**: Benutzer können sich über die Odoo-Website selber anmelden und erhalten standardmässig einen Portal-Benutzer.

### Passwort ändern

Navigieren Sie nach _Einstellungen > Allgemeine Einstellungen > Benutzer_ und klicken auf _Benutzer verwalten_. Wählen Sie den Benutzer, dessen Passwort Sie zurücksetzen möchten.

Wählen Sie _Aktion > Passwort ändern_. Geben Sie im Feld _Neues Passwort_ das neue Passwort ein und bestätigen Sie den Dialog.

::: warning
Die Bentuzer für welche das Passwort geändert wurde, werden von Odoo ausgeloggt und müssen sich mit dem neuen Passwort einloggen.
:::

### Passwort für mehrere Benutzer ändern

Navigieren Sie nach _Einstellungen > Allgemeine Einstellungen > Benutzer_ und markieren Sie alle Benutzer, die ein neues Passwort erhalten sollen. Klicken Sie auf _Aktionen > Passwort ändern_. Im Neuen Dialog können Sie in der Spalte _Neues Passwort_, die neuen Passwörter eingeben. Bestätigen Sie den Vorgang mit _Passwort ändern_.

::: tip
Teilen Sie den Benutzer das Passwort als Link mit. Sie können einen Passwort-Link mit <https://kpaste.infomaniak.com/> generieren.
:::

### Start-Aktion für Benutzer definieren

Wenn der Benutzer einloggt, kann eine Aktion ausgeführt werden. Diese Aktion legen Sie im Entwicklermodus unter _Einstellungen > Benutzer und Unternehmen > Benutzer > Benutzer auswählen > Tab Einstellungen_ im Feld _Aktionen_ fest.

::: warning
Einige Aktionen haben den gleichen Namen, testen Sie die Auswahl vorgängig mit ein- und ausloggen. Ändern Sie den Anzeigenamen der Aktionen nach Bedarf.
:::

![](attachments/Einstellungen%20Login%20Start-Aktion.png)

## Portalzugriff

### Portal-Benutzer anzeigen

Portal-Benutzer verwalten Sie unter _Einstellungen > Benutzer und Unternehmen > Benutzer_. Entfernen Sie den Filter _Interner Nutzer_ und wählen Sie den Filter _Portal Users_. Nun werden alle Portal-Benutzer angezeigt.

### Portal-Benutzer in internen Benutzer umwandeln

Wenn Benutzer sich über das Portal bzw. Login-Fenster registrieren wird ein Portal-Benutzer erstellt. Dieser Benutzer hat Zugriff auf die externen Dienste von Odoo. Wenn Sie diesem Benutzer interne Zugriffsrechte geben möchten, gehen Sie wie folgt vor.

Öffnen Sie die Benutzerliste via _Einstellungen > Allgemeine Einstellungen > Benutzer verwalten_. Entfernen Sie den Filter damit Portal-Benuzter sichtbar werden. Wählen Sie den Portal-Benutzer aus und Bearbeiten Sie diesen. Wechseln Sie den Benutzertyp und vergeben Sie die benötigten Benutzerrechte.

![](attachments/Einstellungen%20Login%20Benutzertyp.png)

### Portalzugriff gewähren

Damit mehrere Kontakte Zugriff auf Odoo haben, brauchen Sie einen Portal-Zugriff. Navigieren Sie nach _Kontakte_ und wählen Sie in der Listen-Ansicht die Kontakte aus. Wählen Sie _Aktionen > Portalzugriff gewähren_ und klicken für jeden Kontakt auf die _Im Portal_-Checkbox. Bestätigen Sie den Vorgang und jeder Benutzer erhält eine Einladung.

Die Einladung Sie wie folgt aus:

![](attachments/Einstellungen%20Login%20Portal-Zugriff%20erhalten.png)

Hat sich der Benutzer mit der Mail registriert, muss er seinen Account verifizieren.

![](attachments/Einstellungen%20Login%20Profilverifizierung.png)

### Portal-Benutzerkonto anlegen

Falls Sie für das Portal noch keinen Zugang haben, können Sie über die Funktion _Benutzerkonto anlegen_ ein Konto erstellen.

![Einkauf Portal Benutzerkonto anlegen](attachments/Einstellungen%20Portal%20Benutzerkonto%20anlegen.png)

Benutzername und Passwort können gewählt werden.

![Einkauf Portal Benutzerkonto registrieren](attachments/Einstellungen%20Portal%20Benutzerkonto%20registrieren.png)

## Zwei-Faktor-Authentisierung

### Einladung zur 2-Faktor-Authentisierung verschicken

Für jeden Benutzer können Sie eine Einladung zur Zwei-Faktor-Authentisierung verschicken. Markieren Sie dazu die Benutzer unter _Einstellungen > Benutzer und Unternehmen > Benutzer_ und wählen Sie _Aktionen > Einladung zur Verwendung der Zwei-Faktor-Authentifizierung_.

![](attachments/Einstellungen%20Login%20Einladung%20zur%20Zwei-Faktor-Authentisierung%20verschicken.png)

### 2-Faktor-Authentisierung für einen Benutzer aktivieren

Sie können die Zwei-Faktor-Authentisierung auch für bestimmte Benutzer aktivieren. Navigieren Sie nach _Einstellungen > Benutzer und Unternehmen > Benutzer_ und wählen Sie einen Benutzer aus. Anschliessen klicken Sie auf _Tab Account Sicherheit > Zwei-Faktor-Authentifizierung_ und befolgen den Dialog.

### OTP-App installieren

Für die Zwei-FAktor-Authentisierung benötigen Sie eine OTP-App auf ihrem Smartphone. Installieren Sie abhängig von ihrem Betriebssystem eine entsprechende App:

iOS: [OTP Auth](https://apps.apple.com/ch/app/otp-auth/id659877384)\
Android: [Aegis Authenticator](https://getaegis.app/)

### 2-Faktor-Authentisierung aktivieren

Sie können für Ihren Odoo-Benutzer jederzeit die Zwei-Faktor-Authentisierung einrichten. Klicken Sie dazu auf _Account > Mein Profil / Einstellungen_ und im Tab _Account Sicherheit_ wählen Sie _Aktiviere Zwei-Faktor-Authentifizierung_. Geben Sie das Passwort des Odoo-Account ein. Befolgen Sie die Anweisungen im Dialog.

::: warning
Führen Sie diese Aktivierung auf dem Desktop durch. Odoo generiert für die Zwei-Faktor-Authentisierung eine QR-Code, den Sie mit dem Smartphone scannen müssen.
:::

::: tip
Sie können das 2-Faktor-Geheimnis zur Generierung des TOTP-Codes exportieren. Klicken Sie auf _Scannen klappt nicht?_ und speichern Sie das Gehemeinis in ihrere TOTP-App.
:::

### 2-Faktor-Authentisierung von Einladung aktivieren

WEn Sie eine Einladung zur Aktivierung der 2-Faktor-Authentisierung erhalten haben, dann klicken Sie auf den Link _Meine 2-Faktor-Authentifizierung aktivieren_. Sie werden entweder in das Odoo Backend oder Portal weitergeleitet. Im Backend können Sie gemäss [2-Faktor-Authentisierung aktivieren](#2-Faktor-Authentisierung%20aktivieren) vorgehen.

Im Odoo Portal loggin sich sich mit ihrem Benutzer ein. Anschliessend klicken Sie auf _Enable two-factor authentication_. Geben Sie nochmals das Passwort zu ihrem Odoo Account ein. Befolgen Sie die Anweisungen im Dialog.
