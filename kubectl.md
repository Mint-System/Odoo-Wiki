---
title: kubectl
description: Kubernetes-Konfigurationen verwalten.
kind: howto
prev: ./mint-cloud
---

# kubectl

![](attachments/odoo_icons_kubectl.png)

{{ $frontmatter.description }}

Technischer Name: `kubectl`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Vertical-SaaS/tree/18.0/kubectl>

## Verwendung

### Cluster erfassen

Zeigen Sie _kubectl > kubectl > Clusters_ an und wählen Sie _Neu_. Geben Sie den Namen und die Adresse des _Clusters_ ein.

### Context Konfiguration erstellen

Zeigen Sie _kubectl > kubectl > Clusters_ an und wählen Sie _Neu_. Geben Sie einen Namen ein und wählen Sie den dazugehörigen Cluster aus. Im Feld _Config_ fügen Sie Inhalt der kubectl _Config_ ein. Mit dem folgenden Befehl erhalten Sie einen Export ihrer aktuellen _Config_:

```bash
kubectl config view --minify --raw
```

### Context einem Benutzer zuordnen

Zeigen Sie einen Benutzer an _Einstellungen > Benutzer & Unternehmen > Benutzer_ und wählen Sie den Tab _kubectl_ aus.

### Aktueller Context festlegen

Als Benutzer wählen Sie das Menü oben rechts und wählen _Präferenzen_. Im Tab _kubectl_ sehen Sie die vefügbaren kubectl _Contexts_. Klicken Sie bei einem ausgewählten _Context_ auf _User Context_. Der aktive _Context_ wird markiert.

## Entwicklung

### Context aktivieren

Wenn Sie die kubectl-Konfiguration in einer anderen Methode verwenden möchten, können Sie die `get_config_path` Methode verwenden. Dazu ein Beispiel:

```python
context_id = self.env["kubectl.context"].browse(1)
with context_id.get_config_path() as config_path:
	...
```
