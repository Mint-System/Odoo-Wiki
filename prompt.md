---
title: "Move set and get frontmatter functions to taskfile"
author: "Janik von Rotz <login@janikvonrotz.ch>"
action: implement
state: completed
date_completed: 2026-10-29
harness: pi
model: moonshotai/Kimi-K2.6
input_tokens: 77235
output_tokens: 9206
---

# Move set and get frontmatter functions to taskfile

Note: @Clanker refers to the "ai agent" (you) who is working on this prompt file.

@Clanker when working on this prompt file, make sure to:

- Read the `AGENTS.md` and `README.md` to get an understanding of the project
- Read entire task section and prepare a list of todos
- Update the todo list while working on task

## Task

The task file has to commmands:

- get-frontmatter-field
- set-frontmatter-field

Move this functions to `~/taskfile.build/bin` and create a new help section in `~/taskfile.build/docs/library.md` called "Markdown".

@Clanker When task is completed set frontmatter state to review. Prompt the author to verify the results.

## Worklog

@Clanker Add a summary here once the task has been completed.

- Moved `get-frontmatter-field` and `set-frontmatter-field` from `./task` to `~/taskfile.build/bin/` as standalone library scripts.
- Added alias functions `gff` and `sff` to each script.
- Added a new "Markdown" section to `~/taskfile.build/docs/library.md` documenting both commands.
- Removed the embedded functions and their help rows from `./task`.
- Verified `./task get-frontmatter-field` and `./task set-frontmatter-field` still work by sourcing the library scripts.

@Clanker If author confirms results set frontmatter state to completed, otherwise to aborted. Update date, harness and model. If you have access to session info also add token count.
