---
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- Best-Practice
prev: ./best-practice
---
# Incoterms

## Definition

Incoterms (Lieferbedingungen) definieren unter anderem wie Ware vom Lieferanten zum Kunden transferiert wird. [Wikipedia](https://https://de.wikipedia.org/wiki/Incoterms)\
Zum Beispiel bezeichnet die Angabe *EXW (AB WERK)*, dass der Verkäufer keine Pflichten im Zusammenhang mit dem Transport hat. Der Kunde organisiert das Abholen, übernimmt alle Kosten und trägt die Risiken.

## Verwendung

Die Deklaration des anwendbaren Incoterm ist eine Vertragsklausel und wird in den folgenden zwei Dokumenten zugeordnet:
- Angebot/Verkaufsauftrag (> Weitere Informationen > Lieferbedingung)
- Angebotsanfrage/Beschaffungsauftrag (> Weitere Informationen > Lieferbedingung)

::: tip
Falls eine Zuordnung mit einer Logik *Pro Lieferant/Kunde* gewünscht ist, empfehlen wie die Installation der App [Sale Partner Incoterm](Sale%20Partner%20Incoterm.md).
:::

## Funktion einschalten

Die Verwendung von Incoterms wird über die Einstellungen in *Finanzen* freigeschaltet.
Wählen Sie ihre Standard-Lieferbedingung hier:
- Einstellungen > Finanzen > Ausgangsrechnungen > Standard-Incoterm

Damit die Auswahl in den Dokumenten *Angebot/Verkaufsauftrag* und *Angebotsanfrage/Beschaffungsauftrag* sichtbar wird, muss die Option *Lieferbedingungen für Aufträgen und Rechnungen anzeigen* in der folgenden Einstellung aktiviert werden:
- Einstellungen > Verkauf > Versand > Lieferbedingungen

::: tip
Die Auswahl *Standard-Incoterm* (Einstellung in der App *Finance*) wird in den Dokumenten *Angebot/Verkaufsauftrag* und *Angebotsanfrage/Beschaffungsauftrag* nicht als Default-Wert eingetragen
:::

::: tip
Der Default-Wert für die *Lieferbedingung* in den Dokumenten *Angebot/Verkaufsauftrag* und *Angebotsanfrage/Beschaffungsauftrag* kann auch über die Funktion *Standardwert setzen* im Entwicklermodus eingestellt werden.
:::