---
title: Datenmanagement
description: Importieren und Exportieren Sie alle Odoo Daten.
kind: howto
prev: ./
partner: Mint-System
---

# Datenmanagement

![icons_odoo_data_recycle](attachments/icons_odoo_data_recycle.png)

{{ $frontmatter.description }}

## Bereiche

| Bereich                                                               | Beschreibung                                        |
| --------------------------------------------------------------------- | --------------------------------------------------- |
| [Abwesenheiten Datenmanagement](HR%20Holidays%20Data%20Management.md) | Daten zu Abwesenheiten exportieren und importieren. |
| [Discuss Datenmanagement](Discuss%20Datenmanagement.md)                 | Daten zu Dialog exportieren und importieren.        |
| [Einstellungen Datenmanagement](Settings%20Data%20Management.md)      | Daten zu Einstellungen exportieren und importieren. |
| [Fertigung Datenmanagement](Manufacture%20Data%20Management.md)       | Produkte und Dienstleistungen zentral pflegen.      |
| [Kontakte Datenmanagement](Partner%20Data%20Management.md)            | Daten zu Kontakte exportieren und importieren.      |
| [Kundendienst Datenmanagement](Helpdesk%20Data%20Management.md)       | Daten zu Kundendienst exportieren und importieren.  |
| [Projekt Datenmanagement](Project%20Data%20Management.md)             | Daten zu Projekte exportieren und importieren.      |
| [Umfragen Datenmanagement](Survey%20Datamanagement.md)                | Daten zu Umfragen exportieren und importieren.      |

## Vorgänge

### Daten exportieren

In allen Apps mit Listenansichten haben die Möglichkeit Daten zu exportieren. Die folgende Abbildung zeigt ein Beispiel der Ansicht _Lager > Produkte > Produkte_.

::: tip
Damit die Auswahl _Aktion_ erscheint, müssen die Daten in der Listenansicht angezeigt werden.
:::

Markieren Sie Einträge und wählen Sie die Aktion _Export_.

![Datenmanagement Daten exportieren Aktion](attachments/Datenmanagement%20Daten%20exportieren%20Aktion.png)

Anschliessend erscheint ein Dialog zur Definition der zu exportierenden Felder.

![Datenmanagement Daten exportieren Felder](attachments/Datenmanagement%20Daten%20exportieren%20Felder.png)

Bestimmen Sie die Felder auf linken Seite und wählen Sie _Export_ um den Vorgang auszuführen.

### Export-Vorlage definieren

Wenn Sie [Daten exportieren](#Daten%20exportieren) und im Dialog Felder ausgewählten haben, können Sie die Auswahl als Vorlage speichern. Klicken Sie auf _Vorlage:_ und wählen Sie _Neue Vorlage_.

![](attachments/Data%20Management%20Export%20Template.png)

Geben Sie einen passenden Namen ein und wählen Sie den Speichern-Knopf. Nun haben Sie die Export-Vorlage auf diesem Datenmodell zur Verfügung.

### Daten importieren

In den verschiedenen Apps besteht immer die Möglichkeit Daten zu importieren. Folgende Abbildung zeigt das Beispiel in der Maske Fertigung > Stammdaten > Produkte.

![Datenmanagement Daten importieren](attachments/Datenmanagement%20Daten%20importieren.png)

Drücken Sie den Knopf _Import_. Anschliessend erscheint folgende Maske mit der Möglichkeit eine Datei für den Import auszuwählen.

![Datenmanagement Daten importieren Datei](attachments/Datenmanagement%20Daten%20importieren%20Datei.png)

::: tip
Die Struktur der zu importierenden Datei muss für jeden Zweck bestimmte Vorgaben erfüllen.
:::

![Datenmanagement Daten importieren Datei Liste](attachments/Datenmanagement%20Daten%20importieren%20Datei%20Liste.png)

Mit der Funktion _Testbetrieb_ wird festgestellt, ob die Stuktur der Datei den Vorgaben entspricht. Folgende Meldung bestätigt, dass der Import erfolgsversprechend ist.

![Datenmanagement Daten importieren ok](attachments/Datenmanagement%20Daten%20importieren%20ok.png)

Nun können Sie mit dem Knopf _Import_ den Datentransfer ausführen.

::: tip
Sie können Daten auch in Tabellen importieren, die über keinen eigenen Menupunkt verfügen.

Hängen Sie dazu diesen Teil an die URL Ihrer Odoo-Instanz an: `web?debug=1#action=import&cids=1&model=`
und füllen Sie den Parameter `model` mit dem Datenmodell, das Sie importieren möchten.

zum Beispiel für den Import von Aktivitäten: https://demo.odoo.com/web?debug=1#action=import&cids=1&model=mail.activity
:::

### Daten aktualisieren

Den Entwicklermodus aktivieren.  
Einen Datenexport starten.  
Die Checkbox _I want to update data (import-compatible export)_ markieren.

::: tip
Mit der Funktion _I want to update data_ wird erreicht, dass die in der Datenbank vorhandenen Einträge überschrieben werden.
:::

### Massenmutation durchführen

In der Listenansicht können Datensätze ausgewählt und als Sammelmutation geändert werden. Das folgende Beispiel zeigt die Änderung des Feldes _Verantwortlich_.

![Datenmanagement Sammelmutation](attachments/Datenmanagement%20Sammelmutation.gif)

### Importzuordnung anzeigen

Damit Sie eine Übersicht der Importzuordnung erhalten, erstellen Sie als erstes eine neue Ansicht gemäss [Ansicht erstellen](Development%20Views.md#Ansicht%20erstellen) mit diesen Angaben:

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
