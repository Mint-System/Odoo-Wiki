---
description: Zwei-Faktor-Authentisierung für bestimmte IP-Netzwerke ignorieren.
forge: github.com
kind: howto
name: auth_totp_ip_check
partner: Mint System
prev: ./settings
repo: Mint-System/Odoo-Apps-Server-Tools
title: Auth TOTP IP Check
versions:
- '17.0'
---


# Auth TOTP IP Check

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Zwei-Faktor-Authentisierung für bestimmte Benutzer und Netzwerke deaktivieren

Zeigen Sie _Einstellungen > Technisch > Sicherheit > Disable TOTP Check_ an. Geben Sie hier ein Cidr-Adresse für ein IP-Netzwerk ein für welches die Zwei-Faktor-Authentisierung ignoriert werden soll. Wählen optional die Benutzer, für welche Ausnahme gelten soll.

![Auth TOTP IP Check](attachments/Auth%20TOTP%20IP%20Check.gif)

### Login ohne Zwei-Faktor-Authentisierung für unbestimmte Netzwerke verhindern

Wenn Sie den [Systemparameter](Development.md#Systemparameter%20anlegen) mit Schlüssel `auth_totp.prevent_login_without_2fa` und Wert `True` anlegen, können Benutzer ohne Zwei-Faktor-Authentisierung aus unbestimmten Netzwerken nicht mehr einloggen.
