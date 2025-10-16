---
title: eLearning
description: Teilen Sie ihr Wissen mit der eLearning-Plattform.
kind: howto
prev: ./
partner: Odoo S.A.
---

# eLearning

![icons_odoo_website_slides](attachments/icons_odoo_website_slides.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/elearning>

## Konfiguration

### eLearning für interne Benutzer

Damit die App _eLearning_ für alle Benutzer sichtar ist, müssen Sie den entsprechenden [Menüposten bearbeiten](Development.md#Menüposten%20bearbeiten). Fügen Sie die Gruppe _Interner Benutzer_ im Tab _Zugriffsrechte_ hinzu.

## Verwaltung

### Kurs anlegen

Navigieren Sie zu ihrer Webiste und öffnen Sie die Kursseite. Klicken Sie auf _+ Neu > Neuer Kurs_. Geben Sie einen passenden Namen ein und fügen Sie ein passendes Bild hinzu.

Wählen Sie im Tab _Optionen_ folgendes aus:

- **Dokumentation**: Es erfolgt keine Teilname
- **Training**: Teilnehmer können sich gemäss den _Einschreiberichtlinien_ anmelden

Gemäss Option wird der Kurs in der Website-Ansicht dargestellt.

Training:

![](attachments/eLearning%20Training.png)

Dokumentation:

![](attachments/eLearning%20Dokumentation.png)

Im gleichen Tab eine Option für _Einschreiberichtlinien_ wählen:

- **Öffentlich**: Der Kursinhalt kann auf der Website aufgerufen werden
- **Auf Einladung**: Teilnehmer brauchen einen Portal-Benutzer

Damit Teilnehmer einen Portal-Benutzer erhalten, muss dieser erstellt werden.

### Stichwörter anlegen

Navigieren Sie im Backend nach _eLearning > Konfiguration > Kurs-Stichwörter_ und wählen Sie den ersten Eintrag und bearbeiten Sie diesen.

Stichwörter können gruppiert werden, das heisst es gibt Stichwörter-Gruppen, die jeweils mehrere Stichwörter enthalten.

### Kursinhalte anlegen

Navigieren Sie im Backend nach _eLearning > Kurse > Wählen den Kurs > Tab Inhalt_ und klicken auf _Einen Inhalt hinzufügen_. Sie haben diese Kursypen zur Auswahl:

- **Website**: Sie erfassen Inhalte mit dem Website-Editor
- **Infografik**: Sie laden ein einziges Bild mit dem Kursinhalt hoch
- **Präsentation**: Der Kursinhalt ist eine Powerpoint-Präsentation
- **Dokument**: Der Kursinhalt ist eine Dokument
- **Video**: Der Kursinhalt ist verlinktes Video
- **Quiz**: Sie erfassen ein Quiz im entsprechenden Tab
- **Zertifizierung**: Kopplung mit der App [Umfragen](Survey.md)

### Kurs Inhalt freigeben

Damit Kursteilnehmer den Kurs und die Inhalte sehen, muss dieser immer freigeben werden. Wählen Sie für den Inhalt _eLearning > Kurs > Inhalte_ aus und klicken Sie auf _Gehe zu Website_. Publizieren Sie den Inhalt mit Button _Unveröffentlicht_ oben rechts. Dasselbe funktioniert für Kurse.

![](attachments/Website%20Inhalt%20veröffentlicht.png)

### Teilnehmer einladen

Jeder Kurs hat eine individuelle Teilnehmerliste. Wenn Sie unter _eLearning > Kurs auswählen_ den Link _Teilnehmer_ anklicken, erscheint eine Liste mit _Name_ und _E-Mail_. Hier können Sie Tabellendatei mit den Teilnehmer importieren.

::: warning
Jeder Teilnehmer braucht einen Portal-Benutzer.
:::

Die Einladungsmail sieht ungefwähr so aus:

![](attachments/eLearning%20Einladungsmail.png)

### Automatisch eingeschriebene Gruppen festlegen

Ein Benutzer mit Zugriff auf den [Entwicklermodus](Settings.md#Entwicklermodus%20aktivieren) kann auf dem Kurs eine Gruppe hinterlegen, deren Mitglieder automatisch als Teilnehmer aufgeführt werden.

![](attachments/eLearning%20Automatisch%20eingeschriebene%20Gruppe.png)

::: warning
Jeder Teilnehmer erhählt eine Einladung via E-Mail.
:::

### Quiz hinzufügen

Im Tab _Quiz_ eines Inhalts können Sie eine Frage mit mehreren Antworten erstellen.

### Zertifizierung erfassen

Beim Abschluss einer Umfrage können den Teilnehmer Zertifikate vergeben werden. Navigieren Sie nach _eLearning > Kurse > Zertifizierungen_. Hier können Sie eine [Umfrage erstellen](Survey.md#Umfrage%20erstellen), die als Zertifizierung verfügbar ist.

Die Zertifizierung kann als Inhaltstyp _Zertifizierung_ mit einem Kursinhalt verknüpft werden.

## Auswertung

### Leaderboard und Achievements ausblenden

Navigieren Sie zur ihrer Website und öffnen Sie die Kursseite. Wählen Sie _Bearbeiten_ und klicken anschliessend auf _Anpassen_. Im geöffneten Menu können Leaderboards und Achievements deaktiviert werden.

![](attachments/eLearning%20Deaktivieren%20Leaderboard.png)

### Kursabsolventen anzeigen

Die Absolventen eines Kurses sehen Sie unter _eLearning > Kurs auswählen_ und auf Vorschau _Absolventen_ anklicken. Hier werden alle Teilnehmer aufgelistet, die den Kurs absolviert haben.
