---
tags:
- HowTo
prev: ./einstellungen
---
# Einstellungen Login
![icons_odoo_settings](assets/icons_odoo_settings.png)

Odoo-Einstellungen zum Benutzer und Anmeldeverfahren.

## Erweiterungen

| Erweiterung                                                           | Beschreibung                                      |
| --------------------------------------------------------------------- | ------------------------------------------------- |
| [Authentication OpenID Connect](Authentication%20OpenID%20Connect.md) | Login mit OpenID Connect Provider.                |
| [Mail Service Users](Mail%20Service%20Users.md)                       | Service-Benutzer von Lizenzvertrag ausschliessen. |

## Benutzer anzeigen

Benutzer verwalten Sie unter *Einstellungen > Benutzer und Unternehmen > Benutzer.*

## Kundenkonto Einladungsverfahren festlegen

für Kunden, Teilnehmer und Partner kann ein Odoo-Zugang eingerichtet werden. Unter *Einstellungen > Benutzer > Kundenkonto* hat man zwei Optionen:

* **Auf Einladung**: Benutzer werden explizit mit einer E-Mail eingeladen.
* **Kostenlose Anmeldung**: Benutzer können sich über die Odoo-Website selber anmelden und erhalten standardmässig einen Portal-Benutzer.

## Automatisches Anmelden mit OAuth

Wenn Sie OAuth mit Google, Odoo.com oder einem anderen Anbieter verwenden, begegnen Sie der Problematik, dass wenn sich ein Benutzer anmeldet, ein Odoo-Account mit den falschen Berechtigungen erstellt wird. Bestimmte OAuth-Anbieter erlauben, dass der Benutzer vorgängig in Odoo angelegt wird. Fall das nicht möglich ist und der OAuth-Provider nur für interne Benutzer verfügbar ist, können Sie die Standardzugriffsrechte für zu Portal-Benutzer festlegen.

## Anmelden mit Google

Wählen Sie im Login-Fenster die Option *Log in with Google*. Sie werden nun zur Google-Anmeldemaske umgeleitet. Melden Sie sich mit dem Google-Acccount an und erlauben Sie den Zugriff von Odoo. Sie werden nun zurückgeleitet.

Falls ihr Benutzer in Odoo noch nicht existiert hat, erscheint die folgende Meldung:

![Einstellungen Login Fehler](assets/Einstellungen%20Login%20Fehler.png)

Kontaktieren Sie den/die [AdministratorIn](Rollen.md#Administrator%20In) und bitten Sie um eine Freigabe. Wurde die Freigabe erstellt, loggen Sie sich erneut ein.

## OAuth Benutzername festlegen

Wurde ein OAuth Provider konfiguriert, kann jedem Odoo Benutzer ein bestimmer OAuth Benutzername hinterlegt werden. Führen Sie diese Aktionen aus *Einstellungen > Benutzer und Unternehmen > Benutzer > Benutzer wählen > Tab Oauth öffnen*. Im Feld *OAuth User ID* können Sie den Benutzernamen für das Login festlegen.

![](assets/Integration%20OAuth%20Benutzername.png)

## Portal-Benutzer in internen Benutzer umwandeln

Wenn Benutzer sich über das Portal bzw. Login-Fenster registrieren wird ein Portal-Benutzer erstellt. Dieser Benutzer hat Zugriff auf die externen Dienste von Odoo. Wenn Sie diesem Benutzer interne Zugriffsrechte geben möchten, gehen Sie wie folgt vor.

Öffnen Sie die Benutzerliste via *Einstellungen > Allgemeine Einstellungen > Benutzer verwalten*. Entfernen Sie den Filter damit Portal-Benuzter sichtbar werden. Wählen Sie den Portal-Benutzer aus und Bearbeiten Sie diesen. Wechseln Sie den Benutzertyp und vergeben Sie die benötigten Benutzerrechte.

![](assets/Einstellungen%20Login%20Benutzertyp.png)

## Portalzugriff gewähren

Damit mehrere Konakte Zugriff auf Odoo haben, brauchen Sie einen Portal-Zugriff. Navigieren Sie nach *Kontakte* und wählen Sie in der Listen-Ansicht die Kontake aus. Wählen Sie *Aktion > Portalzugriff gewähren* und klicken für jeden Kontakt auf die *Im Portal*-Checkbox. Bestätigen Sie den Vorgang und jeder Benutzer erhält eine Einladung.

Die Einladung Sie wie folgt aus:

![](assets/Einstellungen%20Login%20Portal-Zugriff%20erhalten.png)

Hat sich der Benutzer mit der Mail registriert, muss er seinen Account verifizieren.

![](assets/Einstellungen%20Login%20Profilverifizierung.png)

## Portal Benutzerkonto anlegen

Falls Sie für das Portal noch keinen Zugang haben, können Sie über die Funktion *Benutzerkonto anlegen* ein Konto erstellen.

![Einkauf Portal Benutzerkonto anlegen](assets/Einstellungen%20Portal%20Benutzerkonto%20anlegen.png)

Benutzername und Passwort können gewählt werden.

![Einkauf Portal Benutzerkonto registrieren](assets/Einstellungen%20Portal%20Benutzerkonto%20registrieren.png)

## Geplante Aktion "Abteilungsgruppen synchronisieren" erstellen

Diese Aktion erstellt eine Berechtigungsgruppe für jede Abteilungsgruppe und synchronisiert die Benutzer der Abteilungsmitglieder.

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Abteilungsgruppen synchronisieren`\
Modell: `ir.actions.server`\
Ausführen alle: `15` Minuten\
Nächstes Ausführungsdatum: `DD.MM.YYYY 06:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
department_ids = env['hr.department'].search([])
group_ids = env['res.groups'].search([])

messages = []

## Create and update the permission group for every department
for department in department_ids:
  
  # Define permission group name
  name = 'Department ' + department.display_name

  # Get user ids for department and subdepartments
  department_users = department.member_ids.user_id
  if department.child_ids:
    department_users += department.child_ids.member_ids.user_id
  if department.child_ids.child_ids:
    department_users += department.child_ids.child_ids.member_ids.user_id

  # Search group
  group = group_ids.filtered(lambda g: g.name == name)
  
  # Create group if it does not exist
  if not group:
    messages.append("Create permission group: %s." % (name))
    group = env['res.groups'].create({
      'name': name
    })
    
  # Ensure group is unique
  group.ensure_one()
    
  # Get group users
  group_users = group.users

  # raise Warning([group.name, group_users, department_users, set(group_users) == set(department_users)])
    
  # Set members for the group
  if set(group_users) != set(department_users):
    messages.append("Set users for group: %s." % (group.name))
    group.write({
      'users': department_users
    })
    
if messages:
  log('\n'.join(messages))
```