---
title: Qualität
description: Für moderne Hersteller.
kind: howto
prev: ./
partner: Odoo S.A.
---

# Qualität

![icons_odoo_quality_control](attachments/icons_odoo_quality_control.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/quality>

## Bereiche

| Bereich                                   | Beschreibung                                         |
| ----------------------------------------- | ---------------------------------------------------- |
| [Qualität Aktionen](Quality%20Actions.md) | Arbeitsflüsse im Qualitätsmanagement automatisieren. |



## Kontrollpunkte einrichten

Die Liste Qualität > Qualitätskontrolle > Kontrollpunkte zeigt mit dem Standarfilter "Qualitätspunkte" nur Kontrollpunkte, welche keinen *Arbeitsauftragsvorgang* zugeodnet haben. Wenn der Filter *Qualitätspunkte* gelöscht wird, dann erscheinen alle Kontrollpunkte.  
  
Wenn man einen Kontrollpunkt über die Stückliste erstellt (Tab Vorgänge > Neuer Schritt) dann wird der *Arbeitsauftragsvorgang* automatisch gesetzt. Das ist Bedingung, um den Kontrollpunkt an diesem Arbeitsschritt einzufordern.

D.h. im Kontext der Stückliste hat der Kontrollpunkt eine Relation auf den *Arbeitsauftragsvorgang*. Über das Menu "Qualität > Qualitätskontrolle > Kontrollpunkte ist diese Relation nicht sichtbar.  