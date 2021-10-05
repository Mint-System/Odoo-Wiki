---
tags:
- HowTo
- Drittanbieter
---

# Odoo Direct Print
![](assets/icons_odoo_printnode_base.png)

Jeder Odoo Bericht oder Etikette von überall nach überall drucken.

Technischer Name: `printnode_base`\
Repository: <https://apps.odoo.com/apps/modules/14.0/printnode_base/>

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

## Drucker in Odoo anzeigen

Zeigen sie *Direct Print > Konfiguration > Drucker* an. Hier werden alle verfügbaren Drucker aufgelistet.

![](assets/Pasted%20image%2020211005161332.png)

## PrintNode App Testseite drucken

Loggin sie sich auf <https://app.printnode.com> ein und wählen sie *Print something*. Wählen sie eine Quelle, Drucker und die Testseite aus und erstellen sie einen Druckauftrag mit *Print*.

![](assets/Odoo%20Direct%20Print%20Testseite%20drucken.png)

## Druckszenarion aktivieren

Odoo Direct Print stellt gängige Druckszenarios unter *Direct Print > Druckszenarios* zur Verfüng. Aktivieren sie ein Senario mit einem Klick auf *Active* und wählen sie einen Drucker aus.

![](assets/Odoo%20Direct%20Print%20Szenario%20aktiviert.png)

## Produktlabel von Lieferauftrag drucken

Öffnen sie eine Lieferung via *Lager > Lieferaufträge > Lieferauftrag auswählen* und klicken sie auf *Aktion > Print Product Labels*

![](assets/Odoo%20Direct%20Print%20Producut%20LAbels.png)

::: info
Beachten sie dass der Druckvorgang einige Sekunden in Anspruch nimmt.
:::