---
title: Einstellungen Berechtigungen
description: Einstellungen zu Zugriffsrechten und Gruppen.
kind: howto
prev: ./settings
---

# Einstellungen Berechtigungen

![icons_odoo_settings](attachments/icons_odoo_settings.png)

{{ $frontmatter.description }}

## Benutzerrechte

### Kundenregistration erlauben

Damit sich Besucher der Website im Odoo-Portal registrieren können, muss die Option _Einstellungen > Allgemeine Einstellungen > Berechtigungen > Kundenkonto > Kostenlose Anmeldung_ aktiviert sein.

### Rollen erstellen

::: warning
Diese Anleitung erfordert das Modul `base_user_role`.
:::

Die Gruppenrechte können mit Benutzerrollen zusammengefasst werden. Mit der entsprechenden Erweiterung kann man Rollen erstellen, Gruppen hinzufügen und diese für einen Benutzer aktivieren.

Navigieren Sie nach _Einstellungen > Benutzer und Unternehmen > Roles_ und wählen Sie _Neu_. Erstellen Sie zur Initiierung eine Administratoren-Rolle mit diesen Angaben:

![](attachments/Odoo%20Einstellungen%20Benutzerrolle%20Administrator.png)

Weisen Sie im Tab _Benutzer_ die Rolle einem Benutzer zu. Ist die Rolle aktiv, überschreibt Sie die existierenden Berechtigungen.

### Benutzerrechte vergeben

Navigieren Sie nach _Einstellungen > Allgemeine Einstellungen > Benutzer_ und klicken auf _Benutzer verwalten_. Wählen Sie den Benutzer, dessen Zugriffsrechte Sie verändern möchten. Drücken Sie auf _Bearbeiten_ und wählen Sie nun über die Dropdown oder Checkboxen die Rollen und Zugriffe aus.

![Odoo Benutzerrechte](attachments/Einstellungen%20Benutzerrechte.png)

Klicken Sie auf speichern um den Vorgang abzuschliessen.

::: warning
Damit die neuen Rechte für den Benutzer sichtbar sind, muss dieser den Browser aktualisieren.
:::

## Gruppenberechtigung

### Benutzer-Gruppen anzeigen

Gruppen verwalten Sie unter _Einstellungen > Benutzer und Unternehmen > Gruppen_.

### Benutzer-Gruppe erstellen

Navigieren Sie nach _Einstellungen > Benutzer und Unternehmen > Gruppen_ und erstellen Sie einen neuen Eintrag.

- **Name**: Name der Gruppe.
- **Anwendung**: Zuordnung zu Odoo-App.
- **Benutzer**: Auswal der Mitglieder.
- **Vererbt**: Mitglieder dieser Gruppe werden zu den hier ausgewählten Gruppen hinzufgefügt.
- **Menüs**: Sichtbarkeit von Menu-Einträgen.
- **Ansichten**: Sichtbarkeit von von Ansichten.
- **Zugriffsrechte**: Zugriffsrechte auf Datenmodelle.
- **Datensatzregeln**: Filterung von Daten. Übersteuert Zugriffsrechte.

### Datensatzregeln für Gruppe anpassen

Um die Datensatzregeln für eine bestimmte Gruppe anzupassen, navigieren Sie nach _Einstellungen > Benutzer und Unternehmen > Gruppen_. Zeiten Sie Gruppe an und öffnen Sie den den Tab _Datensatzregeln_.

### Gruppe auf Menüposten hinzufügen

Wenn Sie auf einem Menüposten bestimmte Zugriffsrechte vergeben möchten, navigieren Sie nach _Einstellungen > Technisch > Menüposten_. Zeigen Sie einen einen Menüposten an, beispielsweise _Apps_ und fügen Sie im Tab _Zugriffsrechte_ eine Gruppe hinzu.

## Zugriffsrechte

### Zugriffsrechte anzeigen

