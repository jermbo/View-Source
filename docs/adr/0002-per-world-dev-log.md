---
status: accepted
---

# Per-World Dev Log, not per-Project or global

Each World gets exactly one Dev Log, narrating its work sessions over time; the root home page gets its own as a special case standing in for the site itself. A Log Entry optionally names the Project it concerned, but isn't required to — some sessions are World-level (a philosophy rewrite, a new Project added) with nothing single to attach to.

A Dev Log is part of the meta layer's shared design, the same way the Escape Hatch is in [ADR 0001](./0001-project-isolation-with-a-single-escape-hatch.md): it's operational information about the work, not part of any Project's fiction, so it shouldn't be forced through a Project's isolated visual language. This also means a brand-new Project has somewhere to log its earliest sessions before it has any visual language of its own.

The root home page's log is a special case in code and routing, not a fake World added to `worlds.ts`. Per `CONTEXT.md`, a World contains Projects; the root sits above Worlds and contains no Projects of its own, so folding it into the World list would corrupt the domain model for the sake of code reuse.

## Considered options

- **Per-Project Dev Log** (one log per Project, main site included as its own log). Rejected: a Project doesn't have a stable identity outside of its own isolated build, and every new Project would need its own log page built and designed before it could log anything — the log would inherit the same isolation the Escape Hatch exists to work around.
- **Global Dev Log** (one site-wide log, filterable). Rejected: an agent picking up work on one World shouldn't have to filter out every other World's entries just to find the last thing that happened here.
- **Main site as a zeroth World in `worlds.ts`**, reusing World log machinery with no special-casing. Rejected in favor of a special case in code, to keep the domain model (World contains Projects) accurate rather than convenient.
