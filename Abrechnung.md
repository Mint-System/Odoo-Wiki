---
tags:
- HowTo
prev: ./
---
# Abrechnung

Online Rechnungsstellung leicht gemacht.

![icons_odoo_account_invoicing](assets/icons_odoo_account_invoicing.png)

| Erweiterung                                                                 | Beschreibung                                                                |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [Account Move Post Warn](Account%20Move%20Post%20Warn.md)                   | Beim Buchen wird sofern gesetzt die Warnung des Rechnungskontakt angezeigt. |
| [Invoice Merge PDF Attachment](Invoice%20Merge%20PDF%20Attachment.md)       | PDF-Dokumenten von Rechnungen zusammenführen.                               |
| [Nivels Deduct Supplier Discount](Nivels%20Deduct%20Supplier%20Discount.md) | Allow discount deduction on vendor bills.                                    |

## Ausgangsrechnung erfassen

Öffnen Sie *Abrechnung > Kunden > Rechnungen* und fügen Sie einen Eintrag hinzu.

## Eingangsrechnung erfassen

Öffnen Sie *Abrechnung > Lieferanten > Rechnungen* und fügen Sie einen Eintrag hinzu.

## Lieferantenkonto konfigurieren

Wählen Sie *Kontakte* zeigen Sie den Lieferanten in der Formularansicht an. Klicken Sie auf *Bearbeiten* und fügen Sie im Tab *Finanzen* ein Bakkonto hinzu.

## Rechnungen digitalisieren

Mit Odoo können PDF-Rechnung einfach gescannt und verarbeitet werden. Die Rechnungsdigitalisierung liest die Zahlungsinformationen aus dem PDF und erstellt eine Lieferantenrechnung.

Jeder Digitalisierungsvorgang kostet einen Credit. Die benötigten Credits können als In-App-Purchase (IAP) erworben werden. Klicken Sie auf *Einstellungen > Finanzen > Eingangsrechnungen > Guthaben kaufen*. Loggen Sie sich mit dem Odoo-Account ein und erwerben Sie ein IAP-Paket. Die Credits werden an ihrer Datenbank gut geschrieben und fortan steht der Digitalisierungsprozess zur Verfügung.

Zur Digitalisierung einer Rechnung laden Sie als erstes die PDF-Datei via *Finanzen > Lieferanten > Rechnungen > Hochladen* hoch. Öffnen Sie die Rechnung und starten Sie dann die Aktion *Send for digitalization*. Nach wenigen Sekunden sollte die Rechnungsangaben aus dem PDF ausgelesen und abgefüllt werden.

![](assets/Abrechnung%20Rechnung%20digitalisieren.png)

Der Digitalisierungsprozess dauert wenige Sekunden. Sie können den Status mit *Aktualisieren* überprüfen.

![](assets/Abrechnung%20Digitalisierung%20überprüfen.png)

## Rechnungsvorlage anpassen

Für den automatischen Versand von Rechnungen können E-Mail-Vorlagen erstellt werden.

Unter *Einstellungen > Technisch > E-Mail > Vorlagen* können die E-Mail-Vorlagen verwaltet werden. Erstellen Sie ein Duplikat der Vorlage *Invoice: Send by email*.

Als Betreff geben Sie folgendes ein: `${object.company_id.name} Rechn. (Ref ${object.name or 'n/a'})`. Wechseln Sie für die Nachricht in die Code-Ansicht.

![](assets/Odoo%20Code-Ansicht.png)

Kopieren Sie den folgenden Inhalt:

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
Markieren Sie eine (oder alle) Rechnungen und formulieren Sie die erste Rechnungsnummer der Sequenz. Nach diesem Schema werden nur alle Rechnungen neu benannt und neue Rechnungen folgen diesem Muster.

![Abrechnung Rechnungsnummer einrichten](assets/Abrechnung%20Rechnungsnummer%20einrichten.gif)

## Rechnung stornieren

