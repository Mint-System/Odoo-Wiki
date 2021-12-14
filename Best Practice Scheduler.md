---
tags:
- Best-Practice
---
[🔗 Best Practice](Best%20Practice.md)
# Best Practice: Scheduler

## Scheduler ausführen 

Der Scheduler ist die Rechenmaschine welche die Produktion und den Einkauf plant und priorisiert. Er tut dies automatisch basierend auf den Regeln die pro Produkt definiert sind. Standardmässig läuft der scheduler jede Nacht um 24:00 Uhr.

Der Scheduler prüft nur Beschaffungen die bestätigt, aber noch nicht begonnen wurden.

Diese vorbereiteten Beschaffungen werden je nach Konfiguration des betroffenen Produkts die Produktion, Aufgaben oder Einkäufe selbst starten.

Der Scheduler berücksichtigt beim Starten von Reservierungen und Beschaffungen die Priorität der Vorgänge. Dringende Anfragen werden zuerst gestartet.

::: tip
Falls nicht genügend Produkte auf Lager sind um alle Anfragen zu erfüllen, werden die dringendsten zuerst produziert.
:::