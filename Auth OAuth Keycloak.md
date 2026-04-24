---
description: Ermöglich Keycloak Integration mit Odoo OAuth.
forge: github.com
kind: howto
name: auth_oauth_keycloak
partner: Mint System
prev: ./settings
repo: Mint-System/Odoo-Apps-Server-Tools
title: Auth OAuth Keycloak
versions:
- '15.0'
---


# Auth OAuth Keycloak

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

::: warning
Diese App ist veraltet. Es wird empfohlen die App [Auth OIDC](Auth%20OIDC.md) zu verwenden.
#DEPRECATED
:::

## Verwendung

### Einloggen mit Keycloak

Mit dieser Erweiterung können Sie sich mit einem Keycloak-Account bei Odoo anmelden.
