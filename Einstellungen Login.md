---
tags:
- HowTo
---
[🔗 Einstellungen](Einstellungen.md)
# Einstellungen Login
![icons_odoo_settings](assets/icons_odoo_settings.png)

Odoo-Einstellungen zum Benutzer und Anmeldeverfahren.

## Kundenkonto Einladungsverfahren festlegen

für Kunden, Teilnehmer und Partner kann ein Odoo-Zugang eingerichtet werden. Unter *Einstellungen > Benutzer > Kundenkonto* hat man zwei Optionen:

* **Auf Einladung**: Benutzer werden explizit mit einer E-Mail eingeladen.
* **Kostenlose Anmeldung**: Benutzer können sich über die Odoo-Website selber anmelden und erhalten standardmässig einen Portal-Benutzer.

## Automatisches Anmelden mit OAuth

Wenn sie OAuth mit Google, Odoo.com oder einem anderen Anbieter verwenden, begegnen sie der Problematik, dass wenn sich ein Benutzer anmeldet, ein Odoo-Account mit den falschen Berechtigungen erstellt wird. Bestimmte OAuth-Anbieter erlauben, dass der Benutzer vorgängig in Odoo angelegt wird. Fall das nicht möglich ist und der OAuth-Provider nur für interne Benutzer verfügbar ist, können sie die Standardzugriffsrechte für zu Portal-Benutzer festlegen.

## Anmelden mit Google

Wählen sie im Login-Fenster die Option *Log in with Google*. Sie werden nun zur Google-Anmeldemaske umgeleitet. Melden sie sich mit dem Google-Acccount an und erlauben sie den Zugriff von Odoo. Sie werden nun zurückgeleitet.

Falls ihr Benutzer in Odoo noch nicht existiert hat, erscheint die folgende Meldung:

![Einstellungen Login Fehler](assets/Einstellungen%20Login%20Fehler.png)

Kontaktieren sie den/die [AdministratorIn](Rollen.md#Administrator%20In) und bitten sie um eine Freigabe. Wurde die Freigabe erstellt, loggen sie sich erneut ein.

## Portal-Benutzer in internen Benutzer umwandeln

Wenn Benutzer sich über das Portal bzw. Login-Fenster registrieren wird ein Portal-Benutzer erstellt. Dieser Benutzer hat Zugriff auf die externen Dienste von Odoo. Wenn sie diesem Benutzer interne Zugriffsrechte geben möchten, gehen sie wie folgt vor.

Öffnen sie die Benutzerliste via *Einstellungen > Allgemeine Einstellungen > Benutzer verwalten*. Entfernen sie den Filter damit Portal-Benuzter sichtbar werden. Wählen sie den Portal-Benutzer aus und Bearbeiten sie diesen. Wechseln sie den Benutzertyp und vergeben sie die benötigten Benutzerrechte.

![](assets/Einstellungen%20Login%20Benutzertyp.png)

## Portalzugriff gewähren

Damit mehrere Konakte Zugriff auf Odoo haben, brauchen sie einen Portal-Zugriff. Navigieren sie nach *Kontakte* und wählen sie in der Listen-Ansicht die Kontake aus. Wählen sie *Aktion > Portalzugriff gewähren* und klicken für jeden Kontakt auf die *Im Portal*-Checkbox. Bestätigen sie den Vorgang und jeder Benutzer erhält eine Einladung.

Die Einladung sie wie folgt aus:

![](assets/Einstellungen%20Login%20Portal-Zugriff%20erhalten.png)

Hat sich der Benutzer mit der Mail registriert, muss er seinen Account verifizieren.

![](assets/Einstellungen%20Login%20Profilverifizierung.png)