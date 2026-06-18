---
title: Auth Disable Password Login
description: Schaltet das Login mit Passwort für einen User aus.
kind: howto
tags:
  - Mint-System
prev: ./settings
forge: github.com
repo: Mint-System/Odoo-Apps-Server-Tools
versions:
- '19.0'
name: auth_disable_password_login
---

# Auth Disable Password Login

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Mit diesem Modul kann das Login mit Passwort für einen User ausgeschaltet werden.
Auf dem Tab "Sicherheit" in der Bearbeitungsansicht eines Benutzers  wird die Checkbox "Passwort-Login ausschalten / Disable Password Login" eingeblendet . Wird sie aktiviert, wird für den  entsprechenden User der Login mit Passwort abgelehnt ("Access denied").
Ausserdem wird die Möglichkeit, in den User-Präferenzen das Passwort zu ändern, deaktiviert. 
