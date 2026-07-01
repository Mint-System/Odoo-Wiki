---
description: Zugriff auf Deduplizierung der Kontakte steuern.
forge: github.com
kind: howto
name: partner_deduplicate_acl
partner: OCA
prev: ./contacts
repo: OCA/partner-contact
title: Partner Deduplication ACL
versions:
- '19.0'
- '18.0'
- '17.0'
- '16.0'
- '15.0'
- '14.0'
---


# Partner Deduplication ACL

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Kontakte deduplizieren

Navigieren Sie nach _Kontakte > Werkzeuge > Deduplizierung der Kontakte_. Wählen Sie die Attribute zur Deduplizierung aus. Legen Sie die Optionen zur Ausschliessung von Kontakten fest und starten Sie den Vorgang mit einer manuellen oder automatischen Prüfung.

Im neuen Dialog erhalten Sie Vorschläge um Kontakte zusammenzuführen oder zu ignorieren. Im Feld _Zielkontakt_ bestimmen Sie welcher der Kontakte erhalten werden soll. Wenn Sie _Kontakte Zusammenführen_ oder _Diese Kontakte Überspringen_ wählen, gelangen Sie zum nächsten Vorschlag.
