# Finanzen
![icons_odoo_account_accountant](assets/icons_odoo_account_accountant.png)

## Kontenplan einrichten

Öffnen sie die Finanz-App und richten Sie den Standard-Kontenplan ein. Navigieren sie nach *Finanzen > Konfiguration > Finanzen > Kontenplan*.

Konten für welche sie keine Verwendung haben, können sie anwählen und die Checkbox *Nicht mehr verwenden* markieren.

## Mehrere Währungen aktivieren

Navigieren nach *Finanzen > Konfiguration > Einstellungen > Währungen* und dort die Option *Mehrere Währungen* akvieren. Nach Bedarf muss ein Journal gemäss Vorlage erstellt werden. Die verfügbaren Währungen können über die Option *Andere Währungen aktivieren* verwaltet werden.

## Automatische Währungssätze aktiveren

Werden mehre Währungen verwendet, können die Wechselkurse automatisch von Odoo aktualisiert werden. Navigieren sie nach *Einstellungen > Finanzen > Währung* und klicken sie auf *Automatische Währungssätze*. Stellen sie ob die Währung automatisch oder manuel aktualisiert werden soll.

## SEPA-Zahlmethode aktiveren

Damit Zahlungen aus Odoo exportiert und im eBanking importiert werden könne, müssen sie die SEPA-Zahlmethode für das entsprechende Bank-Journal aktiveren.

![Finanzen SEPA Zahlung aktivieren](assets/Finanzen%20SEPA%20Zahlung%20aktivieren.gif)

Navigieren sie nach *Finanzen > Optionen Journal > Einstellungen > Tab Erweiterte Einstellungen* und aktiveren sie *SEPA Kreditübertragung*.

## SEPA-Zahlung erstellen

Öffnen sie eine Rechung drücken sie auf *Einzahlung erfassen*. Wählen sie *SEPA Kreditübertragung als Zahlungsmethode*.

![Finanzen SEPA-Zahlung erfassen](assets/Finanzen%20SEPA-Zahlung%20erfassen.gif)

## SEPA-Zahlung exportieren

Damit SEPA-Zahlungen exportiert werden können, müssen unter *Einstellungen > Finanzen > Zahlung des Lieferant* die folgenden Einstellungen vorgenommen werden:

* Unternehmensname: Name des Unternehmesn
* Identifikation: Mwst. oder andere eindeutige Identifikationsnummer
* Veranlasser: Name des Buchhalters
* SEPA PAIN Version: Schweizer Version

Um eine Zahlung zu exportieren, klicken sie auf *Finanzen > X Über SEPA zu sendende Zahlungen*, markieren die offenen Zahlungen und wählen *Aktion > Stapelzahlung anlegen*. Im neuen Dialog wählen sie *Bestätigen* und erhalten so die generierte Zahlungsdatei.

## Rechnungen digitalisieren

Mit Odoo können PDF-Rechnung einfach gescannt und verarbeitet werden. Die Rechnungsdigitalisierung liest die Zahlungsinformationen aus dem PDF und erstellt eine Lieferantenrechnung.

