# Personalabrechnung
![icons_odoo_hr_payroll](assets/icons_odoo_hr_payroll.png)

## Pesonalabrechnung initialisieren

Damit sie die Personalabrechnung für ihre Mitarbeiter erstellen können, müssen einige vorbereitungen getroffen werden.

Dazu eine Übersicht:
* [Mitarbeiter erfassen](Personal.md#Personal#Mitarbeiter%20erfassen)
* [Private Adresse hinterlegen](Personal.md#Private%20Adresse%20hinterlegen)
* [Arbeitsvertrag hinzufügen](Personal.md#Arbeitsvertrag%20hinzuf%C3%BCgen)
* [Bankverbindung hinterlegen](#Bankverbindung%20hinterlegen)
* [Anteile Arbeitgeber / Arbeitnehmer konfigurieren](#Anteile%20Arbeitgeber%20Arbeitnehmer%20konfigurieren)
* [Lohnarten definieren](#Lohnarten%20definieren)
* [Finanzkonten den Lohnarten zuweisen](#Finanzkonten%20den%20Lohnarten%20zuweisen)
* [Gehaltsinformationen eingeben](#Gehaltsinformationen%20eingeben)

Konfigurieren sie diese Punkte, erst dann können sie die [Lohnabrechnung erstellen](#Lohnabrechnung%20erstellen).

## Bankverbindung hinterlegen

Zur Auszahlung des Lohns über SEPA müssen sie den Mitarbeiter ein Bankkonto hinterlegen. Navigieren sie nach *Pesonal > Mitarbeiter auswählen > Bearbeiten > Tab Private Information* und erfassen sie ein Bankkonto unter *Bankverbindung*.

## Anteile Arbeitgeber / Arbeitnehmer konfigurieren

Die Anteile des Arbeitgebener und Arbeitnehmer können als Vorlage erfasst werden. Die Anteile werde werden dem Arbeitsvertrag zugewiesen.

Möchten sie eine neue Vorlage erstellen, öffnen sie *Personalabrechnung > Konfiguration > Anteile Arbeitgeber / Arbeitnehmer* und wählen *Anlegen.*

Geben sie einen Namen mit Jahresdatum ein und legen sie die Fix- und Prozentwerte fest.

![](assets/Pesonalabrechnung%20Anteile%20Arbeitnehmer%20Arbeitgebener.png)

## Lohnarten definieren

::: tip
Das sind die Regeln, die Informationen über die Gehaltsberechnung liefern. Diese Regeln werden von odoo gemäss der Reihenfolge ihrer Sequenznummer interpretiert. Die Regeln können verwendet werden, um Buchungen zu erzeugen, ohne dass diese in der Gehaltsliste sichtbar sind.
:::

Die Lohnregel sind unter *Personalabrechnung > Konfiguration > Regeln* definiert. Überprüfen sie alle Regeln und legen sie fest welche auf dem Lohnzettel erscheinen sollen.

Regeln für die sie keine Verwendung haben, können sie archivieren.

## Finanzkonten den Lohnarten zuweisen

Damit  die Lohnabrechnung auch in der Finanzbuchhaltung ersichtlich ist, müssen sie für alle Lohnregeln die entsprechenden Soll- und Habenkonten hinterlegen. Eine Übersicht dazu finden sie unter [Best-Practice Lohnbuchhaltung](Best-Practice-Lohnbuchhaltung.md).

Navigieren sie nach *Personalabrechnung > Konfiguration > Regeln > Regel auswählen > Beareiten > Tab Finanzen* und weisen sie dort die Konten zu.

![](assets/Personalbrechnung%20Finanzkonten.png)

## Lohnabrechnung erstellen

Lohnabrechnung können für mehre oder einzelne Mitarbeiter ausgeführt werden.

**Einzeln**

Um eine einzelne Lohnabrechnung zu erzeugen wählen sie den Mitarbeiter aus *Personal > Mitarbeiter auswählen* und klicken auf den Link *Abrechnungen Mitarbeiterverfügung* und wählen *Anlegen*.

![Personalabrechnung Einzeln anlegen](assets/Personalabrechnung%20Einzeln%20anlegen.gif)

Legen sie die Zeitperiode fest, speichern sie den Eintrag und drücken *Berechnen*. Nun wird die Lohnabrechnung erstellt und ist bereit zur Verbuchung.

**Batch**

Navigieren sie nach *Personalabrechnung > Work Entries > Work Entries* und wählen den aktuellen Monat. Starten sie den Batch-Vorgang mit *Lohnabrechnung erzeugen*. Für jeden Mitarbeiter wird nun eine Lohnabrechnung erzeugt und steht bereit zur Prüfung.

![](assets/Personalbrechung%20Lohnabrechnung%20%C3%BCberpr%C3%BCfen.png)

Mit *Create draft entry* werden die einzelnen Lohnabrechnungen berechnet und eine Buchung vorbereitet.

## Lohnabrechnung verbuchen

Wählen sie eine aktuelle Lohnabrechnung, die im Status *Erledigt* ist: *Personalabrechnung > Abrechnung Mitarbeitervergütung > All Payslips > Payslip auswählen*. Öffnen sie den Tab *Finanzen* und klicken auf den Link unter *Buchung*.

![](assets/Personalbrechnung%20Buchung.png)

Hier werden alle Buchungen der Lohnabrechnung aufgeführt.

::: warning
Werden die Lohnzahlung als Batch verarbeitet, müssen alle Lohnabrechnungen bestätigt sein, damit eine Zahlung ausgelöst werden kann.
:::

## Gehaltsinformationen eingeben

Die Gehaltsinformationen der Mitarbeiter legen sie via *Pesonal > Mitarbeiter auswählen > Link Verträge > Arbeitsvertrag auswählen > Bearbeiten > Tab Gehaltsinformationen* fest.

## Variable Eingaben mit Lohnart verbuchen

Um variable Eingaben in der Lohnzahlungen abzurechnen, müssen sie diese Eingaben definieren und einer Lohnart hinterlegen. Bei der Abrechnung wird die Lohnart mitgerechnet.

Als erstes müssen sie für eine bestehende Lohnstruktur eine Eingabe definieren. Navigieren sie nach *Personalabrechnung > Konfiguration > Structure* und wählen sie die Lohnstruktur aus. Erstellen sie im Tab *Ohter Input* eine Eingabe. Hierzu ein Beispiel für einen zusätzlichen Quellensteuerabzug:

![](assets/Personalabrechnung%20Eingabe%20Quellensteuer.png)

Damit der Betrag in der Lohnabrechnung berücksichtigt wird, muss dieser als Lohnart definiert werden. Erstellen sie eine neue Lohnart in der bestehenden Lohnstruktur. Dazu ein Beispiel wie man diese für den Quellensteuerabzug definiert:

![](assets/Personalabrechnung%20Lohnart%20von%20Inputs.png)

Beim Berechnen werden variable Eingaben in der Lohnabrechnung miteinbezogen.

## Lohnabrechnung entfernen

Eine verbuche Lohnabrechnung lässt sich nicht mehr löschen oder abbrechen. Zumindest ist das im Status *Erledigt* nicht möglich. Wurde eine Lohnzahlung als bezahlt markiert, kann sie jedoch wieder entfernt werden.

Öffnen sie die zu löschende Lohnabrechung *Personalabrechung > Abrechnungen Mitarbeitervergütung > All Paylips*. Ist die Abrechnung im Status *Erledigt*, wählen sie *Erfasse Zahlung*. Odoo erstellt eine Zahlungsdatei, die sie ignorieren können. Wählen sie *Aktion > Abbrechen*. Nun ist ist die Abrechnung im Status *Abgelehnt*. Nun können sie den Eintrag mit *Aktion > Löschen* entfernen.

::: warning
Falls es auf dem Eintrag eine verknüpfte Buchung gibt, wird diese ebenfalls gelöscht.
:::