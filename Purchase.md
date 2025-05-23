---
title: Einkauf
description: Verbessern Sie die Leistung Ihrer Lieferkette und Ihres Bestands.
kind: howto
prev: ./
---
# Einkauf
![icons_odoo_purchase](attachments/icons_odoo_purchase.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/purchase>

## Bereiche

| Bereich                                   | Beschreibung                             |
| ----------------------------------------- | ---------------------------------------- |
| [Einkauf Aktionen](Purchase%20Actions.md) | Arbeitsflüsse in Einkauf automatisieren. |

## Erweiterungen

| Erweiterung                                                                             | Beschreibung                                                                              |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [Purchase Order Line Position](Purchase%20Order%20Line%20Position.md)                   | Einkaufsaufträge mit Positionsnummern.                                                    |
| [Purchase Order Address](Purchase%20Order%20Address.md)                                 | Bestelladresse von Kunden auf Angebotsanfrage gespeichert.                                |
| [Purchase Order Comment](Purchase%20Order%20Comment.md)                                 | Kommentar-Feld für Einkaufsaufträge.                                                      |
| [Purchase Order Line Date](Purchase%20Order%20Line%20Date.md)                           | Lieferdatum im Wareneingang automatisch nachtragen.                                       |
| [Purchase Order Line Description](Purchase%20Order%20Line%20Description.md)             | Nur die Einkaufsbeschreibung in die Einkaufsposition übernehmen.                          |
| [Purchase Order Line Price Default](Purchase%20Order%20Line%20Price%20Default.md)       | Standardpreis einer Einkaufsposition überschreiben.                                       |
| [Purchase Order Line Relay Price](Purchase%20Order%20Line%20Relay%20Price.md)           | Kalkuliert den besten Preis für alle Bestellpositionen und benachrichtigt den Verkäufter. |
| [Purchase Order Notes](Purchase%20Order%20Notes.md)                                     | Einkaufsaufträge mit Notizfelder.                                                         |
| [Purchase Order Owner](Purchase%20Order%20Owner.md)                                     | Besitzer für Bestellungen festlegen.                                                      |
| [Purchase Order Partner Incoterm](Purchase%20Order%20Partner%20Incoterm.md)             | Für jedem Partner die Incoterms festlegen.                                                |
| [Purchase Order Partner Shipping](Purchase%20Order%20Partner%20Shipping.md)             | Alternative Lieferadresse für Bestellungen.                                               |
| [Purchase Order Subscription](Purchase%20Order%20Subscription.md)                       | Wiederkehrende Bestellungen verwalten.                                                    |
| [Purchase Order Type](Purchase%20Order%20Type.md)                                       | Bestellungen nach Typen organisieren.                                                     |
| [Purchase Order Validate](Purchase%20Order%20Validate.md)                               | Bestellung vor Versenden oder Bestätigen überprüfen.                                      |
| [Purchase Partner Incoterm](Purchase%20Partner%20Incoterm.md)                           | Standardlieferbedingungen für Lieferanten.                                                |
| [Purchase Sale Order Analytic Account](Purchase%20Sale%20Order%20Analytic%20Account.md) | Kostenstelle von verlinkten Verkaufsauftrag auf Bestellung übertragen.                    |
| [Purchase Stock Sale Owner](Purchase%20Stock%20Sale%20Owner.md)                         | Eigentümer auf Wareneingang aus Verkaufsauftrag zuordnen.                                 |
| [Purchase Tags](Purchase%20Tags.md)                                                     | Einkaufsbestellungen mit Stichwörter.                                                     |
| [Purchase order lines with discounts](Purchase%20order%20lines%20with%20discounts.md)   | Rabatte auf Einkaufspositionen festlegen.                                                 |

## Produkte

### Standard-Steuern für Einkauf auf Produkt festlegen

Öffnen Sie ein Produkt *Einkauf > Produkte > Produkte* und zeigen Sie den Tab *Einkauf*. Legen Sie im Feld *Steuern (Einkauf)* die Standard-Steuern fest. 

Unterschiedliche Steuern der einzelnen Line-Items werden im Formular und im Bericht gruppiert dargestellt (ab Version 15). Die Zuordnung erfolgt über die *Steuergruppe* gemäss dem Feld *Steuergruppe* im Tab *Erweiterte Optionen*.

### Lieferant auf Produkt hinzufügen

Öffnen Sie ein Produkt *Einkauf > Produkte > Produkte* und zeigen Sie den Tab *Einkauf*. Fügen Sie der Lieferanten-Liste einen neuen Eintag hinzu. Wählen Sie den Lieferant aus und legen Details wie *Preis* und *Tage bis Lieferung* fest.

## Aufträge

### Angebotsanfrage erstellen

Über *Neu* wird eine Angebotsanfrage eröffnet. Die Felder der Eingabemaske sind gemäss folgender Tabelle zu editieren:

| Bezeichnung         | Beschreibung                                                                                                                             |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Lieferant           | Es erscheinen alle Einträge der Liste "Kontakte" zur Auswahl.                                                                            |
| Lieferantenreferenz | Referenz zur Bezeichnung seitens Lieferanten (ist zum Beispiel nützlich um beim Wareneingang einen Zusammenhang zu schaffen).            |
| Währung             | Die gemäss Optionen eingeschaltenen Währung erscheinen zur Auswahl.                                                                      |
| Order Deadline      | Der geplante Zeitpunkt, wann die Bestellung zum Auftrag werden soll.                                                                     |
| Lieferdatum         | Der erwartete Lieferzeitpunkt. Dieses Datum wird für die Prognosen verwedent.                                                            |
| Ask confirmation    | Wenn die Option eingeschaltet ist, erhält der Lieferant automatisch eine eMail-Erinnerung in der er den Lieferzeitpunkt bestätigen muss. |

Im Register Produkte werden die gewünschten Artikel gelistet.

### Angebotsanfrage senden

Mit dem Knopf *Per E-Mail Versenden* wird eine PDF-Datei generiert und per eMail an den Lieferanten gesendet.

### Angebotsanfrage nachfassen

Falls man beim Lieferanten bezüglich einem fehlenden Angebot nachfassen will, verwendet man den Knopf *Per e-Mail erneut senden*. Damit öffnet sich ein Dialog für den Versand eines e-Mails an den Lieferanten mit der Angebotsanfrage als Beilage.

## Benachrichtigung

### An Beschaffungsauftrag erinnern

Wenn der Lieferant an die Erfüllung des Beschaffungsauftrags erinnert werden soll, dann verwendet man hierzu die Aktion *Send Reminder*. Damit wird vollautomatisch eine e-Mail an den Lieferanten mit vordefiniertem Text und dem Beschaffungsauftrag als Beilage versendet.

::: tip
Die Aktion "Send Reminder" wird mit dem Aktivieren der Option *Ask confirmation* zum festgelegten Zeitpunkt automatisch ausgeführt.
:::

## Portal

### Portal-Ansicht Bestellung anzeigen

Die Portal-Ansicht einer Bestellung können Sie wie folgt anzeigen:
* Öffnen Angebotsanfrage
* Ausführen *Aktionen > Teilen > Text kopieren*
* Neues privates Browser-Fenster öffnen
* Link in Adressleiste einfügen

::: tip
In einem privaten Browser werden die Cookies nicht geladen und somit wird man nicht automatisch bei Odoo angemeldet.
:::

## Adressen

### Lieferadresse ändern
Auf einer Bestellung ist die Lieferadresse standardmässig die Adresse der eigenen Firma gemäss *Einstellungen > Unternehmen*.
Falls eine andere Lieferadresse gewünscht ist, lässt sich das über das Einrichten eines entsprechendes Lagers/Vorgangstyp erreichen.

Jedes Lager hat eine Adresse.

![Einkauf Lager Adresse](attachments/Einkauf%20Lager%20Adresse.png)

Die Adresse kann auch eine spezielle Lieferandresse sein.

![Einkauf Lager Adresse Lieferadresse](attachments/Einkauf%20Lager%20Adresse%20Lieferadresse.png)

Falls also für eine Bestellung verschiedene Lieferadressen zur Verfügung stehen sollen,  muss für jede Adresse ein Lager eingerichtet werden.

![Einkauf Lager Anlieferung](attachments/Einkauf%20Lager%20Anlieferung.png)

Die Lieferanschrift kann auf der Bestellung gemäss der folgenden Abbildung gewählt werden (die Markierung zeigt den Vorgangstyp):

![Einkauf Lieferadresse Anlieferung](attachments/Einkauf%20Lieferadresse%20Anlieferung.png)

Die Bestellung sieht dann wie folgt aus:

![Einkauf Bestellung Beispiel Lieferadresse](attachments/Einkauf%20Bestellung%20Beispiel%20Lieferadresse.png)

## Auswertung

### Einkaufszeilen anzeigen

Damit Sie eine Übersicht der Lohnabrechnungszeilen erhalten, folgen Sie dem HowTo [Neue Ansicht mit Aktion hinzufügen](Development%20Actions.md#Neue%20Ansicht%20mit%20Aktion%20hinzufügen) und verwenden diese Werte:

Name der Aktion: `Einkaufszeilen`\
Objekt: `purchase.order.line`\
Ansichtsmodus: `tree,form,pivot`\
Menü: `Einkaufszeilen`\
Obermenü: `Einkauf/Produkte`\
Aktion: `ir.actions.act_window` `Einkaufszeilen`\
Nummernfolge: `90`

Das Ergebnis sollte so aussehen:

![](attachments/Einkauf%20Einkaufszeilen.png)


### Berechtigungen anhand von Gruppen filtern

Im folgenden Beispiel werden ausgewählte Bestellungen nur für eine bestimmte Gruppe angezeigt.

Legen Sie auf dem Datenmodell diese *Datensatzregeln* fest:

**Name**: Purchase Confidential\
**Gruppen**: Interne Benutzer\
**Domain**: `[('x_group_ids', 'in', [g.id for g in user.groups_id])]`\
**Berechtigung**: Lesen

**Name**: Purchase Public\
**Gruppen**: Interne Benutzer\
**Domain**: `[('x_group_ids', '=',False)]`\
**Berechtigung**: Lesen