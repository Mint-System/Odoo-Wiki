---
title: Buchhaltung Berichte
description: Finanzberichte erstellen.
tags:
- HowTo
prev: ./accounting
---
# Buchhaltung Berichte
![icons_odoo_account_accountant](attachments/icons_odoo_account_accountant.png)

{{ $frontmatter.description }}

## Konfiguration

### Option "Alle auffalten" aktivieren

Wenn Sie in Finannzberichen die Option *Alle auffalten* vermissen, navigieren Sie nach *Buchhaltung > Konfiguation > Finanzberichte* und öffnen hier den entsprechenden Bericht. Aktivieren Sie die Option *Filter zum Aufklappen aller Optionen anzeigen*. Auf dieser Ansicht können Sie auch weitere Optionen akivieren und deaktivieren.

## Berichte

### Saldenliste nach Konto anzeigen

Wenn Sie das Soll, Haben und Saldo für eine bestimmte Periode pro Konto ansehen möchten, öffnen Sie *Buchhaltung > Berichtswesen > Hauptbuch*. Hier können Sie nach bestimmten Konten, Perioden und Journalen filtern. Zu jedem Konto sehen Sie das Saldo.

Um den Bericht zu generieren Wählen Sie *Speichern*. Geben Sie im Dialog das Format und den Dateinamen an.

::: warning
Ein Jahresauszug einer Buchhaltung kann mehrere hundert Seiten produzieren. Beim Erstellen von PDF braucht Odoo mehr Zeit als beim Erstellen von einem XLSX-Dokument.
:::

### Kontenblatt erstellen

Öffnen Sie  *Buchhaltung > Berichtswesen > Hauptbuch*. Geben Sie in der Suchmaske optional ein Kontonummer ein und filtern Sie die Buchungszeilen nach Geschäftsjahr. Wählen Sie in der Filterleiste *Alle auffalten*. Mit der Aktion *PDF* oder *XLSX* können Sie den Bericht als entsprechende Datei speichern.

::: warning
Die Erstellung der PDF-Datei kann bei umfangreichen Kontenblätter lange dauern. Als Alternative wird empfohlen den Bericht als XLSX-Datei zu speichern und anschliessend als PDF-Datei abzuspeichern.
:::

### Kumulierte Buchungszeilen anzeigen

Öffnen Sie *Buchhaltung > Buchhaltung > Hauptbuch*. Hier sehen Sie gemäss Kontenplan die Spalten *Soll*, *Haben* und *Saldo*. Filtern Sie die Angaben nach Konten und Buchungsdatum um die gewünschte Periode anzuzeigen

![](attachments/Buchhaltung%20Berichte%20Saldenliste.png)

::: tip
Das Feld *Cumulated Balance* kumuliert fortlaufend das Saldo. Sie können das Feld über das Kontext-Menü ein- und ausblenden.
:::

### Buchungszeilen auswerten

Alle Buchungszeilen können Sie als Pivot auswerten. Wenn Sie eine beispielsweise eine Saldenliste generieren möchten, gehen Sie wie folgt vor:

![](attachments/Buchhaltung%20Saldenliste%20erstellen.gif)

### Bilanz anzeigen

Klicken Sie auf *Buchhaltung > Berichtswesen > Schweiz > Bilanz*.

### Erfolgsrechnung anzeigen

Klicken Sie auf *Buchhaltung > Berichtswesen > Schweiz > Erfolgsrechnung*.

### Kontonummer-Bereich exportieren

Angenommen Sie möchten einen bestimmten Konten-Bereich, beispielsweise von 1500 bis 2000, anzeigen, müssen Sie *Buchhaltung > Buchhaltung > Hauptbericht* anwählen. Hier können Sie das Feld *Konto Root* entsprechen den gewählten Bereichen filtern.

![](attachments/Buchhaltung%20Berichte%20Hauptbuch%20Bereich.png)

### Buchungszeilen mit Gegenkonto anzeigen

