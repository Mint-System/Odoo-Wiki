---
description: Odoo direkt mit der Bank verbinden.
extensions: true
forge: github.com
kind: howto
name: ''
partner: Mint System
prev: ./
repo: Noviat/account_ebics
title: EBICS
versions:
- '16.0'
---


# EBICS

![](attachments/icons_odoo_ebics.png)

{{ $frontmatter.description }}

Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Erweiterungen

| Erweiterung                                                             | Beschreibung                                            |
| ----------------------------------------------------------------------- | ------------------------------------------------------- |
| [EBICS Files batch export](EBICS%20Files%20batch%20export.md)           | EBICS-Dateien automatisch hochladen.                    |
| [EBICS Files batch import](EBICS%20Files%20batch%20import.md)           | EBICS-Dateien automatisch herunterladen.                |
| [EBICS banking Odoo Enterprise](EBICS%20banking%20Odoo%20Enterprise.md) | EBICS-Apps mit Odoo Enterprise Buchhaltung integrieren. |
| [EBICS banking protocol](EBICS%20banking%20protocol.md)                 | Connect Odoo with bank account through EBICS.           |

## Beschreibung

Der [Electronic Banking Internet Communication Standard (EBICS)](https://www.ebics.org/) wird von allen Banken unterstützt. Die hier aufgeführten Module erlauben Odoo mit einer Bank Daten über die EBICS-Schnittstelle auszutauschen. So können beispielsweise Bank-Transaktionen im Camt.053-Format heruntergeladen und verarbeitet werden.