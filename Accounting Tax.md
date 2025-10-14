---
title: Buchhaltung Mehrwertsteuer
description: Mehrwertsteuer einfach abrechnen mit Odoo.
kind: howto
prev: ./accounting
---

# Buchhaltung Mehrwertsteuer

![icons_odoo_account_accountant](attachments/icons_odoo_account_accountant.png)

{{ $frontmatter.description }}

## Konfiguration

### Nach vereinnahmten Entgelten verrechnen

Wenn Sie die Mehrwertsteuer nach vereinnahmten Entgelten abrechnen wolle, navigieren Sie nach _Einstellungen > Buchhaltung > Steuern_ und aktivieren Sie die Option _Nach vereinnahmten Entgelten_. Legen Sie anschliessend ein Journal im Feld _Journal für die Besteuerung nach vereinnahmten Entgelten_ und ein Konto im Feld _Konto für erhaltenen Steuerbetrag_ fest.

- **Journal**: Steuern
- **Konto**: 2202 Umsatzsteuerausgleich Abrechnungsmethode

### Steuerfälligkeit für Steuersatz festlegen

Wenn Sie [nach vereinnahmten Entgelten verrechnen](#Nach%20vereinnahmten%20Entgelten%20verrechnen), können Sie für jeden Steuersatz die Steuerfälligkeit festlegen. Öffnen Sie _Buchhaltung > Konfiguration > Buchhaltung > Steuern_ und öffnen Sie einen Steuersatz. Im Tab _Erweiterte Optionen_ finden Sie das Feld _Steuerfälligkeit_. Wählen Sie _Auf der Grundlage einer Zahlung_ und legen Sie ein Übergangskonto fest, wenn Sie für diesen Steuersatz nach vereinnahmten Entgelt abrechnen möchten.

![](attachments/Buchhaltung%20Mehrwertsteuer%20Grundlage%20Zahlung.png)

Wird der entsprechende Steuersatz auf der Rechnungszeile verwendet, wird die MWST-Buchung entsprechend angepasst:

![](attachments/Buchhaltung%20Mehrwertsteuer%20Grundlage%20Zahlung%20Buchung.png)

### Steuersatz erfassen

Öffnen Sie _Buchhaltung > Konfiguration > Buchhaltung > Steuern_. Zeigen Sie einen bestehenden Steuersatz an und duplizieren Sie diesen. Dazu ein Beispiel für einem neuen Steuersatz auf Basis von _UST 7.7% Lief./DL (exkl. MWST)_:

- **Steuerbezeichnung**: UST 8.1% Lief./DL (exkl. MWST)
- **Betrag**: 8.1000%
- **Bezeichnung auf Rechnungen**: 8.1%
- **Steuergruppe**: MwSt. 8.1%

### Steuersatz anpassen

Öffnen Sie _Buchhaltung > Konfiguration > Buchhaltung > Steuern_. Hier werden alle Steuersätze festgelegt. Öffnen Sie einen Eintrag und passen Sie diese Felder an:

- **Steuerbezeichnung**: Ist die interne Bezeichnung
- **Steuerberechnung**: Legt fest wie die Steuer berechnet wird
- **Steuertyp**: Unterscheidung zwischen Einkauf und Verkauf
- **Steuergültigkeit**: Steuern nur für bestimmte Produktarten zulassen
- **Betrag**: Der Prozentsatz

Im Tab _Definition_ werden die Konten für die Buchung und die Ziffer für den Steuerbericht festlegt. Einmal für die Rechnung und einmal für die Gutschrift.

Im Tab _Erweiterte Optionen_ haben Sie diese wichtigen Felder:

- **Bezeichnung auf Rechnungen**: Gilt für Ein- und Ausgangsrechnungen
- **Steuergruppe**: Werden Steuersätze gruppiert, wird diese Bezeichnung übernommen

### Mehrwertsteuer-Konto festlegen

Für jeden Steuersatz können Sie ein Mehrwertsteuer-Konto festlegen. Öffnen Sie _Buchhaltung > Konfiguration > Buchhaltung > Steuern_ und zeigen Sie einen Steuersatz an. Im Tab _Definition_ legen Sie das Mehrwertsteuer-Konto für Rechnungen und Rückerstattungen fest.

![](attachments/Buchhaltung%20Mehrwertsteuer%20Abrechnungskonto.png)

::: tip
Für Steuersätze von eingehenden Rechnungen verwenden Sie das Vorsteuerkonto 1170 oder 1171 und für ausgehende Rechnungen das Konto 2200.
:::

### Steuerperiode festlegen

Öffnen Sie _Buchhaltung > Konfiguration > Einstellungen > Steuern_. Legen Sie im Bereich _regelmässige Steuernrückzahlungen_ die Periode für die Steuerrückzahlungen fest.

### Steuerkonten konfigurieren

Klicken Sie auf _Einstellungen > Buchhaltung > Steuern > Konfigurieren der Steuerkonten_. Hier können Sie die Konten pro Steuersatz für die Bezahlung der Mehrwertsteuer hinterlegen.

| Name       | Tax Payable Account    | Tax Receivable Account |
| ---------- | ---------------------- | ---------------------- |
| MwSt. 0%   | 2201 Zu zahlende MwSt. | 2201 Zu zahlende MwSt. |
| MwSt. 2,5% | 2201 Zu zahlende MwSt. | 2201 Zu zahlende MwSt. |
| MwSt. 3,7% | 2201 Zu zahlende MwSt. | 2201 Zu zahlende MwSt. |
| MwSt. 7,7% | 2201 Zu zahlende MwSt. | 2201 Zu zahlende MwSt. |
| MwSt. 100% | 2201 Zu zahlende MwSt. | 2201 Zu zahlende MwSt. |

::: tip
Normalerweise werden in den Spalten _Steuer aktuelles Konto (bezahlen)_ und _Steuer aktuelles Konto (empfangen)_ das Konto _2201 Abrechnungskonto MWST_ hinterlegt.
:::

### Standard-Steuer auf Konto hinterlegen

Für jedes Konto können Sie einen Standard-Steuersatz hinterlegen. Rufen Sie das Konto in der Formularansicht auf und legen Sie den Steuersatz im Feld _Standard Steuern_ fest.

![](attachments/Buchhaltung%20Mehrwertsteuer%20Standard%20Steuern.png)

### Standard-Steuer für Verkauf und Einkauf festlegen

Navigieren Sie nach _Einstellungen > Buchhaltung > Steuern_ und legen Sie im Feld _Umsatzsteuer_ und _Vorsteuer_ die Steuer für _Einkauf_ resp. _Verkauf_ fest.

## International

### MwSt.-Nummern überprüfen

Navigieren Sie nach _Einstellungen > Buchhaltung > Steuern_ und aktivieren Sie die Option _MwSt-Identifikationsnr. überprüfen_.

::: tip
Um die Funktion zu testen, finden Sie hier Beispieldaten <https://viesapi.eu/test-vies-api/>.
:::

### Steuerzurodnung anzeigen

Navigieren Sie nach _Buchhaltung > Konfiguration > Steuerzuordnung_. Hier finden Sie standardmässig zwei Einträge:

- **Schweiz national**: Diese Steuerzuordnung wird für Rechnung mit Partner aus der Schweiz angewendet.
- **Import/Export**: Diese Steuerzuordnung wird für alle Rechnungen (sprich ohne Schweizer Partner) angewendet.

::: tip
Die Standardkonfiguration von Odoo sieht vor, dass alle Internationalen Import/Export eine Steuerzuordnung von 0.0% erhalten.
:::

### Steuerzuordnung für ausgewähltes Land festlegen

Erstellen oder Kopieren Sie unter _Buchhaltung > Konfiguration > Steuerzuordnung_ einen neuen Eintrag. Im Feld _Land_ oder _Ländergruppe_ können Sie das ausewählte Land eintragen. Im Tab _Steuerzuordnung_ fügen Sie die ursprünglichen und neuen Steuersätze hinzu.

### Steuerzuordnung auf Lieferant festlegen

Zeigen Sie _Buchhaltung > Lieferanten > Lieferanten_ an. Öffnen Sie einen bestimmten Lieferanten und zeigen Sie den Tab _Verkauf & Einkauf_ an. Wählen Sie im Feld _Steuerzuordnung_ einen Wert aus.

### Steuerzuordnung auf Kunde festlegen

Zeigen Sie _Buchhaltung > Kunden > Kunden_ an. Öffnen Sie einen bestimmten Kunden und zeigen Sie den Tab _Verkauf & Einkauf_ an. Wählen Sie im Feld _Steuerzuordnung_ einen Wert aus.

## One-Stop-Shop

### VAT-Konten anlegen

Navigieren Sie nach _Buchhaltung > Konfiguration > Kontenplan_ und erstellen Sie diese neuen Einträge.

Geschuldete VAT:

- **Code**: 2202:
- **Name**: Geschuldete VAT (EU)
- **Typ**: Kurzfristige Verbindlichkeiten

Zu zahlende VAT:

- **Code**: 2203
- **Name**: Zu zahlende VAT (EU)
- **Typ**: Umlaufvermögen

### Mehrwertsteuer für EU-Ausland aktivieren

Navigieren Sie nach _Einstellungen > Buchhaltung > Steuern_ und aktivieren Sie die Option _Innergemeinschaftlicher Fernabsatz der EU_. Anschliessend erscheint die Aktion _Refresh tax mappings_. Damit wird die Steuerzuordnung aktualisiert.

::: tip
Diese Option funktioniert nur für EU-Länder. Damit die OSS-Steuersätze einem Schweizer Unternehmen hinzufügen können, müssen Sie das Land des Unternehmen temporär auf _Deutschland_ festlegen oder Schweiz der Ländergruppe _Europa_ hinzufügen.
:::

### Steuerzuordnung für EU-Ausland aktualisieren

Navigieren Sie nach _Einstellungen > Buchhaltung > Steuern_ und führen Sie die Aktion _Refresh tax mappings_ aus.

### VAT-Steuersatz manuell erfassen

Wenn Sie VAT-Steuersätze manuell erfassen möchten, gehen Sie wie folgt vor. Navigieren Sie nach _Buchhaltung > Konfiguration > Steuern_ und erstellen Sie einen neuen Eintrag:

- **Steuerbezeichnung**: 20.0% FR VAT
- **Steuertyp**: Verkauf
- **Betrag**: 20.0000
- **Verteilung für Rechnungen**:

|      % | Basiert auf | Konto                     | Steuerraster |
| -----: | ----------- | ------------------------- | ------------ |
|        | Basis       |                           | OSS          |
| 100.00 | der Steuer  | 2202 Geschuldete VAT (EU) | OSS          |

- **Verteilung für Gutschriften**:

|      % | Basiert auf | Konto                     | Steuerraster |
| -----: | ----------- | ------------------------- | ------------ |
|        | Basis       |                           | OSS          |
| 100.00 | der Steuer  | 2202 Geschuldete VAT (EU) | OSS          |

- **Bezeichnung auf Rechnungen**: 20%
- **Steuergruppe**: OSS 20.0%

Wiederholen Sie diesen Vorgang für jedes EU-Land.

## Abrechnung

### Steuerbericht anzeigen

Wenn Sie den Steuerbericht anzeigen möchten, wählen Sie _Buchhaltung > Berichtswesen > Steuerbericht_.

::: tip
Die Steuererklärung ist für Odoo ein Steuerbericht.
:::

### Steuererklärung anzeigen

Odoo erstellt gemäss Seuerperiode automatisch die Steuererklärung. Zeigen Sie das Dashboard von _Buchhaltung_ an und klicken Sie bei der Kachel _Sonstige_ auf die Steuererklärung.

![](attachments/Accounting%20Tax%20Aktuelle%20Steuererklärung.png)

### Steuerabschlussbuchung erstellen

Wenn Sie eine Abschlussbuchung für die Steuererklärung vornehmen wollen, öffnen Sie _Buchhaltung > Berichtswesen > Steuerbericht_ und klicken auf _Abschlussbuchung_.

Odoo erstellt eine Buchung für die Steuererklärung gemäss Steuerperiode (siehe [Steuerperiode festlegen](#Steuerperiode%20festlegen)). Dabei wird der Steuerbetrag aus dem zu schuldenden Steuerbetrag sowie Vorsteuerabzug gemäss Steuerkonten berechnet.

![](attachments/Buchhaltung%20Mehrwertsteuer%20Abschlussbuchung.png)

### Steuerabschlussbuchung aktualisieren

Die Abschlussbuchung der Steuererklärung kann, sofern nicht gebucht, aktualisier werden. Zeigen Sie die Abschlussbuchung an und wählen Sie _-> Aktualisieren_.

::: tip
Die Abschlussbuchung ist mit dem entsprechenden Steuerbericht über den Smart-Button verlinkt.
:::

### Vereinnahmte Buchungen aufgrund von Zahlungen anzeigen

Wenn Sie [nach vereinnahmten Entgelten verrechnen](#Nach%20vereinnahmten%20Entgelten%20verrechnen) und eine Abstimmung für eine Rechnung mit einer Steuerfälligkeit _Auf der Grundlage einer Zahlung_ durchführen, wird eine Umbuchung vom Übergangskonto auf das effektive MWST-Konto erstellt. Öffnen Sie das Steuer-Journal um diese Buchungen anzueigen.

![](attachments/Buchhaltung%20Mehrwertsteuer%20Buchung%20Übergangskonto.png)

### Steueranpassung vornehmen

Angenommen Sie haben auf einer Lieferantenrechnung eine falsche Steuer verrechnet und der Steuerbericht ist bereits verbucht, so können Sie mit der Aktion _Buchhaltung > Buchhaltung > Steueranpassung_ eine Korrekturbuchung erstellen. Geben Sie als Betrag den Steuerbetrag ein.

Hier ein Beispiel einer Lieferantenrechung zur Korrektur:
![](attachments/Buchhaltung%20Mehrwertsteuer%20Steueranpassung%20Rechnung.png)

Der Fehlbetrag wird im Aktionsformular eingetragen.

![](attachments/Buchhaltung%20Mehrwertsteuer%20Steueranpassung.png)

Und daraus wird diese Buchung generiert.

![](attachments/Buchhaltung%20Mehrwertsteuer%20Steueranpassung%20Buchung.png)

## Technisch

### Konten-Tags ohne Entwicklermodus anzeigen

Bis #Odoo15.

Das Menü _Konten-Tags_ wird nur im Entwicklermodus angezeigt. Um das Verhalten zu ändern, öffnen Sie _Einstellungen > Technisch > Benutzer-Interface > Menüposten_, zeigen den Menüposten _Konten-Tags_ an und entfernen im Tab _Zugriffsrechte_ die Gruppe. Aktualisieren Sie den Browser und verlassen Sie den Entwicklermodus. Sie sollten den Menüposten nun sehen.

### Steuergruppen anzeigen

Ab #Odoo15 : Navigieren Sie nach _Buchhaltung > Konfiguration > Steuergruppen_.

Bis #Odoo15: Damit Sie eine Übersicht der Steuergruppen erhalten, müssen Sie via _Einstellungen > Technisch > Benutzer-Interface > Menüposten_ einen neuen Eintrag anlegen:

- **Menü**: `Steuergruppen`
- **Obermenü**: `Buchhaltung/Konfiguration/Buchhaltung`
- **Aktion**: `ir.actions.act_window` `Steuergruppen`
- **Nummernfolge**: `10`

### Steuertags anzeigen

Damit Sie eine Übersicht der Steuertags erhalten, müssen Sie via _Einstellungen > Technisch > Benutzer-Interface > Menüposten_ einen neuen Eintrag anlegen:

- **Menü**: `Steuertags`
- **Obermenü**: `Buchhaltung/Konfiguration/Buchhaltung`
- **Aktion**: `ir.actions.act_window` `Konten Tags`
- **Nummernfolge**: `10`

### Aktivitätstyp für Steuerbericht konfigurieren

Navigieren Sie nach _Einstellungen > Technisch > Aktivitätstypen_ und zeigen Sie den Typ _Steuerbericht_ an. Hier können Sie die Standardwerte für den Aktivitätstyp festlegen.

## Bezugssteuer

### Bezugssteuer einrichten

Die bestehende Bezugssteuer _UST 8,1% Bezugssteuer_ von Odoo ist für den Steuerbericht unzureichend.

Gemäss [Steuersätze anpassen](#Steuersätze%20anpassen) können Sie eine Kopie von _UST 8,1% Bezugssteuer_ machen und wie folgt anpassen:

- **Steuerbezeichnung**: Bezugssteuer 8,1%
- **Betrag**: 8.1000
- **Verteilung für Rechnungen**:

|       % | Basiert auf | Konto                                                   | Steuerraster |
| ------: | ----------- | ------------------------------------------------------- | ------------ |
|         | Basis       |                                                         | +383a        |
| -100.00 | der Steuer  | 2200 Geschuldete Mehrwertsteuer                         | +383b        |
|  100.00 | der Steuer  | 1170 Vorsteuer auf Materialaufwand und Dienstleistungen | +400         |

- **Verteilung für Gutschriften**:

|       % | Basiert auf | Konto                                                   | Steuerraster |
| ------: | ----------- | ------------------------------------------------------- | ------------ |
|         | Basis       |                                                         | -383a        |
| -100.00 | der Steuer  | 2200 Geschuldete Mehrwertsteuer                         | -383b        |
|  100.00 | der Steuer  | 1170 Vorsteuer auf Materialaufwand und Dienstleistungen | -400         |

Für Bezugssteuer für Investition können Sie ebenfalls eine Kopie erstellen und im Steuerraster jeweils den Tag 405 statt 400 verwenden.

## Saldosteuersätze

### Saldosteuersatz erfassen

Wenn Sie mit Saldosteuersätzen die Mehrwersteuer abrechnen, müssen Sie die ausgewählten Saldosteuersätze manuell erfassen. Öffnen Sie _Buchhaltung > Konfiguration > Buchhaltung > Steuern_ und kopieren Sie den Standardsteuersatz _UST 8,1% Lief./DL (exkl. MWST)_. Bearbeiten Sie den Steuersatz wie folgt um beispielsweise Beratung 6,3% abzurechnen:

- **Name**: UST 8,1% Lief./DL (exkl. MWST) Beratung
- **Verteilung für Rechnungen**:
    - Zeile 2 %: 84.08
    - Zeile 3 %: 15.92
- **Verteilung für Gutschriften**:
    - Zeile 2 %: 84.08
    - Zeile 3 %: 15.92

Auf einer Kundenrechnung wird die Differenz von 6,3% zu 8,1% wird als Erlös gut geschrieben. Auf dem Steuerbericht erscheint nur der Betrag von 6,3% als geschuldete Mehrwertsteuer.

::: tip
Die Berechnung der Prozente ist wie folgt:

- 84.08% = (6.3\*1.081)/8.1
- 15.92% = 100-84.08
  :::

::: warning
Damit keine Vorsteuer-Buchungen gemacht werden, muss auf allen Steuersätzen vom Steuertyp _Einkauf_ das Vorsteuer-Konto und der Steuertag entfernt werden.
:::

### Bezugssteuer für Saldosteuersätze erfassen

Führen Sie [Bezugssteuer einrichten](#Bezugssteuer%20einrichten) aus. Für die Verteilung wählen Sie diese Angaben:

- **Betrag**: -8.1000
- **Verteilung für Rechnungen**:

|       % | Basiert auf | Konto                           | Steuerraster |
| ------: | ----------- | ------------------------------- | ------------ |
|         | Basis       |                                 | +383a        |
| -100.00 | der Steuer  | 2200 Geschuldete Mehrwertsteuer | +383b        |
|  100.00 | der Steuer  |                                 |              |

- **Verteilung für Gutschriften**:

|       % | Basiert auf | Konto                           | Steuerraster |
| ------: | ----------- | ------------------------------- | ------------ |
|         | Basis       |                                 | -383a        |
| -100.00 | der Steuer  | 2200 Geschuldete Mehrwertsteuer | -383b        |
|  100.00 | der Steuer  |                                 |              |

## Buchhaltung

### Vorsteuerabzug auf Buchungszeile machen

Navigieren Sie nach _Buchhaltung > Buchhaltung > Buchungssätze_ und wählen zeigen Sie die Buchung an auf der ein Vorsteuerabzug geltend gemacht werden soll.