Eine Buchungszeile enthählt immer noch nur ein Konto. Der Buchungssatz kann mehrere Buchungszeilen enthalten. Wenn Sie eine Aufstellung der Buchungszeilen mit Gegenkonto sehen möchten, aktivieren Sie den Entwicklermodus und wählen *Buchhaltung > Buchhaltung > Buchungszeilen*. Filtern Sie die Buchungszeilen nach einem bestimmten Journal und gruppieren Sie nach *Buchungssatz*.

![](attachments/Buchhaltung%20Berichte%20Buchungszeilen%20mit%20Gegenkonto%20anzeigen.png)

## Steuerbericht

### Steuerbericht anzeigen

Klicken Sie auf *Buchhaltung > Berichtswesen > Steuerbericht*.

:::tip
Der Steuerbericht wird in regelmässigen Abständen generiert. Die Einstellung dazu finden Sie unter *Einstellungen > Buchhaltung > Steuern > Periodizität der Steuererklärung*.
:::

### Steuerbericht nach Steuersatz anzeigen

Klicken Sie auf *Buchhaltung > Berichtswesen > Steuerbericht* und anschliessend wählen Sie den Filter *Bericht: Gruppieren nach: Steuern > Konto*.

### Abgeschlossene Steuerbericht anzeigen

Zeigen Sie *Buchhaltung > Buchhaltung > Buchungssätze* an und wählen Sie *Gruppieren nach > Benutzerdefinierte Gruppe hinzufügen* und wählen Sie *Tax Closing End Date* aus. Nun werden alle Buchungssätze mit einem Steuerbericht angezeigt. Wählen Sie einen Buchungssatz aus und klicken Sie auf den Smart-Link *Steuerbericht*.

### Versteuerbare Buchungssätze anzeigen

Zeigen Sie *Buchhaltung > Buchhaltung > Buchungssätze* an und filtern Sie wie folgt um alle Buchungssätze des ersten Quartals mit einem Steuerbetrag anzuzeigen:

Filter:

* Steuer ist grösser als "0"
* Datum: QX YYYY
* Gebucht

![](attachments/Buchhaltung%20Berichte%20Steuerbare%20Buchungssätze.png)

### Buchungszeilen aus Steuerbericht anzeigen

Möchten Sie die Buchungszeilen des Steuerbericht anzeigen, öffnen Sie *Buchhaltung > Buchhaltung > Buchungszeilen* und filtern die Einträge wie folgt:

Filter:

* Gebucht
* Datum: QX YYYY
* Urheber Steuergruppe ist gesetzt

Gruppe:

* Urheber Steuergruppe

![](attachments/Buchhaltung%20Berichte%20Steuerbericht%20Buchungszeilen.png)

### One-Stop-Shop Import und Verkauf anzeigen

Klicken Sie auf *Buchhaltung > Berichtswesen > Umstatzsteuerbericht*. Wählen Sie den Filter *Bericht: OSS Sales* für die Verkaufsstatistik und *Bericht: OSS Sales* für die Importstatistik.

### Saldosteuersätze in Schweizer Steuerbericht anzeigen

