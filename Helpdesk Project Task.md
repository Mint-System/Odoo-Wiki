---
description: Projektaufgaben und Helpdesk-Tickets verlinken.
forge: github.com
kind: howto
name: helpdesk_project_task
partner: Mint System
prev: ./helpdesk
repo: Mint-System/Odoo-Apps-Project
title: Helpdesk Project Task
versions:
- '18.0'
- '16.0'
---


# Helpdesk Project Task

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Ticket mit Projektaufgabe verlinken

Wenn Sie ein Ticket in der Formularansicht anzeigen, finden Sie das Feld_Task_. Hier können Sie eine Aufgaben auswählen und verknüpften. Wenn die Aufgabe mit einer Auftragsposition verknüpft ist, wird diese auf dem Ticket hinterlegt.

::: tip
Wenn auf einem Ticket mit einer verküpften Aufabe mit Auftragsposition ein Zeiterfassungeintrag erstellt wird, dann ist diese Zeiterfassungseintrag mit dem Ticket und der Aufgabe verlinkt.
:::

### Projektaufgabe mit Ticket verlinken

Wenn Sie eine Projektaufgabe in der Formularansicht anzeigen, finden Sie einen Tab _Tickets_. In der Tabelle können Sie bestehende Tickets verlinken.