Wenn Sie den [Entwicklermodus aktivieren](Settings.md#Entwicklermodus%20aktivieren) können Sie im Kontext einer Ansicht die vergebenen Zugriffsrechte prüfen. Rufen Sie eine Ansicht auf, beispielsweise _Kontakte_ und wählen Sie _Entwicklertools > Zugriffsrechte anzeigen_. Nun erhalten Sie eine Liste der aktiven Zugriffsrechte.

### Zugriffsrechte anpassen

Navigieren Sie nach _Einstellungen > Technisch > Zugriffsrechte_ und suchen Sie den Eintrag anhand es Namens. Passen Sie die Berechtigungen auf dieser Ansicht an.

### Zugriffsrechte auf Datenmodell vergeben

Wenn Sie einer ausgewählten Gruppe Zugriffsrechte auf ein Datenmodell vergeben möchten, navigieren Sie nach _Einstellungen > Technisch > Modelle_. Rufen Sie hier das ausgewählten Datenmodell auf und zeigen Sie den Tab _Zugriffsrechte_ an. Erstellen Sie einen neuen Eintrag mit diesen Angaben:

- **Name**: Geben Sie einen namen im Schema `$COMPANY.$.$MODUL.$XML_ID.$OPERATION` ein. Dazu ein Beispiel: `mint_system.sale.order.read`.
- **Gruppe**: Wählen Sie die Gruppe aus, welche die Zugriffsrechte erhält.
- **Berechtigung**: Wählen Sie die passende Berechtigungen aus.

### Zugriffsrechte auf Gruppe vergeben

Wenn Sie einer ausgewählten Gruppe Zugriffsrechte auf ein Datenmodell vergeben möchten, navigieren Sie nach _Einstellungen > Gruppen_. Rufen Sie hier die ausgewählte Gruppe auf und zeigen Sie den Tab _Zugriffsrechte_ an. Erstellen Sie einen neuen Eintrag mit diesen Angaben:

- **Name**: Geben Sie einen namen im Schema `$COMPANY.$.$MODUL.$XML_ID.$OPERATION` ein. Dazu ein Beispiel: `mint_system.sale.order.read`.
- **Objekt**: Wählen Sie das Datenmodell aus.
- **Berechtigung**: Wählen Sie die passende Berechtigungen aus.

## Datensatzregeln

### Datensatzregeln anzeigen

Wenn Sie den [Entwicklermodus aktivieren](Settings.md#Entwicklermodus%20aktivieren) können Sie im Kontext einer Ansicht die Datensatzregeln anzeigen. Rufen Sie eine Ansicht auf, beispielsweise _Kontakte_ und wählen Sie _Entwicklertools > Datensatzregeln anzeigen_. Nun erhalten Sie eine Liste der aktiven Datensatzregeln.

### Datensatzregel anpassen

Wenn Sie eine bestehende Datensatzregel anpassen möchten, ist es am einfachsten wenn Sie diese duplizieren und das Original archivieren. Navigieren Sie nach _Einstellungen > Technisch > Datensatzregeln_ wählen Sie eine bestimmte Regel aus. Wählen Sie _Aktion > Duplizieren_ und passen Sie den Namen der Regel an. Kehren Sie auf die Listenansicht zurück und wählen Sie die originale Regel aus. Klicken Sie auf _Aktion > Archiv_.

### Datensatzregeln deaktivieren

Zeigen Sie _Einstellungen > Technisch > Sicherheit > Datensatzregeln_ an und öffnen Sie den ausgewählten Eintrag. Wählen Sie _Aktionen > Archiv_ um die Datensatzregel zu deaktivieren.

### Datensatzregeln auf Datenmodell vergeben

Wenn Sie einer ausgewählten Gruppe Datensatzregeln auf einem Datenmodell vergeben möchten, navigieren Sie nach _Einstellungen > Technisch > Modelle_. Rufen Sie hier das ausgewählten Datenmodell auf und zeigen Sie den Tab _Datensatzregeln_ an. Erstellen Sie einen neuen Eintrag mit diesen Angaben:

- **Name**: Geben Sie hier den ganzen Namen der Anwendung und Gruppe ein.
- **Gruppe**: Wählen Sie ein oder mehrere Gruppen aus.
- **Domain**: In diesem Feld konfigurieren Sie den Filter.
- **Berechtigung**: Bestimmen Sie die passenden Berechtigungen aus.

### Datensatzregeln auf Gruppe vergeben

Wenn Sie einer Datensatzregeln für eine Gruppe vergeben möchten, navigieren Sie nach _Einstellungen > Benutzer und Unternehmen > Gruppen_ und zeigen die ausgewählte Gruppe an. Navigieren Sie zum Tab _Datensatzregeln_ und Erstellen Sie einen neuen Eintrag mit diesen Angaben:

- **Name**: Geben Sie hier den Namen des Datenmodell mit Beschreibung der Berechtigung ein.
- **Modell**: Wählen Sie hier das Datenmodell aus.
- **Domain**: Legen Sie den Zugriffs-Filter für die Daten fest.
- **Berechtigung**: Wählen Sie die passenden Berechtigungen aus.

## App-Berechtigungen

### Berechtigungen zurücksetzen

Bei einem Modul- oder Odoo-Upgrade können sich die Berechtigungsstrukturen ändern. Falls sich diese nicht korrekt verhalten, kann man die Berechtigungen zurücksetzen. Als Anwendungsfall nehmen wir die Berechtigungen für [HR Attendance](HR%20Attendance.md).

Eine Fehlerhafte Struktur wird in der Ansicht Benutzerberechtigung beispielsweise so dargestellt:

![](attachments/Einstellungen%20fehlerhafte%20Berechtigungsstruktur.png)

Zur Bereinigung öffnen Sie als erstes _Einstellungen > Technisch > Sicherheit > Zugriffsrechte_. Suchen Sie hier nach Einträgen mit Modul `hr_attendance` und löschen Sie diese.

Als nächstes öffnen Sie _Einstellungen > Benutzer und Unternehmen > Gruppen_ und suchen nach _Anwesenheiten_. Öffnen Sie jede Gruppe entfernen Sie im Tab _Benutzer_ und _Reche für Daten_ alle Einträge.

Zuletzt installiere Sie die App `hr_attendance` neu. Nun sollten die Ursprünglichen Berechtigungsstrukturen wiederhergestellt sein.

![](attachments/Einstellungen%20Berechtigungen%20korrigiert.png)
