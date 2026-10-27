---
commit_ref: 49acf9c7aa0caf84ae30256f6d71f1df00a8b805
title: "Fix wrong tag attribute"
author: "Janik von Rotz <login@janikvonrotz.ch>"
action: implement
state: completed
date_completed: 2025-08-21
harness: pi
model: moonshotai/Kimi-K2.6
input_tokens: ~
output_tokens: ~
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

- Read project context files (AGENTS.md not found, README.md understood)
- Fixed `templates/Entry.md`: replaced `tags:\n  - {{VALUE:org_name}}` with `partner: {{VALUE:org_name}}`
- Converted 79 files with organization tags (`tags: - Mint-System`, `tags: - OCA`, `tags: - Thirdparty`) to `partner: ...`
- Removed empty `tags:` lines from 76 additional files that had no tag values
- Verified only legitimate `tags` remain in `README.md` and `src/readme.md`
- Verified 1,248 files now correctly use `partner: Mint System`
- Verified no files contain `partner: Mint-System` (with hyphen)

@Clanker If author confirms results set frontmatter state to completed, otherwise to aborted. Update date, harness and model. If you have access to session info also add token count.
