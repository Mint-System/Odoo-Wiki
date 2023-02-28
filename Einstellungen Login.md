---
tags:
- HowTo
prev: ./einstellungen
---
# Einstellungen Login
![icons_odoo_settings](assets/icons_odoo_settings.png)

Odoo-Einstellungen zum Benutzer und Anmeldeverfahren.

## Konfiguration

### Interne Benutzer-Vorlage bearbeiten

Wenn Sie neue interne Benutzer erstellen, verwendet Odoo dazu die interne Benutzer-Vorlage. Navigieren Sie nach *Einstellungen > Benutzer und Unternehmen > Benutzer* und wählen Sie *Filter > Inaktive Benutzer*. Klicken Sie auf *Default User Template* und passen Sie die Vorlage gemäss ihren Anforderungen an.  

### Portal-Benutzer-Vorlage bearbeiten

Wenn sich neue Portal-Benutzer registrieren oder erstellt werden, verwendet Odoo dazu die Portal-Benutzer-Vorlage. Navigieren Sie nach *Einstellungen > Benutzer und Unternehmen > Benutzer* und wählen Sie *Filter > Inaktive Benutzer*. Klicken Sie auf *Portal User Template* und passen Sie die Vorlage gemäss ihren Anforderungen an.

## Benutzerverwaltung

### Benutzer anzeigen

Benutzer verwalten Sie unter *Einstellungen > Benutzer und Unternehmen > Benutzer*.

### Benutzertyp festlegen

Odoo unterscheidet zwischen internen und externen Benutzer. Den Benutzertyp legen Sie unter Einstellungen > Benutzer und Unternehmen > Benutzer* im Feld *Benutzertyp* fest:

* **Interner Benutzer**: Odoo-Benutzer des Unternehmens
* **Portal**: Portal-Benutzer mit erweiterten Rechten. Beispielsweise Kunden und Lieferanten.
* **Öffentlich**: Portal-Benutzer mit eingeschränkten Rechten. Beispielsweise Webshop-Kunden.

### Kundenkonto Einladungsverfahren festlegen

Für Kunden, Teilnehmer und Partner kann ein Odoo-Zugang eingerichtet werden. Unter *Einstellungen > Benutzer > Kundenkonto* hat man zwei Optionen:

* **Auf Einladung**: Benutzer werden explizit mit einer E-Mail eingeladen.
* **Kostenlose Anmeldung**: Benutzer können sich über die Odoo-Website selber anmelden und erhalten standardmässig einen Portal-Benutzer.

