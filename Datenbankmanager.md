---
tags:
- HowTo
---
[🔗 README](README.md)
# Datenbankmanager
![icons_odoo_website_version](assets/icons_odoo_website_version.png)

Odoo-Instanzen mit dem Datenbankmanager verwalten.

> Zur Verwaltung der Odoo-Instanzen gibt es den Datenbankmanager. Dieses Tool erlaubt ein Backup von der Instanz zu erstellen und nach Bedarf wiederherzustellen.

## Datenbank erstellen

Möchten sie eine Datenbank für ihre Odoo-Installation erstellen, öffnen sie den Datenbankmanager unter https://erp.example.com/web/database/manager und geben die folgenden Daten ein.

* Master Password: Dieses Passwort ist vordefiniert
* Database Name: `erp`

Der Name der Datenbank muss gleich der Subdomain/Domain sein. Beispiel:  
https://erp.example.com -> `erp`  
https://www.example.com -> `example`  Das *www* wird ignoriert

* Email: `admin@example.com`
* Password: Passwort des Odoo Administrators
* Phone number: Telefonnumer des Unternehmens
* Language: `German (CH)/ Deutsch (CH)` Nicht zu verwechseln mit *German / Deutsch*
* Country: `Switzerland`
* Demo data: `deaktiviert` Achtung: Bei aktivierter Checkbox wird die Datenbank unwiderruflich mit Demo-Daten gefüllt

::: tip
Der Eintrag im Feld Email wird automatisch zum Login des Standard-Benutzers *Administrator*.
:::

![Einstellungen Benutzer Administrator](assets/Einstellungen%20Benutzer%20Administrator.png)

Drücken Sie den Knopf *Create Database* zum Erstellen der neuen Datenbank.
Die Funktion "Restore Database" führt Sie zu einem Dialog um eine bestehende Datenbank zu importieren.

## Backup erstellen

Der Datenbank Manager kann unter der URL https://erp.example.com/web/database/manager aufgerufen werden. Hier werden die Odoo-Instanzen aufgelistet. Beim Klick auf *Backup* wird man aufgefordert das *Odoo Master Password* einzugeben. Nach Eingabe des Password und abschliessen des Dialogs erhält man eine ZIP-Datei zum herunterladen.

Wählen sie auf der folgenden Maske die Funktion *Manage Databases*.

![Datenbankmanager Start](assets/Datenbankmanager%20Start.png)

Wählen sie gemäss der folgenden Darstellung die Funktion *Backup*.

![Datenbankmanager Funktionen](assets/Datenbankmanager%20Funktionen.png)

Im unten dargestellten Dialog ist das *Odoo Master Password* notwendig.

![Datenbankmanager Backup](assets/Datenbankmanager%20Backup.png)

Nach der Bestätigung mit dem Knopf *Backup* wird der Inhalt der Datenbank lokal auf dem Computer in eine zip-Datei gespeichert.

## Restore Database

Falls eine Datenbank mit einem Backup überschrieben werden soll, muss im nächsten Schritt die bestehende Datenbank gelöscht werden.

Wählen sie gemäss der folgenden Darstellung die Funktion *Delete*.

![Datenbankmanager Funktionen](assets/Datenbankmanager%20Funktionen.png)

Im unten dargestellten Dialog ist das *Odoo Master Password* notwendig.

![Datenbankmanager Delete](assets/Datenbankmanager%20Delete.png)

Wählen sie anschliessend die Funktion *Delete*.

Rufen sie anschliessend die Startseite erneut auf. Es erscheint die folgende Maske:

![Datenbankmanager Restore](assets/Datenbankmanager%20Restore.png)

Wählen sie die Funktion *restore a Database*. Anschliessend erscheint die folgende Auswahl.

![Datenbankmanager Restore Auswahl](assets/Datenbankmanager%20Restore%20Auswahl.png)

::: tip
Im Feld *Database* muss zwingend der Name der gelöschten Datenbank eingetragen werden.
:::

::: tip
Wählen sie *This database is a copy*. Ansonsten verliert die Installation den Lizenzschlüssel.
:::

Mit *Continue* wird der Datenimport durchgeführt. Nach Abschluss des Vorgangs zeigt der Browser die folgende Auswahl:

![Datenbankmanager Funktionen](assets/Datenbankmanager%20Funktionen.png)

Mit einem Klick auf den Namen ihrer Datenbank startet das System mit der Login-Maske.

## Datenbank ID ändern

Jede Odoo Datenbank wird mit einem Universally unique Identifier (UUID) identifiziert. Beim Kopieren der Datenbank mit dem Datenbankmanager wird jeweils eine neue UUID generiert. Die UUID kann aber auch manuell geneiert und festgelegt werden.

Im Entwicklermodus navigieren sie nach *Einstellungen > Technisch > Parameter > Systemparameter*. Auf der Kommandozeile geben sie den Befehl `uuidgen` ein und legen die generierte UUID als Wert für den Parameter `database.uuid` fest.