Wenn Sie die Saldosteuersätze ausweisen möchhten, müssen Sie für jeden Saldosteuersatz eine [Zeile im Buchhaltungsbericht hinzufügen](Entwicklung%20Buchhaltung.md#Zeile%20in%20Buchhaltungsbericht%20hinzufügen). Verwenden Sie dabei die folgenden Definitionen:

* **Berichtszeile**: 303a - Saldosteuersatz (6.1%): Online Stellenportal
* **Übergeordnete Zeile**: 303a - Normalsatz (8.1%): Leistungen CHF ab 01.01.2024 
* **Code**: tax_ch_303a_$ID
* **Ausdrücke**:
	* **Ausdruck**: balance
	* **Berechnungsmaschine**: Odoo-Bereich
	* **Formel**: `[("tax_ids", "ilike", "Online Stellenportal")]`
	* **Unterformel**: -sum

Auf dem Steuerbericht sieht das wie folgt aus:

![](attachments/Schweizer%20Steuerbericht%20mit%20Saldosteuersatz.png)

## Mahnwesen

### Mahnstufen einrichten

Navigieren Sie nach *Buchhaltung > Konfiguration >Mahnstufen* und erstellen Sie hier einen neuen Eintrag.

Mit der Eintage der Anzahl Tage bei *Nach __ bei fällig, tun Sie folgendes:* wird die entsprechende Mahnstufe gemäss Fälligkeit der offenen Rechnungen wirksam.

::: tip
Die geplante Aktion *Follow-up des Kontoberichts; Follow-up durchführen* löst die Prüfung der Mahnstufen aus. Sie wird täglich ausgeführt.
:::

### Mahnberichte anzeigen

Sie finden eine Aufstellung der Mahnungen via *Buchhaltung > Kunden > Mahnberichte*.

![](attachments/Buchhaltung%20Berichte%20Mahnberichte.png)

::: warning
Wenn Sie einen Mahbericht öffnen, befinden Sie sich technisch auf einem Kontakt-Eintrag. Nachrichten, die mit der Ansicht Mahnbericht versendet werden, werdem auf dem Kontakt-Eintrag registriert. Prüfen Sie vor dem Versand der Nachricht, ob die Abonnenten auf dem Kontakt-Eintrag korrekt sind.
:::

## Forderungen

### Überfällige Forderungen anzeigen

Mit dem Bericht *Buchhaltung > Berichtswesen > Überfällige Forderungen* können Sie für einen oder mehrere Kunden die offenen Debitoren anzeigen lassen.

![](attachments/Buchhaltung%20Berichte%20Forderunen.png)

::: tip
Mit dem Datumsfilter können Sie die Forderungen zu einem bestimmten Zeitpunkt, beispielsweise Ende letztes Geschäftsjahr, anzeigen lassen.
:::

## Verbindlichkeiten

### Überfällige Verbindlichkeit anzeigen

Mit dem Bericht *Buchhaltung > Berichtswesen > Überfällige Verbindlichkeit* können Sie für einen oder mehrere Lieferanten die offenen Kreditoren anzeigen lassen.

::: tip
Mit dem Datumsfilter können Sie die Verbindlichkeiten zu einem bestimmten Zeitpunkt, beispielsweise Ende letztes Geschäftsjahr, anzeigen lassen.
:::

## Kontoauszug

### Bericht Bank-Abstimmung anzeigen

Klicken Sie auf *Buchhaltung*  und wählen Sie ein Bank-Journal aus. Klicken Sie auf das Kontext-Menü und wählen Sie *Abstimmungsbericht*.

![](attachments/Buchhaltung%20Berichte%20Ausgleichsbericht.png)

Hier werden nicht abgeglichene Bank-Zahlungen und Belege angezeigt.

Oberhalb des Berichts kann diese Meldung erscheinen:

![](attachments/Buchhaltung%20Berichte%20Balance%20Off.png)

Klicken Sie *ungebuchte Journalbuchungen* um die Buchungen anzuzeigen.

### Beleg drucken

Auf Banken- und Kassenjournalen werden Bankauszüge und Belege abgebildet. Wählen Sie ein Journal auf der Übersicht *Buchhaltung*  aus und drücken Sie auf Kontextmenü und wählen Sie *Belege*.

![](attachments/Buchhaltung%20Berichte%20Belege.png)

Markieren Sie die Belge und wählen Sie *Drucken > Beleg*.

![](attachments/Buchhaltung%20Berichte%20Beleg%20drucken.png)

Auf der Bericht werden alle Belge mit den einzelnen Transaktionen aufgelistet.

## Anlagen

### Anlagespiegel anzeigen

Alle Anlagen und Abschreibungen können Sie unter *Buchhaltung > Berichtswesen > Abschreibungszeitplan* anzeigen.

![](attachments/Buchhaltung%20Berichte%20Abschreibungszeitplan.png)

## Budget

### Budget zusammenfassen

Navigieren Sie nach *Buchhaltung > Berichtswesen > Budgetanalyse*. Entfernen Sie die Filter und Gruppieren Sie die Einträge nach *Budgetposition*.

![](attachments/Buchhaltung%20Berichte%20Budgetanalyse.png)
