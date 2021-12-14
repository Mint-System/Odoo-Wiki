---
tags:
- HowTo
- Drittanbieter
---
[> Home](/)
# Certificate Planner
![](assets/icon_odoo_certificate_planer.png)

Anleitung zur Odoo-App Certificate Planner.

Technisch: `certificate_planer`\
Repository: <https://github.com/Mint-System/Certificate-Planner>

## Certificate Planner aufrufen

Nachdem sie sich eingeloggt haben, können sie den Certificate Planner über das App-Dashboard aufrufen.

![](assets/Certificate%20Planner%20aufrufen.gif)

## Dokumentbericht erstellen

Berichte zu einem Dokument können sie mit der Aktion *Document Report* erstellen.

![](assets/Certificate%20Planner%20Dokumentbericht%20erstellen.gif)

## Feedback erstellen

Haben sie eine Rückmeldung zur App, können sie diese als Notiz dem Entwickler mitteilen.

![](assets/Certificate%20Planner%20Feedback%20erstellen.gif)

## Kommentar bei Dokument hinterlassen

Zur Rücksprache und Besprechung können sie bei Dokumente einen Kommentar hinterlassen.

![](assets/Certificate%20Planner%20Kommentar%20bei%20Dokument%20hinterlassen.gif)

## Mehrere Dokumentrevisionen bearbeiten

Für bestimmte Listenansichten steht die Massenbearbeitung zur Verfügung.

![Certificate Planner Massenbearbeitung](assets/Certificate%20Planner%20Massenbearbeitung.gif)

## Mehrere Dokumente und Parts importieren

Mit der richtigen Vorbereitung können Dokumente, Parts und deren Beziehung in zwei Schritten importiert werden.

Als erstes gilt es eine Tabelle mit folgenden Aufbau azulegen:

| id                                             | name        | title              | type_id | description | part_ids/id                                                                               | id                                           | name            | designation        |
| ---------------------------------------------- | ----------- | ------------------ | ------- | ----------- | ----------------------------------------------------------------------------------------- | -------------------------------------------- | --------------- | ------------------ |
| __export__.certificate_planer_document_9999999 | 001-9999999 | Seat Adapter Assy. | ADWG    |             | __export__.certificate_planer_part_9999999_1,__export__.certificate_planer_part_9999999_2 | __export__.certificate_planer_part_9999999_1 | 001-9999999-501 | Seat Adapter Assy. |
|                                                |             |                    |         |             |                                                                                           | __export__.certificate_planer_part_9999999_2 | 001-9999999-502 | Seat Adapter Assy. |

Auf der linken Seite der Tabelle von `id` bis `description` sind die Dokumente. Auf der rechten Seite von `id` bis `designation` sind die Parts. Anhand des Feldes `id` kann man Beziehungen erstellen. Im Feld `part_ids/id` gilt es mit der Formel `=TEXTJOIN(",",1,G2:G3)` die Part IDs als kommagetrennter Text darzustellen.

Im ersten Schritt importiert man die Parts:

![Certificate Planner Importieren Document und Parts 1](assets/Certificate%20Planner%20Importieren%20Document%20und%20Parts%201.gif)

Anschliessend importiert man die Dokumente und Beziehungen:

![Certificate Planner Importieren Document und Parts 2](assets/Certificate%20Planner%20Importieren%20Document%20und%20Parts%202.gif)

Natürlich kann man weitere Felder und Beziehungen hinzufügen. Mit dem Feld `id` kann man eine eindeutige Referenz nach dem Import.