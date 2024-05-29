---
title: Datenbank
description: Odoo Datenbanken verwalten.
tags:
- HowTo
prev: ./
---
# Datenbank
![icons_odoo_apps](attachments/icons_odoo_apps.png)

{{ $frontmatter.description }}

## Erweiterungen

| Erweiterung                                                                               | Beschreibung                                            |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [Base DB Anonymization](Base%20DB%20Anonymization.md)                                     | Inhalt von ausgewählten Datenbank-Felder anonmyisieren. |
| [Base Search Fuzzy](Base%20Search%20Fuzzy.md)                                             | Aktivieren Trigram-Index auf Datenbank-Felder.          |
| [DBFilter From Header](DBFilter%20From%20Header.md)                                       | Datenbank mit Proxy-Header auswählen.                   |
| [Database Anonymization HR](Smile%20Anonymization%20HR.md)                                | HR-Datensätze in Backup anonymisieren.                  |
| [Database Anonymize Partner](Smile%20Anonymize%20Partner.md)                              | Partner-Datensätze in Backup anonymisieren.             |
| [Database Anonymize](Smile%20Anonymization.md)                                            | Datensätze in Backup anonymisieren.                     |

## Datenbank

Zur Verwaltung der Odoo-Instanzen gibt es den Datenbankmanager. Dieses Tool erlaubt ein Backup von der Instanz zu erstellen und nach Bedarf wiederherzustellen.

### Datenbank erstellen

Möchten Sie eine Datenbank für ihre Odoo-Installation erstellen, öffnen Sie den Datenbankmanager unter https://erp.example.com/web/database/manager und geben die folgenden Daten ein.

* Master Password: Dieses Passwort ist vordefiniert
* Database Name: `erp`

::: tip
Der Name der Datenbank muss gleich der Subdomain/Domain sein. Beispiel:  

<https://erp.example.com> -> `erp`  
<https://www.example.com> -> `example`  (das *www* wird ignoriert)
:::

* Email: `admin@example.com`
* Password: Passwort des Odoo Administrators
* Phone number: Telefonnumer des Unternehmens
* Language: `German (CH)/ Deutsch (CH)` Nicht zu verwechseln mit *German / Deutsch*
* Country: `Switzerland`
* Demo data: `deaktiviert` Achtung: Bei aktivierter Checkbox wird die Datenbank unwiderruflich mit Demo-Daten gefüllt

::: tip
Der Eintrag im Feld Email wird automatisch zum Login des Standard-Benutzers *Administrator*.
:::

![Einstellungen Benutzer Administrator](attachments/Einstellungen%20Benutzer%20Administrator.png)

Drücken Sie den Knopf *Create Database* zum Erstellen der neuen Datenbank.
Die Funktion "Restore Database" führt Sie zu einem Dialog um eine bestehende Datenbank zu importieren.

### Backup erstellen

Der Datenbank Manager kann unter der URL https://erp.example.com/web/database/manager aufgerufen werden. Hier werden die Odoo-Instanzen aufgelistet. Beim Klick auf *Backup* wird man aufgefordert das *Odoo Master Password* einzugeben. Nach Eingabe des Password und abschliessen des Dialogs erhält man eine ZIP-Datei zum herunterladen.

Wählen Sie auf der folgenden Maske die Funktion *Manage Databases*.

![Datenbankmanager Start](attachments/Datenbankmanager%20Start.png)

Wählen Sie gemäss der folgenden Darstellung die Funktion *Backup*.

![Datenbankmanager Funktionen](attachments/Datenbankmanager%20Funktionen.png)

Im unten dargestellten Dialog ist das *Odoo Master Password* notwendig.

![Datenbankmanager Backup](attachments/Datenbankmanager%20Backup.png)

Nach der Bestätigung mit dem Knopf *Backup* wird der Inhalt der Datenbank lokal auf dem Computer in eine zip-Datei gespeichert.

### Datenbank wiederherstellen

Falls eine Datenbank mit einem Backup überschrieben werden soll, muss im nächsten Schritt die bestehende Datenbank gelöscht werden.

Wählen Sie gemäss der folgenden Darstellung die Funktion *Delete*.

![Datenbankmanager Funktionen](attachments/Datenbankmanager%20Funktionen.png)

Im unten dargestellten Dialog ist das *Odoo Master Password* notwendig.

![Datenbankmanager Delete](attachments/Datenbankmanager%20Delete.png)

Wählen Sie anschliessend die Funktion *Delete*.

Rufen Sie anschliessend die Startseite erneut auf. Es erscheint die folgende Maske:

![Datenbankmanager Restore](attachments/Datenbankmanager%20Restore.png)

Wählen Sie die Funktion *restore a Database*. Anschliessend erscheint die folgende Auswahl.

![Datenbankmanager Restore Auswahl](attachments/Datenbankmanager%20Restore%20Auswahl.png)

::: tip
Im Feld *Database* muss zwingend der Name der gelöschten Datenbank eingetragen werden.
:::

::: tip
Wählen Sie *This database is a copy*. Ansonsten verliert die Installation den Lizenzschlüssel.
:::

Mit *Continue* wird der Datenimport durchgeführt. Nach Abschluss des Vorgangs zeigt der Browser die folgende Auswahl:

![Datenbankmanager Funktionen](attachments/Datenbankmanager%20Funktionen.png)

Mit einem Klick auf den Namen ihrer Datenbank startet das System mit der Login-Maske.

