---
title: Entwicklung
description: Odoo mühelos anpassen und erweitern.
kind: howto
prev: ./
partner: Mint-System
---

# Entwicklung

![icons_odoo_web_studio](attachments/icons_odoo_web_studio.png)

{{ $frontmatter.description }}

## Bereiche

| Bereich                                                 | Beschreibung                                                |
| ------------------------------------------------------- | ----------------------------------------------------------- |
| [Entwicklung Aktionen](Development%20Actions.md)        | Eigene Odoo Aktionen erstellen.                             |
| [Entwicklung Ansichten](Development%20Views.md)         | Odoo Ansichten anpassen.                                    |
| [Entwicklung Berichte](Development%20Reports.md)        | Eigene Berichte mit QWeb erstellen.                         |
| [Entwicklung Buchhaltung](Entwicklung%20Buchhaltung.md) | Buchhaltungs-Berichte anpassen und erweitern.               |
| [Entwicklung Datenmodelle](Development%20Models.md)     | Odoo Datenmodell erweitern.                                 |
| [Entwicklung Performance](Development%20Performance.md) | Performance-Probleme analysieren.                           |
| [Entwicklung Runboat](Development%20Runboat.md)         | Testumgebungen der Odoo Community Association .             |
| [Entwicklung Runbot](Development%20Runbot.md)           | Testumgebungen von Odoo S.A.                                |
| [Entwicklung Snippets](Development%20Snippets.md)       | Einfache Anpassungen mit den Mint System Snippets umsetzen. |
| [Entwicklung Website](Development%20Website.md)         | Website-Templates anpassen und erweitern.                   |

## Erweiterungen

| Erweiterung                                                                                 | Beschreibung                                                        |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [2D matrix for x2many fields](2D%20matrix%20for%20x2many%20fields.md)                       | Matrix-Auswahl für Many2Many-Feld.                                  |
| [BI SQL Editor](BI%20SQL%20Editor.md)                                                       | Ganz einfach SQL-basierte Berichte erstellen.                       |
| [Components](Components.md)                                                                 | Kompontent-System für das Connector-Framework.                      |
| [Date Range](Date%20Range.md)                                                               | Verwaltung von Datums-Bereichen zur Filterung von Daten.            |
| [Endpoint route handler](Endpoint%20route%20handler.md)                                     | Web-Routen während Ausführung hinzufügen und entfernen              |
| [FastAPI Auth JWT support](FastAPI%20Auth%20JWT%20support.md)                               | JWT Authentication for FastAPI.                                     |
| [FastAPI](FastAPI.md)                                                                       | FastAPI-Integration für Odoo.                                       |
| [Fs Folder](Fs%20Folder.md)                                                                 | Dateien und Ordner mit externem Dateisystem verlinken.              |
| [Mail Environment](Mail%20Environment.md)                                                   | Mail-Server aus Umgebungsvariablen laden.                           |
| [Mass Editing](Mass%20Editing.md)                                                           | Mühelos mehrere Einträge auf einmal bearbeiten.                     |
| [Mass Editing](Server%20Action%20Mass%20Edit.md)                                            | Aktionen zur Bearbeitung von mehreren Einträgen erstellen.          |
| [Mass Operation Abstract](Mass%20Operation%20Abstract.md)                                   | Bietet Werkzeuge zur Massenbearbeitung.                             |
| [MuK REST](MuK%20REST.md)                                                                   | Stellt eine REST API für den Odoo Server bereit.                    |
| [Onchange Helper](Onchange%20Helper.md)                                                     | Vereinfacht den Aufruf von Onchange-Methoden im Python Code.        |
| [Prometheus Exporter](Prometheus%20Exporter.md)                                             | Odoo-Metriken mit Prometheus monitoren.                             |
| [Queue Job Cron](Queue%20Job%20Cron.md)                                                     | Cron Jobs asynchron ausführen.                                      |
| [Queue Job](Queue%20Job.md)                                                                 | Asynchrone Ausführung von Jobs.                                     |
| [Report XLSX](Report%20XLSX.md)                                                             | Klasse zur Etnwicklung von XLSX-Berichten.                          |
| [Server Environment Ir Config Parameter](Server%20Environment%20Ir%20Config%20Parameter.md) | Systemparameter aus Umgebungsvariablen laden.                       |
| [Server Environment](Server%20Environment.md)                                               | Systemkonfigurationen aus Umgebungsvariablen laden.                 |
| [Web Domain Field](Web%20Domain%20Field.md)                                                 | Dynamische Definitionen für Domain-Attribute auf Felder generieren. |
| [Web Environment Ribbon](Web%20Environment%20Ribbon.md)                                     | Odoo Umgebung mit Banner markieren.                                 |
| [Web Timeline](Web%20Timeline.md)                                                           | Die Timeline-Ansicht für alle Objekte.                              |

