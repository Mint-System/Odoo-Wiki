---
title: Website Blog RSS Feed
description: RSS Feed für Blog anbieten.
kind: howto
tags:
  - Mint-System
prev: ./website
forge: github.com
repo: Mint-System/Odoo-Apps-Website
versions:
- '19.0'
name: website_blog_rss_feed
---

# Website Blog RSS Feed

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Mit dieser Erweiterung wird unter dem Pfad `/blog/feed` anstatt des Atom-  ein RSS-Feed ausgegeben.