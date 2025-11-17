---
title: Verkauf Preise
description: Produkte, Preislisten und Varianten zentral pflegen.
kind: howto
prev: ./sale
---

# Verkauf Preise

![icons_odoo_sale](attachments/icons_odoo_sale.png)

{{ $frontmatter.description }}

## Konfiguration

### Rabatte aktivieren

Navigieren Sie nach _Verkauf > Konfiguration > Preiskalkulation_ und aktivieren Sie die Option _Rabatte_. Sie können nun Rabatte auf Auftragszeilen erfassen.

### Preislisten aktivieren

Navigieren Sie nach _Verkauf > Konfiguration > Preiskalkulation_ und aktivieren Sie die Option _Preislisten_. Sie können nun mehrere Peise für ein Produkt erfassen.

### Erweiterte Preisregeln aktivieren

Gilt bis #Odoo16.

Navigieren Sie nach _Verkauf > Konfiguration > Preiskalkulation_ und aktivieren Sie die Option _Preislisten_ mit der Unteroption _Erweiterte Preisregeln_.

## Produkte

### Produkte zum Verkauf festlegen

Öffnen Sie ein Produkt via _Verkauf > Produkte > Produkte_ und markieren Sie _Kann verkauft werden_. Neue Optionen erscheinen auf der Produktansicht.

![Produkte zum Verkauf deklarieren](attachments/Produkte%20zum%20Verkauf%20deklarieren.gif)

### Verkaufspreis auf Produkt festlegen

Wählen Sie das Produkt unter _Verkauf > Produkte > Produkte_ aus und legen Sie im Tab _Allgemeine Informationen_ im Feld _Verkaufspreis_ den Preis fest. Legen Sie zusätzlich im Feld _Steuern (Verkauf)_ die Mehwertsteuer fest.

### Produktvarianten aktivieren

Navigieren Sie nach _Einstellungen > Verkauf > Produktkatalog_ und aktiveren Sie die Option _Varianten_.

### Produktattributte erstellen

Öffnen Sie _Verkäufe > Konfiguration > Produkte > Attribute_ und wählen Sie _Neu_. Geben den Attributnamen an und legen Sie den Anzeigetyp fest. Für das Feld _Variants Creation Mode_ haben Sie diese Optionen:

- **Instantly**: Alle möglichen Produkvarianten werden angelegt.
- **Dynamically**: Produktvarianten werden nur angelegt, wenn diese explizit konfiguriert werden.
- **Niemals**: Mögliche Produktvarianten werden für dieses Attribut nicht angelegt.

Zuletzt tragen Sie Werte für das Attribut ein.

![](attachments/Verkauf%20Stammdaten%20Produktattributte.png)

### Produktvarianten konfigurieren

Navigieren Sie nach _Verkauf > Produkte > Produkte_ und wählen Sie das Produkt aus für welches Sie Produktvarianten konfigurieren möchten. Zeigen Sie den Tab _Merkmale & Varianten_ an und fügen Sie ein Merkmal mit den vefügbaren Varianten hinzu. Klicken Sie anschliessend auf _Konfigurieren_ und legen Sie die Preiseaufschläge oder Rabatte im Feld _Value Price Extra_ fest.

### Konfigurierierte Produktvarianten anzeigen

Navigieren Sie nach _Verkauf > Produkte > Produktvarianten_. Hier finden Sie alle konfigurierten Produktvarianten.

## Preislisten

### Preisliste anzeigen

Navigieren Sie nach _Verkauf > Produkte > Preislisten_ und wählen Sie eine Preisliste aus.

### Preisliste erstellen

Navigieren Sie nach _Verkauf > Produkte > Preislisten_ und erstellen Sie einen neuen Eintrag. Legen Sie im Tab _Konfiguration_ die Verfügbarkeit gemäss Ländergruppe fest und bestimmen Sie mit der Option _Rabattpolitik_, ob Rabatt im Produkpreis inkludiert ist oder nicht.

### Preisregel für Produktvariante erfassen

Navigieren Sie nach _Verkauf > Produkte > Preislisten_ und zeigen Sie eine Preisliste an. Fügen Sie eine neue Zeile hinzu:

- **Produkt**: Wählen Sie hier die Produktvorlage aus
- **Variante**: Und hier die entsprechende Produktvariante
- **Preis**: Legen Sie den Preis der Produktvariante fest

