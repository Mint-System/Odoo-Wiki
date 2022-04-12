---
tags:
- HowTo
prev: ./
---
# Personalabrechnung
![icons_odoo_hr_payroll](assets/icons_odoo_hr_payroll.png)

Personalbrechnungen schnell und einfach erstellen.

| Erweiterung                                                               | Beschreibung                                 |
| ------------------------------------------------------------------------- | -------------------------------------------- |
| [Payroll Customizations Giordano](Payroll%20Customizations%20Giordano.md) | Lohnabrechnung nach Schweizer Anforderungen. |
| [Lohnmeldung](Lohnmeldung.md)                                             | Lohnmeldungen ganz einfach generieren.       |
| [Personalabrechnung Eingaben](Personalabrechnung%20Eingaben.md)           | Lohnabrechnungen mit variablen Eingaben.     |
| [Personalabrechnung Berichte](Personalabrechnung%20Berichte.md)                                           | Berichte für Lohnbuchhaltung erstellen.                                             |

## Pesonalabrechnung initialisieren

Damit Sie die Personalabrechnung für ihre Mitarbeiter erstellen können, müssen einige vorbereitungen getroffen werden.

Dazu eine Übersicht:
* [Mitarbeiter erfassen](Personal.md#Personal#Mitarbeiter%20erfassen)
* [Private Adresse hinterlegen](Personal.md#Private%20Adresse%20hinterlegen)
* [Arbeitsvertrag hinzufügen](Personal.md#Arbeitsvertrag%20hinzuf%C3%BCgen)
* [Bankverbindung hinterlegen](#Bankverbindung%20hinterlegen)
* [Anteile Arbeitgeber Arbeitnehmer konfigurieren](Payroll%20Customizations%20Giordano.md#Anteile%20Arbeitgeber%20Arbeitnehmer%20konfigurieren)
* [Lohnarten definieren](#Lohnarten%20definieren)
* [Finanzkonten den Lohnarten zuweisen](#Finanzkonten%20den%20Lohnarten%20zuweisen)
* [Gehaltsinformationen eingeben](#Gehaltsinformationen%20eingeben)

Konfigurieren Sie diese Punkte, erst dann können Sie die [Lohnabrechnung erstellen](#Lohnabrechnung%20erstellen).

## Bankverbindung hinterlegen

Zur Auszahlung des Lohns über SEPA müssen Sie den Mitarbeiter ein Bankkonto hinterlegen. Navigieren Sie nach *Pesonal > Mitarbeiter auswählen > Bearbeiten > Tab Private Information* und erfassen Sie ein Bankkonto unter *Bankverbindung*.

## Lohnarten definieren

::: tip
Das sind die Regeln, die Informationen über die Gehaltsberechnung liefern. Diese Regeln werden von odoo gemäss der Reihenfolge ihrer Sequenznummer interpretiert. Die Regeln können verwendet werden, um Buchungen zu erzeugen, ohne dass diese in der Gehaltsliste sichtbar sind.
:::

Die Lohnregel sind unter *Personalabrechnung > Konfiguration > Regeln* definiert. Überprüfen Sie alle Regeln und legen Sie fest welche auf dem Lohnzettel erscheinen sollen.

Regeln für die Sie keine Verwendung haben, können Sie archivieren.

## Finanzkonten den Lohnarten zuweisen

Damit  die Lohnabrechnung auch in der Finanzbuchhaltung ersichtlich ist, müssen Sie für alle Lohnregeln die entsprechenden Soll- und Habenkonten hinterlegen. Eine Übersicht dazu finden Sie unter [Best-Practice Lohnbuchhaltung](Best%20Practice%20Lohnbuchhaltung.md).

Navigieren Sie nach *Personalabrechnung > Konfiguration > Regeln > Regel auswählen > Beareiten > Tab Finanzen* und weisen Sie dort die Konten zu.

![](assets/Personalbrechnung%20Finanzkonten.png)

## Lohnabrechnung erstellen

Lohnabrechnung können für mehre oder einzelne Mitarbeiter ausgeführt werden.

**Einzeln**

Um eine einzelne Lohnabrechnung zu erzeugen wählen Sie den Mitarbeiter aus *Personal > Mitarbeiter auswählen* und klicken auf den Link *Abrechnungen Mitarbeiterverfügung* und wählen *Anlegen*.

![Personalabrechnung Einzeln anlegen](assets/Personalabrechnung%20Einzeln%20anlegen.gif)

Legen Sie die Zeitperiode fest, speichern Sie den Eintrag und drücken *Berechnen*. Nun wird die Lohnabrechnung erstellt und ist bereit zur Verbuchung.

**Batch**

Navigieren Sie nach *Personalabrechnung > Work Entries > Work Entries* und wählen den aktuellen Monat. Starten Sie den Batch-Vorgang mit *Lohnabrechnung erzeugen*. Für jeden Mitarbeiter wird nun eine Lohnabrechnung erzeugt und steht bereit zur Prüfung.

![](assets/Personalbrechung%20Lohnabrechnung%20%C3%BCberpr%C3%BCfen.png)

Mit *Create draft entry* werden die einzelnen Lohnabrechnungen berechnet und eine Buchung vorbereitet.

## Lohnabrechnung verbuchen

Wählen Sie eine aktuelle Lohnabrechnung, die im Status *Erledigt* ist: *Personalabrechnung > Abrechnung Mitarbeitervergütung > All Payslips > Payslip auswählen*. Öffnen Sie den Tab *Finanzen* und klicken auf den Link unter *Buchung*.

![](assets/Personalbrechnung%20Buchung.png)

Hier werden alle Buchungen der Lohnabrechnung aufgeführt.

::: warning
Werden die Lohnzahlung als Batch verarbeitet, müssen alle Lohnabrechnungen bestätigt sein, damit eine Zahlung ausgelöst werden kann.
:::

## Gehaltsinformationen eingeben

Die Gehaltsinformationen der Mitarbeiter legen Sie via *Pesonal > Mitarbeiter auswählen > Link Verträge > Arbeitsvertrag auswählen > Bearbeiten > Tab Gehaltsinformationen* fest.

## Lohnabrechnung entfernen

Eine verbuche Lohnabrechnung lässt sich nicht mehr löschen oder abbrechen. Zumindest ist das im Status *Erledigt* nicht möglich. Wurde eine Lohnzahlung als bezahlt markiert, kann Sie jedoch wieder entfernt werden.

Öffnen Sie die zu löschende Lohnabrechung *Personalabrechung > Abrechnungen Mitarbeitervergütung > All Paylips*. Ist die Abrechnung im Status *Erledigt*, wählen Sie *Erfasse Zahlung*. Odoo erstellt eine Zahlungsdatei, die Sie ignorieren können. Wählen Sie *Aktion > Abbrechen*. Nun ist ist die Abrechnung im Status *Abgelehnt*. Nun können Sie den Eintrag mit *Aktion > Löschen* entfernen.

::: warning
Falls es auf dem Eintrag eine verknüpfte Buchung gibt, wird diese ebenfalls gelöscht.
:::

## Lohnbuchungen abgleichen

Standardmässig werden die auszuzahlenden Löhne auf dem *Lohndurchlaufkonto* und dem Konto *Ausstehende Zahlungen* verbucht. Erfasst man für einen Lohnlauf eine Zahlung, importiert diese ins eBanking und gleicht den Beleg später ab, müssen Sie den Beleg mit dem Konto *Ausstehende Zahlungen* abgleichen.

## Lohnabrechnung neu berechnen

Haben Sie einen Fehler in einer erledigten Lohanbrechnung können Sie diese wie folgt neu berechnen. Erfassen Sie eine Zahlung, wenn dies nicht bereit getan ist. Wählen Sie *Aktion > Abbrechen*. Nun ist die Lohnabrechnung im Status Abgelehnt. Wählen Sie nun *Auf Entwurf Setzen* und nehmen Sie die Anpassungen vor. Ist alles erledigt, können Sie wie gewohnt die Lohnabrechnung berechnen lassen und bestätigen.

## Lohnabrechnungszeilen anzeigen

Damit Sie eine Übersicht der Lohnabrechnungszeilen erhalten, folgen Sie dem HowTo [Neue Ansicht mit Aktion hinzufügen](Entwicklung%20Aktionen.md#Neue%20Ansicht%20mit%20Aktion%20hinzufügen) und verwenden diese Werte:

Name der Aktion: `Lohnabrechnungszeilen`\
Objekt: `hr.payslip.line`\
Menü: `Lohnabrechnungszeilen`\
Obermenü: `Personalabrechnung/Berichtswesen`\
Aktion: `ir.actions.act_window` `Lohnabrechnungszeilen`
Nummernfolge: `90`

Das Ergebnis sollte so aussehen:

![](assets/Personalabrechnung%20Lohnabrechnungszeilen.png)

::: tip
Auf der Aktion *Lohnabrechnungszeilen* als *Ansichtsmodus* den Wert `pivot` anfügen.
:::

## Aktion "Lohnabrechnung zurücksetzen" hinzufügen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Lohnabrechnung zurücksetzen`\
Modell: `hr.payslip`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```py
for record in records:  
  record.write({'state': 'draft'})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

Im Formular der Lohnbuchung erscheint nun in der Auswahl *Aktion* das Menu *Lohnabrechnung zurücksetzen*.

## Aktion "Batch zurücksetzen" hinzufügen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Batch zurücksetzen`\
Modell: `hr.payslip.run`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```py
for record in records:
  record.write({'state': 'verify'})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

Im Formular der Batches erscheint nun in der Auswahl *Aktion* das Menu *Batch zurücksetzen*.