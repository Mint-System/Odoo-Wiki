---
description: Odoo Kalender mit CalDav synchronisieren.
forge: github.com
kind: howto
name: caldav_sync
partner: Thirdparty
prev: ./calendar
repo: bemade/bemade-addons
title: CalDAV Sync
versions:
- '19.0'
- '18.0'
- '17.0'
- '16.0'
---


# CalDAV Sync

![icons_odoo_thirdparty](attachments/icons_odoo_thirdparty.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Konfiguration

### CalDAV Synchronisation einrichten

Zeigen Sie in _Benutzer-Menü > Mein Profil_ den Tab _Calendar_ an. Geben Sie die CalDAV-Verbindungsdaten ein:

- **CalDAV Calendar URL**: Diese Url kann in ihrer Kalender-Anwendung kopiert werden.
- **CalDAV Username**: Benutzername ihres Kalender-Accounts.
- **CalDAV Password**: Passwort ihres Kalender-Accounts.

## Verwendung

### Termin mit CalDAV-Kalender synchronsieren

Wenn Sie die [CalDAV Synchronisation einrichten](#CalDAV%20Synchronisation%20einrichten) werden alle neuen Termin mit dem CalDAV-Kalender synchronisiert.

![](attachments/CalDAV%20Nextcloud%20Odoo.png)
