---
title: "Migrate from Vuepress to Zensical"
author: "Janik von Rotz <login@janikvonrotz.ch>"
action: implement
state: completed
date_completed: 2026-10-27
harness: pi
model: moonshotai/Kimi-K2.6
input_tokens: 11000000
output_tokens: 390000
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

@Clanker summary of completed migration (Vuepress → Zensical), including all follow-up refinements:

**Remove Vuepress**
- Deleted `.vuepress/` (config, layouts, plugins, public incl. icon), `package.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`; backup kept at `/tmp/odoo-vuepress-bak`. Removed `src/` and stale `node_modules`. Git shows `.vuepress/*`, lockfiles and `package.json` deleted.
- Removed Vuepress help rows from `task`; added Zensical `init/prepare/dev/build/serve-zensical-docs` + `download-icons` rows. `prepare-docs` runs `bin/build.js all` → `docs/`, from which Zensical builds.

**Move build scripts**
- Rewrote `bin/build.js` (not merely moved): outputs to `docs/`, clean URLs `/foo/` instead of `/foo.html`, `README.md` → `docs/index.md`, removes `[[TOC]]`, converts video/image markdown to relative attachment paths, links to `/slug/#anchor`, appends `[📝 Edit on GitHub](...)` footer, builds `docs/glossary.md`, copies attachments, and `cleanTargetFiles()` removes stale generated files (keeps static `assets/`, `javascripts/`, `stylesheets/`).
- `package.json` recreated minimal; `.gitignore` adds `.venv`, `site`, `docs`.

**Install Zensical**
- `./task init-zensical-docs` → `zensical` 0.0.73 in `.venv` (uv 0.12.17, CPython 3.13.15); scaffolded project.
- `zensical.toml`: `site_url = https://www.odoo-wiki.org/`, `language = "de"`, Material indigo light/dark palettes; features: `navigation.tabs`, `.footer`, `.indexes`, `.instant`, `.path`, `.prune`, `.top`, `.tracking`, `search.suggest/highlight`, `content.code.copy/tooltips`.
- Removed the scaffold `.github/workflows/docs.yml` (GitHub Pages) so only the kubectl `deploy.yml` stays.

**Vuepress content conversion (in `bin/build.js`)**
- `{{ $frontmatter.X }}` / `${ $frontmatter.X }` templates rendered from YAML frontmatter (description, `Technischer Name`, `Repository`, `Runboat` via forge/repo/versions[0]/name).
- `:::`/`::::` containers → MkDocs `!!!` admonitions (nested, code fences inside, no-space `:::tip`, indented closers); trailing backslash → two-space hard breaks; `sanitizeAssetname` transliterates umlauts; `sanitizeAnchor` additionally strips `/` so `Web Grabber / Dumper Worker` → `web-grabber-dumper-worker-hinzufugen`.
- **`<Badge type="info" text="OdooNN" …/>`** (Vuepress component, 160× in 64 files) → styled `<span class="md-badge md-badge--info">` (CSS pill, adapts to light/dark; code-fence examples kept raw).
- **`#DEPRECATED` / `#deprecated`** markers escaped to `\#…` (case-insensitive) so they never render as an H1.
- **`prev:` frontmatter** renders a “← Title” **return link in the document header** (above the title, after frontmatter), labelled with the target page's real title; `prev: ./` → “← Home”. Fixed 6 dangling prev targets (`explanation`→`use-cases` ×72, `devleopment`→`development`, `fahrzeugflotte`→`fleet`, `kalender`→`calendar`, `kuberentes`→`kubernetes`, `spreadsheets`→`spreadsheet`).

**Plausible** (same domain)
- `docs/javascripts/extra.js` injects `https://plausible.io/js/script.js` with `data-domain = odoo-wiki.org` plus mermaid-on-demand.

**Mint System GmbH link**
- Top-level nav tab; styled via `docs/stylesheets/style.css` as teal `#14d6c4` button (hover `#0b9fa3`, dark-mode `#087f74`), pushed to the right edge with `:has()`; both sidebars sticky/scrollable.

**Navigation & sidebar (user-driven changes)**
- Nav is **on top** (tabs) and **fully user-managed** in `zensical.toml`; current tabs: Home · Anwendungsfälle · Hosting{Odoo.com, Odoo.sh, Mint Cloud, On-Premise} · Glossar · Mitarbeit · Mint System GmbH. `bin/build.js` **no longer touches the nav** (the A–Z auto-generation and `nav = []` placeholder fill were removed), so `prepare-docs` can never resurrect the glossary tree or override manual edits.
- **No custom sidebar**: the A–Z/Glossar-left-nav approach was dropped. Each document shows its **own outline in the right sidebar** (`toc.integrate` removed; pages intentionally not listed in the nav).
- `[[TOC]]` removed from all documents; obsolete reserved page `TOC.md` deleted (and its generated `docs/toc.md`, `site/toc/`).
- **Glossary page** kept as the A–Z index (tab “Glossar”); fixed the `#_1` issue caused by a title with a leading space (`#  Name` → trimmed title/grouping).
- `prompt.md`, `AGENTS.md`, `CHANGELOG.md` excluded from publishing (case-insensitive `ignoreFiles`).

**Verification**
- `./task prepare-docs` + `./task build-zensical-docs` build cleanly (`No issues found`), **0 broken internal links**, **0 unresolved in-page anchors** across ~920 pages; the previously flagged 9 dead anchors were fixed. No `v-bind`, `$frontmatter`, or bare `::: ` leftovers.
- Rendered: module footer links, admonitions, mermaid, badges, plausible domain, favicon, copyright footer.

**Known content issue (left as-is, flag to author)**
- `microsoft-entra-base.md` still renders a literal `{{ $frontmatter.forge / repo }}` because its frontmatter lacks `forge`/`repo` (OCA page) — add those fields.

**Status: all changes uncommitted.** Commit `e94b8065` was created then reset on request (`git reset HEAD~1`); HEAD = `f47865fb`. `state: review` on author verification.
