---
description: Kanäle können Datenmodell abonnieren und zeigen Benachrichtigungen an.
forge: github.com
kind: howto
name: mail_channel_follow_model
partner: Mint System
prev: ./discuss-e-mail
repo: Mint-System/Odoo-Apps-Social
title: Mail Channel Follow Model
versions:
- '18.0'
- '16.0'
---


# Mail Channel Follow Model

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Mit dieser Erweiterungen werden Kanäle bei einer Benachrichtiungen auf den einem ausgewählten Datenmodell ebenfalls benachrichtigt.

Erstellen Sie beispielsweise für ihr Verkaufsteam einen Kanal _Verkauf_ und abonnieren Sie das Datenmodell _Verkaufsauftrag_. Wenn ein Kunde auf einen Auftrag antwortet oder ein Mitarbeitender eine Nachricht verschickt, wird zusätzlich der Kanal mit einem Link auf das Dokument benachrichtig.

## Konfiguration

### Datenmodell auf Kanal abonnieren

Öffnen Sie die App _Dialog_ und klicken Sie neben dem Kanal-Namen auf das Konfigurations-Icons. Wählen Sie den Tab _Follower_ und fügen Sie einen neuen Eintrag hinzu. Wählen Sie das zu abonnierende Datenmodell aus.

Optional können Sie mit dem Feld _Subtype_ einen Nachrichten-Typ zur Filterung wählen. Wenn Sie _External Only_ aktivieren, werden Sie nur benachrichtigt, wenn der Author ein externer Absender ist.
