---
title: Finanzen Mehrwertsteuer
description: Mehrwertsteuer einfach abrechnen mit Odoo.
tags:
- HowTo
prev: ./finance
---
# Finanzen Mehrwertsteuer
![icons_odoo_account_accountant](assets/icons_odoo_account_accountant.png)

{{ $frontmatter.description }}

## Konfiguration

### Nach vereinnahmten Entgelten verrechnen

Wenn Sie die Mehrwertsteuer nach vereinnahmten Entgelten abrechnen wolle, navigieren Sie nach *Einstellungen > Finanzen > Steuern* und aktivieren Sie die Option *Nach vereinnahmten Entgelten*. Legen Sie anschliessen ein Journal im Feld *Journal für die Besteuerung nach vereinnahmten Entgelten* und ein Konto im Feld *Konto für erhaltenen Steuerbetrag* fest.

* **Journal**: Steuern
* **Konto**: 2202 Umsatzsteuerausgleich Abrechnungsmethode 

### Steuerfälligkeit für Steuersatz festlegen

Wenn Sie [nach vereinnahmten Entgelten verrechnen](#Nach%20vereinnahmten%20Entgelten%20verrechnen), können Sie für jeden Steuersatz die Steuerfälligkeit festlegen. Öffnen Sie *Finanzen > Konfiguration > Finanzen > Steuern* und öffnen Sie einen Steuersatz. Im Tab *Erweiterte Optionen* finden Sie das Feld *Steuerfälligkeit*. Wählen Sie *Auf der Grundlage einer Zahlung* und legen Sie ein Übergangskonto fest, wenn Sie für diesen Steuersatz nach vereinnahmten Entgelt abrechnen möchten.

![](assets/Finanzen%20Mehrwertsteuer%20Grundlage%20Zahlung.png)

Wird der entsprechende Steuersatz auf der Rechnungszeile verwendet, wird die MWST-Buchung entsprechend angepasst:

![](assets/Finanzen%20Mehrwertsteuer%20Grundlage%20Zahlung%20Buchung.png)

### Steuersätze anpassen

Öffnen Sie *Finanzen > Konfiguration > Finanzen > Steuern*. Hier werden alle Steuersätze festgelegt. Öffnen Sie einen Eintrag und passen Sie diese Felder an:

* **Steuerbezeichnung**: Ist die interne Bezeichnung
* **Steuerberechnung**: Legt fest wie die Steuer berechnet wird
* **Steuertyp**: Unterscheidung zwischen Einkauf und Verkauf
* **Steuergültigkeit**: Steuern nur für bestimmte Produktarten zulassen
* **Betrag**: Der Prozentsatz

Im Tab *Definition* werden die Konten für die Buchung und die Ziffer für den Umsatzsteuerbericht festlegt. Einmal für die Rechnung und einmal für die Gutschrift.

Im Tab *Erweiterte Optionen* haben Sie diese wichtigen Felder:

* **Bezeichnung auf Rechnungen**: Gilt für Ein- und Ausgangsrechnungen
* **Steuergruppe**: Werden Steuersätze gruppiert, wird diese Bezeichnung übernommen

### Mehrwertsteuer-Konto festlegen

Für jeden Steuersatz können Sie ein Mehrwertsteuer-Konto festlegen. Öffnen Sie *Finanzen > Konfiguration > Finanzen > Steuern* und zeigen Sie einen Steuersatz an. Im Tab *Definition* legen Sie das Mehrwertsteuer-Konto für Rechnungen und Rückerstattungen fest.

![](assets/Finanzen%20Mehrwertsteuer%20Abrechnungskonto.png)

::: tip
Für Steuersätze von eingehenden Rechnungen verwenden Sie das Vorsteuerkonto 1170 oder 1171 und für ausgehende Rechnungen das Konto 2200.
:::

### Steuerperiode festlegen

Öffnen Sie *Finanzen > Konfiguration > Einstellungen > Steuern*. Legen Sie im Bereich *regelmässige Steuernrückzahlungen* die Periode für die Steuerrückzahlungen fest.

### Steuerkonten konfigurieren

Klicken Sie auf *Einstellungen > Finanzen > Steuern > Konfigurieren der Steuerkonten*. Hier können Sie die Konten pro Steuersatz für die Bezahlung der Mehrwertsteuer hinterlegen.

![](assets/Finanzen%20Mehrwertsteuer%20Abrechnung.png)

::: tip
Normalerweise werden in den Spalten *Steuer aktuelles Konto (bezahlen)* und *Steuer aktuelles Konto (empfangen)* das Konto *2201 Abrechnungskonto MWST* hinterlegt.
:::

### Steuergruppen anzeigen

Damit Sie eine Übersicht der Steuergruppen erhalten,müssen Sie via *Einstellungen > Technisch > Benutzer-Interface > Menüeinträge* einen neuen Eintrag anlegen.

Menü: `Steuergruppen`\
Obermenü: `Finanzen/Konfiguration/Finanzen`\
Aktion: `ir.actions.act_window` `Steuergruppen`\
Nummernfolge: `10`

### Standard-Steuer auf Konto hinterlegen

Für jedes Konto können Sie einen Standard-Steuersatz hinterlegen. Rufen Sie das Konto in der Formularansicht auf und legen Sie den Steuersatz im Feld *Standard Steuern* fest.

![](assets/Finanzen%20Mehrwertsteuer%20Standard%20Steuern.png)

### Standard-Steuer für Verkauf und Einkauf festlegen

Navigieren Sie nach *Einstellungen > Finanzen > Steuern* und legen Sie im Feld *Umsatzsteuer* und *Vorsteuer* die Steuer für *Einkauf* resp. *Verkauf* fest.

## International

### Mehrwertsteuer für EU-Ausland aktivieren

Navigieren Sie nach *Einstellungen > Finanzen > Steuern* und aktivieren Sie die Option *Innergemeinschaftlicher Fernabsatz der EU*.

### MwSt-Identifikationsnr. überprüfen

Navigieren Sie nach *Einstellungen > Finanzen > Steuern* und aktivieren Sie die Option *MwSt-Identifikationsnr. überprüfen*.

### Steuerzurodnung anzeigen

Navigieren Sie nach *Finanzen > Konfiguration > Steuerzuordnung*. Hier finden Sie standardmässig zwei Einträge:

* **Schweiz national**: Diese Steuerzuordnung wird für Rechnung mit Partner aus der Schweiz angewendet.
* **Import/Export**: Diese Steuerzuordnung wird für alle Rechnungen (sprich ohne Schweizer Partner) angewendet.

::: tip
Die Standardkonfiguration von Odoo sieht vor, dass alle Internationalen Import/Export eine Steuerzuordnung von 0.0% erhalten.
:::

### Steuerzuordnung für ausgewähltes Land festlegen

Erstellen oder Kopieren Sie unter *Finanzen > Konfiguration > Steuerzuordnung* einen neuen Eintrag. Im Feld *Land* oder *Ländergruppe* können Sie das ausewählte Land eintragen. Im Tab *Steuerzuordnung* fügen Sie die ursprünglichen und neuen Steuersätze hinzu.

### Steuerzuordnung auf Lieferant festlegen

Zeigen Sie *Finanzen > Lieferanten > Lieferanten* an. Öffnen Sie einen bestimmten Lieferanten und zeigen Sie den Tab *Verkauf & Einkauf* an. Wählen Sie im Feld *Steuerzuordnung* einen Wert aus.

### Steuerzuordnung auf Kunde festlegen

Zeigen Sie *Finanzen > Kunden > Kunden* an. Öffnen Sie einen bestimmten Kunden und zeigen Sie den Tab *Verkauf & Einkauf* an. Wählen Sie im Feld *Steuerzuordnung* einen Wert aus.

## Abrechnung

### Abschlussbuchung Steuererklärung erstellen

Wenn Sie eine Abschlussbuchung für die Mehrwertsteuer vornehmen wollen, öffnen Sie *Finanzen > Berichtswesen > Umsatzsteuerbericht* und klicken auf *Abschlussbuchung*. Nun wird eine Buchung für die Steuererklärung gemäss Steuerperiode (siehe [Steuerperiode festlegen](#Steuerperiode%20festlegen)) erstellt. Dabei wird der Steuerbetrag aus dem zu schuldenden Steuerbetrag sowie Vorsteuerabzug gemäss Steuerkonten berechnet.

![](assets/Finanzen%20Mehrwertsteuer%20Abschlussbuchung.png)

::: tip
Standardmässig ist die Übersicht der Steuerkonten in der Navigation nicht sichtbar. Führen Sie die Aktion [Steuergruppen anzeigen](#Steuergruppen%20anzeigen) aus um einen entsprechenden Menü-Eintrag zu erstellen.
:::

### Vereinnahmte Buchungen aufgrund von Zahlungen anzeigen

Wenn Sie [nach vereinnahmten Entgelten verrechnen](#Nach%20vereinnahmten%20Entgelten%20verrechnen) und eine Abstimmung für eine Rechnung mit einer Steuerfälligkeit *Auf der Grundlage einer Zahlung* durchführen, wird eine Umbuchung vom Übergangskonto auf das effektive MWST-Konto erstellt. Öffnen Sie das Steuer-Journal um diese Buchungen anzueigen.

![](assets/Finanzen%20Mehrwertsteuer%20Buchung%20Übergangskonto.png)

### Steueranpassung vornehmen

Angenommen Sie haben auf einer Lieferantenrechnung eine falsche Steuer verrechnet und der Umsatzsteuerbericht ist bereits verbucht, so können Sie mit der Aktion *Finanzen > Finanzen > Steueranpassung* eine Korrekturbuchung erstellen. Geben Sie als Betrag den Steuerbetrag ein.

Hier ein Beispiel einer Lieferantenrechung zur Korrektur:
![](assets/Finanzen%20Mehrwertsteuer%20Steueranpassung%20Rechnung.png)

Der Fehlbetrag wird im Aktionsformular eingetragen.

![](assets/Finanzen%20Mehrwertsteuer%20Steueranpassung.png)

Und daraus wird diese Buchung generiert.

![](assets/Finanzen%20Mehrwertsteuer%20Steueranpassung%20Buchung.png)

## Technisch

### Konten-Tags ohne Entwicklermodus anzeigen

Das Menü *Konten-Tags* wird nur im Entwicklermodus angezeigt. Um das Verhalten zu ändern, öffnen Sie *Einstellungen > Technisch > Benutzer-Interface > Menüeinträge*, zeigen den Menüeintrag *Konten-Tags* an und entfernen im Tab *Zugriffsrechte* die Gruppe. Aktualisieren Sie den Browser und verlassen Sie den Entwicklermodus. Sie sollten den Menüeintrag nun sehen.

## Bezugssteuer

### Bezugssteuer einrichten

Die bestehende Bezugssteuer *UST 7.7% Bezugssteuer* von Odoo ist für den Umsatzsteuerbericht unzureichend.

Gemäss [Steuersätze anpassen](#Steuersätze%20anpassen) können Sie eine Kopie von *UST 7.7% Bezugssteuer* und wie folgt anpassen:

* **Steuerbezeichnung**: Bezugssteuer 7.7%
* **Betrag**: 7.7000
* **Verteilung für Rechnungen**:

|       % | Basiert auf | Konto                                                   | Steuerraster |
| -------:| ----------- | ------------------------------------------------------- | ------------ |
|         | Basis       |                                                         | +382a        |
| -100.00 | der Steuer  | 2200 Geschuldete Mehrwertsteuer                         | -382b        |
|  100.00 | der Steuer  | 1170 Vorsteuer auf Materialaufwand und Dienstleistungen | +400         |

* **Verteilung für Gutschriften**:

|       % | Basiert auf | Konto                                                   | Steuerraster |
| -------:| ----------- | ------------------------------------------------------- | ------------ |
|         | Basis       |                                                         | -382a        |
| -100.00 | der Steuer  | 2200 Geschuldete Mehrwertsteuer                         | +382b        |
|  100.00 | der Steuer  | 1170 Vorsteuer auf Materialaufwand und Dienstleistungen | -400         |

Für Bezugsteuer für Investition können Sie ebenfalls eine Kopie erstellen und im Steuerraster jeweils den Tag 405 statt 400 verwenden.