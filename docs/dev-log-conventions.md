# Dev Log conventions

How Dev Logs (see `CONTEXT.md`) are stored and written. Check this before reading or writing a Log Entry by hand — but in practice, the [`focus-mode`](../.claude/skills/focus-mode/SKILL.md) skill should be doing the writing.

## Storage

One flat Markdown file per Log Entry, in a folder per World:

```
src/content/log/<world-slug>/YYYY-MM-DD-<title-slug>.md
src/content/log/main/YYYY-MM-DD-<title-slug>.md   ← the main site's own log
```

`date` in frontmatter is the sort source of truth, not the filename — same-day entries sort by their `date` timestamp, not alphabetically by slug.

If a specific entry has screenshots, they live in a sibling folder with the exact same name, created only for that entry:

```
src/content/log/cosmic-strawberry/2026-08-02-hero-rework.md
src/content/log/cosmic-strawberry/2026-08-02-hero-rework/screenshot-1.png
```

Most entries won't have one. Don't create the folder pre-emptively.

## Frontmatter

| Field | Required | Notes |
|---|---|---|
| `date` | yes | ISO datetime; sort source of truth |
| `title` | yes | short headline for the session |
| `draft` | yes | `true` while the session is in progress, `false` once wrapped up |
| `project` | no | slug of the Project this session concerned, if any — many entries are World-level |
| `screenshots` | no | list of `{ src, caption }`, only when the sibling asset folder exists |
| `nextFocus` | no, but expected on the most recent entry | plain operational note for the next session — exempt from voice-and-tone, see below |

The body is the narrative: what happened, why, what it cost and what it bought. A `## Decisions` heading at the end lists the concrete calls made, when there were any worth naming.

## Voice & tone

Split treatment, per ADR 0002: `title` and the body (summary, decisions) follow `docs/voice-and-tone.md`, same as any other visitor-facing copy. `nextFocus` is exempt — it reads as a plain internal note, like an ADR, because its job is unambiguous handoff to the next agent, not a good read for a visitor.

## Cadence and lifecycle

Every session gets an entry — bias toward logging, clean up low-value ones later rather than gatekeeping upfront. `focus-mode` creates the entry as `draft: true` at the start of a session and updates it live as the session goes (key moments, decisions, open threads — not a transcript). At wrap-up, it finalizes the entry (`draft: false`, `nextFocus` filled in) rather than reconstructing it from memory after the fact.

## ADR scope

`docs/adr/` holds global decisions. World-specific ones live in `docs/adr/<world-slug>/` — see [ADR 0003](./adr/0003-world-scoped-adrs-in-subfolders.md). `focus-mode` reads the global set plus whichever World-scoped subfolder matches the session's focus.
