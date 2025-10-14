---
title: Mail Composer Default Template
description: Standardvorlage für den E-Mail-Dialog festlegen.
kind: howto
partner: Mint-System
prev: ./dialog
---

# Mail Composer Default Template

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `mail_composer_default_template`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Social/tree/15.0/mail_composer_default_template>

## Verwendung

### Standardvorlage für den E-Mail-Dialog definieren

Wenn Sie diese Erweiterung installiert haben und den E-Mail-Dialog auf einem Dokument öffnen, wird die erste E-Mail-Vorlage gemäss Sequenz und Filter geladen.

![Mail Composer Default Template](attachments/Mail%20Composer%20Default%20Template.gif)

::: tip
Beim Aufruf des E-Mail-Dialog wird die Vorlage in folgender Reihenfolge ausgewählt:

- Filterung nach Dokument
- Filterung nach Sequenz
- Filterung nach Domain
  :::

### Sequenz der E-Mail-Vorlagen festlegen

Zeigen Sie die E-Mail-Vorlagen unter _Einstellungen > Technisch > Vorlagen_ an. Sortieren Sie die Vorlagen mit dem _Handler_.

![Mail Composer Default Template Sequence](attachments/Mail%20Composer%20Default%20Template%20Sequence.gif)

### Domain-Filter auf E-Mail-Vorlage festlegen

Rufen Sie eine E-Mail-Vorlage unter _Einstellungen > Technisch > Vorlagen_ auf. Legen Sie einen Filter im _Domain_ für die ausgewählten Dokumente fest.

![](attachments/Mail%20Composer%20Default%20Template%20Domain.png)
