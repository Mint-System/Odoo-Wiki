---
title: Partner Optional Commercial Partner
description: Kontakt selbst als Handelsgesellschaft festzulegen.
kind: howto
partner: Mint-System
prev: ./contacts
---

# Partner Optional Commercial Partner

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `partner_optional_commercial_partner`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Partner-Contact/tree/16.0/partner_optional_commercial_partner>

## Beschreibung

Standardmässig wird auf Kontakten, die einem Unternehmen zugeordnet sind, als Handelsgesellschaft das Unternehmen zugeordnet. Rechnungen an diese Kontakte werden in der Buchhaltung der Handelsgesellschaft bzw. dem Unternehmen zugeordnet. Mit dieser Erweiterung kann das Verhalten der Zuordnung übersteuert werden. Für einen Kontakt, der einem Unternehmen zugeordnet ist, können Sie festlegen, dass es sich selbst um eine Handelsgesellschaft handelt.

## Verwendung

### Kontakt als Handelsgesellschaft festlegen

Öffnen Sie einen Kontakt und zeigen Sie den Tab _Verkauf & Einkauf_ an. Aktivieren Sie die Option _Is Commercial Partner_.

::: tip
Wenn Sie eine Rechnung mit einem konfigurierten Kontakt erstellen, wird als Handelsgesellschaft der Kunde und nicht das Unternehmen verwendet.
![](attachments/Partner%20Optional%20Commercial%20Partner.png)
:::

::: warning
Auf der Aktion _Mahnberichte_ muss der Inhalt des Felds _Wertebereich_ entfernt werden. Ansonsten sind Kontakte, die als Handelsgesellschaft markiert sind und einem Unternehmen zugeordnet sind, nicht sichtbar.
:::
