---
description: Bedingungen in QWeb-Template definieren.
forge: github.com
kind: howto
name: web_action_conditionable
prev: ./web
repo: OCA/web
tags:
- OCA
title: Web Action Conditionable
versions:
- '16.0'
---


# Web Action Conditionable

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>
