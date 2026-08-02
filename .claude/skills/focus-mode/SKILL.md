---
name: focus-mode
description: Orient into one World's Dev Log at the start of a View-Source session, keep a live draft entry as the session goes, and finalize it on wrap-up.
argument-hint: "[world-slug] — e.g. cosmic-strawberry, web-design-eras, mint-panther-corp, or 'main' for the main site"
disable-model-invocation: true
---

Scope this session to one World, or the main site, so I can focus on only that.

## 1. Pick the target

Use the World slug passed as an argument. If none was given, ask which World (or "main" for the main site) this session is about, and wait for the answer before continuing.

## 2. Orient

Read, in order:

1. `CONTEXT.md` — the domain glossary.
2. The target's own record: its entry in `src/data/worlds.ts` (philosophy, tagline, existing Projects), or for `main`, the root `src/pages/index.astro` hero copy.
3. `docs/coding-conventions.md` and `docs/voice-and-tone.md` — universal, read regardless of target.
4. Every ADR in `docs/adr/` (global), plus every ADR in `docs/adr/<world-slug>/` if that folder exists (see [ADR 0003](../../../docs/adr/0003-world-scoped-adrs-in-subfolders.md)). Skip the World-scoped subfolder read for `main`.
5. The most recent Log Entry for the target in `src/content/log/<world-slug>/` (or `src/content/log/main/`), sorted by `date`. Its `nextFocus` field is where we left off.

Summarize back in a few sentences before doing anything else: what this World/the site is, what the last session did, and what it flagged as next. Confirm that's still the actual focus for today before proceeding — the stated `nextFocus` is a suggestion from last time, not a fixed agenda.

## 3. Keep a live draft

As soon as the session's actual focus for today is clear, create the entry file immediately:

```
src/content/log/<world-slug>/YYYY-MM-DD-<title-slug>.md
```

with `draft: true` and a working `title`. Don't wait until the end to write it. See [docs/dev-log-conventions.md](../../../docs/dev-log-conventions.md) for the full frontmatter schema.

Update this file live through the session — not a transcript, but capture it the moment it happens:

- Key moments and turns in the work.
- Big questions raised, answered or not.
- Decisions made, under a `## Decisions` heading, with the why.
- Open threads that didn't get resolved.

If it's not written down, treat it as forgotten — don't rely on conversation memory to reconstruct any of this later.

## 4. Wrap up

Triggered by a clear "we're done here" cue — "wrap up" is the canonical phrase, but recognize variants ("let's wrap", "end session," "call it here") rather than requiring the exact string.

When triggered:

1. Finalize the draft entry: tidy the `title` and body into something worth reading, make sure `## Decisions` actually reflects what got decided, and write a real `nextFocus` for whoever picks this up next. Set `draft: false`.
2. Cross-reference: confirm anything the entry names (an ADR, a spec, a Project, a file) actually exists at the path/link given. Fix or drop anything that doesn't.
3. Give a short summary of the session in chat.
4. Stage everything touched this session, including the finalized entry, and make one commit. Stop there — pushing, opening a PR, and merging stay manual, done by the user afterward.
