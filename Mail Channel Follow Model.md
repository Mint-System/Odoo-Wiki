---
title: Mail Channel Follow Model
description: Kanäle können Datenmodell abonnieren und zeigen Benachrichtigungen an.
kind: howto
tags:
- Mint-System
prev: ./dialog
---
# Mail Channel Follow Model
![icon_oms_box](../attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `mail_channel_follow_model`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Social/tree/16.0/mail_channel_follow_model>

## Beschreibung

Mit dieser Erweiterungen werden Kanäle bei einer Benachrichtiungen auf den einem ausgewählten Datenmodell ebenfalls benachrichtigt.

Erstellen Sie beispielsweise für ihr Verkaufsteam einen Kanal *Verkauf* und abonnieren Sie das Datenmodell *Verkaufsauftrag*. Wenn ein Kunde auf einen Auftrag antwortet oder ein Mitarbeitender eine Nachricht verschickt, wird zusätzlich der Kanal mit einem Link auf das Dokument benachrichtig.

## Konfiguration

### Datenmodell auf Kanal abonnieren

Öffnen Sie die App *Dialog* und klicken Sie neben dem Kanal-Namen auf das Konfigurations-Icons. Wählen Sie den Tab *Follower* und fügen Sie einen neuen Eintrag hinzu. Wählen Sie das zu abonnierende Datenmodell aus.

Optional können Sie mit dem Feld *Subtype* einen Nachrichten-Typ zur Filterung wählen. Wenn Sie *External Only* aktivieren, werden Sie nur benachrichtigt, wenn der Author ein externer Absender ist.