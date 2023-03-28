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
Repository: <https://github.com/Mint-System/Odoo-Apps-Social/tree/14.0/mail_thread_context>

::: warning
Diese App ist veraltet. Wir empfehlen die App [Mail No Autofollow](Mail%20No%20Autofollow.md) zu verwenden.
#deprecated
:::

## Verwendung

### Automatisches Abonnieren deaktivieren

Mit dieser Erweiterung wird beim Erstellen und Aktualisieren von Odoo Einträgen sowie beim Hinterlassen von Notizen keine automatisches Abonnement erstellt.

Vorher:

![Mail Thread Context Notiz vorher](assets/Mail%20Thread%20Context%20Notiz%20vorher.gif)

Nachher:

![Mail Thread Context Notiz nachher](assets/Mail%20Thread%20Context%20Notiz%20nachher.gif)

Dasselbe funktioniert auch für *Sende Nachricht*. Der Empfänger wird nicht automatisch als Abonnent hinzugefügt.

### Alle Abonnenten löschen

Wenn Sie oder ein anderer Benutzer einem Dokument folgen, speichert das Odoo in einer technischen Tabelle. Diese Einträge können Sie via *Einstellungen > Technisch > Diskussion > Abonnenten* löschen. Filtern Sie die Einträge nach einem bestimmten Modellname. Dazu ein Beispiel mit dem Verkaufsaufträgen (`sale.order`):

![Diskussion Abonnenten löschen](assets/Diskussion%20Abonnenten%20löschen.gif)

::: warning
Das löschen von Abonnenten kann die Kommunikation in der App Diskussion beeinflussen.
:::