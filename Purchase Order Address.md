---
description: Bestelladresse von Kunden auf Angebotsanfrage gespeichert.
forge: github.com
kind: howto
name: purchase_order_address
partner: Mint System
prev: ./purchase
repo: Mint-System/Odoo-Apps-Purchase-Workflow
title: Purchase Order Address
versions:
- '17.0'
---


# Purchase Order Address

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Erweiterung konfigurieren

Damit die Bestelladresse als Empfängeradresse für die E-Mail übernommen wird, darf auf der E-Mail-Vorlage kein Eintrag im Feld _An (Partner)_ sein. Zur Bearbeitung rufen Sie die entsprechenden E-Mail-Vorlagen unter _Einstellungen > Technisch > E-Mail > E-Mail-Vorlagen_ auf. Entfernen Sie den hier markierten Eintrag:

![](attachments/Purchase%20Order%20Address%20Konfiguration.png)

In anderen E-Mail-Vorlagen wie _Purchase Order: Vendor Reminder_ kann im Feld _An (Partner)_ der Code `${object.partner_order_id.id}` eingegeben werden.

![](attachments/Purchase%20Order%20Address%20Reminder.png)

Damit wird sichergestellt, dass E-Mails aus der Bestellung immer an die Bestelladresse gehen.

### Angebotsanfrage an Bestelladresse schicken

Mit dieser Erweiterung wird die Bestelladresse aus dem Kontakt auf die Angebotsanfrage übertragen. Wenn Sie eine E-Mail mit der Aktion _Per E-Mail Versenden_ vorbereiten, wird die E-Mail des Bestellkontakts übernommen.

![Purchase Order Address](attachments/Purchase%20Order%20Address.gif)
