---
title: Verkauf Berichte
description: Verkaufsdaten immer aktuell.
kind: howto
prev: ./sale
---

# Verkauf Berichte

![icons_odoo_sale](attachments/icons_odoo_sale.png)

{{ $frontmatter.description }}

## Auswertung

### Verkaufsaufträge in Pivot auswerten

Zeigen Sie die Pivot-Ansicht unter _Verkauf > Berichtswesen > Verkauf_ an. Angenommen Sie wollen die Verkaufsdaten nach diesen Kriterien filtern:

- Gelieferte Menge in kg
- Pro Woche (X-Achse)
- Pro Produkt und Branche (Y-Achse)

Wählen Sie ganz einfach die entsprechenden Felder:

![](attachments/Verkauf%20Berichte%20Verkaufszeilen.png)

### Auftragszeilen mit dynamischen Filter auswerten

Wenn Sie [Auftragszeilen anzeigen](Sale.md#Auftragszeilen%20anzeigen) können Sie in der Pivot-Ansicht einen [Filter mit dynamischen Datum erstellen](Development%20Views.md#Filter%20mit%20dynamischen%20Datum%20erstellen). Verwenden Sie diese Paramter zur Konfiguration des Filters für die Auftragszeilen:

- **Domain**:

```python
[
"&",
["x_commitment_date", ">=", (datetime.datetime.now() - datetime.timedelta(weeks=2)).strftime('%Y-%m-%d')],
["x_commitment_date", "<=", (datetime.datetime.now() + datetime.timedelta(weeks=2)).strftime('%Y-%m-%d')]
]
```
