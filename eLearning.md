---
title: eLearning
description: Teilen Sie ihr Wissen mit der eLearning-Plattform.
tags:
- HowTo
prev: ./
---
# eLearning
![icons_odoo_website_slides](assets/icons_odoo_website_slides.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/elearning>

## Konfiguration

### eLearning für interne Benutzer

Damit die App *eLearning* für alle Benutzer sichtar ist, müssen Sie den entsprechenden [Menüeintrag bearbeiten](Development.md#Menüeintrag%20bearbeiten). Fügen Sie die Gruppe *Interner Benutzer* im Tab *Zugriffsrechte* hinzu.

## Verwaltung

### Kurs anlegen

Navigieren Sie zu ihrer Webiste und öffnen Sie die Kursseite. Klicken Sie auf *+ Neu > Neuer Kurs*. Geben Sie einen passenden Namen ein und fügen Sie ein passendes Bild hinzu.

Wählen Sie im Tab *Optionen* folgendes aus:
* **Dokumentation**: Es erfolgt keine Teilname
* **Training**: Teilnehmer können sich gemäss den *Einschreiberichtlinien* anmelden

Gemäss Option wird der Kurs in der Website-Ansicht dargestellt.

Training:

![](assets/eLearning%20Training.png)

Dokumentation:

![](assets/eLearning%20Dokumentation.png)

Im gleichen Tab eine Option für *Einschreiberichtlinien* wählen:

* **Öffentlich**: Der Kursinhalt kann auf der Website aufgerufen werden
* **Auf Einladung**: Teilnehmer brauchen einen Portal-Benutzer

Damit Teilnehmer einen Portal-Benutzer erhalten, muss dieser erstellt werden.

### Stichwörter anlegen

Navigieren Sie im Backend nach *eLearning > Konfiguration > Kurs-Stichwörter* und wählen Sie den ersten Eintrag und bearbeiten Sie diesen.

Stichwörter können gruppiert werden, das heisst es gibt Stichwörter-Gruppen, die jeweils mehrere Stichwörter enthalten.

### Kursinhalte anlegen

Navigieren Sie im Backend nach *eLearning > Kurse > Wählen den Kurs > Tab Inhalt* und klicken auf *Einen Inhalt hinzufügen*. Sie haben diese Kursypen zur Auswahl:

* **Website**: Sie erfassen Inhalte mit dem Website-Editor
* **Infografik**: Sie laden ein einziges Bild mit dem Kursinhalt hoch
* **Präsentation**: Der Kursinhalt ist eine Powerpoint-Präsentation
* **Dokument**: Der Kursinhalt ist eine Dokument
* **Video**: Der Kursinhalt ist verlinktes Video
* **Quiz**: Sie erfassen ein Quiz im entsprechenden Tab
* **Zertifizierung**: Kopplung mit der App [Umfragen](Survey.md)

### Kurs Inhalt freigeben

Damit Kursteilnehmer den Kurs und die Inhalte sehen, muss dieser immer freigeben werden. Wählen Sie für den Inhalt *eLearning > Kurs > Inhalte* aus und klicken Sie auf *Gehe zu Website*. Publizieren Sie den Inhalt mit Button *Unveröffentlicht* oben rechts. Dasselbe funktioniert für Kurse.

![](assets/Website%20Inhalt%20ver%C3%B6ffentlicht.png)

### Teilnehmer einladen

Jeder Kurs hat eine individuelle Teilnehmerliste. Wenn Sie unter *eLearning > Kurs auswählen* den Link *Teilnehmer* anklicken, erscheint eine Liste mit *Name* und *E-Mail*. Hier können Sie Tabellendatei mit den Teilnehmer importieren.

::: warning
Jeder Teilnehmer braucht einen Portal-Benutzer.
:::

Die Einladungsmail sieht ungefwähr so aus:

![](assets/eLearning%20Einladungsmail.png)

### Automatisch eingeschriebene Gruppen festlegen

Ein Benutzer mit Zugriff auf den [Entwicklermodus](Settings.md#Entwicklermodus%20aktivieren) kann auf dem Kurs eine Gruppe hinterlegen, deren Mitglieder automatisch als Teilnehmer aufgeführt werden.

![](assets/eLearning%20Automatisch%20eingeschriebene%20Gruppe.png)

::: warning
Jeder Teilnehmer erhählt eine Einladung via E-Mail.
:::

### Quiz hinzufügen

Im Tab *Quiz* eines Inhalts können Sie eine Frage mit mehreren Antworten erstellen. 

### Zertifizierung erfassen

Beim Abschluss einer Umfrage können den Teilnehmer Zertifikate vergeben werden. Navigieren Sie nach *eLearning > Kurse > Zertifizierungen*. Hier können Sie eine [Umfrage erstellen](Survey.md#Umfrage%20erstellen), die als Zertifizierung verfügbar ist.

Die Zertifizierung kann als Inhaltstyp *Zertifizierung* mit einem Kursinhalt verknüpft werden.

## Auswertung

### Leaderboard und Achievements ausblenden

Navigieren Sie zur ihrer Website und öffnen Sie die Kursseite. Wählen Sie *Bearbeiten* und klicken anschliessend auf *Anpassen*. Im geöffneten Menu können Leaderboards und Achievements deaktiviert werden.

![](assets/eLearning%20Deaktivieren%20Leaderboard.png)

### Kursabsolventen anzeigen

Die Absolventen eines Kurses sehen Sie unter *eLearning > Kurs auswählen* und auf Vorschau *Absolventen* anklicken. Hier werden alle Teilnehmer aufgelistet, die den Kurs absolviert haben.