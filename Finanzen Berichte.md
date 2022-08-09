---
tags:
- HowTo
prev: ./finanzen
---
# Finanzen Berichte
![icons_odoo_account_accountant](assets/icons_odoo_account_accountant.png)

Finanzberichte erstellen.

## Hauptbuch anzeigen

Wenn Sie verschiedene Kontoauszüge ansehen wollen, öffnen Sie *Finanzen > Berichtswesen > Hauptbuch*. Hier können Sie nach bestimmten Konten, Perioden und Journalen filtern. Zu jedem Konto sehen Sie das Saldo.

## Kontenblatt erstellen

Öffnen Sie  *Finanzen > Berichtswesen > Hauptbuch* und geben Sie in der Suchmaske die Kontonummer ein. Wählen Sie in der Filterleiste *Alle auffalten* und filtern Sie die Buchungszeilen nach Geschäftsjahr. Mit der Aktion *Vorschau Drucken* erhalten Sie eine PDF-Datei der Ansicht.

## Saldenliste anzeigen

Öffnen Sie *Finanzen > Finanzen > Hauptbuch*. Hier sehen Sie gemäss Kontenplan die Spalten *Soll*, *Haben* und *Saldo*. Filtern Sie die Angaben nach Konten und Buchungsdatum um die gewünschte Periode anzugigen

![](assets/Finanzen%20Berichte%20Saldenliste.png)

## Buchungszeilen auswerten

Alle Buchungszeilen können Sie als Pivot auswerten. Wenn Sie eine Saldenliste generieren möchten, gehen Sie wie folgt vor:

![Finanzen Saldenliste erstellen](assets/Finanzen%20Saldenliste%20erstellen.gif)

## Bilanz anzeigen

Klicken Sie auf *Finanzen > Berichtswesen > Schweiz > Bilanz*.

## Erfolgsrechnung anzeigen

Klicken Sie auf *Finanzen > Berichtswesen > Schweiz > Erfolgsrechnung*.

## Umsatzsteuerbericht anzeigen

Klicken Sie auf *Finanzen > Berichtswesen > Prüfungsberichte > Umstatzsteuerbericht*.

:::tip
Wenn Sie die Ausgaben des Umsatzsteuerberichts prüfen, müssen Sie beachten, dass die Buchungszeilen gefiltert werden müssen, damit der korrekte Nettobetrag erscheint.

![Finanzen Berichte Umsatzsteuerbericht Prüfen](assets/Finanzen%20Berichte%20Umsatzsteuerbericht%20Prüfen.gif)
:::

Der Umsatzsteuerbericht wird in regelmässigen Abständen generiert. Die Einstellung dazu finden Sie unter *Einstellungen > Finanzen > Steuern > regelmässige Steuernrückzahlungen*.

## Bericht Bank-Abgleich anzeigen

Klicken Sie auf *Finanzen* und wählen Sie ein Bank-Journal aus. Klicken Sie auf das Kontext-Menü und wählen Sie *Offne-Posten Ausgleichsbericht*.

![](assets/Finanzen%20Berichte%20Ausgleichsbericht.png)

Hier werden nicht abgeglichene Bank-Zahlungen und Belege angezeigt.

Oberhalb des Berichts kann diese Meldung erscheinen:

![](assets/Finanzen%20Berichte%20Balance%20Off.png)

Klicken Sie *journal items* um die Buchungen anzuzeigen.

## Buchungszeilen mit Gegenkonto anzeigen

Eine Buchungszeile enthählt immer noch nur ein Konto. Der Buchungssatz kann mehrere Buchungszeilen enthalten. Wenn Sie eine Aufstellung der Buchungszeilen mit Gegenkonto sehen möchten, aktivieren Sie den Entwicklermodus und wählen *Finanzen > Finanzen > Buchungszeilen*. Filtern Sie die Buchungszeilen nach einem bestimmten Journal und gruppieren Sie nach *Buchungssatz*.

![](assets/Finanzen%20Berichte%20Buchungszeilen%20mit%20Gegenkonto%20anzeigen.png)

## Mahnberichte anzeigen

Sie finden eine Aufstellung der Mahnungen via *Finanzen > Kunden > Mahnberichte*.

![](assets/Finanzen%20Berichte%20Mahnberichte.png)

::: warning
Wenn Sie einen Mahbericht öffnen, befinden Sie sich technisch auf einem Kontakt-Eintrag. Nachrichten, die mit der Ansicht Mahnbericht versendet werden, werdem auf dem Kontakt-Eintrag registriert. Prüfen Sie vor dem Versand der Nachricht, ob die Abonnenten auf dem Kontakt-Eintrag korrekt sind.
:::

## Versteuerbare Buchungssätze anzeigen

Zeigen Sie *Finanzen > Finanzen > Buchungssätze* an und filtern Sie wie folgt um alle Buchungssätze des ersten Quartals mit einem Steuerbetrag anzuzeigen.

![](assets/Finanzen%20Berichte%20Steuerbare%20Buchungssätze.png)

## Buchungszeilen aus Umsatzsteuerbericht anzeigen

Möchten Sie die Buchungszeilen des Umsatzsteuerberichts anzeigen, öffnen Sie *Finanzen > Finanzen > Buchungszeilen* und filtern die Einträge wie folgt:

![](assets/Finanzen%20Berichte%20Umsatzsteuer%20Buchungszeilen.png)

## Überfällige Forderungen anzeigen

Mit dem Bericht *Finanzen > Berichtswesen > Überfällige Forderungen* können Sie für einen oder mehrere Kunden die offenen Debitoren anzeigen lassen.

![](assets/Finanzen%20Berichte%20Forderunen.png)

## Beleg drucken

Auf Banken- und Kassenjournalen werden Bankauszüge und Belege abgebildet. Wählen Sie ein Journal auf der Übersicht *Finanzen* aus und drücken Sie auf Kontextmenü und wählen Sie *Belege*.

![](assets/Finanzen%20Berichte%20Belege.png)

Markieren Sie die Belge und wählen Sie *Drucken > Beleg*.

![](assets/Finanzen%20Berichte%20Beleg%20drucken.png)

Auf der Bericht werden alle Belge mit den einzelnen Transaktionen aufgelistet.

## Konto-Bereich exportieren

Angenommen Sie möchten einen bestimmten Konten-Bereich, beispielsweise von 1500 bis 2000, anzeigen, müssen Sie *Finanzen > Finanzen > Hauptbericht* anwählen. Hier können Sie das Feld *Konto Root* entsprechen den gewählten Bereichen filtern.

![](assets/Finanzen%20Berichte%20Hauptbuch%20Bereich.png)

## Anlagespiegel anzeigen

Alle Anlagen und Abschreibungen können Sie unter *Finanzen > Berichtswesen > Abschreibungszeitplan* anzeigen.

![](assets/Finanzen%20Berichte%20Abschreibungszeitplan.png)