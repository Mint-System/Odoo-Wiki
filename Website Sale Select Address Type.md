---
title: Website Sale Select Address Type
description: Fügt dem Adressformular im Webshop eine Checkbox für Person/Unternehmen hinzu.
kind: howto
partner: Mint-System
prev: ./website
forge: github.com
repo: Mint-System/Odoo-Apps-Website
versions:
  - '19.0'
name: website_sale_select_address_type
---

# Website Sale Select Address Type

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a><!--\
Runboat: <a v-bind:href="`https://runboat.odoo-community.org/builds?repo=${$frontmatter.repo}`">https://runboat.odoo-community.org/builds?repo={{ $frontmatter.repo }}</a>-->

## Beschreibung

Mit dieser Erweiterung wird dem Adressformular im Webshop eine Checkbox mit den Optionen "Person" oder "Unternehmen" hinzugefügt. Dadurch kann der Portaluser den Typ seiner Adresse festlegen. Wird "Person" angeklickt, werden die B2B-Felder "Unternehmensname" und "VAT" im Lesemodus eingeblendet. Wird "Unternehmen" angeklickt, werden diese Felder ausgeblendet. Ausserdem ändert sich die Bezeichnung des Namensfeldes in "Unternehmensname".
