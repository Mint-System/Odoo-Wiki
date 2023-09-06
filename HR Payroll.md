---
title: Personalabrechnung
description: Personalbrechnungen schnell und einfach erstellen.
tags:
- HowTo
prev: ./
---
# Personalabrechnung
![icons_odoo_hr_payroll](attachments/icons_odoo_hr_payroll.png)

{{ $frontmatter.description }}

## Erweiterungen

| Erweiterung                                                     | Beschreibung                                |
| --------------------------------------------------------------- | ------------------------------------------- |
| [Gio Payroll Custom](Gio%20Payroll%20Custom.md)                 | Lohnarten für die Schweizer Lohnabrechnung. |
| [Lohnmeldung](Lohnmeldung.md)                                   | Lohnmeldungen ganz einfach generieren.      |
| [Personalabrechnung Aktionen](Personalabrechnung%20Aktionen.md) | Lohnabrechnung automatisieren.              |
| [Personalabrechnung Berichte](Personalabrechnung%20Berichte.md) | Berichte für Lohnbuchhaltung erstellen.     |
| [Personalabrechnung Eingaben](Personalabrechnung%20Eingaben.md) | Lohnabrechnungen mit variablen Eingaben.    |

## Konfiguration

### Personalabrechnung initialisieren

Damit Sie die Personalabrechnung für ihre Mitarbeiter erstellen können, müssen einige vorbereitungen getroffen werden.

