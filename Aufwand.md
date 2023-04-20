---
description: Spesen erfassen und abrechnen.
tags:
- HowTo
prev: ./
---
# Aufwand
![icons_odoo_hr_expense](assets/icons_odoo_hr_expense.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/expenses>

## Bereiche

| Bereich                                                 | Beschreibung                             |
| ------------------------------------------------------- | ---------------------------------------- |
| [Aufwand Aktionen](Aufwand%20Aktionen.md)       | Aktionen für Aufwand App einrichten. |

## Erweiterungen

| Erweiterung                                                       | Beschreibung                                  |
| ----------------------------------------------------------------- | --------------------------------------------- |
| [HR Expense Vehicle Request](HR%20Expense%20Vehicle%20Request.md) | Brückenmodul für Fahrzeuganfrage und Auslage. |

## Konfiguration

### Auslagenprodukt erfassen

Zeigen Sie *Aufwand > Konfiguration > Auslagenprodukte* an. Erstellen Sie eines Produkt und geben Sie die Kosten an.

### Bestehendes Produkt als Auslagenprodukt definieren

Damit ein bestehendes Produkt in der Auswahl der Auslagenprodukte erscheint, muss man auf dem Produkt *Verkauf > Produkte > Produkte* die Option *Als Ausgabe verwendbar* aktivieren.

::: warning
Die Option ist standardmässig nicht sichtbar und muss über ein entsprechendes [Snippet](Entwicklung%20Snippets.md) eingeblendet werden.
:::

### Auslagen zur Weiterverrechnung markieren

Zeigen Sie ein Auslagenprodukt unter *Verkauf > Produkte > Produkte* an. Wählen Sie eine Option im Feld *Auslagen weiterberechnen* aus. Damit wird festgelegt zu welchem Preis die Auslage weiter verrechnet werden kann.

::: tip
Wählen Sie die Option *Nach Aufwand*, wenn der Verkaufspreis gleich der Kosten ist.
:::

### Genehmigende Person festlegen

Rufen Sie einen Mitarbeitenden unter *Personal* auf und zeigen Sie den Tab *Arbeitsinformation* an. Geben Sie im Feld *Aufwand* die Person an, welche die Spesenabrechnung genehmigt.

## Erfassen

### Spesen erfassen

Navigieren Sie nach *Aufwand* und klicken Sie auf *Anlegen*. Erfassen Sie eine neue Auslage und beachten Sie diesse Felder:

* **Produkte**: Wählen Sie hier ein bestehendes Auslagenprodukt aus.
* **Ausgabendatum**: Der Tag an dem die Spese angefallen ist.
* **An Kunden berechnen**: Wählen Sie hier einen besthenden Verkaufsauftrag. Diese Option wird angezeigt, wenn auf dem Auslagenproduk die Option *Auslagen weiterberechnen* ausgewählt wurde.

### Spesenabrechnung erstellen

Bis #Odoo15 : Öffnen Sie eine Auslage via *Auslagen > Meine Auslagen > Meine zu abzurechnenden Auslagen*. Drücken Sie auf *Abrechnung erstellen*.

Ab #Odoo15 : Öffnen Sie eine Auslage via *Aufwand > Meine Auslagen > Meine zu meldenden Auslagen*. Drücken Sie auf *Bericht erstellen*.

### Spesenabrechnung vorlegen

Bis #Odoo15 : Öffnen Sie eine Abrechnung via *Auslagen > Meine Auslagen > Meine Abrechnung* und klicken Sie auf *Dem Manager vorlegen*.

Ab #Odoo15 : Öffnen Sie eine Abrechnung via *Aufwand > Meine Auslagen > Meine Berichte* und klicken Sie auf *Dem Manager vorlegen*.

## Freigabe

### Spesenabrechnung genehmigen

Bis #Odoo15 : Navigieren Sie nach *Auslagen > Auslagen Abrechnung > Freizugebende Abrechnungen*. Wählen Sie eine Abrechnung aus klicken Sie auf *Genehmigen*

Ab #Odoo15 : Navigieren Sie nach *Aufwand > Auslagenberichte > zu genehmigende Berichte*. Wählen Sie einen Bericht aus klicken Sie auf *Genehmigen*.

### Spesenabrechnung ablehnen

Bis #Odoo15 : Navigieren Sie nach *Auslagen > Auslagen Abrechnung > Freizugebende Abrechnungen*. Wählen Sie eine Abrechnung aus klicken Sie auf *Ablehnen*.

Ab #Odoo15 : Navigieren Sie nach *Aufwand > Auslagenberichte > zu genehmigende Berichte*. Wählen Sie einen Bericht aus klicken Sie auf *Ablehnen*.

## Abrechnung

### Spesenabrechnung buchen

Bis #Odoo15 : Navigieren Sie nach *Auslagen > Auslagen Abrechnung > Zu buchende Abrechnungen*. Wählen Sie *Journal Einträge buchen*.

Ab #Odoo15 : Navigieren Sie nach *Aufwand > Auslagenberichte> Zu buchende Berichte*. Wählen Sie *Buchungen Quittieren*.

::: tip
Wurden die Spesen vom Unternehmen bezahlt, wechselt die Abrechnung direkt in den Status *Bezahlt*.
:::

::: tip
Wurden das Auslagenprodukt zur Weiterverrechnung markiert, wird das Auslagenprodukt mit der gelieferten Menge beim Buchen der Abrechnung auf dem verlinkten Verkaufsauftrag hinzugefügt.

![](assets/Aufwand%20Verkaufsauftrags.png)

Der Verkaufsauftrag ist mir der Spesenabrechnung verlinkt.

![](assets/Aufwand%20Smart-Link.png)
:::

::: warning
Der Mitarbeitende braucht eine private Adresse, damit die Spesenabrechung erstellt werden kann: [Private Adresse hinterlegen](Personal.md#Private%20Adresse%20hinterlegen).
:::

### Spesenabrechnung auszahlen

Bis #Odoo15 : Navigieren Sie nach *Auslagen > Auslagen Abrechnung > Auszuzahlende Abrechnungen*. Wählen Sie *Zahlung erfassen*. Wählen Sie das Journal aus und erfassen Sie bei Bedarf das Bankkonto des Empfängers.

Ab #Odoo15 : Navigieren Sie nach *Aufwand > Auslagenberichte > Berichte zu zahlen*. Wählen Sie *Zahlung erfassen*. Wählen Sie das Journal aus und erfassen Sie bei Bedarf das Bankkonto des Empfängers.

### Alle Spesenabrechnungen anzeigen

Bis #Odoo15 : Navigieren Sie nach *Auslagen > Auslagen Abrechnung > Alle Abrechnungen*.

Ab #Odoo15 : Navigieren Sie nach *Aufwand > Auslagenberichte > Alle Berichte*.

## Berechtigungen

### Lesezugriff auf Verkaufsaufträge vergeben

Damit Benutzer beim Erfassen einer Spesen den Kundenauftrag zur weiterverrechnung auswählen können, brauchen Sie Lesezugriff auf Verkaufsaufträge.

Dazu können Sie mit den folgenden Informationen [Zugriffsrechte auf Datenmodell vergeben](Einstellungen%20Berechtigungen.md#Zugriffsrechte%20auf%20Datenmodell%20vergeben):

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

Filtern Sie die Spesen mit Filter *Auslagenabrechnung ist nicht gesetzt*.