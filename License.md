---
title: Lizenz
description: Software verkaufen und lizenzieren
kind: howto
prev: ./
---
# Lizenz
![odoo_icons_license](attachments/odoo_icons_license.png)

{{ $frontmatter.description }}

Technischer Name: `license`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Vertical-SaaS/tree/16.0/license>

## Erweiterungen

| Erweiterung                                         | Beschreibung                                                    |
| --------------------------------------------------- | --------------------------------------------------------------- |
| [License OCAD](License%20OCAD.md)                   | Synchronisation Lizenzen mit dem OCAD Lizenzaktivierungsdienst. |
| [License Sale](License%20Sale.md)                   | Lizenz aus Verkaufsauftrag generieren.                          |
| [License Subscription](License%20Subscription.md)   | Lizenzen mit Abonnementen erneuern.                             |
| [License Website Sale](License%20Website%20Sale.md) | Im Webshop gekaufte Lizenzen aktivieren.                        |
| [License Website](License%20Website.md)             | Kundenportal zur Lizenzverwaltung.                              |

## Beschreibung

```mermaid
flowchart TD
	A[Draft] -->|action_assign| B(Assigned)
	B -->|action_draft| A
	B -->|action_activate| C(Active)
	C -->|action_reset| B
	C -->|action_disable| D(Disabled)
	D -->|action_enable| C
	C -->|action_cancel| E(Cancelled)
	D -->|action_cancel| E
	E -->|action_draft| A
```

## Konfiguration

### Lizenztyp erfassen

Navigieren Sie nach *Lizenz > Konfigurationen > Lizenztyp* und erstellen Sie einen neuen Eintrag. Den *Lizenztyp* können Sie Lizenzen und Lizenzprodukten zuordnen.

## Verwendung

### Lizenz erstellen

Zeigen Sie *Lizenzen* an und erstellen Sie einen neuen Eintrag. Wählen Sie einen *Partner* aus und speichern Sie den neuen Eintrag. Es wird ein Lizenzname und ein Schlüssel generiert.

::: tip
Sie können auch einen benutzerdefinierten Lizenznamen und Schlüssel vergeben.
:::

## Aktionen

### Lizenz abbrechen

Navigieren Sie nach *Einstellungen > Technisch > Server-Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Lizenz abbrechen`\
Modell: `license.license`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for rec in records:
  rec.action_cancel()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Lizenzen können Sie die Einträge markieren und *Aktionen > Lizenz abbrechen* auswählen.

### Lizenz aktivieren

Navigieren Sie nach *Einstellungen > Technisch > Server-Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Lizenz aktivieren`\
Modell: `license.license`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for rec in records:
  rec.action_activate()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Lizenzen können Sie die Einträge markieren und *Aktionen > Lizenz aktivieren* auswählen.