## Konfiguration

### Systemparameter anlegen

Öffnen Sie _Einstellungen > Technisch > Parameter > Systemparameter_ und erstellen einen Eintrag mit _Schlüssel_ und _Wert_.

### Systemparameter bearbeiten

Öffnen Sie _Einstellungen > Technisch > Parameter > Systemparameter_ und suchen Sie nach einem Eintrag anhand des _Schlüssels_. Bearbeiten Sie den _Wert_ des Parameter im gleichnamigen Feld.

### Developer API Key generieren

Damit Software von Dritten Zugriff auf die Daten von Odoo hat, ohne dass dabei das Passwort eines Benutzers geteilt werden muss, kann man einen Zugriffsschlüssel bereitstellen.

Öffnen Sie die Sicherheitseinstellungen des eingeloggten Benutzers _Menüleiste > Mein Profil > Tab Account Security_ und klicken auf _New API Key_.

## Verwendung

### Assets-Bundel neu generieren

Wird Odoo im Browser angezeigt, werden sogenannte Assets im Hintergrund geladen (JavaScript- und CSS-Dateien). Diese Assets können nach einem Odoo-Update veraltet sein und müss neu generiert werden. Wählen Sie _Entwicklertool > Bündel von Assets regenerieren_.

![](attachments/Entwicklung%20Assets-Bundel%20neu%20generieren.png)

### Browser-Cache in Firefox löschen

Damit Odoo nach einem Update einwandfrei funktioniert. Müssen Sie den Browser-Cache für Odoo entfernen. In Firefox klicken Sie dazu auf das Häcken in der Browserleiste und wählen _Cookies und Website-Daten löschen..._. Bestätigen Sie den Dialog.

![](attachments/Clear%20Browser%20Cache%20Firefox.png)

### Browser-Cache in Chrome löschen

Damit Odoo nach einem Update einwandfrei funktioniert. Müssen Sie den Browser-Cache für Odoo entfernen. In Firefox klicken Sie dazu auf das Häcken in der Browserleiste und wählen _Site settings_.

![](attachments/Clear%20Browser%20Cache%20Chrome%201.png)

Im neuen Fenster wählen Sie _Clear Data_.

![](attachments/Clear%20Browser%20Cache%20Chrome%202.png)

### Demo-Daten neu laden

Navigieren Sie nach _Einstellungen > Entwicklertools_ und klicken Sie auf _Demo Daten laden_ um die Daten in die aktuelle Datenbank zu laden.

### Odoo Revision anzeigen

Rufen Sie die _Einstellungen_ auf und scrollen Sie auf der Ansicht nach ganz unten. Beim Abschnitt _Über_ finden Sie Angaben zur Odoo Revision.

![](attachments/Einstellungen%20Odoo%20Revision.png)

## Navigation

### Menüposten anordnen

Im Entwicklermodus navigieren Sie nach _Einstellungen > Technisch > Benutzer-Interface > Menüposten_. Erstellen Sie einen Filter _Obermenü_ mit dem Wert _ist nicht gesetzt_. Nun können Sie die Menüposten mit dem Handler in der Liste anordnen.

![](attachments/Entwicklung%20Menüposten%20anordnen.png)

### Menüposten umbennen

Im Entwicklermodus können Sie ganz einfach Menüposten umbennen. Angenommen Sie möchten diesen Punkt umbennen:

![](attachments/Entwicklung%20Menüposten%20umbennen.png)

Gehen Sie wie folgt vor. Navigieren Sie nach _Einstellungen > Technisch > Benutzer-Interface > Menüposten_ und suchen Sie nach _Alle Angestellte_. Bearbeiten Sie den Eintrag und setzen Sie für das Feld _Menü_ einen neuen Wert.

