---
title: Datenmanagement
description: Importieren und Exportieren Sie alle Odoo Daten.
tags:
- HowTo
prev: ./
---
# Datenmanagement
![icons_odoo_data_recycle](attachments/icons_odoo_data_recycle.png)

{{ $frontmatter.description }}

## Bereiche

| Bereich                                                             | Beschreibung                                        |
| ------------------------------------------------------------------- | --------------------------------------------------- |
| [Einstellungen Datenmanagement](Settings%20Data%20Management.md)     | Daten zu Einstellungen exportieren und importieren. |
| [Kontakte Datenmanagement](Partner%20Data%20Management.md)          | Daten zu Kontakte exportieren und importieren.      |
| [Projekt Datenmanagement](Project%20Data%20Management.md)           | Daten zu Projekte exportieren und importieren.      |
| [Kundendienst Datenmanagement](Helpdesk%20Data%20Management.md)     | Daten zu Kundendienst exportieren und importieren.  |
| [Fertigung Datenmanagement](Manufacture%20Data%20Management.md)     | Produkte und Dienstleistungen zentral pflegen.      |
| [Abwesenheit Datenmanagement](HR%20Holidays%20Data%20Management.md) | Daten zu Abwesenheit exportieren und importieren.   |

## Vorgänge

### Daten exportieren

In den verschiedenen Apps besteht immer die Möglichkeit Daten zu exportieren. Folgende Abbildung zeigt das Beispiel in der Maske Fertigung > Stammdaten > Produkte.

::: tip
Damit die Auswahl *Aktion* erscheint, müssen die Daten in der Listenansicht angezeigt werden.
:::

![Datenmanagement Daten exportieren Aktion](attachments/Datenmanagement%20Daten%20exportieren%20Aktion.png)

Wählen Sie die Aktion *Export*. Anschliessend erscheint die Maske zur Definition der zu exportierenden Felder.

![Datenmanagement Daten exportieren Felder](attachments/Datenmanagement%20Daten%20exportieren%20Felder.png)

::: tip
Die zu exportierenden Felder müssen für jeden Zweck sorgfältig ausgewählt werden. Beachten Sie hierzu die Angaben im Abschnitt Datenstruktur Export.
:::

### Daten importieren

In den verschiedenen Apps besteht immer die Möglichkeit Daten zu importieren. Folgende Abbildung zeigt das Beispiel in der Maske Fertigung > Stammdaten > Produkte.

![Datenmanagement Daten importieren](attachments/Datenmanagement%20Daten%20importieren.png)

Drücken Sie den Knopf *Import*. Anschliessend erscheint folgende Maske mit der Möglichkeit eine Datei für den Import auszuwählen.

![Datenmanagement Daten importieren Datei](attachments/Datenmanagement%20Daten%20importieren%20Datei.png)

::: tip
Die Struktur der zu importierenden Datei muss für jeden Zweck bestimmte Vorgaben erfüllen.
:::

![Datenmanagement Daten importieren Datei Liste](attachments/Datenmanagement%20Daten%20importieren%20Datei%20Liste.png)

Mit der Funktion *Testbetrieb* wird festgestellt, ob die Stuktur der Datei den Vorgaben entspricht. Folgende Meldung bestätigt, dass der Import erfolgsversprechend ist.

![Datenmanagement Daten importieren ok](attachments/Datenmanagement%20Daten%20importieren%20ok.png)

Nun können Sie mit dem Knopf *Import* den Datentransfer ausführen.

### Daten aktualisieren

Den Entwicklermodus aktivieren.  
Einen Datenexport starten.  
Die Checkbox *I want to update data (import-compatible export)* markieren.

::: tip
Mit der Funktion *I want to update data* wird erreicht, dass die in der Datenbank vorhandenen Einträge überschrieben werden.
:::

### Massenmutation durchführen

In der Listenansicht können Datensätze ausgewählt und als Sammelmutation geändert werden. Das folgende Beispiel zeigt die Änderung des Feldes *Verantwortlich*.

![Datenmanagement Sammelmutation](attachments/Datenmanagement%20Sammelmutation.gif)

### Importzuordnung anzeigen

Damit Sie eine Übersicht der Importzuordnung erhalten, erstellen Sie als erstes eine neue Ansicht gemäss [Ansicht erstellen](Develpment%20Views.md#Ansicht%20erstellen) mit diesen Angaben:

Ansichtsbezeichnung: `mint_system.base_import.mapping.tree`
Modell: `base_import.mapping`\
Architektur:

```xml
<tree>
  <field name="column_name"/>
  <field name="res_model"/>
</tree>
```

Anschliessend erstellen Sie einen neuen Menüposten mit einer neuen Aktion gemäss [Neue Ansicht mit Aktion hinzufügen](Development%20Actions.md#Neue%20Ansicht%20mit%20Aktion%20hinzufügen) und verwenden diese Angaben:

Name der Aktion: `Importzuordnung`\
Objekt: `base_import.mapping`\
Ansichtsreferenz: `mint_system.base_import.mapping.tree`\
Ansichtsmodus: `tree,form`\
Menü: `Importzuordnung`\
Obermenü: `Einstellungen/Technisch/Datenbankstruktur`\
Aktion: `ir.actions.act_window` `Importzuordnung`\
Nummernfolge: `90`

![](attachments/Importzuordnung%20Importzuordnung%20anzeigen.png)