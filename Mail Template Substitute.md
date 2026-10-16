---
title: Mail Template Substitute
description: Substitutionsregeln für E-Mail-Vorlagen definieren.
kind: howto
tags:
  - OCA
prev: ./discuss-e-mail
forge: github.com
repo: OCA/social
versions:
- '16.0'
- '17.0'
name: mail_template_substitute
---

# Mail Template Substitute

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a><!--\
Runboat: <a v-bind:href="`https://runboat.odoo-community.org/builds?repo=${$frontmatter.repo}`">https://runboat.odoo-community.org/builds?repo={{ $frontmatter.repo }}</a>-->

## Beschreibung

Mit diesem Modul kann man Substitutionsregeln für E-Mail-Vorlagen erstellen. Ein typischer Anwendungsfall ist es, eine Standardvorlage durch alternative Vorlagen zu ersetzen, wenn bestimmte Bedingungen erfüllt sind. Zum Beispiel erlaubt es die Konfiguration alternativer Vorlagen für verschiedene Unternehmen oder für verschieden Zustande eines Dokuments.

## Verwendung

1. In _E-Mail > Vorlagen_ die gewünschte Vorlage auswählen, die ersetzt werden soll
2. Im Tab _Substitution_ eine neue Zeile hinzufügen
3. Die Substitutionsvorlage, welche die gewählte Vorlage ersetzen soll, auswahlen
4. Eine Domäne festlegen, die angibt, wann die Ersetzung stattfinden soll (z.B. `Status = Entwurf`)
