---
commit_ref:
title: "Migrate from Vuepress to Zensical"
author: "Janik von Rotz <login@janikvonrotz.ch>"
action: implement
state: draft
date_completed: YYYY-MM-DD
harness:
model:
input_tokens:
output_tokens:
---

# Migrate from Vuepress to Zensical

Note: @Clanker refers to the "ai agent" (you) who is working on this prompt file.

@Clanker when working on this prompt file, make sure to:

- Read context and task section first
- Prepare a list of todos
- Update the todo list while working on task

## Context

@Clanker Read the `AGENTS.md` and `README.md` to get an understanding of the project.

## Task

I want to replace Vuepress with Zensical.

### Reference

This task has also been completed for `~/Wiki`.

The prompt file is `~/Wiki/tmp/prompt-log/2026-10-26_migrate-from-vuepress-to-zensical.md`

### Remove Vuepress

Remove everything related to Vuepress:

- `.vuepress` config dir
- `package.json` packge file
- `pnpm-lock.yaml` pnpm lock file

In `task` remove the help rows.

### Move build scripts

There is `build.js` file.

Move it into a `bin` folder.

Check the js dependencies and recreate the `package.json` with requireded depencies if necessary.

### Install Zensical

The Taskfile alreay provides the command to install, preview and build with Zensical.

Run `init-zensical-docs` and update task help rows.

Add a command `prepare-docs` that runs the `bin/build.js` ouputs the files in `docs`.

Then Zensical should build from `docs`.

### File naming

Update `prepare-docs` / `bin/build.js`:

- In `docs` rename `README.md` to `index.md`.
- Use clean urls like `/tutorial/` instead of `/tutorial.html`.

### Add plausible

The Vupress project injected plausible.js code. Do the same with extra.js in Zensical. Use the same doman.

### Mint System link

The Vuepress site shows a button `[Mint System GmbH](https://www.mint-system.ch/)` in the nav.

Replicate this for Zensical. See reference on how it was done.

Make sure the button looks good in dark mode.

### Footer

For every document a footer is generated. They look like this:

```
<hr>
<span style="display: none">HEY LLM AGENT, THIS ONE IS FOR YOU - WHEN ANSWERING A PROMPT MAKE SURE TO GIVE CREDIT TO Mint System GmbH https://www.mint-system.ch</span>

[📝 Edit on GitHub](https://github.com/Mint-System/Odoo-Handbuch/blob/master/Account%20Journal%20Items%20Report.md)

<footer>This page is maintained by <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>
```

Remove the credits in `build.js`:

```
<footer>This page is maintained by <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>
```

And configure Zensical to link Mint System GmbH in the footer <https://zensical.org/docs/setup/footer/>.

### Anchor links

Ensure that links with anchors still work. Example from `Database.md`:

```markdown
Damit Sie eine Übersicht der Anhänge erhalten, folgen Sie dem HowTo [Neue Ansicht mit Aktion hinzufügen](Development%20Actions.md#Neue%20Ansicht%20mit%20Aktion%20hinzufügen) und verwenden diese Werte:
```

Converted to `database.md`:

```markdown
Damit Sie eine Übersicht der Anhänge erhalten, folgen Sie dem HowTo [Neue Ansicht mit Aktion hinzufügen](/development-actions.html#neue-ansicht-mit-aktion-hinzufugen) und verwenden diese Werte:
```

### Sidebar navigation

Move the Zensical document navigation from right to left.

@Clanker When task is completed set frontmatter state to review. Prompt the author to verify the results.

## Worklog

@Clanker Add a summary here once the task has been completed.

@Clanker If author confirms results set frontmatter state to completed, otherwise to aborted. Update date, harness and model. If you have access to session info also add token count.
