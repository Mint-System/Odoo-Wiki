---
title: kubectl
description: Kubernetes-Konfigurationen verwalten.
tags:
- HowTo
prev: ./mint-cloud
---
# kubectl
![](attachments/odoo_icons_kubectl.png)

{{ $frontmatter.description }}

Technischer Name: `kubectl`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Connector/tree/18.0/kubectl>

## Verwendung

### Cluster definieren

Zeigen Sie *kubectl > kubectl > Clusters* an und wählen Sie *Neu*. Geben Sie den Namen und die Adresse des *Clusters* ein.

### Context definieren

Zeigen Sie *kubectl > kubectl > Clusters* an und wählen Sie *Neu*. Geben Sie einen Namen ein und wählen Sie den dazugehörigen Cluster aus. Im Feld *Config* fügen Sie Inhalt der kubectl *Config* ein. Mit dem folgenden Befehl erhalten Sie einen Export ihrer aktuellen *Config*:

```bash
kubectl config view --minify --raw
```

### Context einem Benutzer hinzufügen

Zeigen Sie einen Benutzer an *Einstellungen > Benutzer & Unternehmen > Benutzer* und wählen Sie den Tab *kubectl* aus.

### Aktueller Context festlegen

Als Benutzer wählen Sie das Menü oben rechts und wählen *Präferenzen*. Im Tab *kubectl* sehen Sie die vefügbaren kubectl *Contexts*. Klicken Sie bei einem ausgewählten *Context* auf *User Context*. Der aktive *Context* wird markiert.