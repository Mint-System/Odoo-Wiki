---
title: Entwicklung
description: Odoo mühelos anpassen und erweitern.
tags:
- HowTo
prev: ./
---
# Entwicklung
![icons_odoo_web_studio](attachments/icons_odoo_web_studio.png)

{{ $frontmatter.description }}

## Bereiche

| Bereich                                                   | Beschreibung                                                |
| --------------------------------------------------------- | ----------------------------------------------------------- |
| [Entwicklung Aktionen](Development%20Actions.md)          | Eigene Odoo Aktionen erstellen.                             |
| [Entwicklung Ansichten](Develpment%20Views.md)            | Odoo Ansichten anpassen.                                    |
| [Entwicklung Berichte](Development%20Reports.md)          | Eigene Berichte mit QWeb erstellen.                         |
| [Entwicklung Datenmodelle](Entwicklung%20Datenmodelle.md) | Odoo Datenmodell erweitern.                                 |
| [Entwicklung Performance](Entwicklung%20Performance.md)   | Performance-Probleme analysieren.                           |
| [Entwicklung Runbot](Entwicklung%20Runbot.md)             | Odoo Testumgebungen.                                        |
| [Entwicklung Snippets](Development%20Snippets.md)         | Einfache Anpassungen mit den Mint System Snippets umsetzen. |
| [Entwicklung Website](Entwicklung%20Website.md)           | Website-Templates anpassen und erweitern.                   |

## Erweiterungen

| Erweiterung                                                                                 | Beschreibung                                                        |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [BI SQL Editor](BI%20SQL%20Editor.md)                                                       | Ganz einfach SQL-basierte Berichte erstellen.                       |
| [Date Range](Date%20Range.md)                                                               | Verwaltung von Datums-Bereichen zur Filterung von Daten.            |
| [FastAPI](FastAPI.md)                                                                       |                                                                     |
| [Mass Editing](Mass%20Editing.md)                                                           | Mühelos mehrere Einträge auf einmal bearbeiten.                     |
| [Mass Operation Abstract](Mass%20Operation%20Abstract.md)                                   | Bietet Werkzeuge zur Massenbearbeitung.                             |
| [MuK REST](MuK%20REST.md)                                                                   | Stellt eine REST API für den Odoo Server bereit.                    |
| [Onchange Helper](Onchange%20Helper.md)                                                     | Vereinfacht den Aufruf von Onchange-Methoden im Python Code.        |
| [Prometheus Exporter](Prometheus%20Exporter.md)                                             | Odoo-Metriken mit Prometheus monitoren.                             |
| [Report XLSX](Report%20XLSX.md)                                                             | Klasse zur Etnwicklung von XLSX-Berichten.                          |
| [Server Environment Ir Config Parameter](Server%20Environment%20Ir%20Config%20Parameter.md) | Systemparameter aus Umgebungsvariablen laden.                       |
| [Server Environment](Server%20Environment.md)                                               | Systemkonfigurationen aus Umgebungsvariablen laden.                 |
| [Web Domain Field](Web%20Domain%20Field.md)                                                 | Dynamische Definitionen für Domain-Attribute auf Felder generieren. |
| [Web Environment Ribbon](Web%20Environment%20Ribbon.md)                                     | Odoo Umgebung mit Banner markieren.                                 |
| [Web Timeline](Web%20Timeline.md)                                                           | Die Timeline-Ansicht für alle Objekte.                              |

## Konfiguration

### Systemparameter anlegen

Öffnen Sie *Einstellungen > Technisch > Parameter > Systemparameter* und erstellen einen Eintrag mit *Schlüssel* und *Wert*.

### Developer API Key generieren

Damit Software von Dritten Zugriff auf die Daten von Odoo hat, ohne dass dabei das Passwort eines Benutzers geteilt werden muss, kann man einen Zugriffsschlüssel bereitstellen.

Öffenen Sie die Sicherheitseinstellungen des eingeloggten Benutzers *Menüleiste > Mein Profil > Tab Acccount Security* und klicken auf *New API Key*.

## Verwendung

### Assets-Bundel neu generieren

Wird Odoo im Browser angezeigt, werden sogenannte Assets im Hintergrund geladen (JavaScript- und CSS-Dateien). Diese Assets können nach einem Odoo-Update veraltet sein und müss neu generiert werden. Wählen Sie *Entwicklertool > Bündel von Assets regenerieren*.

![](attachments/Entwicklung%20Assets-Bundel%20neu%20generieren.png)

### Browser-Cache in Firefox löschen

Damit Odoo nach einem Update einwandfrei funktioniert. Müssen Sie den Browser-Cache für Odoo entfernen. In Firefox klicken Sie dazu auf das Häcken in der Browserleiste und wählen *Cookies und Website-Daten löschen...*. Bestätigen Sie den Dialog.

![](attachments/Clear%20Browser%20Cache%20Firefox.png)

### Browser-Cache in Chrome löschen

Damit Odoo nach einem Update einwandfrei funktioniert. Müssen Sie den Browser-Cache für Odoo entfernen. In Firefox klicken Sie dazu auf das Häcken in der Browserleiste und wählen *Site settings*.

![](attachments/Clear%20Browser%20Cache%20Chrome%201.png)

Im neuen Fenster wählen Sie *Clear Data*.

![](attachments/Clear%20Browser%20Cache%20Chrome%202.png)

### Demo-Daten neu laden

