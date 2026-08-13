---
title: "Format tags with badges"
state: completed
model: infomaniak/moonshotai/Kimi-K2.6
input_tokens: 
---

# Run 06

Note: @Clanker refers to the "ai agent" (you) who is working on this task.

@Clanker when working on this task, make sure to:

- Read context and task section first
- Prepare a list of todos
- Update the todo list while working on the task

## Context

@Clanker Read the `AGENTS.md` and `README.md` to get an understanding of the project.

## Task

In markdown files I am using tax like this:

```markdown
#Odoo15:
Gilt bis #Odoo16.
Ab #Odoo16 können Sie 
```

I want to replace all all instances of `#OdooNN` with a badge:

```html
<Badge type="info" text="Odoo15" vertical="middle" />
<Badge type="info" text="Odoo16" vertical="middle" />
```

Can you replace all Odoo version tags with badge?

Here is a list of all tags:

- #Odoo13: Tag für Odoo Version 13.
- #Odoo14: Tag für Odoo Version 14.
- #Odoo15: Tag für Odoo Version 15.
- #Odoo16: Tag für Odoo Version 16.
- #Odoo17: Tag für Odoo Version 17.
- #Odoo18: Tag für Odoo Version 18.
- #Odoo19: Tag für Odoo Version 19.

Update the `Contribution.md` file with explainer for the badges.

## Worklog

All `#OdooNN` tags in markdown files were replaced with Vuepress badges (`<Badge type="info" text="OdooNN" vertical="middle" />`). `Contribution.md` was updated with a Badges section explaining their use.
