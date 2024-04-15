---
title: Finanzen Mehrwertsteuer
description: Mehrwertsteuer einfach abrechnen mit Odoo.
tags:
- HowTo
prev: ./finance
---
# Finanzen Mehrwertsteuer
![icons_odoo_account_accountant](attachments/icons_odoo_account_accountant.png)

{{ $frontmatter.description }}

## Konfiguration

### Nach vereinnahmten Entgelten verrechnen

Wenn Sie die Mehrwertsteuer nach vereinnahmten Entgelten abrechnen wolle, navigieren Sie nach *Einstellungen > Finanzen > Steuern* und aktivieren Sie die Option *Nach vereinnahmten Entgelten*. Legen Sie anschliessend ein Journal im Feld *Journal für die Besteuerung nach vereinnahmten Entgelten* und ein Konto im Feld *Konto für erhaltenen Steuerbetrag* fest.

* **Journal**: Steuern
* **Konto**: 2202 Umsatzsteuerausgleich Abrechnungsmethode 

### Steuerfälligkeit für Steuersatz festlegen

Wenn Sie [nach vereinnahmten Entgelten verrechnen](#Nach%20vereinnahmten%20Entgelten%20verrechnen), können Sie für jeden Steuersatz die Steuerfälligkeit festlegen. Öffnen Sie *Finanzen > Konfiguration > Finanzen > Steuern* und öffnen Sie einen Steuersatz. Im Tab *Erweiterte Optionen* finden Sie das Feld *Steuerfälligkeit*. Wählen Sie *Auf der Grundlage einer Zahlung* und legen Sie ein Übergangskonto fest, wenn Sie für diesen Steuersatz nach vereinnahmten Entgelt abrechnen möchten.

![](attachments/Finanzen%20Mehrwertsteuer%20Grundlage%20Zahlung.png)

Wird der entsprechende Steuersatz auf der Rechnungszeile verwendet, wird die MWST-Buchung entsprechend angepasst:

![](attachments/Finanzen%20Mehrwertsteuer%20Grundlage%20Zahlung%20Buchung.png)

### Steuersatz erfassen

Öffnen Sie *Finanzen > Konfiguration > Finanzen > Steuern*. Zeigen Sie einen bestehenden Steuersatz an und duplizieren Sie diesen. Dazu ein Beispiel für einem neuen Steuersatz auf Basis von *UST 7.7% Lief./DL (exkl. MWST)*:

* **Steuerbezeichnung**: UST 8.1% Lief./DL (exkl. MWST)
* **Betrag**: 8.1000%
* **Bezeichnung auf Rechnungen**: 8.1%
* **Steuergruppe**: MwSt. 8.1%

### Steuersatz anpassen

Öffnen Sie *Finanzen > Konfiguration > Finanzen > Steuern*. Hier werden alle Steuersätze festgelegt. Öffnen Sie einen Eintrag und passen Sie diese Felder an:

* **Steuerbezeichnung**: Ist die interne Bezeichnung
* **Steuerberechnung**: Legt fest wie die Steuer berechnet wird
* **Steuertyp**: Unterscheidung zwischen Einkauf und Verkauf
* **Steuergültigkeit**: Steuern nur für bestimmte Produktarten zulassen
* **Betrag**: Der Prozentsatz

Im Tab *Definition* werden die Konten für die Buchung und die Ziffer für den Steuerbericht festlegt. Einmal für die Rechnung und einmal für die Gutschrift.

Im Tab *Erweiterte Optionen* haben Sie diese wichtigen Felder:

* **Bezeichnung auf Rechnungen**: Gilt für Ein- und Ausgangsrechnungen
* **Steuergruppe**: Werden Steuersätze gruppiert, wird diese Bezeichnung übernommen

### Mehrwertsteuer-Konto festlegen

Für jeden Steuersatz können Sie ein Mehrwertsteuer-Konto festlegen. Öffnen Sie *Finanzen > Konfiguration > Finanzen > Steuern* und zeigen Sie einen Steuersatz an. Im Tab *Definition* legen Sie das Mehrwertsteuer-Konto für Rechnungen und Rückerstattungen fest.

![](attachments/Finanzen%20Mehrwertsteuer%20Abrechnungskonto.png)

::: tip
Für Steuersätze von eingehenden Rechnungen verwenden Sie das Vorsteuerkonto 1170 oder 1171 und für ausgehende Rechnungen das Konto 2200.
:::

### Steuerperiode festlegen

Öffnen Sie *Finanzen > Konfiguration > Einstellungen > Steuern*. Legen Sie im Bereich *regelmässige Steuernrückzahlungen* die Periode für die Steuerrückzahlungen fest.

### Steuerkonten konfigurieren

Klicken Sie auf *Einstellungen > Finanzen > Steuern > Konfigurieren der Steuerkonten*. Hier können Sie die Konten pro Steuersatz für die Bezahlung der Mehrwertsteuer hinterlegen.

| Name       | Tax Payable Account    | Tax Receivable Account |
| ---------- | ---------------------- | ---------------------- |
| MwSt. 0%   | 2201 Zu zahlende MwSt. | 2201 Zu zahlende MwSt. |
| MwSt. 2,5% | 2201 Zu zahlende MwSt. | 2201 Zu zahlende MwSt. |
| MwSt. 3,7% | 2201 Zu zahlende MwSt. | 2201 Zu zahlende MwSt. |
| MwSt. 7,7% | 2201 Zu zahlende MwSt. | 2201 Zu zahlende MwSt. |
| MwSt. 100% | 2201 Zu zahlende MwSt. | 2201 Zu zahlende MwSt. |

::: tip
Normalerweise werden in den Spalten *Steuer aktuelles Konto (bezahlen)* und *Steuer aktuelles Konto (empfangen)* das Konto *2201 Abrechnungskonto MWST* hinterlegt.
:::

### Standard-Steuer auf Konto hinterlegen

Für jedes Konto können Sie einen Standard-Steuersatz hinterlegen. Rufen Sie das Konto in der Formularansicht auf und legen Sie den Steuersatz im Feld *Standard Steuern* fest.

![](attachments/Finanzen%20Mehrwertsteuer%20Standard%20Steuern.png)

### Standard-Steuer für Verkauf und Einkauf festlegen

Navigieren Sie nach *Einstellungen > Finanzen > Steuern* und legen Sie im Feld *Umsatzsteuer* und *Vorsteuer* die Steuer für *Einkauf* resp. *Verkauf* fest.

## International

### MwSt.-Nummern überprüfen

Navigieren Sie nach *Einstellungen > Finanzen > Steuern* und aktivieren Sie die Option *MwSt-Identifikationsnr. überprüfen*.

::: tip
Um die Funktion zu testen, finden Sie hier Beispieldaten <https://viesapi.eu/test-vies-api/>.
:::

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

## One-Stop-Shop

### VAT-Konten anlegen

Navigieren Sie nach *Finanzen > Konfiguration > Kontenplan* und erstellen Sie diese neuen Einträge.

Geschuldete VAT:
* **Code**: 2202:
* **Name**: Geschuldete VAT (EU)
* **Typ**: Kurzfristige Verbindlichkeiten

Zu zahlende VAT:
* **Code**: 2203
* **Name**: Zu zahlende VAT (EU)
* **Typ**: Umlaufvermögen

### Mehrwertsteuer für EU-Ausland aktivieren

Navigieren Sie nach *Einstellungen > Finanzen > Steuern* und aktivieren Sie die Option *Innergemeinschaftlicher Fernabsatz der EU*. Anschliessend erscheint die Aktion *Refresh tax mappings*. Damit wird die Steuerzuordnung aktualisiert.

::: tip
Diese Option funktioniert nur für EU-Länder. Damit die OSS-Steuersätze einem Schweizer Unternehmen hinzufügen können, müssen Sie das Land des Unternehmen temporär auf *Deutschland* festlegen oder Schweiz der Ländergruppe *Europa* hinzufügen.
:::

### Steuerzuordnung für EU-Ausland aktualisieren

Navigieren Sie nach *Einstellungen > Finanzen > Steuern* und führen Sie die Aktion *Refresh tax mappings* aus.

### VAT-Steuersatz manuell erfassen

Wenn Sie VAT-Steuersätze manuell erfassen möchten, gehen Sie wie folgt vor. Navigieren Sie nach *Finanzen > Konfiguration > Steuern* und erstellen Sie einen neuen Eintrag:

* **Steuerbezeichnung**: 20.0% FR VAT
* **Steuertyp**: Verkauf
* **Betrag**: 20.0000
* **Verteilung für Rechnungen**:

|      % | Basiert auf | Konto                     | Steuerraster |
| ------:| ----------- | ------------------------- | ------------ |
|        | Basis       |                           | OSS          |
| 100.00 | der Steuer  | 2202 Geschuldete VAT (EU) | OSS          |

* **Verteilung für Gutschriften**:

|      % | Basiert auf | Konto                     | Steuerraster |
| ------:| ----------- | ------------------------- | ------------ |
|        | Basis       |                           | OSS          |
| 100.00 | der Steuer  | 2202 Geschuldete VAT (EU) | OSS          |

* **Bezeichnung auf Rechnungen**: 20%
* **Steuergruppe**: OSS 20.0%

Wiederholen Sie diesen Vorgang für jedes EU-Land.

## Abrechnung

### Steuerbericht anzeigen

Wenn Sie den Steuerbericht anzeigen möchten, wählen Sie *Buchhaltung > Berichtswesen > Steuerbericht*.

::: tip
Die Steuererklärung ist für Odoo ein Steuerbericht.
:::

### Steuererklärung anzeigen

Odoo erstellt gemäss Seuerperiode automatisch die Steuererklärung. Zeigen Sie das Dashboard von *Buchhaltung* an und klicken Sie bei der Kachel *Sonstige* auf die Steuererklärung.

![](attachments/Finance%20Tax%20Aktuelle%20Steuererklärung.png)

### Steuerabschlussbuchung erstellen

Wenn Sie eine Abschlussbuchung für die Steuererklärung vornehmen wollen, öffnen Sie *Finanzen > Berichtswesen > Steuerbericht* und klicken auf *Abschlussbuchung*.

Odoo erstellt eine Buchung für die Steuererklärung gemäss Steuerperiode (siehe [Steuerperiode festlegen](#Steuerperiode%20festlegen)). Dabei wird der Steuerbetrag aus dem zu schuldenden Steuerbetrag sowie Vorsteuerabzug gemäss Steuerkonten berechnet.

![](attachments/Finanzen%20Mehrwertsteuer%20Abschlussbuchung.png)

### Steuerabschlussbuchung aktualisieren

Die Abschlussbuchung der Steuererklärung kann, sofern nicht gebucht, aktualisier werden. Zeigen Sie die Abschlussbuchung an und wählen Sie *-> Aktualisieren*.

::: tip
Die Abschlussbuchung ist mit dem entsprechenden Steuerbericht über den Smart-Button verlinkt.
:::

### Vereinnahmte Buchungen aufgrund von Zahlungen anzeigen

Wenn Sie [nach vereinnahmten Entgelten verrechnen](#Nach%20vereinnahmten%20Entgelten%20verrechnen) und eine Abstimmung für eine Rechnung mit einer Steuerfälligkeit *Auf der Grundlage einer Zahlung* durchführen, wird eine Umbuchung vom Übergangskonto auf das effektive MWST-Konto erstellt. Öffnen Sie das Steuer-Journal um diese Buchungen anzueigen.

![](attachments/Finanzen%20Mehrwertsteuer%20Buchung%20Übergangskonto.png)

### Steueranpassung vornehmen

Angenommen Sie haben auf einer Lieferantenrechnung eine falsche Steuer verrechnet und der Steuerbericht ist bereits verbucht, so können Sie mit der Aktion *Finanzen > Finanzen > Steueranpassung* eine Korrekturbuchung erstellen. Geben Sie als Betrag den Steuerbetrag ein.

Hier ein Beispiel einer Lieferantenrechung zur Korrektur:
![](attachments/Finanzen%20Mehrwertsteuer%20Steueranpassung%20Rechnung.png)

Der Fehlbetrag wird im Aktionsformular eingetragen.

![](attachments/Finanzen%20Mehrwertsteuer%20Steueranpassung.png)

Und daraus wird diese Buchung generiert.

![](attachments/Finanzen%20Mehrwertsteuer%20Steueranpassung%20Buchung.png)

## Technisch

### Konten-Tags ohne Entwicklermodus anzeigen

Bis #Odoo15.

Das Menü *Konten-Tags* wird nur im Entwicklermodus angezeigt. Um das Verhalten zu ändern, öffnen Sie *Einstellungen > Technisch > Benutzer-Interface > Menüposten*, zeigen den Menüposten *Konten-Tags* an und entfernen im Tab *Zugriffsrechte* die Gruppe. Aktualisieren Sie den Browser und verlassen Sie den Entwicklermodus. Sie sollten den Menüposten nun sehen.

### Steuergruppen anzeigen

Ab #Odoo15 : Navigieren Sie nach *Finanzen > Konfiguration > Steuergruppen*.

Bis #Odoo15: Damit Sie eine Übersicht der Steuergruppen erhalten, müssen Sie via *Einstellungen > Technisch > Benutzer-Interface > Menüposten* einen neuen Eintrag anlegen:

* **Menü**: `Steuergruppen`
* **Obermenü**: `Finanzen/Konfiguration/Finanzen`
* **Aktion**: `ir.actions.act_window` `Steuergruppen`
* **Nummernfolge**: `10`

### Steuertags anzeigen

Damit Sie eine Übersicht der Steuertags erhalten, müssen Sie via *Einstellungen > Technisch > Benutzer-Interface > Menüposten* einen neuen Eintrag anlegen:

* **Menü**: `Steuertags`
* **Obermenü**: `Finanzen/Konfiguration/Finanzen`
* **Aktion**: `ir.actions.act_window` `Konten Tags`
* **Nummernfolge**: `10`

###  Aktivitätstyp für Steuerbericht konfigurieren

Navigieren Sie nach *Einstellungen > Technisch > Aktivitätstypen* und zeigen Sie den Typ *Steuerbericht* an. Hier können Sie die Standardwerte für den Aktivitätstyp festlegen.

## Bezugssteuer

### Bezugssteuer einrichten

Die bestehende Bezugssteuer *UST 8,1% Bezugssteuer* von Odoo ist für den Steuerbericht unzureichend.

Gemäss [Steuersätze anpassen](#Steuersätze%20anpassen) können Sie eine Kopie von *UST 8,1% Bezugssteuer* machen und wie folgt anpassen:

* **Steuerbezeichnung**: Bezugssteuer 8,1%
* **Betrag**: 8.1000
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

Für Bezugssteuer für Investition können Sie ebenfalls eine Kopie erstellen und im Steuerraster jeweils den Tag 405 statt 400 verwenden.

## Saldosteuersätze

### Saldosteuersatz erfassen

Wenn Sie mit Saldosteuersätzen die Mehrwersteuer abrechnen, müssen Sie die ausgewählten Saldosteuersätze manuell erfassen. Öffnen Sie *Finanzen > Konfiguration > Finanzen > Steuern* und kopieren Sie den Standardsteuersatz *UST 8,1% Lief./DL (exkl. MWST)*. Bearbeiten Sie den Steuersatz wie folgt um beispielsweise Beratung 6,3% abzurechnen:

* **Name**: UST 8,1% Lief./DL (exkl. MWST) Beratung
* **Verteilung für Rechnungen**:
	* Zeile 2 %: 84.08
	* Zeile 3 %: 15.92
* **Verteilung für Gutschriften**:
	* Zeile 2 %: 84.08
	* Zeile 3 %: 15.92

Auf einer Kundenrechnung wird die Differenz von 6,3% zu 8,1% wird als Erlös gut geschrieben. Auf dem Steuerbericht erscheint nur der Betrag von 6,3% als geschuldete Mehrwertsteuer.

::: tip
Die Berechnung der Prozente ist wie folgt:
* 84.08% = (6.3*1.081)/8.1
* 15.92% = 100-84.08
:::

::: warning
Damit keine Vorsteuer-Buchungen gemacht werden, muss auf allen Steuersätzen vom Steuertyp *Einkauf* das Vorsteuer-Konto und der Steuertag entfernt werden.
:::

## Buchhaltung

### Vorsteuerabzug auf Buchungszeile machen

Navigieren Sie nach *Finanzen > Finanzen > Buchungssätze* und wählen zeigen Sie die Buchung an auf der ein Vorsteuerabzug geltend gemacht werden soll.