![](attachments/Einstellungen%20Menüposten%20bearbeiten.png)

Nachdem Sie den Browser-Tab aktualisiert haben, ist der Menüposten umbenannt.

### Menüposten erstellen

Öffnen Sie _Einstellungen > Technisch > Benutzer-Interface > Menüposten_ und wählen Sie _Neu_.

### Menüposten bearbeiten

Öffnen Sie _Einstellungen > Technisch > Benutzer-Interface > Menüposten_ und wählen Sie ein bestehenden Menüposten aus. Bearbeiten Sie die Sichtbarkeit des Menüs im Tab _Zugriffsrechte_ oder steuern Sie die Reihenfolge der Untermenüs im Tab _Untermenüs_.

:::
Bei einer Aktualisierung der Odoo App werden die verlinkten Menüposten zurückgesetzt.
:::

### Menüposten entfernen

Öffnen Sie _Einstellungen > Technisch > Benutzer-Interface > Menüposten_ und suchen Sie den entsprechende Menüposten. Markieren Sie diesen und wählen Sie _Aktionen > Löschen_ oder _Aktionen > Archiv_.

::: warning
Diese Vorgang kann die Integrität und Verüfgbarkeit des Systems beeiträchitgen. Führen Sie die Aktion nur aus, wenn Sie sich den möglichen Auswirkungen bewusst sind.
:::

## Metadaten

### Metadaten anzeigen

Für jedes Dokument können Sie in der Einzelansicht die Metadaten anzeigen. Rufen Sie ein Odoo-Objekt im Entwicklermodus auf, beispielsweise einen Benutzer und klicken Sie auf _Entwicklertools > Metadaten anzeigen_.

![](attachments/Entwicklung%20Metadaten%20anzeigen.png)

### Externe ID anzeigen

Odoo speichert alle externen IDs in einer Tabelle. Öffnen Sie _Einstellungen > Technisch > Sequenzen- und Identifizierungsmerkmale > Externe Identifikationen_. Suchen Sie nach einer externen ID anhand des Schlüssels.

### Externe ID erfassen

Zeigen Sie einen beliebigen Datensatz in der Formularansicht an. Als Beispiel verwenden wir eine Ansicht. Entnehmen Sie anhand der Url die _ID_ und das _Datenmodell_.

/web#id=**1639**&action=28&model=**ir.ui.view**&view_type=form&cids=1&menu_id=4

Navigieren Sie nun nach _Einstellungen > Technisch > Sequenzen- und Identifizierungsmerkmale > Externe Identifikationen_ und legen Sie einen Eintrag an:

- **Modul**: Kennung des Odoo Partners bsp. `mint_system`
- **Externe Identifikation**: Eindeutiger Bezeichner
- **Modellname**: Angabe Gemäss Url
- **Datensatz-ID**: Angabe Gemäss Url

::: warning
Verwenden Sei bei Modul keinen existierenden Modulnamen wie `base` oder `account`. Bei einem Modul-Update entfernt Odoo alle externen IDs und verknüpften Datensätze, wenn diese nicht im entsprechenden Modul definiert sind.
:::

Dazu die Angaben aus dem Beispiel:

![](attachments/Entwicklung%20Externe%20ID%20erfassen.png)

Ist die _Externe Identifikation_ gespeichert, wird Sie auf Datensatz angezeigt.

![](attachments/Entwicklung%20Externe%20Ansicht%20Beispiel.png)

### Externe ID in Metadaten erfassen

Ab #Odoo16 können Sie [Metadaten anzeigen](#Metadaten%20anzeigen) und direkt eine externe ID erfassen. Wählen Sie dazu die Aktion _create_ auf der Ansicht der Metadaten. Der Modellname und die Datensatz-ID werden übernommen.

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

## Technisch

### Netzwerk-Zugriffe mit Firefox analysieren

Im Firefox-Browser drücken <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>i</kbd> um die Entwickler-Werkzeuge zu öffnen. Wählen Sie den Tab _Netzwerk_ aus. Öffnen Sie nun die Odoo Webapplikation oder führen Sie in Odoo eine bestimmte Aktion aus. Firefox protokolliert die Zugriffe des Client zum Server. Für jeden Eintrag ist können Sie die Anfrage und Antwort anzeigen.

![](attachments/Firefox%20Netzwerk-Zugriffe.png)
