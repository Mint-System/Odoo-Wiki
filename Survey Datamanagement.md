---
title: Umfragen Datenmanagement
description: Daten zu Umfragen exportieren und importieren.
kind: howto
section: true
prev: ./survey
---

# Umfragen Datenmanagement

![icons_odoo_website_sale_options](attachments/icons_odoo_website_sale_options.png)

{{ $frontmatter.description }}

## Export

### Umfrage-Antworten exportieren

Navigeren Sie nach _Umfragen > Fragen & Antworten > Detaillierte Antworten_. Entfernen Sie die bestehenden Filter und filtern Sie das Feld _Umfrage_. Markieren Sie alle Elemente und wählen Sie _Aktionen > Exportieren_.

Wählen Sie diese Felder aus:

- Externe ID (id)
- Umfrage (survey_id)
- Benutzereingabe/Kontakt (user_input_id/partner_id)
- Frage (question_id)
- Vorgeschlagene Antwort (suggested_answer_id)
- Übersprungen (skipped)

Die folgende Felder wählen Sie bei Fragen mit mehreren Antworten aus:

- Benutzereingabe/Antworten/Frage (user_input_id/user_input_line_ids/question_id)
- Benutzereingabe/Antworten/Vorgeschlagene Antwort (user_input_id/user_input_line_ids/suggested_answer_id)
- Benutzereingabe/Antworten/Übersprungen (user_input_id/user_input_line_ids/skipped)
