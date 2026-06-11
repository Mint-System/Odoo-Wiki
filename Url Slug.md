---
description: Mixin zur Generierung von Url-Slugs.
forge: github.com
kind: howto
name: url_slug
partner: Mint System
prev: ./development
repo: Mint-System/Odoo-Apps-Server-Tools
title: Url Slug
versions:
- '18.0'
- '16.0'
---


# Url Slug

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>


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
