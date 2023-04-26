---
description: Finanzberichte erstellen.
tags:
- HowTo
prev: ./finanzen
---
# Finanzen Berichte
![icons_odoo_account_accountant](assets/icons_odoo_account_accountant.png)

{{ $frontmatter.description }}

## Konfiguration

### Option "Alle auffalten" aktivieren

Wenn Sie in Finannzberichen die Option *Alle auffalten* vermissen, navigieren Sie nach *Finanzen > Konfiguation > Finanzberichte* und öffnen hier den entsprechenden Bericht. Aktivieren Sie die Option *Filter zum Aufklappen aller Optionen anzeigen*. Auf dieser Ansicht können Sie auch weitere Optionen akivieren und deaktivieren.

## Berichte

### Saldenliste nach Konto anzeigen

Wenn Sie das Soll, Haben und Saldo für eine bestimmte Periode pro Konto ansehen möchten, öffnen Sie *Finanzen > Berichtswesen > Hauptbuch*. Hier können Sie nach bestimmten Konten, Perioden und Journalen filtern. Zu jedem Konto sehen Sie das Saldo.

Um den Bericht zu generieren Wählen Sie *Speichern*. Geben Sie im Dialog das Format und den Dateinamen an.

::: warning
Ein Jahresauszug einer Buchhaltung kann mehrere hundert Seiten produzieren. Beim Erstellen von PDF braucht Odoo mehr Zeit als beim Erstellen von einem XLSX-Dokument.
:::

### Kontenblatt erstellen

Öffnen Sie  *Finanzen > Berichtswesen > Hauptbuch* und geben Sie in der Suchmaske die Kontonummer ein. Wählen Sie in der Filterleiste *Alle auffalten* und filtern Sie die Buchungszeilen nach Geschäftsjahr. Mit der Aktion *Vorschau Drucken* oder *Speichern* erhalten Sie eine PDF-Datei der Ansicht.

### Kumulierte Buchungszeilen anzeigen

Öffnen Sie *Finanzen > Finanzen > Hauptbuch*. Hier sehen Sie gemäss Kontenplan die Spalten *Soll*, *Haben* und *Saldo*. Filtern Sie die Angaben nach Konten und Buchungsdatum um die gewünschte Periode anzuzeigen

![](assets/Finanzen%20Berichte%20Saldenliste.png)

:::
Das Feld *Cumulated Balance* kumuliert fortlaufend das Saldo. Sie können das Feld über das Kontext-Menü ein- und ausblenden.
:::

### Buchungszeilen auswerten

Alle Buchungszeilen können Sie als Pivot auswerten. Wenn Sie eine beispielsweise eine Saldenliste generieren möchten, gehen Sie wie folgt vor:

![Finanzen Saldenliste erstellen](assets/Finanzen%20Saldenliste%20erstellen.gif)

### Bilanz anzeigen

Klicken Sie auf *Finanzen > Berichtswesen > Schweiz > Bilanz*.

### Erfolgsrechnung anzeigen

Klicken Sie auf *Finanzen > Berichtswesen > Schweiz > Erfolgsrechnung*.

### Kontonummer-Bereich exportieren

Angenommen Sie möchten einen bestimmten Konten-Bereich, beispielsweise von 1500 bis 2000, anzeigen, müssen Sie *Finanzen > Finanzen > Hauptbericht* anwählen. Hier können Sie das Feld *Konto Root* entsprechen den gewählten Bereichen filtern.

![](assets/Finanzen%20Berichte%20Hauptbuch%20Bereich.png)

### Buchungszeilen mit Gegenkonto anzeigen

Eine Buchungszeile enthählt immer noch nur ein Konto. Der Buchungssatz kann mehrere Buchungszeilen enthalten. Wenn Sie eine Aufstellung der Buchungszeilen mit Gegenkonto sehen möchten, aktivieren Sie den Entwicklermodus und wählen *Finanzen > Finanzen > Buchungszeilen*. Filtern Sie die Buchungszeilen nach einem bestimmten Journal und gruppieren Sie nach *Buchungssatz*.

![](assets/Finanzen%20Berichte%20Buchungszeilen%20mit%20Gegenkonto%20anzeigen.png)

## Mehrwertsteuer

### Umsatzsteuerbericht anzeigen

Klicken Sie auf *Finanzen > Berichtswesen > Prüfungsberichte > Umstatzsteuerbericht*.

:::tip
Wenn Sie die Ausgaben des Umsatzsteuerberichts prüfen, müssen Sie beachten, dass die Buchungszeilen gefiltert werden müssen, damit der korrekte Nettobetrag erscheint.

![Finanzen Berichte Umsatzsteuerbericht Prüfen](assets/Finanzen%20Berichte%20Umsatzsteuerbericht%20Prüfen.gif)
:::

Der Umsatzsteuerbericht wird in regelmässigen Abständen generiert. Die Einstellung dazu finden Sie unter *Einstellungen > Finanzen > Steuern > regelmässige Steuernrückzahlungen*.

### Abgeschlossene Umsatzsteuerberichte anzeigen

