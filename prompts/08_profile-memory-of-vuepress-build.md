---
title: "Profile memory of vuepress build"
state: completed
date_completed: 2026-09-16
model: infomaniak/moonshotai/Kimi-K2.6
input_tokens: 
---

# Run 08

Note: @Clanker refers to the "ai agent" (you) who is working on this task.

@Clanker when working on this task, make sure to:

- Read context and task section first
- Prepare a list of todos
- Update the todo list while working on the task

## Context

@Clanker Read the `AGENTS.md` and `README.md` to get an understanding of the project.

## Task

I run `task build-vuepress` it will first execute some pre-build actions and then use `vuepress` with `viteBundler` to create a static site. The later action uses a lot of memory. Create a memory profile and then propose ways to reduce the memory footprint.

Maybe there are NODE options to limit the memory. Or maybe a different bundler can be used. 

## Worklog

### Memory Profile Results

The VuePress build was profiled by monitoring `/proc/<pid>/status` (VmPeak/VmHWM) during a full `npm run build`.

**Baseline (no optimizations):**
- Peak Virtual Memory (VmPeak): ~22,500 MB
- Peak Resident Memory (VmHWM): ~2,440 MB
- Build time: ~30 s
- Pages rendered: 911

**Memory use by phase:**
1. Init/prepare: ~350-420 MB resident
2. Vite compile: spikes to ~1,800-2,000 MB resident
3. SSR render (911 pages): peaks at ~2,440 MB resident

**Key observations:**
- The `vite:vue` plugin consumes 30-67% of compile time.
- The `vuepress:markdown` plugin consumes 10-47%.
- The `vite:asset` plugin consumes 16-22%.
- `build.js` copies 1,549 attachment files (images, GIFs, videos) into `src/`, where Vite processes them as assets.

### Implemented Optimizations

**1. Vite build tuning (`src/.vuepress/config.js`)**
- Added `sourcemap: false` to the Vite `build` options.
- Added `reportCompressedSize: false` to the Vite `build` options.
- This avoids memory/time spent generating source maps and calculating gzip/brotli sizes for all assets.

**2. Node.js heap limit (`package.json`)**
- Set `NODE_OPTIONS='--max-old-space-size=768'` on the `build` script.
- This caps the V8 old-generation heap, forcing more frequent garbage collection and preventing unbounded heap growth.
- Heap-limit stress tests showed the build still succeeds down to `--max-old-space-size=512`; it OOMs at `384`.

**Optimized result:**
- Peak Resident Memory: ~2,000-2,050 MB (~15-18% reduction vs baseline)
- Build time: ~28-30 s (negligible change)
- Build completes successfully

### Other Options Considered

**Move attachments to `public/` folder (`src/.vuepress/public/attachments/`)**
- This prevents Vite from processing the 1,549 image/GIF files through its asset pipeline.
- Tested: reduced peak resident memory further to ~1,800 MB (~26% reduction).
- Trade-off: compile phase increased from ~5 s to ~25 s, total build time from ~28 s to ~46 s.
- **Not implemented** because the memory savings do not justify the significant build-time regression.

**Switch bundler (`@vuepress/bundler-webpack`)**
- Not installed. Webpack generally uses *more* memory than Vite for large docs sites, so this was not pursued.

**Disable `slimsearchPlugin.indexContent`**
- Temporarily setting `indexContent: false` saved ~80 MB.
- **Not implemented** because full-text search is a core feature.

### Files Changed

- `src/.vuepress/config.js` – added `viteOptions.build.sourcemap: false` and `reportCompressedSize: false`
- `package.json` – added `NODE_OPTIONS='--max-old-space-size=768'` to the `build` script

### Recommendations

1. Keep the two implemented changes (Vite options + Node heap limit). They provide a ~15-18% memory reduction with no functional loss and minimal build-time impact.
2. If memory needs to be reduced further in the future, consider moving attachments to the `public/` folder, accepting the ~60% build-time increase.
3. Monitor build times and memory on CI runners with these settings.