### Preisliste mit Rabatt erstellen

Wenn Sie die [Erweiterte Preisregeln aktivieren](#Erweiterte%20Preisregeln%20aktivieren) können Sie eine Preisliste erstellen, die auf einer bestehenden Preisliste Rabatt gewährt.

Navigieren Sie nach _Verkauf > Produkte > Preislisten_ und erstellen Sie einen neuen Eintrag mit dem Prozentsatz im Namen. Fügen Sie im Tab _Preisregeln_ folgende Regeln hinzu:

- **Anzuwenden auf**: Alle Produkte
- **Startdatum**: Gemäss Laufzeit
- **Enddatum**: Gemäss Laufzeit
- **Ermittle Preis**: Formel
- **Basiert auf**: Andere Preisliste
- **Startdatum**: Preisliste auswählen
- **Rabatt**: Rabatt in Prozent

Dazu ein Beispiel:

![](attachments/Verkauf%20Preisregel%20Rabat.png)

Beim Auswahl der Preisliste im Angebot wird anschliessend der Preis mit Rabatt berechnet und eingetragen.

### Preisliste mit Preis für eine bestimmte Periode einrichten

Wenn Sie auf eine bestehenden Preisliste in einem bestimmten Zeitraum einen anderen Preis haben wollen, navigieren Sie nach _Verkauf > Produkte > Preisregeln_ und erstellen einen neuen Eintrag. Wählen Sie die bestehende Preisliste aus, konfigurieren Sie das Produkt und den Preis und legen Sie das Start- und Enddatum der Periode fest.

::: tip
Preisregeln mit einem aktiven Start- und Enddatum übersteuern Preisregeln ohne Datum.
:::

### Preisliste mit Rabatt für eine bestimmte Periode einrichten

Wenn Sie die [Erweiterte Preisregeln aktivieren](#Erweiterte%20Preisregeln%20aktivieren) können Sie eine Preisliste erstellen, die auf einer bestehenden Preisliste Rabatt gewährt.

Wenn Sie auf eine bestehenden Preisliste in einem bestimmten Zeitraum Rabatt gewähren möchten, müssen Sie eine neue Preisliste mit zwei Preisregeln einrichten. Navigieren Sie nach _Verkauf > Produkte > Preislisten_ und erstellen Sie einen neuen Eintrag mit dem Prozentsatz im Namen. Erstellen Sie eine für den Rabatt:

- **Anzuwenden auf**: Alle Produkte
- **Enddatum**: Ende der Kampagne
- **Ermittle Preis**: Formel
- **Basiert auf**: Andere Preisliste
- **Andere Preisliste**: Preisliste auswählen
- **Rabatt**: Rabatt in Prozent

Erstellen Sie eine zweite Preisregel für den normalen Preis:

- **Anzuwenden auf**: Alle Produkte
- **Startdatum**: Ende der Kampagne
- **Ermittle Preis**: Formel
- **Basiert auf**: Andere Preisliste
- **Andere Preisliste**: Preisliste auswählen

Dazu ein Beispiel:

![](attachments/Verkauf%20Stammdaten%20Preisliste%20mit%20Rabatt.png)

### Preisliste mit Staffelpreisen

Um für ein Produkt in Abhängigkeit zu unterschiedlichen Mengen eine Preisstaffelung einzurichten, muss die entsprechende Option _Preislisten / Mehrere Preise pro Produkt_ unter _Einstellungen > Verkauf > Preiskalkulation_ eingeschaltet werden.

![](attachments/Verkauf%20Stammdaten%20Staffelpreise.png)

Ein Beispiel könnte so aussehen:

![](attachments/Verkauf%20Stammdaten%20Staffelpreise%20Beispiel.png)

In einem _Angebot / Verkaufsauftrag_ werden die Preise entsprechend unterschiedlich angezeigt. Dazu das folgende Beispiel:

![](attachments/Verkauf%20Stammdaten%20Staffelpreise%20Verkaufsauftrag%20Beispiel.png)

### Preisregeln anzeigen

Damit Sie eine Übersicht der Preisregeln erhalten, folgen Sie dem HowTo [Menüposten erstellen](Development.md#Menüposten%20erstellen) und verwenden diese Werte:

Menü: `Preisregeln`\
Obermenü: `Verkauf/Produkte`\
Aktion: `ir.actions.act_window` `Preisregeln`\
Nummernfolge: `5`
