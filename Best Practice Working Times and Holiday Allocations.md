---
title: Arbeitszeiten und Urlaubsansprüche
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- Best-Practice
prev: ./best-practice
---
# Arbeitszeiten und Urlaubsansprüche

Die Berechnung der Arbeitszeiten und Urlaubsansprüche ist eine komplexe Angelegenheit. Um die Systematik von Odoo zu verstehen wurde ein Anwendungsfall definiert.

## Szenario

Im Unternehmen der Velo Manufaktur AG haben Mitarbeitende 25 Tage Urlaub und arbeiten in einem 100%-Pensum 40 Stundne pro Woche bzw. 8 Stunden am Tag.

**Michel Admin 40% Pensum**

Mitchell Admin arbeitet 40%.  Er hat 10 Tage Urlaub im Jahr. Das sind 80 Stunden.

![](attachments/Best%20Practice%20Arbeitszeiten%2040.png)

**Abigail Peterson 60% Pensum**

Abigail Peterson arbeitet 60%. Sie hat 15 Tage Urlaub im Jahr. Das sind 120 Stunden.

![](attachments/Best%20Practice%20Arbeitszeiten%2060.png)

**Eingabe Urlaub**

Beide Geben für die erste Mai-Woche Urlaub ein.

Bei Mitchell sind das 2 Arbeitstage bzw. 16 Stunden.

![](attachments/Best%20Practice%20Arbeitszeiten%20Urlaub%2016.png)

Bei Abigail sind das 3 Arbeitstage bzw. 24 Stunden.

![](attachments/Best%20Practice%20Arbeitszeiten%20Urlaub%2024.png)

Beide Urlaubsanträge wurden genehmigt.

## Anzeige Dashboard

Wenn Sie die [Einheit für Abwesenheitstyp festlegen](HR%20Holidays.md#Einheit%20für%20Abwesenheitstyp%20festlegen) erhalten Sie unterschiedliche Ergebnisse auf dem Dashboard der Benutzer.

**Anzeige in Stunden**

Für Mitchell wird angezeigt: Bezahlte Abwesenheit 64 Stunden verfügbar.

Das ist so korrekt.

Für Abigail wird angezeigt: Bezahlte Abwesenheit 96 Stunden verfügbar.

Das ist ebenfalls korrekt.

**Anzeige in Tagen**

Für Mitchell wird angezeigt: Bezahlte Abwesenheit 6 Tage verfügbar.

Das ist falsch, es sollten 8 Tage sein.

Für Abigail wird angezeigt: Bezahlte Abwesenheit 11 Tage verfügbar.

Das auch falsch, es sollten 12 Tage sein.

![](attachments/Best%20Practice%20Abwesenheit%20Berechnung.png)

Odoo rechnet die verbleibenden Tage falsch.

## Korrektur

Die Fehlberechnung lässt sich mit der Erweiterung [Resource Calendar Get Days](Resource%20Calendar%20Get%20Days.md) korrgieren. Die Erweiterung berechnet die Anzahl Tage einer Abwesenheit relativ zu den Arbeitsstunden des Unternehmens.

Zur Erläuterung ein Beispiel mit einem Arbeitspensum von 42 Stunden.

| Wochentag | Tageszeitraum | Von   | Bis   |
| --------- | ------------- | ----- | ----- |
| Montag    | Vormittag     | 07:30 | 11:45 |
| Montag    | Nachmittag    | 13:20 | 17:40 |
| ...       |               |       |       |
| Freitag   | Vormittag     | 07:30 | 11:45 |
| Freitag   | Nachmittag    | 13:10 | 16:10 |

Der Mitarbeitende gibt Urlaub von 07.04.2023 bis 10.04.2023 ein. Zwischen diesen Tagen liegt ein Wochenende. Für Montag und Freitag macht Odoo die folgenden Berchnungen:

07.04.2023 Freitag:

Vormittag: 11.75-7.5 = 4.25
Nachmittag: 16.166-13.166 = 3

10.04.2023 Montag:

Vormittag: 11.75-7.5 = 4.25
Nachmittag: 17.666-13.333 = 4.333

Die Summder der Sunden ist: **15.833**
Die Berechnung der Tage ist: 15.833/8.4 = **1.884**
