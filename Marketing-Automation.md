---
title: Marketing-Automatisierung
description: Setzen Sie das Marketing auf Autopilot.
kind: howto
prev: ./
partner: Odoo S.A.
---

# Marketing-Automatisierung

![icons_odoo_marketing_automation](attachments/icons_odoo_marketing_automation.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/marketing-automation>

## Verwendung

### Kampagne anlegen

Navigieren Sie nach _Marketing-Automatisierung > Kampagnen_ und wählen Sie _Neu_. Vergeben Sie einen passenden Namen und wählen Sie als _Ziel_ den Wert _Kontakt_.

### Marketing-Aktivität erstellen

Navigieren Sie nach _Marketing-Automatisierung > Kampagnen_ und rufen Sie eine Kampagne auf. Wählen Sie die Aktion _Eine neue Aktivität hinzufügen_. Dazu die wichtigsten Felder:

- **Name Aktivität**: Vergeben
- **Aktivitätstyp**: Mit der Option _E-Mail_ wird anhand einer E-Mail-Vorlage eine E-Mail verschickt. Mit der Option _Serveraktion_, wird die ausgewählte Serveraktion ausgeführt.
- **Auslöser**: Konfigurieren Sie den Auslöser der Aktivität.
- **Tätigkeitsfilter**: Schränken Sie die Auswahl der Ziele ein.

Dazu ein Beispiel:

![](attachments/Marketing-Automation%20Aktivität.png)

### Untergeordnete Marketing-Aktivität erstellen

Abhängig von den Resultaten einer Aktivität, kann eine Unteraktivität erstellt werden. Zeigen Sie via _Markting-Automatisierung > Kampagnen_ die Aktivität an und wählen Sie den Bereich _Untergeordnete Aktivität hinzufügen_ an.

![](attachments/Marketing-Automation%20Untergeordnete%20Aktivitäten.png)

Klicken Sie auf einen Auslöser in der Auswahl. Der Dialog zur Erstellung einer Markting-Aktivität wird geöffnet und der Auslöser vorkonfiguriert.

![](attachments/Marketing-Automation%20Auslöser%20E-Mail%20Geöffnet.png)

### Marketing-Aktivität testen

Navigieren Sie nach _Marketing-Automatisierung > Kampagnen_ und zeigen Sie eine Kampagne an. Wählen Sie die Aktion _Einen Test Starten_. Wählen Sie einen bestimmten Kontakt aus und bestätigen Sie den Dialog mit _Weiter_. Im neuen Dialog können Sie nun ausgewählte Marketing-Aktivitäten starten.

![](attachments/Marketing-Automation.png)

::: tip
Auf der Kampange finden Sie einen Smart-Link _X Tests_, der Sie zu den erstellten Tests bringt.
:::

### Kampagne starten

Navigieren Sie nach _Marketing-Automatisierung > Kampagnen_ und zeigen Sie eine Kampagne an. Wählen Sie die Aktion _Starten_.

### Teilnehmer generieren und Aktivität ausführen

Navigieren Sie nach _Marketing-Automatisierung > Kampagnen_ und zeigen Sie eine laufende Kampagne an. Wählen Sie die Aktion _Teilnehmer Generieren_. Bestätigen Sie den Dialog und wählen Sie anschliessend _Aktivitäten ausführen_. Bestätigen Sie auch diesen Dialog. Die Marketing-Aktivitäten werden nun gemäss Auslöser geplant und vom Scheduler ausgeführt.

### Kampagnen-Teilnehmer anzeigen

Navigieren Sie nach _Marketing-Automatisierung > Kampagnen_ und zeigen Sie eine laufende Kampagne an. Wählen Sie den Smart-Link _X Teilnehmer_ und zeigen Sie einen Eintrag an.

::: tip
Für Teilnehmer im Status _Vollständig_ wurden alle Marketing-Aktivitäten absolviert.
:::