Wurde die erstellte Rechnung bereits auf Status *Verbucht* gesetzt, so kann diese Rechnung nicht mehr korrigiert oder gelöscht werden. Reklamiert der Kunde zum Beispiel und die Rechnung muss neu erstellt erden, so kann über die Funktion *Stornieren* die Rechnung rückgängig gemacht werden und sämtliche Buchungen erhalten eine Gegenbuchung. Somit ist zum Beispiel das Konto *2200   
Geschuldete MwSt. (Umsatzsteuer)* mit den Gegenbuchungen wieder ausgeglichen und die MWST wird in Auflistung der Abrechnung nicht erscheinen.

In Modul *Finanzen* die Rechnung in der Liste anwählen und anzeigen lassen. Danach den Befehl *Stornieren* ausführen. Beachten Sie, dass Sie das als Storno-Datum das Rechnungsdatum wählen. Sodass die Storno am gleichen Tag erfolgt.

## Einzahlungsschein drucken

Mit der Schweizer Lokalisierung für das Finanzmodul ist ein Bericht zur Generierung von Einzahlungsscheinen enthalten. Damit Einzahlungsscheine erstellt werden können, müssen die folgenden Bedingungen erfüllt sein:

* Auf dem Bankkonto des Unternehmens muss das Feld `CHF ISR Subscription Number` ausgefüllt sein

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

Damit Frankenbeträge in Rechnungen auf 0.05 gerundet werden, müssen Sie die Bargeldrundung aktivieren.

Navigieren Sie nach *Finanzen > Konfiguration > Bargeld-Runden* und erstellen Sie einen neuen Eintrag wie folgt.

![](assets/Abrechnung%20Runden.png)

Wenn Sie eine neue Rechnung schreiben und die Rundungsmethode festgelegt ist, werden die Beiträge entsprechend gerundet.

## Fakturierungsregel festlegen

Für jedes Produkt können Sie definieren, ob es nach der Lieferung oder nach der Bestellung verrechnet werden soll.

![](assets/eCommerce%20Fakturierungsregel%20auf%20Produkt.png)

::: warning
Falls während der Lieferung zusätzliche Produkte erfasst werden, muss die abzurechendende Menge des Verkaufsauftrag aktualisiert werden. Nur dann wird das zusätzliche Produkt auf die Rechnung übertragen.
:::

## Rechnungsadresse ändern

Angenommen Sie möchten die Empfängeradresse einer gebuchten Rechnung ändern, so setzen Sie diese Rechnung mit *Zurücksetzen* in den Entwurfsstatus. Anschliessen können Sie das Feld *Kunde* wieder bearbeiten. Passen Sie die Adresse an und buchen Sie die Rechnung wieder.

## Rechnungsabgrenzung vornehmen

Um eine Rechnungsabgrenzung in Odoo vorzunehmen, wählen Sie die Rechnung via *Finanzen > Lieferanten > Rechnungen* aus. Zeigen Sie den Tab *Buchungszeilen* an und klicken Sie auf *Cut-Off* bei der betroffenen Zeile. Nun erscheint ein Dialog um die Abgrenzung vorzunehmen.

![](assets/Abrechnung%20Rechnungsabgrenzung.png)

Mit *Create Journal Entries* wird die Buchung und Gegenbuchung für die Rechnungsabgrenzung erstellt.

## Warnung für den Rechnungskontakt festlegen

Auf Kontakten können Sie Warnungs-Text hinterlegen, welche bei der Ertellung einer Rechnung angezeigt werden. Damit die entprechenden Felder auf dem Kontakt angezeigt werden, müssen Sie in den Benutzer-Einstellungen die Berechtigung *Eine Warnung kann auf einem Partner (Konto) gelegt werden* aktivieren. Unter *Kontakte > Eintrag auswählen > Tab Interne Notizen* finden Sie das entsprechende Feld.

![](assets/Abrechnung%20Warnung.png)
