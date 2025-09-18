---
title: Personalbeschaffung
description: Einstellungsprozess leicht gemacht.
kind: howto
prev: ./
partner: Odoo S.A.
---
# Personalbeschaffung
![icons_odoo_hr_recruitment](attachments/icons_odoo_hr_recruitment.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/recruitment>

## Erweiterungen

| Erweiterung                                                 | Beschreibung                     |
| ----------------------------------------------------------- | -------------------------------- |
| [HR Recruitment Firstname](HR%20Recruitment%20Firstname.md) | Vor- und Nachname auf Bewerbung. |

## Job-Angebote

### Arbeitstellen definieren

Definieren Sie bestehende und neue Arbeitstellen unter *Personalbeschaffung > Konfiguration > Arbeitsstellen*.

![](attachments/Personalbeschaffung%20Arbeitsstelle.png)

### Arbeitstelle publizieren

Arbeitstellen können über die Odoo Website publiziert werden. Klicken Sie auf *Gehe zu Website* und anschliessend auf *Unveröffentlicht* um die Stelle zu publizieren.

![Personalbeschaffung Stelle publizieren](attachments/Personalbeschaffung%20Stelle%20publizieren.gif)

### Arbeitstelle bearbeiten

Auf der Odoo Website können Sie mit dem Website-Editor die Stellenbeschreibung anpassen. Bearbeiten Sie eine Stellenbeschreibung via *Personalbeschaffung > Arbeitsstelle auswählen > Stellenbeschreibung*.

![Personalbeschaffung Stellenbeschreibung](attachments/Personalbeschaffung%20Stellenbeschreibung.gif)

Klicken Sie auf auf den Pfeil neben *Bearbeiten* und dann auf *Im Backend bearbeiten* um die normale Ansicht zurückzukehren.

## Bewerbung

### Bewerbungen hochladen

Über das Bewerbungsformular auf der Website können Bewerbernde ihre Dokumente und Informationen hochladen.

![](attachments/Personalbeschaffung%20Bewerbungsformular.png)

Im Backend wird die Bewerbung sichtbar.

![](attachments/Personalbeschaffung%20Backend.png)

### Qualifizierungsstufen bearbeiten

Jede Bewerbung durchläuft verschiedene Qualifizierungsstufen. Navigieren Sie nach *Personalbeschaffung > Konfiguration > Stufen* um diese zu bearbeiten.

Im Feld *E-Mail Vorlage* definieren Sie die Nachricht, welche beim Erreichen der Stufe versendet werden soll. Lassen Sie das Feld leer, damit keine Nachricht verschickt wird.

### Alle Bewerbungen anzeigen

Rufen Sie *Personalbeschaffung > Bewerbungen > Alle Bewerbungen* auf.

### Bewerbung qualifizieren

Wollen Sie einen Bewerbenden einladen, verschieben Sie die Bewerbung in der Kanban- oder Formular-Ansicht auf die nächste Stufe.

![](attachments/Personalbeschaffung%20Nächste%20Stufe.png)

Odoo verschickt automatisch eine E-Mail an die Absenderadresse.

![](attachments/Personalbeschaffung%20Gratulation.png)

### Ausbildungsabschlüsse definieren

Rufen Sie *Personalbeschaffung > Konfiguration > Ausbildungsabschlüsse* auf um die Titel zu definieren. Auf der Formularansicht der Bewerbung weisen Sie diesen über das Feld *Abschluss* zu.

## Onboarding

### Mitarbeiter aus Bewerbung anlegen

Wurde der Vertrag unterschrieben, können Sie aus der Bewerbung einen Mitarbeitenden anlegen. Klicken Sie dazu auf *Mitarbeiter anlegen* und bestätigen Sie den Vorgang.

![](attachments/Personalbeschaffung%20Bestätigung.png)

Anschliessend können Sie Onboarding-Pläne für den Mitarbeitenden starten.

## Berechtigung

### Neue Berechtigungsgruppe Verantwortlich anlegen

Gehen Sie nach *Einstellungen > Benutzer und Unternehmen > Gruppen* und erstellen Sie eine Kopie von *Personalbeschaffung / Personalsachbearbeiter*. Geben Sie als Namen *Verantwortlich* ein und entfernen Sie die Einträge im Tab *Benutzer*, *Vererbt* und *Datensatzregeln*.

Legen Sie auf dem Datenmodell diese *Datensatzregeln* fest:

**Name**: Stelle Verantwortlich\
**Objekt**: `hr.job`\
**Domain**: `[('user_id','=',user.id)]`

**Name**: Job Verantwortlich\
**Objekt**: `hr.applicant`\
**Domain**: `[('user_id','=',user.id)]`

<!--
Fügen Sie die Gruppe *Verantwortlich* im Tab *Vererbt* von *Personalbeschaffung / Personalsachbearbeiter* hinzu. Damit ist sichergestellt, dass jeweils nur eine Option in den Einstellung augewählt werden kann:

![](assets/Personalbeschaffung%20Einstellungen%20Verantwortlich.png)
-->

Legen Sie auf einer Stelle einen Benutzer als *Verantwortlich* fest. Jene Benutzer mit der Berechtigung *Verantwortlich* sehen nur noch ihre Stellen und Bewerbungen.

![](attachments/Personalbeschaffung%20Verantworltich.png)

## Benachrichtigung

### Bei neuen Bewerbungen benachrichtigen 

Damit Sie eine Benachrichtigung beim Eingang einer Bewertung erhalten, müssen Sie die entpsrechende Stelle abonnieren. Navigieren Sie nach *Personalbeschaffung* und bearbeiten Sie eine Stelle. Führen Sie [Eigener Follower hinzufügen](Dialog.md#Eigener%20Follower%20hinzufügen) und [Follower bearbeiten](Dialog.md#Follower%20bearbeiten) aus. Aktivieren Sie die Option *Neue Bewerbung*.


![](attachments/personalbeschaffung%20benachrichtigung.png)