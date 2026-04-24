---
description: Url als Dokument anhängen.
forge: github.com
kind: howto
name: document_url
partner: OCA
prev: ./discuss
repo: OCA/knowledge
title: URL Attachment
versions:
- '19.0'
---


# URL Attachment

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Url als Dokument hinzufügen

Mit dieser Erweiterungen können sie, nicht nur Dokumente im Chatter anhängen, sondern auch Urls. Öffnen Sie eine beliebige Formular-Ansicht mit einem Chatter-Fenster und wählen _Add URL_.

![](attachments/URL%20Attachment%20Add.png)

Geben Sie einen Link-Namen und die Url ein.

![](attachments/URL%20Attachment%20Example.png)

Die Url wird als Dokument angezeigt.

![](attachments/Url%20Attachment%20Display.png)
