---
tags:
- Best-Practice
prev: ./best-practice
---

# Best Practice: Kommunikation mit Odoo

Odoo ist auch ein Kommunikationsystem. Mit Odoo können Sie den internen und externen Austausch im Kontext von Apps und Objekten verwalten.

Zum besseren Verständnis wie Odoo die Kommunikations-Tools abgebildet hat, gibt es die folgende Grafiken.

## Odoo Mail Workflow

Typischerweise läuft die Odoo Mail-Kommunikation in diesem Schema ab:

![Odoo Mail Workflow](assets/Odoo%20Mail%20Workflow.svg)

1. Odoo BenutzerIn zeigt ein Geschäftsobjekt an (Angebot, Rechnung, Notiz, etc.)
2. Die BentuzerIn klicke im Chatter auf *Nachricht* und startet eine neue Konversation
3. Die Nachricht wird erstellt und versendet (BenutzerIn wird abonniert)
4. Odoo versendet die E-Mail über den Mail-Provider (Ausgehender E-Mail-Server)
5. EmpfängerIn erhält die E-Mail und erstellt eine Antwort
6. Odoo prüft das Postfach und findet eine Antwort (Eingehender E-Mail-Server)
7. Odoo prüft die Antwort auf Aliase und führt die eine entsprechende Aktion auf
8. Odoo prüft die Antwort auf verknüpftung mit einer besteheeden Konversation
9. Odoo fügt die Antwort der Konversation hinzu (EmpfängerIn wird abonniert)
10. Die Abonnenten erhalten die Antwort als Benachrichtigung über den entsprechenden Kanal