---
tags:
- HowTo
- OCA
prev: ./entwicklung
---
# Mass Editing
![icon_oca_app](assets/icon_oca_app.png)

Mühelos mehrere Einträge auf einmal bearbeiten.

Technischer Name: `mass_editing`\
Repository: <https://github.com/OCA/server-ux/tree/13.0/mass_editing>

## Verwendung

### Aktion Massenbearbeitung hinzufügen

Navigieren Sie nach *Einstellungen > Technisch > Server-Aktionen* und klicken auf *Anlegen*.

Geben Sie im Feld *Name der Aktion* eine für die Aktion passende Beziechyhnung ein. Wählen Sie im Feld *Modell* das Datenmodell wo die Aktion verfügbar sein soll. Anschliessend wählen Sie im Feld *Folgeaktion* die Option *Mass Edit Records*. In der Tabelle *Fields* können Sie nuun die Felder, welche im Dialog der Massenbearbeitung zur Verfügung stehen sollen hinzufügen. Im Tab *Message* können Sie eine optionale Nachricht für den Bearbeitungs-Dialog hinterlegen und im Tab *Sicherheit* können Sie die Aktion auf bestimmte Gruppen einschränken.

::: warning
Im Dialog der Massenbearbeitung werden für die Felder keine Client-Validierungen durchgeführt. Beispielsweise werden Konfigurationen, die das Feld aufgrund des Status des Objekts nur lesbar machen, ignoriert. 
:::

![Massenverarbeitung ausführen](assets/Massenverarbeitung%20ausführen.gif)