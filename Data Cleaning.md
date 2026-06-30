---
title: Datenbereinigung
description: Die Datenqualität ganz einfach verbessern.
kind: howto
prev: ./
partner: Odoo S.A.
---

# Datenbereinigung

![icons_odoo_data_cleaning](attachments/icons_odoo_data_cleaning.png)

{{ $frontmatter.description }}

## Bereiche

| Bereich                                                   | Beschreibung                                     |
| --------------------------------------------------------- | ------------------------------------------------ |
| [Datenbereinigung Aktionen](Data%20Cleaning%20Actions.md) | Aktionen in der Datenbereinigung automatisieren. |

## Verwendung

### Deduplizierungs-Regel einrichten 

Öffnen Sie _Datenbereinigung > Konfiguration > Regeln > Deduplizierung_ und zeigen Sie den Eintrag _Kontakt_. Hier können Sie einstellen unter welchen Bedingungen Kontakt-Einträge als Duplikate erkannt werden sollen.

- **Domain**: Bestinmmen Sie welche Einträge berücksichtigt werden sollen.
- **Deduplizierungsregeln**: Legen Sie fest anhand welcher Attribute Duplikate festgestellt werden.
- **Vorgeschlagener Schwellenwert**: Für Duplikate berechnet Odoo eine Ähnlichkeit. Legen Sie den unteren Schwellenwert zur Ausgabe fest.

![](attachments/Data%20Cleaning%20Contact.png)

### Duplikate suchen und zusammenführen

Öffnen Sie _Datenbereinigung > Konfiguration > Regeln > Deduplizierung_ und zeigen Sie den Eintrag _Kontakt_. Klicken Sie auf _Deduplizierung_. Odoo wendet die Regel an

![](attachments/Data%20Cleaning%20Duplicates.png)

Bestimmen Sie mit _Ist Master_ den Ziel-Datensatz. Mit der Aktion _Zusammenführen_ werden die Duplikate nach folgenden Regeln zusammengelegt: 

- Verlinkte Dokumente werden an das Ziel-Dokument gehängt
- Felder, die im Ziel-Dokument leer sind und im anderen Dokument ausgefüllt, werden in das Ziel-Dokument übertragen
- Der Zusammenführen-Vorgang wird im Chatter des Ziel-Dokument festgehalten
- Die Daten der zusammengeführten Dokumente werden im Chatter protokolliert 

## Benachrichtigung

### Benachrichtigung "Zusammenzuführende Duplikate" deaktivieren

Unter _Datenbereinigung > Konfiguration > Deduplizierung_ finden Sie die Deduplizierungsregeln. Zeigen Sie eine Regeln an. Im Feld _Benutzer benachrichtigen_ finden Sie die Benutzer, welche eine Benachrichtigung für diese Regeln erhalten. Entfernen Sie die gewünschten Benutzer.
