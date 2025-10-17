---
title: Url Slug
description: Mixin zur Generierung von Url-Slugs.
kind: howto
partner: Mint-System
prev: ./base
---

# Url Slug

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `url_slug`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Server-Tools/tree/16.0/url_slug>


## Entwicklung

### Url Slug Mixin verwenden

Verberben Sie das Mixin in ihrer Python-Klasse und das Feld `slug` basierend auf dem Feld `name` steht zur Verfügung.
  
```python
class Note(models.Model):
	_name = "note.note"
	_inherit = ['url.slug.mixin']
```

Sie können Sie Compute-Methode von `slug` überschreiben:

```python
@api.depends("title")
def _compute_slug(self):
	for record in self:
		record.slug = slugify(record.title)
```