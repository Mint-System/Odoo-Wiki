---
title: "Optimize memory footprint of vuepress build"
state: completed
date_completed: 2026-09-22
model: Kimi-K2.6
input_tokens: 
---

# Run 09

Note: @Clanker refers to the "ai agent" (you) who is working on this task.

@Clanker when working on this task, make sure to:

- Read context and task section first
- Prepare a list of todos
- Update the todo list while working on the task

## Context

@Clanker Read the `AGENTS.md` and `README.md` to get an understanding of the project.

## Task

I run `task build-vuepress` and will build a static site with `vuepress` and with `viteBundler`. This build step uses a lot of memory. I already tried to optimize memory consuption.

Create a test setup that finds the minium memory with `NODE_OPTIONS='--max-old-space-size=XXX'`. Minimum meaning before the build breaks.

Research ways to optimizie memory footprint of viteBuilder. 

## Worklog

### Memory Testing

Created `test-memory.sh` script to test builds with different `--max-old-space-size` values.

Test results on 913 pages:
- ❌ `--max-old-space-size=384` → OOM during Vite compilation
- ❌ `--max-old-space-size=448` → OOM after rendering pages
- ❌ `--max-old-space-size=456` → OOM after rendering pages
- ✅ `--max-old-space-size=460` → success (~29s)
- ✅ `--max-old-space-size=464` → success (~27s)
- ✅ `--max-old-space-size=512` → success (~25s)
- ✅ `--max-old-space-size=768` → success, current setting (~25s)

**Minimum memory required: ~460–464 MB.** The current 768 MB setting is safe.

### Vite Optimizations Applied

Added `build.reportCompressedSize: false` to `viteOptions` in `.vuepress/config.js`. This skips gzip size calculation during build, which is a known memory/CPU hotspot in Vite. It did not significantly shift the absolute minimum but removes unnecessary work.

Other researched options (not applied due to limited impact vs. effort):
- `build.sourcemap: false` — already off by default in production builds.
- Reducing Shiki languages — would reduce startup memory but may break highlighting.
- `slimsearchPlugin.indexContent: false` — would save the most memory but removes full-text search.

### Files Changed
- `.vuepress/config.js` — added `viteOptions.build.reportCompressedSize: false`
- `test-memory.sh` — new script for future memory regression testing