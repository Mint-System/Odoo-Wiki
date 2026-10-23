---
title: "Fix wrong tag attribute"
author: "Janik von Rotz <login@janikvonrotz.ch>"
action: implement
state: draft
date_completed: YYYY-MM-DD
harness:
model:
input_tokens:
output_tokens:
---

# Fix wrong tag attribute

Note: @Clanker refers to the "ai agent" (you) who is working on this prompt file.

@Clanker when working on this prompt file, make sure to:

- Read context and task section first
- Prepare a list of todos
- Update the todo list while working on task

## Context

@Clanker Read the `AGENTS.md` and `README.md` to get an understanding of the project.

## Task

There is a mistake in `templates/Entry.md` instead of `tags` is should be `partner`. In result many files have the wrong frontmatter.

Example: Timesheet Attendance Report Billable

```
tags:
  - Mint-System
```

Shhould be:

```
partner: Mint System 
```

Fix the template and all files that still use `tags`.

@Clanker When task is completed set frontmatter state to review. Prompt the author to verify the results.

## Worklog

@Clanker Add a summary here once the task has been completed.

@Clanker If author confirms results set frontmatter state to completed, otherwise to aborted. Update date, harness and model. If you have access to session info also add token count.
