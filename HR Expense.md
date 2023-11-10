---
title: Spesen
description: Spesen erfassen und abrechnen.
tags:
- HowTo
prev: ./
---
# Spesen
![icons_odoo_hr_expense](attachments/icons_odoo_hr_expense.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/expenses>

## Bereiche

| Bereich                                       | Beschreibung                         |
| --------------------------------------------- | ------------------------------------ |
| [Spesen Aktionen](HR%20Expense%20Actions.md) | Aktionen für Spesen App einrichten. |

## Erweiterungen

| Erweiterung                                                             | Beschreibung                                                   |
| ----------------------------------------------------------------------- | -------------------------------------------------------------- |
| [HR Expense Vehicle Request](HR%20Expense%20Vehicle%20Request.md)       | Brückenmodul für Fahrzeuganfrage und Auslage.                  |
| [Sale Expense Description Date](Sale%20Expense%20Description%20Date.md) | Fügt das Datum der Auslage der Kundenauftragszeile hinzu.      |
| [Sale Expense Link](Sale%20Expense%20Link.md)                           | Verlinkt die Spesen mit der Kundenauftragszeile.             |
| [Sale Expense Unlink](Sale%20Expense%20Unlink.md)                       | Bei Abbruch Spesenbericht wird Kundenauftragszeile entfernt. |

## Beschreibung

Die Spesen-App von Odoo wurde in den Versionen 14.0, 15.0 und 16.0 immer weider überarbeitet. Dementsprechend haben sich die Begriffe in der Menüstruktur verändert. Diese Dokumentation bezieht sich immer auf die aktuellste Version der Spesen-App.

## Konfiguration

### Spesenprodukt erfassen

Zeigen Sie *Spesenabrechnung > Konfiguration > Spesenkategorien* an. Erstellen Sie eines Produkt und geben Sie die Kosten an.

### Bestehendes Produkt als Spesenprodukt definieren

Damit ein bestehendes Produkt in der Auswahl der Spesenprodukte erscheint, muss man auf dem Produkt *Verkauf > Produkte > Produkte* die Option *Als Ausgabe verwendbar* aktivieren.

::: warning
Die Option ist standardmässig nicht sichtbar und muss über ein entsprechendes [Snippet](Development%20Snippets.md) eingeblendet werden.
:::

### Spese zur Weiterverrechnung markieren

Zeigen Sie ein Spesenprodukt unter *Verkauf > Produkte > Produkte* an. Wählen Sie eine Option im Feld *Auslagen weiterberechnen* aus. Damit wird festgelegt zu welchem Preis die Auslage weiter verrechnet werden kann.

::: tip
Wählen Sie die Option *Nach Aufwand*, wenn der Verkaufspreis gleich der Kosten ist.
:::

### Genehmigende Person festlegen

Rufen Sie einen Mitarbeitenden unter *Personal* auf und zeigen Sie den Tab *Arbeitsinformation* an. Geben Sie im Feld *Aufwand* die Person an, welche die Spesenabrechnung genehmigt.

## Erfassen

### Spesen erfassen

Navigieren Sie nach *Aufwand* und klicken Sie auf *Neu*. Erfassen Sie eine neue Auslage und beachten Sie diesse Felder:

* **Produkte**: Wählen Sie hier ein bestehendes Spesenprodukt aus.
* **Ausgabendatum**: Der Tag an dem die Spese angefallen ist.
* **An Kunden berechnen**: Wählen Sie hier einen besthenden Verkaufsauftrag. Diese Option wird angezeigt, wenn auf dem Spesenprodukt die Option *Auslagen weiterberechnen* ausgewählt wurde.

### Spesenabrechnung erstellen

Bis #Odoo15 : Öffnen Sie eine Auslage via *Auslagen > Meine Auslagen > Meine zu abzurechnenden Auslagen*. Drücken Sie auf *Abrechnung erstellen*.

Ab #Odoo15 : Öffnen Sie eine Auslage via *Spesenabrechnung > Meine Auslagen > Meine zu meldenden Auslagen*. Drücken Sie auf *Bericht erstellen*.

### Spesenabrechnung vorlegen

Bis #Odoo15 : Öffnen Sie eine Abrechnung via *Auslagen > Meine Auslagen > Meine Abrechnung* und klicken Sie auf *Dem Manager vorlegen*.

Ab #Odoo15 : Öffnen Sie eine Abrechnung via *Spesenabrechnung > Meine Auslagen > Meine Berichte* und klicken Sie auf *Dem Manager vorlegen*.

## Freigabe

### Spesenabrechnung genehmigen

Bis #Odoo15 : Navigieren Sie nach *Auslagen > Auslagen Abrechnung > Freizugebende Abrechnungen*. Wählen Sie eine Abrechnung aus klicken Sie auf *Genehmigen*

Ab #Odoo15 : Navigieren Sie nach *Spesenabrechnung > Auslagenberichte > zu genehmigende Berichte*. Wählen Sie einen Bericht aus klicken Sie auf *Genehmigen*.

### Spesenabrechnung ablehnen

Bis #Odoo15 : Navigieren Sie nach *Auslagen > Auslagen Abrechnung > Freizugebende Abrechnungen*. Wählen Sie eine Abrechnung aus klicken Sie auf *Ablehnen*.

Ab #Odoo15 : Navigieren Sie nach *Spesenabrechnung > Auslagenberichte > zu genehmigende Berichte*. Wählen Sie einen Bericht aus klicken Sie auf *Ablehnen*.

## Abrechnung

### Spesenabrechnung buchen

Bis #Odoo15 : Navigieren Sie nach *Auslagen > Auslagen Abrechnung > Zu buchende Abrechnungen*. Wählen Sie *Journal Einträge buchen*.

Ab #Odoo15 : Navigieren Sie nach *Spesenabrechnung > Auslagenberichte> Zu buchende Berichte*. Wählen Sie *Buchungen Quittieren*.

::: tip
Wurden die Spesen vom Unternehmen bezahlt, wechselt die Abrechnung direkt in den Status *Bezahlt*.
:::

::: tip
Wurden das Spesenprodukt zur Weiterverrechnung markiert, wird das Spesenprodukt mit der gelieferten Menge beim Buchen der Abrechnung auf dem verlinkten Verkaufsauftrag hinzugefügt.

![](attachments/Aufwand%20Verkaufsauftrags.png)

Der Verkaufsauftrag ist mir der Spesenabrechnung verlinkt.

![](attachments/Aufwand%20Smart-Link.png)
:::

::: warning
Der Mitarbeitende braucht eine private Adresse, damit die Spesenabrechung erstellt werden kann: [Private Adresse hinterlegen](HR.md#Private%20Adresse%20hinterlegen).
:::

### Spesenabrechnung auszahlen

Bis #Odoo15 : Navigieren Sie nach *Auslagen > Auslagen Abrechnung > Auszuzahlende Abrechnungen*. Wählen Sie *Zahlung erfassen*. Wählen Sie das Journal aus und erfassen Sie bei Bedarf das Bankkonto des Empfängers.

Ab #Odoo15 : Navigieren Sie nach *Spesenabrechnung > Auslagenberichte > Berichte zu zahlen*. Wählen Sie *Zahlung erfassen*. Wählen Sie das Journal aus und erfassen Sie bei Bedarf das Bankkonto des Empfängers.

### Alle Spesenabrechnungen anzeigen

Bis #Odoo15 : Navigieren Sie nach *Auslagen > Auslagen Abrechnung > Alle Abrechnungen*.

Ab #Odoo15 : Navigieren Sie nach *Spesenabrechnung > Spesenabrechnung > Alle Abrechnungen*.

## Buchhaltung

### Journalbuchung aus Spesenabrechnung neu erstellen

Um die Journalbuchung einer Spesenabrechnung neu zu erstellen, zeigen Sie eine Spesenabrechnung unter *Spesenabrechnung > Spesenabrechnungen* an. Klicken Sie auf den Smart-Link *Journalbuchung* und setzen Sie diese zurück. Kehren Sie auf die Spesenabrechnung zurücke und wählen Sie *Auf Entwurf Zurücksetzen*. Genehmigen Sie die Spesenabrechnung und wählen Sie *Journalbuchung Buchen*. Nun erstellt Odoo die Lieferantenrechnung neu.

## Berechtigungen

### Lesezugriff auf Verkaufsaufträge vergeben

Damit Benutzer beim Erfassen einer Spesen den Kundenauftrag zur weiterverrechnung auswählen können, brauchen Sie Lesezugriff auf Verkaufsaufträge.

Dazu können Sie mit den folgenden Informationen [Zugriffsrechte auf Datenmodell vergeben](Settings%20Permissions.md#Zugriffsrechte%20auf%20Datenmodell%20vergeben):

* **Datenmodell**: `sale.order`
* **Name**: `mint_system.sale.order.read`
* **Gruppe**: Benutzertypen / Interner Benutzer
* **Berechtigung**: Leserecht

## Troublshooting

### Spesenabrechnung kann nicht erstellt werden

**Problem**

Wenn Sie die [Spesenabrechnung erstellen](#Spesenabrechnung%20erstellen) erscheint der Fehler:

> Sie können nicht zweimal die gleiche Zeile erfassen!

**Ursache**

Wenn der Spesen-Eintrag bereits mit einem Bericht verknüpft ist.

**Lösung**

Filtern Sie die Spesen mit Filter *Spesenabrechnung ist nicht gesetzt*.