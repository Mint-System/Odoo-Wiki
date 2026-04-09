---
title: Build repository link from frontmatter
---

# Run 01

Note: @Agent refers to the AI agent (you) who is working on this task.

@Agent When working on this task, make sure to:

- Read context and task section first
- Prepare a list of todos in the worklog section
- Update the todo list while working on the task
- Once the todo list is complete add a summary

## Context

Read the `AGENTS.md` and `README.md` to get understanding of the project.

## Task

Most entries have have a `Repository: <link>` in the header. I would like to assemble this link from frontmatter data.

Before:

```
---
title: Base VAT Optional VIES
description: Resultat der VIES-Prüfung speichern.
kind: howto
partner: OCA
prev: ./database
---

# Base VAT Optional VIES

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `base_vat_optional_vies`\
Repository: <https://github.com/OCA/account-financial-tools/tree/16.0/base_vat_optional_vies>
```

After:

```
---
title: Base VAT Optional VIES
description: Resultat der VIES-Prüfung speichern.
kind: howto
partner: OCA
prev: ./database
forge: github.com
repo: OCA/account-financial-tools
versions:
  - "16.0"
name: base_vat_optional_vies
---

# Base VAT Optional VIES

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>
```

The link is to be splitted into the parts forge, repo, version and name. The `{{ $frontmatter }}` replacement is a feature of vuepress. The version is becoming a list. The first entry is the latest. Every version entry needs to be quoted, otherwise the `.0` is striped. 

Create a Python script that makes this conversion for every entry with a repository link that starts with `^Repository: https://github.com`.

Create the python script in the `tmp` folder of this project.

## Worklog

@Agent Add the todo list here. Make sure to update this section as you work on the task, marking tasks as completed when finished.

## Summary

@Agent Add summary once todo list is complete. Include a brief overview of what was accomplished and any important notes about the implementation.