### Datenbank ID ändern

Jede Odoo Datenbank wird mit einem Universally unique Identifier (UUID) identifiziert. Beim Kopieren der Datenbank mit dem Datenbankmanager wird jeweils eine neue UUID generiert. Die UUID kann aber auch manuell generiert und festgelegt werden.

Im Entwicklermodus navigieren Sie nach *Einstellungen > Technisch > Parameter > Systemparameter*. Auf der Kommandozeile geben Sie den Befehl `uuidgen` ein und legen die generierte UUID als Wert für den Parameter `database.uuid` fest.

### Datenbank URL festlegen

Im Entwicklermodus navigieren Sie nach *Einstellungen > Technisch > Parameter > Systemparameter*. Legen Sie für den Schlüssel `web.base.url` den Wert `	https://odoo.example.com` fest. 

::: tip
Dieser Parameter wird von Odoo automatisch festgelegt. Um den Wert zu übersteuern, muss der Parameter `web.base.url.freeze` auf `True` gesetzt werden.
:::

## Infrastruktur

### Odoo Online Datenbank herunterladen

Damit Sie die Odoo Online Datenbank herunterladen können, öffnen Sie <https://www.odoo.com/de_DE/my/databases>. Hier haben Sie eine Übersicht iherer Odoo Online Datenbanken.

Öffnen Sie bei der zu exportierenden Datenbank das Kontext-Menü neben dem Datebanknamen. 

![](attachments/Datenbankmanager%20Odoo%20Online%20Datebanken.png)

Anschliessend wählen Sie *Herunterladen*.

![](attachments/Datenbankmanager%20Odoo%20Online%20Herunterladen.png)

Der Download-Vorgang kann abhängig von der Datenbankgrösse Zeit in Anspruch nehmen. Als erstes sollte die Datei `UNTERNEHMENSNAME.dump.zip` zum Download angeboten werden. Mit *Speichern* laden Sie die Datei auf den lokalen Computer.

## Lizenz

### Odoo Enterprise Abonnement aktivieren

Nach dem Login erscheint die Meldung, dass die Odoo-Installation nicht aktiviert ist. 

![](attachments/Intialisierung%20Odoo%20Enterprise%20aktivieren.png)

Tragen Sie in diesem Dialog ihren Odoo Enterprise Abonnement Code ein.

### Odoo Datenbank verlängern

Wenn eine Datenbank abgelaufen ist, erscheint eine entsprechende Meldung. Diese ist aber nur symbolisch, mit der richtigen URL können Sie das Ablaufdatum der Odoo Datenbank verlängern. Am einfachsten ist es, wenn das Testsystem und das produktive System unter einer ähnlichen URL erreichbar sind.

Navigieren Sie auf dem Testsystem nach *Einstellungen > Technisch > Systemparameter*. Ersetzen Sie die Domain des Testsystem in der URL mit der Domain des produktiven System. Nun können Sie den Wert des Schlüssel `database.expiration_date` mit einem Datum in der Zukunft ersetzen.

![Einstellungen Odoo-Datenbank verlängern](attachments/Einstellungen%20Odoo-Datenbank%20verlängern.gif)

### Synchronisation mit Lizenzserver durchführen

Odoo registriert eine eindeutige Nummer (UUID) auf dem Lizenzserver von Odoo S.A. und lädt die Lizenzinformationen herunter. Die automatische Synchronisation der Informationen können Sie wie folgt ausführen. 

[Zeigen Sie die Externe ID](Development.md#Externe%20ID%20anzeigen) mit Schlüssel `mail.ir_cron_module_update_notification` an. Klicken Sie auf den verlinkten Datensatz. Sie gelangen zur geplanten Aktion *Veröffentlicher: Benachrichtigung aktualisieren*. Führen Sie die Aktion aus.

### Synchronisation mit Lizenzserver deaktivieren

Nach der Installation der Datenbank registriert Odoo eine eindeutige Nummer (UUID) auf dem Lizenzserver von Odoo S.A. Damit werden die Lizenzinformationen abgeglichen. Die automatische Synchronisation der Informationen können Sie wie folgt ausschalten. 

[Zeigen Sie die Externe ID](Development.md#Externe%20ID%20anzeigen) mit Schlüssel `mail.ir_cron_module_update_notification` an. Klicken Sie auf den verlinkten Datensatz. Sie gelangen zur geplanten Aktion *Veröffentlicher: Benachrichtigung aktualisieren*. Deaktivieren Sie diese Aktion.

::: warning
Deaktivieren Sie die Synchronisation mit dem Lizenzserver nur auf Testumgebungen.
:::

### Temporärer Benutzer erstellen

Ein temporärer Benutzer ist für Externe beispielsweise Finanz-Auditoren bestimmt, die nur für eine bestimmte Zeit Zugriff auf das Odoo System brauchen. Aktive Benutzer auf Odoo Enterprise müssen innerhalb von 30 Tagen lizenziert werden.

Teilen Sie ihrem Odoo Kontakt mit, dass ein neuer aktiver Benutzer erstellt wird und dieser nur temporär zum Einsatz kommt. Der Odoo Kontakt kann die Lizenzprüfung für die gewünschte Zeit unterbrechen. Nach Ablauf der Zeitspanne archivieren Sie den Benutzer. Sie können den Benutzer zu einem späteren Zeitpunkt beispielsweise im Falle einer jährlichen Finanzprüfung wieder aktivieren und den Vorgang wiederholen. 