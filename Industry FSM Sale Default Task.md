---
description: Verknüpfte Aufgabe der Auftragszeile als Standardwert verwenden
forge: github.com
kind: howto
name: industry_fsm_sale_default_task
partner: Mint System
prev: ./fsm-industry
repo: Mint-System/Odoo-Apps-Sale-Workflow
title: Sale Blanket Order Comment
versions:
- '16.0'
---


# Industry FSM Sale Default Task

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Verknüpfte Aufgabe der Auftragszeile als Standardwert verwenden

Mit dieser Erweiterung wird beim Erstellen, Bestätigen und Aktualisieren von Auftragszeilen in Verkaufsaufsträgen geprüft, ob es Auftragszeilen ohne Aufgaben gibt. Die Aufgabe der ersten Auftragszeile mit einer Aufgabe, wird als Standardwert für die Auftragszeilen ohne Aufgaben übernommen.

::: tip
Wenn eine Auftragszeile mit einer Aussendienst-Aufgabe verknüpft ist, erscheint das Produkt in der Warenkorb-Funktion der Aussendienst-Aufgabe.
:::

::: warning
Es werden nur Auftragszeilen mit lagerfähigen Produkten oder Verbrauchsartikel verknüpft.
:::
