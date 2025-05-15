---
title: Datenbank Concurrency, Locks und Cursor
description: Eine einfache und umfassende Odoo-Dokumentation.
kind: explain
prev: ./best-practice
---

# Datenbank Concurrency, Locks und Cursor

## Postgres Locks

Bei der Ausführung von Datenbank-Queries sperrt Odoo bestimmte Tabellen und Datensätze.

Eine Übersicht der Postgres Locks:

![](attachments/Postgres%20Locks.png)

Die Ausführung von Cron-Jobs sperrt die gleichnamige Datenbank-Tabelle. Bei der Installation von Apps wird geprüft ob die Cron-Tabelle nicht gesperrt ist. 

## Concurrency

Odoo kann gleichzeitig mehrere Datensätze schreiben und Tabellen aktualisieren. Das führt oft zu Concurrency-Problemen. Wenn ein Datensatz oder eine Tabelle gesperrt ist, wiederholt Odoo den Vorgang und wirft nach eine bestimmten Anzahl Versuchen einen Concurrency-Fehler.

## Datenbank-Cursor

Beim Herstellen der Datenbank-Verbindung erstellt Odoo einen sogenannten Cursor.

![](attachments/Postgres%20Python%20Cursor.png)

Der Cursor führt die Datenbank-Transaktionen aus.

Bei Ausführung von automatisierten E2E-Tests ist es wichtig, dass immer der gleiche Cursor verwendet wird.