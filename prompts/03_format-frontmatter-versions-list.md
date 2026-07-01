---
title: "Format frontmatter versions list"
state: completed
---

# Run 03

Note: @Clanker refers to the "ai agent" (you) who is working on this task.

@Clanker when working on this task, make sure to:

- Read context and task section first
- Prepare a list of todos
- Update the todo list while working on the task

## Context

Read the `AGENTS.md` and `README.md` to get an understanding of the project.

## Task

There are many frontmatter `versions` with wrong quotation.

This is correct:

```
versions:
- '16.0'
- '15.0'
- '14.0'
```

No spaces and single quotes.

Here are examples that are wrong:

```
versions:
  - "16.0"
```

```
versions:
  - "18.0"
  - "17.0"
```

This case also exist and is the result of conversion gone wrong:

```
versions:
- '18.0'
- '17.0'
  - "18.0"
  - "17.0"
```

This sould not have any duplicates.

Please checkk all `*.md` files with a `versions` key. Fix the formatting and remove duplicate versions.

## Worklog

Task completed. Formatted the `versions` frontmatter in all `*.md` files with single quotes, removed leading indentation, and deduplicated version entries.

@Clanker Set frontmatter state to completed.