Zeigen Sie *Finanzen > Finanzen > Buchungssätze* an und wählen Sie *Gruppieren nach > Benutzerdefinierte Gruppe hinzufügen* und wählen Sie *Tax Closing End Date* aus. Nun werden alle Buchungssätze mit einem Mehrwersteuer Bericht angezeigt. Wählen Sie einen Buchungssatz aus und klicken Sie auf den Smart-Link *Umsatzsteuerbericht*.

### Versteuerbare Buchungssätze anzeigen

Zeigen Sie *Finanzen > Finanzen > Buchungssätze* an und filtern Sie wie folgt um alle Buchungssätze des ersten Quartals mit einem Steuerbetrag anzuzeigen.

![](assets/Finanzen%20Berichte%20Steuerbare%20Buchungssätze.png)

### Buchungszeilen aus Umsatzsteuerbericht anzeigen

Möchten Sie die Buchungszeilen des Umsatzsteuerberichts anzeigen, öffnen Sie *Finanzen > Finanzen > Buchungszeilen* und filtern die Einträge wie folgt:

![](assets/Finanzen%20Berichte%20Umsatzsteuer%20Buchungszeilen.png)

## Mahnwesen

### Mahnstufen einrichten

Navigieren Sie nach *Finanzen > Konfiguration >Mahnstufen* und erstellen Sie hier einen neuen Eintrag.

Mit der Eintage der Anzahl Tage bei *Nach __ bei fällig, tun Sie folgendes:* wird die entsprechende Mahnstufe gemäss Fälligkeit der offenen Rechnungen wirksam.

::: tip
Die geplante Aktion *Follow-up des Kontoberichts; Follow-up durchführen* löst die Prüfung der Mahnstufen aus. Sie wird täglich ausgeführt.
:::

### Mahnberichte anzeigen

Sie finden eine Aufstellung der Mahnungen via *Finanzen > Kunden > Mahnberichte*.

![](assets/Finanzen%20Berichte%20Mahnberichte.png)

::: warning
Wenn Sie einen Mahbericht öffnen, befinden Sie sich technisch auf einem Kontakt-Eintrag. Nachrichten, die mit der Ansicht Mahnbericht versendet werden, werdem auf dem Kontakt-Eintrag registriert. Prüfen Sie vor dem Versand der Nachricht, ob die Abonnenten auf dem Kontakt-Eintrag korrekt sind.
:::

## Forderungen

### Überfällige Forderungen anzeigen

Mit dem Bericht *Finanzen > Berichtswesen > Überfällige Forderungen* können Sie für einen oder mehrere Kunden die offenen Debitoren anzeigen lassen.

![](assets/Finanzen%20Berichte%20Forderunen.png)

::: tip
Mit dem Datumsfilter können Sie die Forderungen zu einem bestimmten Zeitpunkt, beispielsweise Ende letztes Geschäftsjahr, anzeigen lassen.
:::

## Verbindlichkeiten

### Überfällige Verbindlichkeit anzeigen

Mit dem Bericht *Finanzen > Berichtswesen > Überfällige Verbindlichkeit* können Sie für einen oder mehrere Lieferanten die offenen Kreditoren anzeigen lassen.

::: tip
Mit dem Datumsfilter können Sie die Verbindlichkeiten zu einem bestimmten Zeitpunkt, beispielsweise Ende letztes Geschäftsjahr, anzeigen lassen.
:::

## Kontoauszug

### Bericht Bank-Abgleich anzeigen

Klicken Sie auf *Finanzen* und wählen Sie ein Bank-Journal aus. Klicken Sie auf das Kontext-Menü und wählen Sie *Offne-Posten Ausgleichsbericht*.

![](assets/Finanzen%20Berichte%20Ausgleichsbericht.png)

Hier werden nicht abgeglichene Bank-Zahlungen und Belege angezeigt.

Oberhalb des Berichts kann diese Meldung erscheinen:

![](assets/Finanzen%20Berichte%20Balance%20Off.png)

Klicken Sie *journal items* um die Buchungen anzuzeigen.

### Beleg drucken

Auf Banken- und Kassenjournalen werden Bankauszüge und Belege abgebildet. Wählen Sie ein Journal auf der Übersicht *Finanzen* aus und drücken Sie auf Kontextmenü und wählen Sie *Belege*.

![](assets/Finanzen%20Berichte%20Belege.png)

Markieren Sie die Belge und wählen Sie *Drucken > Beleg*.

![](assets/Finanzen%20Berichte%20Beleg%20drucken.png)

Auf der Bericht werden alle Belge mit den einzelnen Transaktionen aufgelistet.

## Anlagen

### Anlagespiegel anzeigen

Alle Anlagen und Abschreibungen können Sie unter *Finanzen > Berichtswesen > Abschreibungszeitplan* anzeigen.

![](assets/Finanzen%20Berichte%20Abschreibungszeitplan.png)

## Budget

### Budget zusammenfassen

Navigieren Sie nach *Finanzen > Berichtswesen > Budgetanalyse*. Entfernen Sie die Filter und Gruppieren Sie die Einträge nach *Budgetposition*.

![](assets/Finanzen%20Berichte%20Budgetanalyse.png)