---
title: Website Blog Wordpress Url
description: Blog-Post Urls im Stil von Wordpress generieren.
kind: howto
tags:
  - Mint-System
prev: ./website
forge: github.com
repo: Mint-System/Odoo-Apps-Website
versions:
- '18.0'
name: website_blog_wordpress_url
---

# Website Blog Wordpress Url

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Standardmässig verwendet Odoo für Blog-Beiträge die Url-Struktur `/blog/{blog.slug}-{blog.id}/{post.slug}-{post.id}`. In Wordpress gibt es unter anderem diese Struktur `/blog/YYYY/MM/slug/`. Mit dieser Erweiterung wird die _month and name_ Url-Struktur für Odoo Blog-Beiträge aktiv. 