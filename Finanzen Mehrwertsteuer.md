---
tags:
- HowTo
prev: ./finanzen
---
# Finanzen Mehrwertsteuer
![icons_odoo_account_accountant](assets/icons_odoo_account_accountant.png)

Mehrwertsteuer einfach abrechnen mit Odoo.

## Konfiguration

### Nach vereinnahmten Entgelten verrechnen

Wenn Sie die Mehrwertsteuer nach vereinnahmten Entgelten abrechnen wolle, navigieren Sie nach *Einstellungen > Finanzen > Steuern* und aktivieren Sie die Option *Nach vereinnahmten Entgelten*. Legen Sie anschliessen ein Journal im Feld *Journal für die Besteuerung nach vereinnahmten Entgelten* und ein Konto im Feld *Konto für erhaltenen Steuerbetrag* fest.

### Steuersätze anpassen

Öffnen Sie *Finanzen > Konfiguration > Finanzen > Steuern*. Hier werden alle Steuersätze festgelegt. Öffnen Sie einen Eintrag und passen Sie diese Felder an:

* **Steuerbezeichnung**: Ist die interne Bezeichnung
* **Steuerberechnung**: Legt fest wie die Steuer berechnet wird
* **Tax Type**: Unterscheidung zwischen Einkauf und Verkauf
* **Steuergültigkeit**: Steuern nur für bestimmte Produktarten zulassen
* **Betrag**: Der Prozentsatz

Im Tab *Definition* werden die Konten für die Buchung und die Ziffer für den Umsatzsteuerbericht festlegt. Einmal für die Rechnung und einmal für die Gutschrift.

Im Tab *Erweiterte Optionen* haben Sie diese wichtigen Felder:

* **Bezeichnung auf Rechnungen**: Gilt für Ein- und Ausgangsrechnungen
* **Steuergruppe**: Werden Steuersätze gruppiert, wird diese Bezeichnung übernommen

### Steuerperiode festlegen

Öffnen Sie *Finanzen > Konfiguration > Einstellungen > Steuern*. Legen Sie im Bereich *regelmässige Steuernrückzahlungen* die Periode für die Steuerrückzahlungen fest.

### Steuerkonten konfigurieren

Klicken Sie auf *Einstellungen > Finanzen > Steuern > Konfigurieren der Steuerkonten*. Hier können Sie die Konten pro Steuersatz für die Bezahlung der Umsatzsteuer hinterlegen.

![](assets/Finanzen%20Mehrwertsteuer%20Steuerkonten%20konfigurieren.png)

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


## Verwaltung

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