Jeder Digitalisierungsvorgang kostet einen Credit. Die benötigten Credits können unter [Odoo IAP](https://iap.odoo.com/iap/in-app-services/259) erworben werden.

Zur Digitalisierung einer Rechnung laden sie als erstes die PDF-Datei via *Finanzen > Lieferanten > Rechnungen > Hochladen* hoch. Starten sie dann die Aktion *Send for digitalization*. Nach wenigen Sekunden sollte die Rechnungsangaben aus dem PDF ausgelesen und abgefüllt werden.

## Rechnungsvorlage anpassen

Für den automatischen Versand von Rechnungen können E-Mail-Vorlagen erstellt werden.

Unter *Einstellungen > Technisch > E-Mail > Vorlagen* können die E-Mail-Vorlagen verwaltet werden. Erstellen sie ein Duplikat der Vorlage *Invoice: Send by email*.

Als Betreff geben sie folgendes ein: `${object.company_id.name} Rechnung (Ref ${object.name or 'n/a'})`. Wechseln sie für die Nachricht in die Code-Ansicht.

![](assets/Odoo%20Code-Ansicht.png)

Kopieren sie den folgenden Inhalt:

```
<div style="margin:0px;padding: 0px;">
    <p style="padding: 0px; font-size: 13px;">
        Guten Tag
        % if object.partner_id.parent_id:
            ${object.partner_id.name} (${object.partner_id.parent_id.name})
        % else:
            ${object.partner_id.name}
        % endif
        <br><br>
        Anbei die Rechnung
        % if object.name:
            Rechnung <strong>${object.name}</strong>
        % else:
            Rechnung
        %endif
        % if object.invoice_origin:
            (mit Referenz: ${object.invoice_origin})
        % endif
        im Betrag <strong>${format_amount(object.amount_total, object.currency_id)}</strong>
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

## Rechnung stornieren
Wurde die erstellte Rechnung bereits auf Status *Verbucht* gesetzt, so kann diese Rechnung nicht mehr korrigiert oder gelöscht werden. Reklamiert der Kunde zum Beispiel und die Rechnung muss neu erstellt erden, so kann über die Funktion *Stornieren* die Rechnung rückgängig gemacht werden und sämtliche Buchungen erhalten eine Gegenbuchung. Somit ist zum Beispiel das Konto *2200   
Geschuldete MwSt. (Umsatzsteuer)** mit den Gegenbuchungen wieder ausgeglichen und die MWST wird in Auflistung der Abrechnung nicht erscheinen.

In Modul *Finanzen* die Rechnung in der Liste anwählen und anzeigen lassen. Danach den Befehl *Stornieren* ausführen. Beachten Sie, dass Sie das als Storno-Datum das Rechnungsdatum wählen. Sodass die Storno am gleichen Tag erfolgt.

## Einzahlungsschein drucken

Mit der Schweizer Lokalisierung für das Finanzmodul ist ein Bericht zur Generierung von Einzahlungsscheinen enthalten. Damit Einzahlungsscheine erstellt werden können, müssen die folgenden Bedingungen erfüllt sein:

* Auf dem Bankkonto des Unternehmens müssen die Felder `ISR Client Identification Number` und `CHF ISR Subscription Number` ausgefüllt sein.

![](assets/Odoo%20Finanzen%20ESR-Nummern.png)

* Das auf der Rechnung hinterlegte Konto muss mit diesem Unternehmenskonto übereinstimmen
* Die Rechnung ist im Status *Gebucht*
* Die Einstellung *Einstellungen > Finanzen > Ausgangsrechnungen > Print bank on ISR* ist aktiviert, jedoch nicht dessen Unteroption *Preprinted account*

Sind diese Bedingungen erfüllt, dann erscheint beim Aufruf einer Rechnung die Aktion *Print ISR*.

::: warning
Damit Einzahlungsscheine für bereits erstellte Rechnungen generiert werden können, muss das erstellte ISR-PDF im Anhang entfernt werden.
:::

## QR-Rechnung drucken

Mit der Schweizer Lokalisierung für das Finanzmodul ist ein Bericht zur Generierung von QR-Rechnung enthalten. Damit Einzahlungsscheine erstellt werden können, müssen die folgenden Bedingungen erfüllt sein:

* Der Rechnungsempfänger und Absender müssen eine Schweizer-Adresse haben
* Das QR-Konto ist auf dem Rechnungskonto eingetragen
* Die Zahlungsrefernz muss QRR-kompatibel sein (Referenz gemäss ISR)
* Die Rechnung ist im Status *Gebucht*
* * Die Einstellung *Einstellungen > Finanzen > Ausgangsrechnungen > Print Swiss QR Code* ist aktiviert

Sind diese Bedingungen erfüllt, dann erscheint beim Aufruf einer Rechnung die Aktion *Print QR-Bill*.