---
title: Base Search Fuzzy
description: Aktivieren Trigram-Index auf Datenbank-Felder.
tags:
- HowTo
- OCA
prev: ./database
---
# Base Search Fuzzy
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `base_search_fuzzy`\
Repository: <https://github.com/OCA/server-tools/tree/16.0/base_search_fuzzy>

## Verwendung

Mit der Trigramm-Indexierung können Sie sog. *Fuzzy Search* ausführen. 

### Trigram-Indexierung für ausgewähltes Feld aktivieren

Navigieren Sie nach *Einstellungen > Technisch > Datenbankstruktur > Trigram Index* und erstellen Sie einen neuen Eintrag:

* **Feld**: Wählen Sie das Feld aus für welches ein Trigram-Index erstellt werden soll.
* **Index Name**: Wird automatisch vergeben.
* **Index Typ**: Wählen Sie den Index-Typ aus.

## Entwicklung

### Prüfen ob `pg_trgm`-Erweiterung installiert ist

Führen Sie den folgenden SQL-Befehl auf der Odoo-Datenbank aus:

```sql
SELECT * FROM pg_extension WHERE extname = 'pg_trgm';
```

Wenn die Erweiterung installier ist, erhalten Sie diesen Output:

```
  oid   | extname | extowner | extnamespace | extrelocatable | extversion | extconfig | extcondition
--------+---------+----------+--------------+----------------+------------+-----------+--------------
 861553 | pg_trgm |       10 |         2200 | t              | 1.4        |           |
(1 row)
```

### Trigram-Index für Kontaktnamen erstellen

Legen Sie gemäss [Trigram-Indexierung für ausgewähltes Feld aktivieren](#Trigram-Indexierung%20für%20ausgewähltes%20Feld%20aktivieren) einen Index mit diesen Werten an:

* **Feld**: `display_name (res.partner)`
* **Index Typ**: GIN

### Suchfilter anpassen

Damit eine *Fuzzy Search* funktioniert muss auf der Suchmaske der Suchfilter  angepasst werden. Statt den Operator `ilike`, gibt es neu den Operator `%`. Mit einer *Fuzzy Search* werden Suchergebnisse zuverlässiger gefiltert. Hier ein Beispiel mit einem Rechtschreibefehler:

![](attachments/Base%20Search%20Fuzzy.png)