### Passwort zurücksetzen
Aufgabenträger: [Administrator](Rollen.md#Administrator)

Navigieren Sie nach *Einstellungen > Allgemeine Einstellungen > Benutzer* und klicken auf *Benutzer verwalten*. Wählen Sie den Benutzer, dessen Passwort Sie zurücksetzen möchten.
 
Wählen Sie *Aktion* und *Passwort ändern*. Geben Sie im Feld *Neues Passwort* das neue Passwort ein.

### Start-Aktion für Benutzer definieren

Wenn der Benutzer einloggt, kann eine Aktion ausgeführt werden. Diese Aktion legen Sie im Entwicklermodus unter *Einstellungen > Benutzer und Unternehmen > Benutzer > Benutzer auswählen > Tab Einstellungen* im Feld *Aktionen* fest.

::: warning
Einige Aktionen haben den gleichen Namen, testen Sie die Auswahl vorgängig mit ein- und ausloggen. Ändern Sie den Anzeigenamen der Aktionen nach Bedarf.
:::

![](assets/Einstellungen%20Login%20Start-Aktion.png)

## Portalzugriff

### Portal-Benutzer in internen Benutzer umwandeln

Wenn Benutzer sich über das Portal bzw. Login-Fenster registrieren wird ein Portal-Benutzer erstellt. Dieser Benutzer hat Zugriff auf die externen Dienste von Odoo. Wenn Sie diesem Benutzer interne Zugriffsrechte geben möchten, gehen Sie wie folgt vor.

Öffnen Sie die Benutzerliste via *Einstellungen > Allgemeine Einstellungen > Benutzer verwalten*. Entfernen Sie den Filter damit Portal-Benuzter sichtbar werden. Wählen Sie den Portal-Benutzer aus und Bearbeiten Sie diesen. Wechseln Sie den Benutzertyp und vergeben Sie die benötigten Benutzerrechte.

![](assets/Einstellungen%20Login%20Benutzertyp.png)

### Portalzugriff gewähren

Damit mehrere Konakte Zugriff auf Odoo haben, brauchen Sie einen Portal-Zugriff. Navigieren Sie nach *Kontakte* und wählen Sie in der Listen-Ansicht die Kontake aus. Wählen Sie *Aktion > Portalzugriff gewähren* und klicken für jeden Kontakt auf die *Im Portal*-Checkbox. Bestätigen Sie den Vorgang und jeder Benutzer erhält eine Einladung.

Die Einladung Sie wie folgt aus:

![](assets/Einstellungen%20Login%20Portal-Zugriff%20erhalten.png)

Hat sich der Benutzer mit der Mail registriert, muss er seinen Account verifizieren.

![](assets/Einstellungen%20Login%20Profilverifizierung.png)

### Portal Benutzerkonto anlegen

Falls Sie für das Portal noch keinen Zugang haben, können Sie über die Funktion *Benutzerkonto anlegen* ein Konto erstellen.

![Einkauf Portal Benutzerkonto anlegen](assets/Einstellungen%20Portal%20Benutzerkonto%20anlegen.png)

Benutzername und Passwort können gewählt werden.

![Einkauf Portal Benutzerkonto registrieren](assets/Einstellungen%20Portal%20Benutzerkonto%20registrieren.png)

## Zwei-Faktor-Authentisierung

### OTP-App installieren

Für die Zwei-FAktor-Authentisierung benötigen Sie eine OTP-App auf ihrem Smartphone. Installieren Sie abhängig von ihrem Betriebssystem eine entsprechende App:

iOS: [OTP Auth](https://apps.apple.com/ch/app/otp-auth/id659877384)\
Android: [2FA Authenticator (2FAS)](https://play.google.com/store/apps/details?id=com.twofasapp&hl=de_CH&gl=US)

### Zwei-Faktor-Authentisierung aktivieren

Sie können für Ihren Odoo-Benutzer jederzeit die Zwei-Faktor-Authentisierung einrichten. Klicken Sie dazu auf *Account > Mein Profil / Einstellungen* und im Tab *Account Sicherheit* wählen Sie *Aktiviere Zwei-Faktor-Authentifizierung*. Geben Sie das Passwort des Odoo-Account ein. Befolgen Sie die Anweisungen im Dialog.

![](assets/Einstellungen%20Login%20Zwei-Faktor-Authentisierung.png)

:::
Führen Sie diese Aktivierung auf dem Desktop. Odoo generiert für die Zwei-Faktor-Authentisierung eine QR-Code, den Sie mit dem Smartphone scannen müssen.
:::

### Einladung zur Zwei-Faktor-Authentisierung verschicken

Für jeden Benutzer können Sie eine Einladung zur Zwei-Faktor-Authentisierung verschicken. Markieren Sie dazu die Benutzer unter *Einstellungen > Benutzer und Unternehmen > Benutzer* und wählen Sie *Aktion > Einladung zur Verwendung der Zwei-Faktor-Authentifizierung*.

![](assets/Einstellungen%20Login%20Einladung%20zur%20Zwei-Faktor-Authentisierung%20verschicken.png)

### Zwei-Faktor-Authentisierung für einen Benutzer aktivieren

Sie können die Zwei-Faktor-Authentisierung auch für bestimmte Benutzer aktivieren. Navigieren Sie nach *Einstellungen > Benutzer und Unternehmen > Benutzer* und wählen Sie einen Benutzer aus. Anschliessen klicken Sie auf *Tab Account Sicherheit > Zwei-Faktor-Authentifizierung* und befolgen den Dialog.