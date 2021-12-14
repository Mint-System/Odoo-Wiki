---
tags:
- HowTo
---
[🔗 Home](/)
# Abrechnung

Online Rechnungsstellung leicht gemacht.

![icons_odoo_account_invoicing](assets/icons_odoo_account_invoicing.png)

## Rechnungen digitalisieren

Mit Odoo können PDF-Rechnung einfach gescannt und verarbeitet werden. Die Rechnungsdigitalisierung liest die Zahlungsinformationen aus dem PDF und erstellt eine Lieferantenrechnung.

Jeder Digitalisierungsvorgang kostet einen Credit. Die benötigten Credits können als In-App-Purchase (IAP) erworben werden. Klicken sie auf *Einstellungen > Finanzen > Eingangsrechnungen > Guthaben kaufen*. Loggen sie sich mit dem Odoo-Account ein und erwerben sie ein IAP-Paket. Die Credits werden an ihrer Datenbank gut geschrieben und fortan steht der Digitalisierungsprozess zur Verfügung.

Zur Digitalisierung einer Rechnung laden sie als erstes die PDF-Datei via *Finanzen > Lieferanten > Rechnungen > Hochladen* hoch. Öffnen sie die Rechnung und starten sie dann die Aktion *Send for digitalization*. Nach wenigen Sekunden sollte die Rechnungsangaben aus dem PDF ausgelesen und abgefüllt werden.

![](assets/Abrechnung%20Rechnung%20digitalisieren.png)

## Rechnungsvorlage anpassen

Für den automatischen Versand von Rechnungen können E-Mail-Vorlagen erstellt werden.

Unter *Einstellungen > Technisch > E-Mail > Vorlagen* können die E-Mail-Vorlagen verwaltet werden. Erstellen sie ein Duplikat der Vorlage *Invoice: Send by email*.

Als Betreff geben sie folgendes ein: `${object.company_id.name} Rechn. (Ref ${object.name or 'n/a'})`. Wechseln sie für die Nachricht in die Code-Ansicht.

![](assets/Odoo%20Code-Ansicht.png)

Kopieren sie den folgenden Inhalt:

```html
<div style="margin:0px;padding: 0px;">
    <p style="padding: 0px; font-size: 13px;">
        Guten Tag
        % if object.partner_id.parent_id:
            ${object.partner_id.name} (${object.partner_id.parent_id.name})
        % else:
            ${object.partner_id.name}
        % endif
        <br><br>
        Anbei die 
        % if object.name:
            Rechnung <strong>${object.name}</strong>
        % else:
            Rechnung
        %endif
        % if object.invoice_origin:
            (mit Referenz: ${object.invoice_origin})
        % endif
        im Betrag von <strong>${format_amount(object.amount_total, object.currency_id)}</strong>
        von der ${object.company_id.name}.
        % if object.invoice_payment_state == 'paid':
            Diese Rechnung wurde bereits bezahlt.
        % else:
            Wir danken für eine fristgerechte Bezahlung.
        % endif
        <br><br>
        Zögern Sie nicht uns bei Fragen zu kontaktieren.
    </p>
</div>         
```

## Rechnungsnummer einrichten

Die Einrichtung der automatischen Vergabe der Rechnungsnummer erfolgt über die Aktion *Resequence* im Menu *Abrechnung > Kunden > Rechnungen*.
Markieren sie eine (oder alle) Rechnungen und formulieren sie die erste Rechnungsnummer der Sequenz. Nach diesem Schema werden nur alle Rechnungen neu benannt und neue Rechnungen folgen diesem Muster.

![Abrechnung Rechnungsnummer einrichten](assets/Abrechnung%20Rechnungsnummer%20einrichten.gif)

## Rechnung stornieren

Wurde die erstellte Rechnung bereits auf Status *Verbucht* gesetzt, so kann diese Rechnung nicht mehr korrigiert oder gelöscht werden. Reklamiert der Kunde zum Beispiel und die Rechnung muss neu erstellt erden, so kann über die Funktion *Stornieren* die Rechnung rückgängig gemacht werden und sämtliche Buchungen erhalten eine Gegenbuchung. Somit ist zum Beispiel das Konto *2200   
Geschuldete MwSt. (Umsatzsteuer)* mit den Gegenbuchungen wieder ausgeglichen und die MWST wird in Auflistung der Abrechnung nicht erscheinen.

In Modul *Finanzen* die Rechnung in der Liste anwählen und anzeigen lassen. Danach den Befehl *Stornieren* ausführen. Beachten Sie, dass Sie das als Storno-Datum das Rechnungsdatum wählen. Sodass die Storno am gleichen Tag erfolgt.

## Einzahlungsschein drucken

Mit der Schweizer Lokalisierung für das Finanzmodul ist ein Bericht zur Generierung von Einzahlungsscheinen enthalten. Damit Einzahlungsscheine erstellt werden können, müssen die folgenden Bedingungen erfüllt sein:

* Auf dem Bankkonto des Unternehmens müssen die Felder `ISR Client Identification Number` und `CHF ISR Subscription Number` ausgefüllt sein.

![](assets/Abrechnung%20ESR-Nummern.png)

* Das auf der Rechnung hinterlegte Konto muss mit diesem Unternehmenskonto übereinstimmen
* Die Rechnung ist im Status *Gebucht*
* Die Einstellung *Einstellungen > Finanzen > Ausgangsrechnungen > Print bank on ISR* ist aktiviert, jedoch nicht dessen Unteroption *Preprinted account*

Sind diese Bedingungen erfüllt, dann erscheint beim Aufruf einer Rechnung die Aktion *Print ISR*.

::: warning
Damit Einzahlungsscheine für bereits erstellte Rechnungen generiert werden können, muss das erstellte ISR-PDF im Anhang entfernt werden.
:::

## QR-Rechnung drucken

Mit der Schweizer Lokalisierung für das Finanzmodul ist ein Bericht zur Generierung von QR-Rechnungen enthalten. Damit Einzahlungsscheine erstellt werden können, müssen die folgenden Bedingungen erfüllt sein:

* Der Rechnungsempfänger und Absender müssen eine Schweizer-Adresse haben
* Das QR-Konto ist auf dem Rechnungskonto eingetragen
* Die Zahlungsreferenz muss QR-kompatibel sein (Referenz gemäss ISR)
* Die Rechnung ist im Status *Gebucht*
* Die Einstellung *Einstellungen > Finanzen > Ausgangsrechnungen > Print Swiss QR Code* ist aktiviert

Sind diese Bedingungen erfüllt, dann erscheint beim Aufruf einer Rechnung die Aktion *Print QR-Bill*.

## Beträge runden

Damit Frankenbeträge in Rechnungen auf 0.05 gerundet werden, müssen sie die Bargeldrundung aktivieren.

Navigieren sie nach *Finanzen > Konfiguration > Verwaltung > Bargeld-Runden* und erstellen sie einen neuen Eintrag wie folgt.

![](assets/Abrechnung%20Runden.png)

Wenn sie eine neue Rechnung schreiben und die Rundungsmethode festgelegt ist, werden die Beiträge entsprechend gerundet.