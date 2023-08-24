---
title: Einstellungen Berechtigungen
description: Einstellungen zu Zugriffsrechten und Gruppen.
tags:
- HowTo
prev: ./settings
---
# Einstellungen Berechtigungen
![icons_odoo_settings](attachments/icons_odoo_settings.png)

{{ $frontmatter.description }}

## Benutzerrechte

### Kundenregistration erlauben

Damit sich Besucher der Website im Odoo-Portal registrieren können, muss die Option *Einstellungen > Allgemeine Einstellungen > Berechtigungen > Kundenkontro > Kostenlose Anmeldung* aktiviert sein.

### Rollen erstellen

::: warning
Diese Anleitung erfordert das Modul `base_user_role`.
:::

Die Gruppenrechte können mit Benutzerrollen zusammengefasst werden. Mit der entsprechenden Erweiterung kann man Rollen erstellen, Gruppen hinzufügen und diese für einen Benutzer aktivieren.

Navigieren Sie nach *Einstellungen > Benutzer und Unternehmen > Roles* und wählen Sie *Neu*. Erstellen Sie zur Initiierung eine Administratoren-Rolle mit diesen Angaben:

![](attachments/Odoo%20Einstellungen%20Benutzerrolle%20Administrator.png)

Weisen Sie im Tab *Benutzer* die Rolle einem Benutzer zu. Ist die Rolle aktiv, überschreibt Sie die existierenden Berechtigungen.

### Benutzerrechte vergeben

Navigieren Sie nach *Einstellungen > Allgemeine Einstellungen > Benutzer* und klicken auf *Benutzer verwalten*. Wählen Sie den Benutzer, dessen Zugriffsrechte Sie verändern möchten. Drücken Sie auf *Bearbeiten* und wählen Sie nun über die Dropdown oder Checkboxen die Rollen und Zugriffe aus.

![Odoo Benutzerrechte](attachments/Einstellungen%20Benutzerrechte.png)

Klicken Sie auf speichern um den Vorgang abzuschliessen.

::: warning
Damit die neuen Rechte für den Benutzer sichtbar sind, muss dieser den Browser aktualisieren.
:::

## Gruppenberechtigung

### Benutzer-Gruppen anzeigen

Gruppen verwalten Sie unter *Einstellungen > Benutzer und Unternehmen > Gruppen*.

### Benutzer-Gruppe erstellen

Navigieren Sie nach *Einstellungen > Benutzer und Unternehmen > Gruppen* und erstellen Sie einen neuen Eintrag.

* **Name**: Name der Gruppe.
* **Anwendung**: Zuordnung zu Odoo-App.
* **Benutzer**: Auswal der Mitglieder.
* **Vererbt**: Mitglieder dieser Gruppe werden zu den hier ausgewählten Gruppen hinzufgefügt.
* **Menüs**: Sichtbarkeit von Menu-Einträgen.
* **Ansichten**: Sichtbarkeit von von Ansichten.
* **Zugriffsrechte**: Zugriffsrechte auf Datenmodelle.
* **Rechte für Daten**: Filterung von Daten. Übersteuert Zugriffsrechte.

### Rechte auf Daten für Gruppe anpassen

Um die Rechte auf Daten für eine bestimmte Gruppe anzupassen, navigieren Sie nach *Einstellungen > Benutzer und Unternehmen > Gruppen*. Zeiten Sie Gruppe an und öffnen Sie den den Tab *Rechte auf Daten*.

## Zugriffsrechte

### Zugriffsrechte anpassen

Navigieren Sie nach *Einstellungen > Technisch > Zugriffsrechte* und suchen Sie den Eintrag anhand es Namens. Passen Sie die Berechtigungen auf dieser Ansicht an.

### Zugriffsrechte auf Datenmodell vergeben

Wenn Sie einer ausgwewählten Gruppe Zugriffsrechte auf ein Datenmodell vergeben möchten, navigieren Sie nach *Einstellungen > Technisch > Datenmodelle*. Rufen Sie hier das ausgewählten Datenmodell auf und zeigen Sie den Tab *Zugriffsrechte* an. Erstellen Sie einen neuen Eintrag mit diesen Angaben:

* **Name**: Geben Sie einen namen im Schema `$COMPANY.$.$MODUL.$XML_ID.$OPERATION` ein. Dazu ein Beispiel: `mint_system.sale.order.read`.
* **Gruppe**: Wählen Sie die Gruppe aus, welche die Zugriffsrechte erhält.
* **Berechtigung**: Wählen Sie die passende Berechtigungen aus.

### Rechte für Daten auf Datenmodell vergeben

Wenn Sie einer augwewählten Gruppe Rechte für Daten auf einem Datenmodell vergeben möchten, navigieren Sie nach *Einstellungen > Technisch > Datenmodelle*. Rufen Sie hier das ausgewählten Datenmodell auf und zeigen Sie den Tab *Rechte für Daten* an. Erstellen Sie einen neuen Eintrag mit diesen Angaben:

* **Name**: Geben Sie hier den ganzen Namen der Anwendung und Gruppe ein.
* **Gruppe**: Wählen Sie ein oder mehrere Gruppen aus.
* **Domain**: In diesem Feld konfigurieren Sie den Filter.
* **Berechtigung**: Bestimmen Sie die passenden Berechtigungen aus.

### Rechte für Daten auf Gruppe vergeben

Wenn Sie einer Rechte für Daten für eine Gruppe vergeben möchten, navigieren Sie nach *Einstellungen > Benutzer und Unternehmen > Gruppen* und zeigen die ausgewählte Gruppe an. Navigieren Siezum Tab *Rechte für Daten* und Erstellen Sie einen neuen Eintrag mit diesen Angaben:

* **Name**: Geben Sie hier den Namen des Datenmodell mit Beschreibung der Berechtigung ein.
* **Modell**: Wählen Sie hier das Datenmodell aus .
* **Domain**: Legen Sie den Zugriffs-Filter für die Daten fest.
* **Berechtigung**: Wählen Sie die passenden Berechtigungen aus.

## App-Berechtigungen

### Berechtigungen zurücksetzen

Bei einem Modul- oder Odoo-Upgrade können sich die Berechtigungsstrukturen ändern. Falls sich diese nicht korrekt verhalten, kann man die Berechtigungen zurücksetzen. Als Anwendungsfall nehmen wir die Berechtigungen für [HR Attendance](HR%20Attendance.md).

Eine Fehlerhafte Struktur wird in der Ansicht Benutzerberechtiung beispielsweise so darsgestellt:

![](attachments/Einstellungen%20fehlerhafte%20Berechtigungsstruktur.png)

Zur Bereinigung öffnen Sie als erstes *Einstellungen > Technisch > Sicherheit > Zugriffsrechte*. Suchen Sie hier nach Einträgen mit Modul `hr_attendance` und löschen Sie diese.

Als nächstes öffnen Sie *Einstellungen > Benutzer und Unternehmen > Gruppen* und  suchen nach *Anwesenheit*. Öffnen Sie jede Gruppe  entfernen Sie im Tab *Benutzer* und *Reche für Daten* alle Einträge.

Zuletzt installiere Sie die App `hr_attendance` neu. Nun sollten die Ursprünglichen Berechtigungsstrukturen wiederhergestellt sein.

![](attachments/Einstellungen%20Berechtigungen%20korrigiert.png)