Navigieren Sie nach *Einstellungen > Entwicklertools* und klicken Sie auf *Demo Daten laden* um die Daten in die aktuelle Datenbank zu laden.

### Odoo Revision anzeigen

Rufen Sie die *Einstellungen* auf und scrollen Sie auf der Ansicht nach ganz unten. Beim Abschnitt *Über* finden Sie Angaben zur Odoo Revision.

![](attachments/Einstellungen%20Odoo%20Revision.png)

## Navigation

### Menüposten anordnen

Im Entwicklermodus navigieren Sie nach  *Einstellungen > Technisch >  Benutzer-Interface > Menüposten*. Erstellen Sie einen Filter *Obermenü* mit dem Wert *ist nicht gesetzt*. Nun können Sie die Menüposten mit dem Handler in der Liste anordnen.

### Menüposten umbennen

Im Entwicklermodus können Sie ganz einfach Menüposten umbennen. Angenommen Sie möchten diesen Punkt umbennen:

![](attachments/Entwicklung%20Menüposten%20umbennen.png)

Gehen Sie wie folgt vor. Navigieren Sie nach *Einstellungen > Technisch >  Benutzer-Interface > Menüposten* und suchen Sie nach *Alle Angestellte*. Bearbeiten Sie den Eintrag und setzen Sie für das Feld *Menü* einen neuen Wert.

![](attachments/Einstellungen%20Menüposten%20bearbeiten.png)

Nachdem Sie den Browser-Tab aktualisiert haben, ist der Menüposten umbenannt.

### Menüposten erstellen

Öffnen Sie *Einstellungen > Technisch > Benutzer-Interface > Menüposten* und wählen Sie *Neu*.

### Menüposten bearbeiten

Öffnen Sie *Einstellungen > Technisch > Benutzer-Interface > Menüposten* und wählen Sie ein bestehenden Menüposten aus. Bearbeiten Sie die Sichtbarkeit des Menüs im Tab *Zugriffsrechte* oder steuern Sie die Reihenfolge der Untermenüs im Tab *Untermenüs*.

:::
Bei einer Aktualisierung der Odoo App werden die verlinkten Menüposten zurückgesetzt.
:::

### Menüposten entfernen

Öffnen Sie *Einstellungen > Technisch > Benutzer-Interface > Menüposten* und suchen Sie den entsprechende Menüposten. Markieren Sie diesen und wählen Sie *Aktion > Löschen* oder *Aktion > Archiv*.

::: warning
Diese Vorgang kann die Integrität und Verüfgbarkeit des Systems beeiträchitgen. Führen Sie die Aktion nur aus, wenn Sie sich den möglichen Auswirkungen bewusst sind.
:::

## Metadaten

### Metadaten anzeigen

Für jedes Dokument können Sie in der Einzelansicht die Metadaten anzeigen. Rufen Sie ein Odoo-Objekt im Entwicklermodus auf, beispielsweise einen Benutzer und klicken Sie auf *Entwicklertools > Metadaten anzeigen*.

![](attachments/Entwicklung%20Metadaten%20anzeigen.png)

### Externe ID anzeigen

Odoo speichert alle externen IDs in einer Tabelle. Öffnen Sie *Einstellungen > Technisch > Sequenzen- und Identifizierungsmerkmale > Externe Identifikationen*. Suchen Sie nach einer externen ID anhand des Schlüssels.

### Externe ID erfassen

Zeigen Sie einen beliebigen Datensatz in der Formularansicht an. Als Beispiel verwenden wir eine Ansicht. Entnehmen Sie anhand der Url die *ID* und das *Datenmodell*.

/web#id=**1639**&action=28&model=**ir.ui.view**&view_type=form&cids=1&menu_id=4

Navigieren Sie nun nach *Einstellungen > Technisch > Sequenzen- und Identifizierungsmerkmale > Externe Identifikationen* und legen Sie einen Eintrag an:

* **Modul**: Technischer Name des Odoo-Moduls
* **Externe Identifikation**: Eindeutiger Bezeichner
* **Modellname**: Angabe Gemäss Url
* **Datensatz-ID**: Angabe Gemäss Url

Dazu die Angaben aus dem Beispiel:

![](attachments/Entwicklung%20Externe%20ID%20erfassen.png)

Ist die *Externe Identifikation* gespeichert, wird Sie auf Datensatz angezeigt.

![](attachments/Entwicklung%20Externe%20Ansicht%20Beispiel.png)

### Externe ID aus Metadaten erfassen

Ab #Odoo16 können Sie [Metadaten anzeigen](#Metadaten%20anzeigen) und direkt eine externe ID erfassen. Wählen Sie dazu die Aktion *create* auf der Ansicht der Metadaten. Der Modellname und die Datensatz-ID werden übernommen.

![](attachments/Development%20Metadaten.png)

## Berechtigungen

### Zugriff auf Feld einschränken

Sie können den Zugriff für benutzerdefinierte Felder einschränken. Dazu müssen Sie ein [Snippet hinzufügen](Development%20Snippets.md#Snippet%20hinzufügen), welches auf der ausgewählten Ansicht auf dem Feld das Attribut `groups` festlegt. Als Wert geben Sie die externe ID der Benutzergruppe an, welche Zugriff haben soll. Dazu ein Beispiel:

```xml
<?xml version="1.0"?>
<data inherit_id="hr_holidays.hr_leave_view_tree">

  <xpath expr="//field[@name='state']" position="after">
    <field name="x_synced" widget="toggle_button" groups="hr.group_hr_user"/>
  </xpath>

</data>
```