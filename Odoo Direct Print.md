---
tags:
- HowTo
- Drittanbieter
---
[🔗 IoT](IoT.md)
# Odoo Direct Print
![](assets/icons_odoo_printnode_base.png)

Jeder Odoo Bericht oder Etikette von überall nach überall drucken.

Technischer Name: `printnode_base`\
Repository: <https://apps.odoo.com/apps/modules/14.0/printnode_base/>

Videos:
* [Odoo Experience 2021 - Automating Direct Printing](https://www.youtube.com/watch?v=6dnHvpsukPg)

## PrintNode API Key generieren

Loggen sie sich unter <https://app.printnode.com/app/apikeys> ein. Geben sie die URL der Odoo-Instanz ein und wählen sie *Create*.

![](assets/Odoo%20Direct%20Print%20Generate%20API%20Key.png)

## API Key in Odoo einfügen

Unter *Einstellungen > Direct Print > Account* müssen sie den *API Key*, den sie von <https://app.printnode.com/app/apikeys> erhalten haben, eintragen.

![](assets/Odoo%20Direct%20Print%20Key%20einfügen.png)

## PrintNode Client installieren

Öffnen sie <https://app.printnode.com/app/downloads> und installieren die den Client für ihr Betriebssystem.

Starten sie den *PrintNode* Client und loggen sie sich mit dem PrintNode-Account ein.

![](assets/PrintNode%20Sign%20In.png)

## PrintNode Client Drucker hinzufügen

Der PrintNode Client erkennt die angeschlossenen Drucker automatisch. Falls das nicht der Fall ist, muss der Drucker-Treiber installiert werden.

**MacOS**

Unter MacOS fügen sie den Drucker wie folgt hinzu.

![](assets/PrintNode%20Mac%20OS%20Drucker%20hinzufügen.png)

Einmal konfiguriert wird der Drucker im PrintNode Client angezeigt:

![](assets/PrintNode%20Client%20Drucker%20anzeigen.png)

## Direktes Drucken aktivieren

Damit Druckaufträge mit PrintNode gerduckt werden können, muss dies explizit festgelegt werden. Öffnen sie *Einstellungen > Direct Print* und aktivieren sie die Option *Print via Direct Print*.

Wurde entweder ein globaler Standarddrucker festegelegt oder ein Standarddrucker auf dem dem Benutzer (siehe [Direktes Drucken für Benutzer einrichten](#Direktes%20Drucken%20für%20Benutzer%20einrichten)), dann erscheint bei druckbaren Objekten das folgende Aktions-Menu:

![](assets/Odoo%20Direct%20Print%20Action%20Menu.png)

## Drucker in Odoo anzeigen

Zeigen sie *Direct Print > Configuration > Printers* an. Hier werden alle verfügbaren Drucker aufgelistet.

![](assets/Odoo%20Direct%20Print%20Beispiel.png)

Mit der Aktion *Einstellungen > Direct Print > Import Printers* werden die auf PrintNode verfügbaren Drucker importiert.

## PrintNode App Testseite drucken

Loggin sie sich auf <https://app.printnode.com> ein und wählen sie *Print something*. Wählen sie eine Quelle, Drucker und die Testseite aus und erstellen sie einen Druckauftrag mit *Print*.

![](assets/Odoo%20Direct%20Print%20Testseite%20drucken.png)

## Druckszenario aktivieren

::: warning
Für den aktuellen Benutzer muss die Option *Print via Direct Print* aktiviert sein.
:::

Odoo Direct Print stellt gängige Druckszenarios unter *Direct Print > Print Scenarios* zur Verfüng. Aktivieren sie ein Senario mit einem Klick auf *Active* und wählen sie einen Drucker aus.

![](assets/Odoo%20Direct%20Print%20Szenario%20aktiviert.png)

## Druckaktionen aktivieren

::: warning
Für den aktuellen Benutzer muss die Option *Print via Direct Print* aktiviert sein.
:::

Mit Odoo Direct Print können Druckaktionen ganz einfach hinzugefügt werden. Öffnen sie die Ansicht *Direct Print > Print Action Buttons*. Aktivieren sie eine Aktion mit einem Klick auf *Active* und wählen sie einen Drucker aus.

![](assets/Odoo%20Direct%20Print%20Buttons.png)

In diesem Beispiel wird der Lieferschein ausgedruck, sobald auf einem Lieferschein der Knopf *Bestätigen* gedrückt wurde.

## Produktlabel von Lieferauftrag drucken

Öffnen sie eine Lieferung via *Lager > Lieferaufträge > Lieferauftrag auswählen* und klicken sie auf *Aktion > Print Product Labels*

![](assets/Odoo%20Direct%20Print%20Producut%20LAbels.png)

::: tip
Beachten sie dass der Druckvorgang einige Sekunden in Anspruch nimmt.
:::

## Direktes Drucken für Benutzer einrichten

Für das direkte Drucken kann dem Benutzer ein Standarddrucker zugewiesen werden. Navigieren sie nach *Einstellungen > Benutzer und Unternehmen > Benutzer > Benutzer auswählen > Tab Einstellungen* und legen sie im Abschnitt *Print* die Standarddrucker fest. Mit der Option *Print via Direct Print* wird das direkte Drucken aktiviert.

## Standarddrucker für Bericht festlegen

Unter *Direct Print > Print Report Policy > User Rules* können sie für jeden Benutzer den Standarddrucker für einen bestimmten Bericht festlegen. Erstellen sie dazu einen Eintrag, wählen sie den Benutzer, Drucker und Bericht aus.

![](assets/Odoo%20Direct%20Print%20Default%20Printer.png)

## Papierformat anlegen

Unter *Direct Print > Configuration > Papers* können sie Papierformat für Bericht hinterlegen.

![](assets/Odoo%20Direct%20Print%20Papers.png)

## Papiefromat für Drucker festlegen

Erstellen sie unter *Direct Print > Print Report Policy > Printer Settings* einen Eintrag für ihren Drucker.

![](assets/Odoo%20Direct%20Print%20Printer%20Settings.png)

## Papieformat für Bericht fesltegen

Erstellen sie unter *Direct Print > Print Report Policy > Report Settings* einen Eintrag für ihren Bericht.

::: tip
Odoo Direct Print gibt eine Warnung aus, wenn das Papieformat nicht mit dem verknüpften Drucker übereinstimmt.
:::

## Packvorgang/Lieferschein automatisch drucken

Mit Druck-Senarien können sie Druckvorgänge automatisieren. Damit der Packvorgang nach der Bestätigung eines Verkaufsauftrags automatisch gedruckt wird, navigieren sie als erstes nach *Direct Print > Print Scenarios*. Aktivieren sie die Zeile *Print Picking Document after Sales Order Confirmation*.

Für das automatische Drucken das Lieferschein aktivieren sie die Zeile *Print document on Backorder (created after Transfer validation*.
