---
description: Beziehungen zwischen Kontakten definieren.
forge: github.com
kind: howto
name: partner_multi_relation
partner: OCA
prev: ./crm
repo: OCA/partner-contact
title: Partner Multi Relation
versions:
- '19.0'
- '18.0'
- '17.0'
- '16.0'
- '15.0'
- '14.0'
---


# Partner Multi Relation

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>


## Konfiguration

### Art der Beziehung erfassen

Zeigen Sie _Kontakte > Konfiguration > Art der Beziehung_ an. Erstellen Sie einen neuen Eintrag. Wählen Sie als erstes mit der Option _Symmetric_, ob die Beziehung auf beide Seiten gleich ist. Vergeben Sie einen Name, dazu zwei Beispiele:

Eine symmetrische Beziehung:

![](attachments/Partner%20Multi%20Relation%20Symmetric.png)

Eine asymmetrische Beziehung:

![](attachments/Partner%20Multi%20Relation%20Asymmetric.png)

Legen Sie fest welcher Typ (Person oder Unternehmen oder beide) ausgewählt werden. 

## Verwendung

### Beziehung für Kontakt erfassen

Zeigen Sie in _Kontakte_ einen Kontakt an und klicken Sie auf den Smart-Button _Beziehungen_. Hier sehen Sie bestehende Beziehungen und können neue erfassen.

Beispiel zur asymmetrischen Beziehung:

![](attachments/Partner%20Multi%20Relation%20Decisions%20made%20by.png)

Ist die Art der Beziehung reflexiv, wird Sie auf dem gegenüberliegenden Partner ebenfalls erfasst:

![](attachments/Partner%20Multi%20Relation%20Makes%20decisions%20or.png)

Bei der symmetrischen Beziehung wird immer der gleiche Name verwendet:

![](attachments/Partner%20Multi%20Relation%20Decision%20Maker.png)