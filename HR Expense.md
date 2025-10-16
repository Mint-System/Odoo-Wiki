---
title: Spesen
description: Spesen erfassen und abrechnen.
kind: howto
prev: ./
partner: Odoo S.A.
---

# Spesen

![icons_odoo_hr_expense](attachments/icons_odoo_hr_expense.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/expenses>

## Bereiche

| Bereich                                      | Beschreibung                        |
| -------------------------------------------- | ----------------------------------- |
| [Spesen Aktionen](HR%20Expense%20Actions.md) | Aktionen für Spesen App einrichten. |

## Erweiterungen

| Erweiterung                                                             | Beschreibung                                                 |
| ----------------------------------------------------------------------- | ------------------------------------------------------------ |
| [HR Expense User ACL](HR%20Expense%20User%20ACL.md)                     | Zugriffsrechte auf Spesenabrechnung festlegen.               |
| [HR Expense Vehicle Request](HR%20Expense%20Vehicle%20Request.md)       | Brückenmodul für Fahrzeuganfrage und Auslage.                |
| [Sale Expense Description Date](Sale%20Expense%20Description%20Date.md) | Fügt das Datum der Auslage der Kundenauftragszeile hinzu.    |
| [Sale Expense Link](Sale%20Expense%20Link.md)                           | Verlinkt die Spesen mit der Kundenauftragszeile.             |
| [Sale Expense Unlink](Sale%20Expense%20Unlink.md)                       | Bei Abbruch Spesenbericht wird Kundenauftragszeile entfernt. |

## Beschreibung

Die Spesen-App von Odoo wurde in den Versionen 14.0, 15.0 und 16.0 immer weider überarbeitet. Dementsprechend haben sich die Begriffe in der Menüstruktur verändert. Diese Dokumentation bezieht sich immer auf die aktuellste Version der Spesen-App.

## Konfiguration

### Spesenprodukt erfassen

Zeigen Sie _Spesenabrechnung > Konfiguration > Spesenkategorien_ an. Erstellen Sie eines Produkt und geben Sie die Kosten an.

### Bestehendes Produkt als Spesenprodukt definieren

Damit ein bestehendes Produkt in der Auswahl der Spesenprodukte erscheint, muss man auf dem Produkt _Verkauf > Produkte > Produkte_ die Option _Als Ausgabe verwendbar_ aktivieren.

::: warning
Die Option ist standardmässig nicht sichtbar und muss über ein entsprechendes [Snippet](Development%20Snippets.md) eingeblendet werden.
:::

### Spese zur Weiterverrechnung markieren

Zeigen Sie ein Spesenprodukt unter _Verkauf > Produkte > Produkte_ an. Wählen Sie eine Option im Feld _Auslagen weiterberechnen_ aus. Damit wird festgelegt zu welchem Preis die Auslage weiter verrechnet werden kann.

::: tip
Wählen Sie die Option _Nach Aufwand_, wenn der Verkaufspreis gleich der Kosten ist.
:::

### Genehmigende Person festlegen

Rufen Sie einen Mitarbeitenden unter _Personal_ auf und zeigen Sie den Tab _Arbeitsinformation_ an. Geben Sie im Feld _Aufwand_ die Person an, welche die Spesenabrechnung genehmigt.

## Erfassen

### Spesen erfassen

Navigieren Sie nach _Aufwand_ und klicken Sie auf _Neu_. Erfassen Sie eine neue Auslage und beachten Sie diesse Felder:

- **Produkte**: Wählen Sie hier ein bestehendes Spesenprodukt aus.
- **Ausgabendatum**: Der Tag an dem die Spese angefallen ist.
- **An Kunden berechnen**: Wählen Sie hier einen besthenden Verkaufsauftrag. Diese Option wird angezeigt, wenn auf dem Spesenprodukt die Option _Auslagen weiterberechnen_ ausgewählt wurde.

### Spesenabrechnung erstellen

Bis #Odoo15 : Öffnen Sie eine Auslage via _Auslagen > Meine Auslagen > Meine zu abzurechnenden Auslagen_. Drücken Sie auf _Abrechnung erstellen_.

Ab #Odoo15 : Öffnen Sie eine Auslage via _Spesenabrechnung > Meine Auslagen > Meine zu meldenden Auslagen_. Drücken Sie auf _Bericht erstellen_.

### Spesenabrechnung vorlegen

Bis #Odoo15 : Öffnen Sie eine Abrechnung via _Auslagen > Meine Auslagen > Meine Abrechnung_ und klicken Sie auf _Dem Manager vorlegen_.

Ab #Odoo15 : Öffnen Sie eine Abrechnung via _Spesenabrechnung > Meine Auslagen > Meine Berichte_ und klicken Sie auf _Dem Manager vorlegen_.

## Freigabe

### Spesenabrechnung genehmigen

Bis #Odoo15 : Navigieren Sie nach _Auslagen > Auslagen Abrechnung > Freizugebende Abrechnungen_. Wählen Sie eine Abrechnung aus klicken Sie auf _Genehmigen_

Ab #Odoo15 : Navigieren Sie nach _Spesenabrechnung > Auslagenberichte > zu genehmigende Berichte_. Wählen Sie einen Bericht aus klicken Sie auf _Genehmigen_.

### Spesenabrechnung ablehnen

Bis #Odoo15 : Navigieren Sie nach _Auslagen > Auslagen Abrechnung > Freizugebende Abrechnungen_. Wählen Sie eine Abrechnung aus klicken Sie auf _Ablehnen_.

Ab #Odoo15 : Navigieren Sie nach _Spesenabrechnung > Auslagenberichte > zu genehmigende Berichte_. Wählen Sie einen Bericht aus klicken Sie auf _Ablehnen_.

## Abrechnung

### Spesenabrechnung buchen

Bis #Odoo15 : Navigieren Sie nach _Auslagen > Auslagen Abrechnung > Zu buchende Abrechnungen_. Wählen Sie _Journal Einträge buchen_.

Ab #Odoo15 : Navigieren Sie nach _Spesenabrechnung > Auslagenberichte> Zu buchende Berichte_. Wählen Sie _Buchungen Quittieren_.

::: tip
Wurden die Spesen vom Unternehmen bezahlt, wechselt die Abrechnung direkt in den Status _Bezahlt_.
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

Bis #Odoo15 : Navigieren Sie nach _Auslagen > Auslagen Abrechnung > Auszuzahlende Abrechnungen_. Wählen Sie _Zahlung erfassen_. Wählen Sie das Journal aus und erfassen Sie bei Bedarf das Bankkonto des Empfängers.

Ab #Odoo15 : Navigieren Sie nach _Spesenabrechnung > Auslagenberichte > Berichte zu zahlen_. Wählen Sie _Zahlung erfassen_. Wählen Sie das Journal aus und erfassen Sie bei Bedarf das Bankkonto des Empfängers.

### Alle Spesenabrechnungen anzeigen

Bis #Odoo15 : Navigieren Sie nach _Auslagen > Auslagen Abrechnung > Alle Abrechnungen_.

Ab #Odoo15 : Navigieren Sie nach _Spesenabrechnung > Spesenabrechnung > Alle Abrechnungen_.

## Buchhaltung

### Journalbuchung aus Spesenabrechnung neu erstellen

Um die Journalbuchung einer Spesenabrechnung neu zu erstellen, zeigen Sie eine Spesenabrechnung unter _Spesenabrechnung > Spesenabrechnungen_ an. Klicken Sie auf den Smart-Link _Journalbuchung_ und setzen Sie diese zurück. Kehren Sie auf die Spesenabrechnung zurücke und wählen Sie _Auf Entwurf Zurücksetzen_. Genehmigen Sie die Spesenabrechnung und wählen Sie _Journalbuchung Buchen_. Nun erstellt Odoo die Lieferantenrechnung neu.

## Berechtigungen

### Lesezugriff auf Verkaufsaufträge vergeben

Damit Benutzer beim Erfassen einer Spesen den Kundenauftrag zur weiterverrechnung auswählen können, brauchen Sie Lesezugriff auf Verkaufsaufträge.

Dazu können Sie mit den folgenden Informationen [Zugriffsrechte auf Datenmodell vergeben](Settings%20Permissions.md#Zugriffsrechte%20auf%20Datenmodell%20vergeben):

- **Datenmodell**: `sale.order`
- **Name**: `mint_system.sale.order.read`
- **Gruppe**: Benutzertypen / Interner Benutzer
- **Berechtigung**: Leserecht

## Troublshooting

### Spesenabrechnung kann nicht erstellt werden

**Problem**

Wenn Sie die [Spesenabrechnung erstellen](#Spesenabrechnung%20erstellen) erscheint der Fehler:

> Sie können nicht zweimal die gleiche Zeile erfassen!

**Ursache**

Wenn der Spesen-Eintrag bereits mit einem Bericht verknüpft ist.

**Lösung**

Filtern Sie die Spesen mit Filter _Spesenabrechnung ist nicht gesetzt_.
