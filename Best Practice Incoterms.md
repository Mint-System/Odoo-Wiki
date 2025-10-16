---
title: Incoterms
description: Eine einfache und umfassende Odoo-Dokumentation.
kind: explain
prev: ./best-practice
---

# Incoterms

## Definition

Incoterms (Lieferbedingungen) definieren unter anderem wie Ware vom Lieferanten zum Kunden transferiert wird. [Wikipedia](https://https://de.wikipedia.org/wiki/Incoterms)\
Zum Beispiel bezeichnet die Angabe _EXW (AB WERK)_, dass der Verkäufer keine Pflichten im Zusammenhang mit dem Transport hat. Der Kunde organisiert das Abholen, übernimmt alle Kosten und trägt die Risiken.

## Verwendung

Die Deklaration des anwendbaren Incoterm ist eine Vertragsklausel und wird in den folgenden zwei Dokumenten zugeordnet:

- Angebot/Verkaufsauftrag (> Weitere Informationen > Lieferbedingung)
- Angebotsanfrage/Beschaffungsauftrag (> Weitere Informationen > Lieferbedingung)

::: tip
Falls eine Zuordnung mit einer Logik _Pro Lieferant/Kunde_ gewünscht ist, empfehlen wie die Installation der App [Sale Partner Incoterm](Sale%20Partner%20Incoterm.md).
:::

## Funktion einschalten

Die Verwendung von Incoterms wird über die Einstellungen in _Buchhaltung_ freigeschaltet.
Wählen Sie ihre Standard-Lieferbedingung hier:

- Einstellungen > Buchhaltung > Ausgangsrechnungen > Standard-Incoterm

Damit die Auswahl in den Dokumenten _Angebot/Verkaufsauftrag_ und _Angebotsanfrage/Beschaffungsauftrag_ sichtbar wird, muss die Option _Lieferbedingungen für Aufträgen und Rechnungen anzeigen_ in der folgenden Einstellung aktiviert werden:

- Einstellungen > Verkauf > Versand > Lieferbedingungen

::: tip
Die Auswahl _Standard-Incoterm_ (Einstellung in der App _Buchhaltung_) wird in den Dokumenten _Angebot/Verkaufsauftrag_ und _Angebotsanfrage/Beschaffungsauftrag_ nicht als Default-Wert eingetragen
:::

::: tip
Der Default-Wert für die _Lieferbedingung_ in den Dokumenten _Angebot/Verkaufsauftrag_ und _Angebotsanfrage/Beschaffungsauftrag_ kann auch über die Funktion _Standardwert setzen_ im Entwicklermodus eingestellt werden.
:::
