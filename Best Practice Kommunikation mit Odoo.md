---
title: Kommunikation mit Odoo
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- Best-Practice
prev: ./best-practice
---

# Kommunikation mit Odoo

Odoo ist auch ein Kommunikationssystem. Mit Odoo können Sie den internen und externen Austausch im Kontext von Apps und Objekten verwalten.

Zum besseren Verständnis zeigt die folgende Grafik wie Odoo die Kommunikations-Tools abgebildet hat:

## Odoo Mail Workflow

Typischerweise läuft die Odoo Mail-Kommunikation in diesem Schema ab:

![Odoo Mail Workflow](assets/Odoo%20Mail%20Workflow.svg)

1. Odoo BenutzerIn zeigt ein Geschäftsobjekt an (Angebot, Rechnung, Notiz, etc.)
2. Die BenutzerIn klickt im Chatter auf *Nachricht* und startet eine neue Konversation
3. Die Nachricht wird erstellt und versendet (BenutzerIn wird abonniert)
4. Odoo versendet die E-Mail über den Mail-Provider (Ausgehender E-Mail-Server)
5. Die EmpfängerIn erhält die E-Mail und erstellt eine Antwort
6. Odoo prüft das Postfach und findet eine Antwort (Eingehender E-Mail-Server)
7. Odoo prüft die Antwort auf Aliase und führt eine entsprechende Aktion aus
8. Odoo prüft die Antwort auf Verknüpfungen mit einer bestehenden Konversation
9. Odoo fügt die Antwort der Konversation hinzu (EmpfängerIn wird abonniert)
10. Die Abonnenten erhalten die Antwort als Benachrichtigung über den entsprechenden Kanal
