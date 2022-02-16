---
tags:
- HowTo
- Drittanbieter
prev: ./diskussion
---
# Mail Thread Context
![icon_oms_box](assets/icon_oms_box.png)

 Automatisches Abonnieren deaktiveren.
 
Technischer Name: `mail_thread_context`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Manufacture/tree/14.0/mail_thread_context>

## Automatisches Abonnieren deaktivieren

Mit dieser Erweiterung wird beim Erstellen und Aktualisieren von Odoo Einträgen sowie beim Hinterlassen von Notizen keine automatisches Abonnement erstellt.

Vorher:
![Mail Thread Context Notiz vorher](assets/Mail%20Thread%20Context%20Notiz%20vorher.gif)

Nachher:

![Mail Thread Context Notiz nachher](assets/Mail%20Thread%20Context%20Notiz%20nachher.gif)

## Alle Abonnenten löschen

Wenn sie oder ein anderer Benutzer einem Dokument folgen, speichert das Odoo in einer technischen Tabelle. Diese Einträge können sie via *Einstellungen > Technisch > Diskussion > Abonnenten* löschen. Filtern sie die Einträge nach einem bestimmten Modellname. Dazu ein Beispiel mit dem Verkaufsaufträgen (`sale.order`):

![Diskussion Abonnenten löschen](assets/Diskussion%20Abonnenten%20löschen.gif)