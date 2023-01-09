---
tags:
- HowTo
prev: ./
---
# Aufwand
![icons_odoo_hr_expense](assets/icons_odoo_hr_expense.png)

Spesen erfassen und abrechnen.

Website: <https://www.odoo.com/de_DE/app/expenses>

## Erweiterungen

| Erweiterung                                                       | Beschreibung                                  |
| ----------------------------------------------------------------- | --------------------------------------------- |
| [HR Expense Vehicle Request](HR%20Expense%20Vehicle%20Request.md) | Brückenmodul für Fahrzeuganfrage und Auslage. |

## Konfiguration

### Auslagenprodukt erfassen

Zeigen Sie *Aufwand > Konfiguration > Auslagenprodukte* an. Erstellen Sie eines Produkt und geben Sie die Kosten und den Verkaufspreis an.

### Genehmigende Person festlegen

Rufen Sie einen Mitarbeitenden unter *Personal* auf und zeigen Sie den Tab *Arbeitsinformation* an. Geben Sie im Feld *Aufwand* die Person an, welche die Spesenabrechnung genehmigt.

## Erfassen

### Spesen erfassen

Navigieren Sie nach *Aufwand* und klicken Sie auf *Anlegen*. Erfassen Sie eine neue Auslage.

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

### Spesenabrechnung auszahlen

Bis #Odoo15 : Navigieren Sie nach *Auslagen > Auslagen Abrechnung > Auszuzahlende Abrechnungen*. Wählen Sie *Zahlung erfassen*. Wählen Sie das Journal aus und erfassen Sie bei Bedarf das Bankkonto des Empfängers.

Ab #Odoo15 : Navigieren Sie nach *Aufwand > Auslagenberichte > Berichte zu zahlen*. Wählen Sie *Zahlung erfassen*. Wählen Sie das Journal aus und erfassen Sie bei Bedarf das Bankkonto des Empfängers.

### Alle Spesenabrechnungen anzeigen

Bis #Odoo15 : Navigieren Sie nach *Auslagen > Auslagen Abrechnung > Alle Abrechnungen*.

Ab #Odoo15 : Navigieren Sie nach *Aufwand > Auslagenberichte > Alle Berichte*.