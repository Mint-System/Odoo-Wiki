---
title: Mail Composer Default Template
description: Standardvorlage für den E-Mail-Dialog festlegen.
tags:
- HowTo
- Drittanbieter
prev: ./dialog
---
# Mail Composer Default Template
![icon_oms_box](attachments/icon_oms_box.png)

{{ $frontmatter.description }}
 
Technischer Name: `mail_composer_default_template`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Social/tree/15.0/mail_composer_default_template>

## Verwendung

### Standardvorlage für den E-Mail-Dialog definieren

Wenn Sie diese Erweiterung installiert haben und den E-Mail-Dialog auf einem Dokument öffnen, wird die erste E-Mail-Vorlage gemäss Sequenz und Filter geladen.

![Mail Composer Default Template](attachments/Mail%20Composer%20Default%20Template.gif)

::: tip
Beim Aufruf des E-Mail-Dialog wird die Vorlage in folgender Reihenfolge ausgewählt:
* Filterung nach Dokument
* Filterung nach Sequenz
* Filterung nach Domain
:::

### Sequenz der E-Mail-Vorlagen festlegen

Zeigen Sie die E-Mail-Vorlagen unter *Einstellungen > Technisch > Vorlagen* an. Sortieren Sie die Vorlagen mit dem *Handler*.

![Mail Composer Default Template Sequence](attachments/Mail%20Composer%20Default%20Template%20Sequence.gif)

### Domain-Filter auf E-Mail-Vorlage festlegen

Rufen Sie eine E-Mail-Vorlage unter *Einstellungen > Technisch > Vorlagen* auf. Legen Sie einen Filter im *Domain* für die ausgewählten Dokumente fest.

![](attachments/Mail%20Composer%20Default%20Template%20Domain.png)