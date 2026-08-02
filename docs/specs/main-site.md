# Spec: Main site (meta layer)

Covers the root home page and the shared World page template — see [`CONTEXT.md`](../../CONTEXT.md) for the Meta layer / World / Project / Escape Hatch vocabulary and [ADR 0001](../adr/0001-project-isolation-with-a-single-escape-hatch.md) for why this layer is styled consistently while Projects are not.

## Goal

Give the experiment a front door: explain what View-Source is, then get a visitor from the root into a World, and from a World into its Projects — all through one small, consistent design system that is never reused inside a Project.

## Visual reference

Loosely inspired by a prior project's hub layout: a dark identity rail beside a light content panel, topped by a slim nav bar, closed out by a two-tone footer band of linked cards. This is a mood/layout cue, not a spec to replicate — take the general rhythm (identity rail + content panel + footer band) and make it our own, including palette. Nothing about that reference's underlying architecture (content collections, command palette, component library) is relevant here; View-Source only needs two meta-layer templates, not a CMS.

## Routes

- `/` — root home
- `/[world]/` — one World page per world (`/cosmic-strawberry/`, `/web-design-eras/`, `/mint-panther-corp/`, and more over time)

Both routes share one layout shell and one stylesheet (reset + tokens + this layer's component styles). Nothing from this stylesheet is imported by any Project page.

## Root home (`/`)

- States what View-Source is: an experiment in rediscovering non-average visual design with agents, framed as isolated fictional-client Worlds.
- Lists every World as a linked card/tile — title, one-line description of its fictional premise, project count. New worlds append here as they're built; nothing here should need to change shape as the list grows.
- No Escape Hatch here — it's the top of the hierarchy, there's nowhere else to "escape" to.

## World page (`/[world]/`)

- Identity rail: world name/mark, short fictional framing (who this "client" is), consistent nav to the *other* Worlds (this is the "main navigation between worlds" requirement) plus back to root home.
- Content panel: the world's design philosophy — what this experiment is testing for that world, and its fictional premise/purpose in a bit more depth than the root card gave.
- Footer band: gallery of that world's Projects as linked cards (name, one-line pitch, link into the project's home page). This is how a visitor actually reaches isolated Project territory.
- No Escape Hatch here either — the Escape Hatch is a Project-only device (see [CONTEXT.md](../../CONTEXT.md)); World-to-World and World-to-root movement is handled by this page's own nav, not the hatch.

## Out of scope

- Any shared design system, layout, or asset used *inside* a Project — forbidden by ADR 0001.
- Search, tagging, filtering, or any other cross-world discovery mechanism beyond the root's world list and each world's project gallery.
- CMS/content-collection tooling — world and project metadata can live as plain local data (frontmatter or a small config object) rather than a generalized content pipeline; this site is small enough not to need one yet.

## Open assumptions to confirm before/while building

- Exact color palette for the meta layer (reference said "tweak the colors" — nothing chosen yet).
- Whether world/project listings are hand-authored data or derived from the filesystem — either is fine, pick whichever is less ceremony when it's time to build.
