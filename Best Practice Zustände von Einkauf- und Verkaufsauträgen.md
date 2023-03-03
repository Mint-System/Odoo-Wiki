---
tags:
- Best-Practice
prev: ./best-practice
---
# Zustände von Einkauf- und Verkaufsaufträgen

Bestellungen, Verkaufsaufträge, Rahmenaufträge und Kaufverträge durchlaufen verschiedene Stufen. Diese Tabelle bietet eine Übersicht über diese Zustände.

| Bestellung                     | Verkaufsauftrag         | Rahmenaufträge       | Kaufverträge             |
| ------------------------------ | ----------------------- | -------------------- | ------------------------ |
| draft - Angebotsanfrage        | draft - Angebot         | draft - Entwurf      | draft - Entwurf          |
| sent - Anfrage verschickt      | sent - Angebot gesendet |                      |                          |
| to approve - zur Genehmigung   |                         |                      |                          |
| purchase - Beschaffungsauftrag | sale - Verkaufsauftrag  |                      | in_progress -  Bestätigt |
|                                |                         | open -  Offen        | open -  Gebotsauswahl    |
| done - Gesperrt                | done - Gesperrt         | done - Erledigt      | done - Abgeschlossen     |
| cancel - Abgebrochen           | cancel - Abgebrochen    |                      | cancel - Abgebrochen     |
|                                |                         | expired - Abgelaufen |                          |
