---
tags:
- HowTo
prev: ./
---
# Auslagen
![icons_odoo_hr_expense](assets/icons_odoo_hr_expense.png)

Spesen erfassen und abrechnen.

Website: <https://www.odoo.com/de_DE/app/expenses>

## Erweiterungen

| Erweiterung                                                       | Beschreibung                                  |
| ----------------------------------------------------------------- | --------------------------------------------- |
| [HR Expense Vehicle Request](HR%20Expense%20Vehicle%20Request.md) | Brückenmodul für Fahrzeuganfrage und Auslage. |

## Konfiguration

### Auslagen-Produkt erfassen

Zeigen Sie *Auslagen > Konfiguration > Auslagen-Produkte* an. Erstellen Sie eines Produkt und geben Sie die Kosten und den Verkaufspreis an.

### Genehmigende Person festlegen

Rufen Sie einen Mitarbeitenden unter *Personal* auf und zeigen Sie den Tab *Arbeitsinformation* an. Geben Sie im Feld *Auslagen* die Person an, welche die Spesenabrechnung genehmigt.

## Erfassen

### Spesen erfassen

Navigieren Sie nach *Auslagen* und klicken Sie auf *Anlegen*. Erfassen Sie eine neue Auslage.

### Spesenabrechnung erstellen

Öffnen Sie eine Auslage via *Auslagen > Meine zu abzurechnenden Auslagen*. Drücken Sie auf *Abrechnung erstellen*.

### Spesenabrechnung vorlegen

Öffnen Sie eine Abrechnung via *Auslagen > Meine Auslagen > Meine Abrechnung* und klicken Sie auf *Dem Manager vorlegen*.

## Freigabe

### Spesenabrechnung genehmigen

Navigieren Sie nach *Auslagen > Auslagen Abrechnung > Freizugebende Abrechnungen*. Wählen Sie eine Abrechnung aus klicken Sie auf *Genehmigen*

### Spesenabrechnung ablehnen

Navigieren Sie nach *Auslagen > Auslagen Abrechnung > Freizugebende Abrechnungen*. Wählen Sie eine Abrechnung aus klicken Sie auf *Ablehnen*

## Abrechnung

### Spesenabrechnung buchen

Navigieren Sie nach *Auslagen > Auslagen Abrechnung > Zu buchende Abrechnungen*. Wählen Sie *Journal Einträge buchen*

::: tip
Wurden die Spesen vom Unternehmen bezahlt, wechselt die Abrechnung direkt in den Status *Bezahlt*.
:::

### Spesenabrechnung auszahlen

Navigieren Sie nach *Auslagen > Auslagen Abrechnung > Auszuzahlende Abrechnungen*. Wählen Sie *Zahlung erfassen*. Wählen Sie das Journal aus und erfassen Sie bei Bedarf das Bankkonto des Empfängers.

### Alle Spesenabrechnungen anzeigen

Navigieren Sie nach *Auslagen > Auslagen Abrechnung > Alle Abrechnungen*.