---
title: Verträge
description: Wiederholende Verträge verwalten und automatisch verrechnen.
kind: howto
prev: ./
partner: OCA
---

# Verträge

![icon_oca_agreement](attachments/icon_oca_agreement.png)

{{ $frontmatter.description }}

Technischer Name: `contract`\
Repository: <https://github.com/OCA/contract/tree/17.0/contract>

## Erweiterungen

| Erweiterung                                                         | Beschreibung                                                  |
| ------------------------------------------------------------------- | ------------------------------------------------------------- |
| [Contract Format Date Marker](Contract%20Format%20Date%20Marker.md) | Datum aus Vertragszeile in Rechnung anzeigen und formatieren. |
| [Contract Invoice Cash Rounding Default](Contract%20Invoice%20Cash%20Rounding%20Default.md) | Bargeldrundungsmethode setzen für Rechnungen aus Verträgen.   |                                      |                                                               |
| [Contract Sale Generation](Contract%20Sale%20Generation.md)         | Aus wiederholenden Verträge Verkaufsangebote generieren.      |
| [Contract Sale](Contract%20Sale.md)                                 | Zugriff auf Verträge für Verkaufsmitarbeitende.               |
| [Product Contract](Product%20Contract.md)                           | Verknüpfung von Verkaufsaufträgen mit Kundenverträgen (OCA).  |
| [Subscription OCA](Subscription%20OCA.md)                           | OCA-Alternative für Abonnemente.                              |

## Verwendung

### Kundenverträge anzeigen

Navigieren Sie nach _Buchhaltung > Kunden > Kundenverträge_.

### Kundenvertrag erstellen

Rufen Sie _Buchhaltung > Kunden > Kundenverträge_ auf und wählen Sie _Neu_. Füllen mindestens diese Felder aus:

- **Vertragsname**: Titel des Vertrags
- **Kunde**: Das ist der Vertragspartner
- **Abrechnugsintervall**: Gemäss Vertrag festlegen
- **Startdatum**: Datum Vertragsbeginn
- **Periodische Rechnungen**: Dienstleistungen und Produkte die es zur verrechnen gilt

![](attachments/Contract%20Beispiel.png)

::: tip
Täglich wird ein Cron-Job ausgeführt, der entsprechend dem _Datum der nächsten Rechnung_ anhand des Vertrags eine Rechnung generiert.
:::

### Kundenvertrag und Periodische Rechnungen terminieren

Wenn Sie den Entwicklermodus aktivieren, werden auf den Zeilen _Periodische Buchungen_ das Feld _Datum der letzten Rechnung_ sichtbar. Dieses Feld können Sie mit dem entsprechenden Snippet bearbeitbar machen. Um eine Verrechnung mit _Abrechnungsart_ zu _Periodenbeginn_ zu erledigen.

![](attachments/Contract%20Abrechnungsart.png)

### Lieferantenverträge anzeigen

Navigieren Sie nach _Buchhaltung > Lieferanten > Lieferantenverträge_.

### Lieferantenvertrag erstellen

Rufen Sie _Buchhaltung > Lieferanten > Lieferantenverträge_ auf und wählen Sie _Neu_. Füllen mindestens diese Felder aus:

- **Vertragsname**: Titel des Vertrags
- **Lieferant**: Das ist der Vertragspartner
- **Abrechnugsintervall**: Gemäss Vertrag festlegen
- **Startdatum**: Datum Vertragsbeginn
- **Periodische Rechnungen**: Dienstleistungen und Produkte die es zur verrechnen gilt

## Aktionen

### Rechnung anlegen

Navigieren Sie nach _Einstellungen > Technisch > Server-Aktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Rechnung anlegen`\
Modell: `contract.contract`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld _Python Code_:

```python
for record in records:
	record.recurring_create_invoice()
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und speichern.

![](attachments/Contract%20Aktion%20Rechnung%20anlegen.png)

## Auswertung

### Kundenvertragszeilen anzeigen

Damit Sie eine Übersicht der Kundenvertragszeilen erhalten, folgen Sie dem HowTo [Menüposten erstellen](Development.md#Menüposten%20erstellen) und verwenden diese Werte:

Menü: `Kundenvertragszeilen`\
Obermenü: `Buchhlatung/Kunden`\
Aktion: `ir.actions.act_window` `Customer Contract Lines`\
Sequenz: `99`
