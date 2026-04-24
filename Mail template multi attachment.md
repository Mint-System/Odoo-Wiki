---
description: Mehrere Anhänge bei E-Mail-Vorlage hinzufügen.
forge: github.com
kind: howto
name: mail_template_multi_attachment
prev: ./discuss-e-mail
repo: OCA/social
tags:
- OCA
title: Mail template multi attachment
versions:
- '16.0'
---


# Mail template multi attachment

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

::: warning
Seit #Odoo17 wird diese App nicht mehr benötigt.
#DEPRECATED
:::

## Verwendung

### Mehrere Anhänge auf E-Mail-Vorlage hinzufügen

Zeigen Sie eine Mail-Vorlage unter *Einstellungen > Technisch > E-Mail Vorlagen* an. Zeige den Tab *Attachments* an. Im Abschnitt *Multi Attachments* können Sie mehrere Vorlagen hinzufügen. Das Feld *Report Name* können leer lassen.

::: tip
Entfernen Sie Inhalte aus *Simple Attachment* wenn Sie *Multi Attachments* verwenden.
:::
