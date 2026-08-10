---
title: VoIP
description: In Odoo Telefone empfangen und machen.
kind: howto
prev: ./
partner: Odoo S.A.
extensions: true
---

# VoIP

[![icons_odoo_voip](attachments/icons_odoo_voip.png)](VoIP.md)

In Odoo Telefone empfangen und machen.

## Konfiguration

Damit Sie aus Odoo telefonieren können, brauche Sie die Verbindungsinformationen `WebSocket` und `PBX-Server-IP` des Anbieter und ihre persönlichen SIP-Anmeldeinformationen.

### VoIP-Anbieter konfigurieren

Navigieren Sie nach _Telefon > Konfiguration > VoIP-Anbieter_. Erfassen Sie hier einen neuen Eintrag und geben Sie die Verbindungsinformationen ein.

Gilt bis #Odoo16:

Navigieren Sie nach _Einstellungen > Allgemeine Einstellungen > Integrationen_ und geben Sie im Abschnitt _Asterisk (VoIP)_  


### Peoplefone VoIP-Anbeiter konfigurieren

Für _WebSocket_ geben Sie `wss://webrtcproxy.peoplefone.ch` ein und als _PBX-Server-IP_ geben `pbxs.peoplefone.ch` ein.

## Verwendung

### VoIP-Anmeldedaten hinterlegen

Klicken Sie auf ihr Benutzerprofil und wählen Sie _Meine Präferenzen > Tab VoIP_. Wählen Sie den entsprechenden Anbieter aus und geben Sie im Feld _Benutzernamen_ den _SIP-Benutzernamen_ ein und im Feld _Geheimnis_ geben Sie das _SIP-Passwort_ ein.

Gilt bis #Odoo16:

Klicken Sie auf ihr Benutzerprofil und navigieren Sie zu _Mein Profil > VOIP_. Geben Sie im Feld _VoIP-Benutzername/-Nebenstellennummer_ den _SIP-Benutzernamen_ ein und im Feld _VoIP-Geheimnis_ geben Sie das _SIP-Passwort_ ein.

### Kontakt anrufen

Klicken Sie in der Statusleiste von Odoo auf das Telefon-Icon. Geben Sie eine Nummer ein oder suchen Sie einen Kontakt.
