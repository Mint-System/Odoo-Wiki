---
title: Fs Folder WebDAV
description: Verbindung mit externen WebDav-Speicher.
kind: howto
tags:
  - OCA
prev: ./base
---

# Fs Folder WebDAV

![icon_oca_app](../attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `fs_folder_webdav`\
Repository: <https://github.com/OCA/storage/tree/18.0/fs_folder_webdav>

## Konfiguration

### Nextcloud-Verbindung einrichten

Navigieren Sie nach _Einstellungen > Technisch > FS Storage_ und erstellen Sie einen neuen Eintrag.

- **Name**: Name der Nextcloud-Instanz
- **Code**: Kürzel für die Verbindung
- **Protocol**: Wähle hier `webdav`
- **Directory Path**: Der Nextcloud-Pfad wo Odoo die Dateien speichert. Ein Beispiel: `/remote.php/dav/files/admin/Odoo`
- **Options**: Gibt die Anmelde-Informationen für Nextcloud in diesem Format ein:

```
{
    "base_url": "https://cloud.example.com",
    "auth": ["username", "password"]
}
```

Wähle die Aktion _Test connection_ um die Verbindung zu testen.

### Standard-Dateisystem festlegen

Damit Dateien standardmässig auf einem bestimmten Dateisystem gespeichert werden, muss dies auf dem Dateisystem festgelegt werden. Navigieren Sie nach _Einstellungen > Technisch > FS Storage_ und Öffnen Sie den gewünschten Eintrag. Im Abschnitt _Filesystem Contents_ aktivieren Sie die Option _Use As Default For Fs Contents_. Wenn nötig deaktiveren Sie Option zuerst auf anderen Einträgen.
