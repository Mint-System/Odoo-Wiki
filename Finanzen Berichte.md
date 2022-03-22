---
tags:
- HowTo
prev: ./finanzen
---
# Finanzen Berichte
![icons_odoo_account_accountant](assets/icons_odoo_account_accountant.png)

Finanzberichte erstellen.

## Hauptbuch anzeigen

Wenn sie verschiedene Kontoauszüge ansehen wollen, öffnen sie *Finanzen > Berichtswesen > Hauptbuch*. Hier können sie nach bestimmten Konten, Perioden und Journalen filtern. Zu jedem Konto sehen sie das Saldo.

## Saldenliste anzeigen

Öffnen sie *Finanzen > Finanzen > Hauptbuch*. Hier sehen sie gemäss Kontenplan die Spalten *Soll*, *Haben* und *Saldo*. Filtern sie die Angaben nach Konten und Buchungsdatum um die gewünschte Periode anzugigen

![](assets/Finanzen%20Berichte%20Saldenliste.png)

## Buchungszeilen auswerten

Alle Buchungszeilen können sie als Pivot auswerten. Wenn sie eine Saldenliste generieren möchten, gehen sie wie folgt vor:

![Finanzen Saldenliste erstellen](assets/Finanzen%20Saldenliste%20erstellen.gif)

## Bilanz anzeigen

Klicken sie auf *Finanzen > Berichtswesen > Schweiz > Bilanz*.

## Erfolgsrechnung anzeigen

Klicken sie auf *Finanzen > Berichtswesen > Schweiz > Erfolgsrechnung*.

## Umsatzsteuerbericht anzeigen

Klicken sie auf *Finanzen > Berichtswesen > Prüfungsberichte > Umstatzsteuerbericht*.

:::tip
Wenn sie die Ausgaben des Umsatzsteuerberichts prüfen, müssen sie beachten, dass die Buchungszeilen gefiltert werden müssen, damit der korrekte Nettobetrag erscheint.

![Finanzen Berichte Umsatzsteuerbericht Prüfen](assets/Finanzen%20Berichte%20Umsatzsteuerbericht%20Prüfen.gif)
:::

Der Umsatzsteuerbericht wird in regelmässigen Abständen generiert. Die Einstellung dazu finden sie unter *Einstellungen > Finanzen > Steuern > regelmässige Steuernrückzahlungen*.

## Bericht Bank-Abgleich anzeigen

Klicken sie auf *Finanzen* und wählen sie ein Bank-Journal aus. Klicken sie auf das Kontext-Menü und wählen sie *Offne-Posten Ausgleichsbericht*.

![](assets/Finanzen%20Berichte%20Ausgleichsbericht.png)

Hier werden nicht abgeglichene Bank-Zahlungen und Belege angezeigt.

Oberhalb des Berichts kann diese Meldung erscheinen:

![](assets/Finanzen%20Berichte%20Balance%20Off.png)

Klicken sie *journal items* um die Buchungen anzuzeigen.

## Buchungszeilen mit Gegenkonto anzeigen

Eine Buchungszeile enthählt immer noch nur ein Konto. Der Buchungssatz kann mehrere Buchungszeilen enthalten. Wenn sie eine Aufstellung der Buchungszeilen mit Gegenkonto sehen möchten, aktivieren sie den Entwicklermodus und wählen *Finanzen > Finanzen > Buchungszeilen*. Filtern sie die Buchungszeilen nach einem bestimmten Journal und gruppieren sie nach *Buchungssatz*.

![](assets/Finanzen%20Berichte%20Buchungszeilen%20mit%20Gegenkonto%20anzeigen.png)

## Mahnberichte anzeigen

Sie finden eine Aufstellung der Mahnungen via *Finanzen > Kunden > Mahnberichte*.

![](assets/Finanzen%20Berichte%20Mahnberichte.png)

::: warning
Wenn sie einen Mahbericht öffnen, befinden sie sich technisch auf einem Kontakt-Eintrag. Nachrichten, die mit der Ansicht Mahnbericht versendet werden, werdem auf dem Kontakt-Eintrag registriert. Prüfen sie vor dem Versand der Nachricht, ob die Abonnenten auf dem Kontakt-Eintrag korrekt sind.
:::