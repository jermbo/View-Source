---
title: "Standing up the site: from empty repo to a working meta layer"
date: 2026-08-02T11:28:36
draft: false
nextFocus: "Design and build the Dev Log feature: a per-World session log, plus a focus-mode skill for session orientation and wrap-up."
---

Today started from nothing: an empty repo and an idea — a hub site into a growing set of standalone design experiments, each one pushed toward a distinct, non-average aesthetic instead of the generic middle-of-the-road output agents tend to converge on. The goal for the day was to get from that idea to a working front door for the whole experiment.

We began with the boring but necessary part: bootstrapped Astro, wired up TypeScript, dropped in a placeholder home page and favicon. Right behind that came the agent tooling itself — a library of reusable skills (`ask-matt`, `code-review`, `diagnosing-bugs`, `codebase-design`, `grilling`, `domain-modeling`, and others) under `.agents/skills/`, and the dev server set to open automatically, so every session after this one would start faster.

With the scaffolding in place, the real design work started: writing down the domain model. `CONTEXT.md` got its first pass at the vocabulary that would end up governing everything else — World, Project, Page, UI Kit, Escape Hatch. Alongside it came the first real architectural call of the project, recorded as ADR 0001: every Project is visually isolated from every other Project and from the meta layer, no shared CSS or components, with exactly one deliberate exception, the Escape Hatch, a consistent, tool-like widget so a visitor dropped into an isolated Project still has a way back out. That single decision shaped everything that followed — it's the reason the meta layer (root home + World pages) is allowed to share a design system while Projects never are.

From there we specced the main site itself: a dark identity rail beside a light content panel, a slim nav bar, a footer band of linked cards — one small, consistent shell for the root home and every World page, never reused inside a Project. We built it out: `MetaLayout`, the hero components (`HeroSplit`, `HeroPanel`, `HeroRail`), the gallery components (`GalleryBand`, `GalleryCard`, `GalleryEmpty`), and `worlds.ts` seeding the first three Worlds — Cosmic Strawberry, Web Design Eras, Mint Panther Corp — each with an empty project list, since none of them have a built Project yet. `CLAUDE.md` went in too, pointing any agent that picks this up at `CONTEXT.md` and the ADRs first.

The rest of the day was refinement: richer gallery states (`GalleryCardPlaceholder`, `GalleryFeature`) for when a World has no Projects yet, `docs/coding-conventions.md` and `docs/voice-and-tone.md` written down so code style and visitor-facing copy have a standing reference instead of living in one person's head, and finally a pair of tool-like components — `Barcode` and `WorldDial` — that lean into the "this reads as tooling, not part of any Project's design" instinct the Escape Hatch already established.

By the end of the day the meta layer was real: a root home, a World page template, three seeded Worlds, and zero built Projects yet. What's missing is a way to remember any of this happened once the conversation that built it is gone — which is exactly what came next.

## Decisions

- Astro as the framework for the whole site.
- Projects share no CSS, layout, or components with each other or the meta layer; the Escape Hatch is the one shared, deliberately non-diegetic exception.
- Root home and World pages share one layout shell and one stylesheet, never imported by any Project.
- Worlds can exist with an empty project list; the gallery renders an explicit empty/placeholder state rather than hiding the World.
