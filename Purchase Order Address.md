---
tags:
- HowTo
- Drittanbieter
prev: ./einkauf
---
# Purchase Order Address
![icon_oms_box](assets/icon_oms_box.png)

Bestelladresse von Kunden auf Angebotsanfrage gespeichert.

Technischer Name: `purchase_order_address`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Purchase-Workflow/tree/14.0/purchase_order_address>

## Erweiterung konfigurieren

Damit die Bestelladresse als Empfängeradresse für die E-Mail übernommen wird, darf auf der E-Mail-Vorlage keinen Eintrag im Feld *An (Partner)* sein. Zur Bearbeitung rufen die Sie die entsprechenden E-Mail-Vorlagen unter *Einstellungen > Technisch > E-Mail > Vorlagen* auf. Entfernen Sie den hier markierten Eintrag:

![](assets/Purchase%20Order%20Address%20Konfiguration.png)

## Angebotsanfrage an Bestelladresse schicken

Mit dieser Erweiterung wird die Bestelladresse aus dem Kontakt auf die Angebotsanfrage übertragen. Wenn Sie eine E-Mail mit der Aktion *Per E-Mail Versenden* vorbereiten, wird die E-Mail des Bestellkontakts übernommen.

![Purchase Order Address](assets/Purchase%20Order%20Address.gif)


