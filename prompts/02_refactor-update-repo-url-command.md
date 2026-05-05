---
title: "Refactor update repo url command"
---

# Run 02

Note: @Agent refers to the AI agent (you) who is working on this task.

@Agent when working on this task, make sure to:

- Read context and task section first
- Prepare a list of todos
- Update the todo list while working on the task

## Context

Read the `AGENTS.md` and `README.md` to get an understanding of the project.

## Task

I want you to refactor the `update-repo-url` command in the task file.

Rename it to `update-module-versions`. Instead of updating the url it updates frontmatter tag `versions`.

For each file with `^versions:` in the frontmatter, the new commmand assembles the repo url and tests every version.

If the the version is avaialable the command adds it the versions list.

Use `awk` to read and write the frontmatter.

Test the command with one file before running for all files must be possible. Add an optional argument for a file path.

Here is an example file `Stock%20Picking%20MRP%20Production%20Done.md`:

```
---
description: Lieferung mit Fertigungsauftrag gleichzeitig abschliessen.
forge: github.com
kind: howto
name: stock_picking_mrp_production_done
partner: Mint System
prev: ./stock
repo: Mint-System/Odoo-Apps-Stock-Logistics-Workflow
title: Stock Picking MRP Production Done
versions:
- '14.0'
---


# Stock Picking MRP Production Done

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>
```