Dazu eine Übersicht:
* [Mitarbeiter erfassen](HR.md#Personal#Mitarbeiter%20erfassen)
* [Arbeitsvertrag hinzufügen](HR.md#Arbeitsvertrag%20hinzufügen)
* [Private Adresse hinterlegen](HR.md#Private%20Adresse%20hinterlegen)
* [Bankverbindung hinterlegen](#Bankverbindung%20hinterlegen)
* [Anteile Arbeitgeber Arbeitnehmer konfigurieren](Gio%20Payroll%20Custom.md#Anteile%20Arbeitgeber%20Arbeitnehmer%20konfigurieren)
* [Lohnarten definieren](#Lohnarten%20definieren)
* [Finanzkonten den Lohnarten zuweisen](#Finanzkonten%20den%20Lohnarten%20zuweisen)
* [Gehaltsinformationen eingeben](#Gehaltsinformationen%20eingeben)

Konfigurieren Sie diese Punkte, erst dann können Sie die [Lohnabrechnung erstellen](#Lohnabrechnung%20erstellen).

### Gehaltsinformationen eingeben

Die Gehaltsinformationen der Mitarbeiter legen Sie via *Pesonal > Mitarbeiter auswählen > Link Verträge > Arbeitsvertrag auswählen > Bearbeiten > Tab Gehaltsinformationen* fest.

### Bankverbindung hinterlegen

Zur Auszahlung des Lohns über SEPA müssen Sie den Mitarbeiter ein Bankkonto hinterlegen. Navigieren Sie nach *Pesonal > Mitarbeiter auswählen > Bearbeiten > Tab Private Information* und erfassen Sie ein Bankkonto unter *Bankverbindung*.

### Lohnarten definieren

::: tip
Das sind die Regeln, die Informationen über die Gehaltsberechnung liefern. Diese Regeln werden von odoo gemäss der Reihenfolge ihrer Sequenznummer interpretiert. Die Regeln können verwendet werden, um Buchungen zu erzeugen, ohne dass diese in der Gehaltsliste sichtbar sind.
:::

Die Lohnregel sind unter *Personalabrechnung > Konfiguration > Regeln* definiert. Überprüfen Sie alle Regeln und legen Sie fest welche auf der Lohnabrechnung erscheinen sollen.

Regeln für die Sie keine Verwendung haben, können Sie archivieren.

### Lohnart erstellen

Navigierne Sie nach *Personalabrechnung > Konfiguration > Regeln* und klicken Sie auf *Neu*.

* **Regelbezeichnung**: Name der auf der Lohnabrechnung erscheint
* **Kategorie**: Zur Berechnung des Nettolohns werden die Lohnarten über die Kategorie summiert. Wählen Sie eine passende Kategorie aus.
* **Code**: Nummer zur Identifizierung der Lohnart
* **Vergütungsstruktur**: Standardmässig gibt es hier nur eine Auswahl.
* **Erscheint in der Lohnabrechnung**: Aktivieren oder deaktivieren.
* **Reihenfolge**: Bestimmte die Abfolge der Berechnung der Lohnzeilen.

Im Tab *Allgemein* machen Sie diese Angaben:

* **Bedingung basiert auf**: Immer Wahr
* **Berechnungsart**: Python Code
* **Python Code**: Geben Sie hier die Formel zur Berechnung der Lohnart ein.

### Lohnart anpassen

Sie Lohnarten müssen unter bestimmten Bedingungen angepasst werden. Navigierne Sie nach *Personalabrechnung > Konfiguration > Regeln* und öffnen Sie die Lohnart, welche Sie ändern möchten. 

### Finanzkonten den Lohnarten zuweisen

Damit  die Lohnabrechnung auch in der Finanzbuchhaltung ersichtlich ist, müssen Sie für alle Lohnregeln die entsprechenden Soll- und Habenkonten hinterlegen.

Navigieren Sie nach *Personalabrechnung > Konfiguration > Regeln > Regel auswählen > Beareiten > Tab Finanzen* und weisen Sie dort die Konten zu.

![](attachments/Personalbrechnung%20Finanzkonten.png)

::: warning
Wenn die Berechnung der Lohnart einen Minusbetrag ergibt, werden die Soll- und Haben-Konten beim Erstellen der Lohnbuchung getauscht. Als Lösung müssen die Konten für Abzüge vertauscht eingetragen werden.
:::

## Arbeitseinträge

### Arbeitseinträge anzeigen

Anhand der Anwesenheit und Abwesenheit erstellt Odoo für jeden Mitarbeitenden entsprechende Arbeitseinträge. Diese sind relevant für die Stundenbasierten Lohnabrechnungen.

Die Arbeitseinträge zeigen Sie via *Personalabrechnung > Arbeitseinträge >Arbeitseinträge* an. Hier sehen Sie, ob Mitarbeitende ungeklärte Lücken haben.

### Arbeitseinträge neu generieren

Navigieren Sie nach *Personalabrechnung > Arbeitseinträge >Arbeitseinträge* und wählen Sie Aktion *Arbeitseinträge Neu Generieren*. Im Dialog wählen Sie den Mitarbeitenden und definieren den Zeitraum zur Berechnung. Führen Sie die Erstellung der Arbeitseinträge mit *Arbeitseinträge Neu Generieren* aus.

## Lohnabrechnung

### Lohnabrechnung erstellen

Lohnabrechnung können für mehre oder einzelne Mitarbeiter ausgeführt werden.

Um eine einzelne Lohnabrechnung zu erzeugen wählen Sie den Mitarbeiter aus *Personal > Mitarbeiter auswählen* und klicken auf den Link *Abrechnungen Mitarbeiterverfügung* und wählen *Neu*.

![Personalabrechnung Einzeln anlegen](attachments/Personalabrechnung%20Einzeln%20anlegen.gif)

Legen Sie die Zeitperiode fest, speichern Sie den Eintrag und drücken *Berechnen*. Nun wird die Lohnabrechnung erstellt und ist bereit zur Verbuchung.

### Lohnabrechnungen mit Batch erstellen

Um mehrere Lohnabrechnungen zu erstellen, müssen Sie einen Lohhnabrechnungslauf starten.

Navigieren Sie nach *Personalabrechnung > Arbeitseinträge > Arbeitseinträge* und wählen den aktuellen Monat. Starten Sie den Batch-Vorgang mit *Lohnabrechnung Generieren*. Für jeden angezeigten Mitarbeiter wird nun eine Lohnabrechnung erzeugt und steht zur Prüfung bereit.

![](attachments/Personalbrechung%20Lohnabrechnung%20überprüfen.png)

Öffnen Sie die einzelnen Lohnabrechnung um Sie zu validieren.

Mit *Bestätigen* werden alle Lohnabrechungen des Batchs bestätigt.

### Zahlungsdatei für Batch generieren

Für erledigte oder bezahlte Lohhnabrechnungsläufe können Sie eine Zahlungsdatei erstellen oder neu generieren. Öffnen Sie einen Lohnabrechnungslauf unter *Personalabrechnung > Abrechnung Mitarbeitervergütung > Batches* und klicken Sie auf *Erfasse Zahlung*. Wählen Sie ein Bankkonto aus bestätigen Sie den Dialog mit *Bestätigen*. Es wird nun ein Feld *SEPA File* ersichtlich, klicken Sie darauf um die Zahlungsdatei herunterzuladen.

### Zu bezahlende Lohnabrechnungen anzeigen

Navigieren Sie nach *Personalabrechnung > Abrechnung Mitarbeitervergütung > Zu Bezahlen*.

### Batches anzeigen

Navigieren Sie nach *Personalabrechnung > Abrechnung Mitarbeitervergütung > Batches*.

### Lohnabrechnung buchen

Wählen Sie eine aktuelle Lohnabrechnung, die im Status *Erledigt* ist: *Personalabrechnung > Abrechnung Mitarbeitervergütung > All Payslips > Payslip auswählen*. Öffnen Sie den Tab *Finanzen* und klicken auf den Link unter *Buchung*.

![](attachments/Personalbrechnung%20Buchung.png)

Hier werden alle Buchungen der Lohnabrechnung aufgeführt.

::: warning
Werden die Lohnzahlung als Batch verarbeitet, müssen alle Lohnabrechnungen bestätigt sein, damit eine Zahlung ausgelöst werden kann.
:::

### Lohnabrechnung entfernen

Eine verbuche Lohnabrechnung lässt sich nicht mehr löschen oder abbrechen. Zumindest ist das im Status *Erledigt* nicht möglich. Wurde eine Lohnzahlung als bezahlt markiert, kann Sie jedoch wieder entfernt werden.

Öffnen Sie die zu löschende Lohnabrechung *Personalabrechung > Abrechnungen Mitarbeitervergütung > All Paylips*. Ist die Abrechnung im Status *Erledigt*, wählen Sie *Erfasse Zahlung*. Odoo erstellt eine Zahlungsdatei, die Sie ignorieren können. Wählen Sie *Aktion > Abbrechen*. Nun ist ist die Abrechnung im Status *Abgelehnt*. Nun können Sie den Eintrag mit *Aktion > Löschen* entfernen.

::: warning
Falls es auf dem Eintrag eine verknüpfte Buchung gibt, wird diese ebenfalls gelöscht.
:::

### Lohnabrechnung neu berechnen

Haben Sie einen Fehler in einer erledigten Lohanbrechnung können Sie diese wie folgt neu berechnen. Erfassen Sie eine Zahlung, wenn dies nicht bereit getan ist. Wählen Sie *Aktion > Abbrechen*. Nun ist die Lohnabrechnung im Status Abgelehnt. Wählen Sie nun *Auf Entwurf Setzen* und nehmen Sie die Anpassungen vor. Ist alles erledigt, können Sie wie gewohnt die Lohnabrechnung berechnen lassen und bestätigen.

### PDF Lohnabrechnung versenden

Beim Bestätigen der Lohnabrechnung wird das Feld *In Warteschlange für PDF* aktiviert. Die geplante Aktion *Lohnbuchhaltung: PDFs generieren* erstellt und versendet die markierten Lohnabrechnung an den Mitarbeitenden. Dazu wird die E-Mail-Vorlage *Payroll: Neue Gehaltsabrechnung* verwendet.

Um die Lohnabrechnungen in der Warteschleife direkt zu versenden, können Sie die geplante Aktion manuell ausführen.

Damit die Lohnabrechnung als Anhang hinzufugefügt wird, können Sie die E-Mail-Vorlage anpassen.

Wenn Sie die Lohnabrechnung manuell versenden möchten, deaktivieren Sie die geplante Aktion und für die Aktion [Lohnabrechnung versenden](Personalabrechnung%20Aktionen.md#Lohnabrechnung%20versenden) hinzu.

## Abgleich

### Lohnbuchungen abgleichen

Standardmässig werden die auszuzahlenden Löhne auf dem *Lohndurchlaufkonto* und dem Konto *Ausstehende Zahlungen* verbucht. Haben Sie für einen Lohnlauf eine Zahlung erfasst, diese ins eBanking importiert und als Beleg zum Abgleich in Odoo importiert, müssen Sie den Beleg mit dem Konto *Ausstehende Zahlungen* abgleichen.

## Auswertung

### Lohnabrechnungszeilen anzeigen

Damit Sie eine Übersicht der Lohnabrechnungszeilen erhalten, folgen Sie dem HowTo [Neue Ansicht mit Aktion hinzufügen](Development%20Actions.md#Neue%20Ansicht%20mit%20Aktion%20hinzufügen) und verwenden diese Werte:

Name der Aktion: `Lohnabrechnungszeilen`\
Objekt: `hr.payslip.line`\
Menü: `Lohnabrechnungszeilen`\
Obermenü: `Personalabrechnung/Berichtswesen`\
Aktion: `ir.actions.act_window` `Lohnabrechnungszeilen`
Nummernfolge: `90`

Das Ergebnis sollte so aussehen:

![](attachments/Personalabrechnung%20Lohnabrechnungszeilen.png)

::: tip
Auf der Aktion *Lohnabrechnungszeilen* als *Ansichtsmodus* den Wert `pivot` anfügen.
:::