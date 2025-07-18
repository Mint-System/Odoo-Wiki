---
title: Certificate Planner
description: Anleitung zur Odoo-App Certificate Planner.
kind: howto
tags:
- Mint-System
prev: ./
---
# Certificate Planner
![](attachments/icon_odoo_certificate_planer.png)

{{ $frontmatter.description }}

Technisch: `certificate_planer`\
Repository: <https://github.com/Mint-System/Certificate-Planner>

## Verwendung

### Certificate Planner aufrufen

Nachdem Sie sich eingeloggt haben, können Sie den Certificate Planner über das App-Dashboard aufrufen.

![](attachments/Certificate%20Planner%20aufrufen.gif)

## Umfrage

### Umfrage-Vorlagen definieren

Navigieren Sie nach *Umfragen* und öffnen oder erstellen Sie die Umfrage, welche für den Certificate Planner zur Verfügung gestellt werden soll. Aktivieren Sie die Option *Certificate Planner* unterhalb des Umfragetitels.

Navigieren Sie nach *Einstellungen > Certificate Planner > Umfragen*. Wählen Sie hier die entsprechenden Vorlagen aus. Es werden nur Umfragen angezeigt, welche die Option *Certificate Planner* aktiviert haben.

### Change-Umfrage starten

Wenn Sie einen Change unter *Certificate Planner > Certificate > Changes* anzeigen, können Sie im Tab die *Survey* die Aktion *Start Survey* wählen. Es öffnet sich eine neue Seite mit der Umfrage. Nach dem Ausfüllen der Umfrage kehren Sie zurück und wählen die Aktion *Reload Survey Result Lists*. Bearbeiten Sie den Change und wählen Sie das neue Antwort-Set aus.

![](attachments/Certificate%20Planner%20Umfrage%20ausfüllen.gif)

### Change-Umfrage-Revision erstellen

Miter Aktion *Revise Survey* können Sie auf einem Change *Certificate Planner > Certificate > Changes > Change wählen > Tab Survey* eine neue Umfrage starten. Die Version der letzten Antwort wird übernommen und inkrementiert. So können nachvollziehbar Revisionen angelegt werden.

![](attachments/Certificate%20Planner%20Umfrage-Revision%20erstellen.gif)

## Dokument

### Kommentar bei Dokument hinterlassen

Zur Rücksprache und Besprechung können Sie bei Dokumente einen Kommentar hinterlassen.

![](attachments/Certificate%20Planner%20Kommentar%20bei%20Dokument%20hinterlassen.gif)

### Mehrere Dokumentrevisionen bearbeiten

Für bestimmte Listenansichten steht die Massenbearbeitung zur Verfügung.

![Certificate Planner Massenbearbeitung](attachments/Certificate%20Planner%20Massenbearbeitung.gif)

### Dokumentbericht erstellen

Berichte zu einem Dokument können Sie mit der Aktion *Document Report* erstellen.

![](attachments/Certificate%20Planner%20Dokumentbericht%20erstellen.gif)

## Import

### Mehrere Dokumente und Parts importieren

Mit der richtigen Vorbereitung können Dokumente, Parts und deren Beziehung in zwei Schritten importiert werden.

Als erstes gilt es eine Tabelle mit folgenden Aufbau anzulegen:

| id                                             | name        | title              | type_id | description | part_ids/id                                                                               | id                                           | name            | designation        |
| ---------------------------------------------- | ----------- | ------------------ | ------- | ----------- | ----------------------------------------------------------------------------------------- | -------------------------------------------- | --------------- | ------------------ |
| __export__.certificate_planer_document_9999999 | 001-9999999 | Seat Adapter Assy. | ADWG    |             | __export__.certificate_planer_part_9999999_1,__export__.certificate_planer_part_9999999_2 | __export__.certificate_planer_part_9999999_1 | 001-9999999-501 | Seat Adapter Assy. |
|                                                |             |                    |         |             |                                                                                           | __export__.certificate_planer_part_9999999_2 | 001-9999999-502 | Seat Adapter Assy. |

Auf der linken Seite der Tabelle von `id` bis `description` sind die Dokumente. Auf der rechten Seite von `id` bis `designation` sind die Parts. Anhand des Feldes `id` kann man Beziehungen erstellen. Im Feld `part_ids/id` gilt es mit der Formel `=TEXTJOIN(",",1,G2:G3)` die Part IDs als Komma-getrennter Text darzustellen.

Im ersten Schritt importiert man die Parts:

![Certificate Planner Importieren Document und Parts 1](attachments/Certificate%20Planner%20Importieren%20Document%20und%20Parts%201.gif)

Anschliessend importiert man die Dokumente und Beziehungen:

![Certificate Planner Importieren Document und Parts 2](attachments/Certificate%20Planner%20Importieren%20Document%20und%20Parts%202.gif)

Natürlich kann man weitere Felder und Beziehungen hinzufügen. Mit dem Feld `id` kann man eine eindeutige Referenz nach dem Import.

## Entwicklung

### Feedback erstellen

Haben Sie eine Rückmeldung zur App, können Sie diese als Notiz dem Entwickler mitteilen.

![](attachments/Certificate%20Planner%20Feedback%20erstellen.gif)

## Berechtigungen

### Zugriff auf Certificate Planner Umfrage-Antworten erteilen

Damit Benutzer der Gruppe *Certificate Planner Document Manager* Zugriff auf Umfrage-Antworten erhalten braucht es eine Anpassung der Berechtigungen. Navigieren Sie nach *Einstellungen > Benutzer und Unternehmen > Gruppen* und zeigen Sie die Gruppe *Certificate Planner / Manager - Document* an. Führen Sie die Aktion [Zugriffsrechte auf Gruppe vergeben](Settings%20Permissions.md#Zugriffsrechte%20auf%20Gruppe%20vergeben) mit diesen Parametern aus:

* **Name**: `mint_system.survey.user_input.read`
* **Objekt**: `survey.user_input`
* **Berechtigung**: Setze Leseberechtigung

* **Name**: `mint_system.survey.user_input.line.read`
* **Objekt**: `survey.user_input.line`
* **Berechtigung**: Setze Leseberechtigung

* **Name**: `mint_system.survey.survey.read`
* **Objekt**: `survey.survey`
* **Berechtigung**: Setze Leseberechtigung
