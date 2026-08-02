# Spec: Web Design Eras (world)

Covers the Web Design Eras World page and its six era Projects. First world to be built — see [CONTEXT.md](../../CONTEXT.md) for World/Project/Page/UI Kit/Escape Hatch vocabulary and [ADR 0001](../adr/0001-project-isolation-with-a-single-escape-hatch.md) for the isolation rule each project must follow.

## Premise

One fictional company, played straight across six four-year design eras (2000–2026) as its site would actually have looked at each point — fonts, chrome, copywriting tics, and all. Source material: [`docs/inspiration/web-design-eras/web-design-eras.html`](../inspiration/web-design-eras/web-design-eras.html). The company is **Nimbus** — its name and market position drift with each era (Nimbus Systems, Inc. → nimbus. → Nimbus → NIMBUS → Nimbus → Nimbus Platform), which is period-accurate rebrand behavior, not an inconsistency to fix.

No curation step here (unlike Cosmic Strawberry / Mint Panther): all six eras become projects.

## Routes

- `/web-design-eras/` — World page (uses the shared meta-layer template from [main-site spec](./main-site.md))
- `/web-design-eras/log/` — this World's Dev Log, per [ADR 0002](../adr/0002-per-world-dev-log.md). Shares the meta layer's `LogFeed` with the main site's `/log/`.
- `/web-design-eras/[era-slug]/` — one per era, fully isolated per ADR 0001, each with its own Escape Hatch

## World page content

- Philosophy: this world tests whether an agent can hold a specific, dated aesthetic straight (not a pastiche/parody of it) across a real span of web history, using one continuous fictional company as the throughline.
- Gallery: 6 project cards, one per era, labeled by year range and era name (see table below).

## Per-era projects

Copy is reused as-is from the inspiration file per era (may evolve later — nothing to solve now). Each project gets: **home**, **two secondary pages drawn from that era's own nav** (below — proposed, not locked; swap freely when building if a different pair tells the era's story better), and **kit** (UI kit page, styled in the era's own idiom — e.g. Era 1's kit would itself use table layout and beveled buttons).

| Era | Years | Slug | Style | Proposed secondary pages |
| --- | --- | --- | --- | --- |
| 1 | 2000–2004 | `2000-dotcom` | Table layout, dot-com corporate | **Built:** Products (catalog), About Us (company profile) |
| 2 | 2004–2008 | `2004-web2` | Web 2.0 gloss/gradients, perpetual beta | Features, Pricing |
| 3 | 2008–2012 | `2008-skeuomorphic` | Skeuomorphic texture, letterpress | Features, Journal |
| 4 | 2012–2016 | `2012-flat` | Flat design, one-page scroll | Features, Blog |
| 5 | 2016–2020 | `2016-saas` | SaaS gradients, floating screenshots | Pricing, Customers |
| 6 | 2022–2026 | `2022-agent` | Dark hairlines, bento, agent era | Docs, Changelog |

Each secondary page should be built in the same period-accurate idiom as that era's home page (e.g. Era 1's catalog request is a `<table>`-laid-out form with a beveled Submit button; Era 6's Docs page uses the dark hairline/mono/bento language with a trace-log-style code block).

A page that an era's nav advertises but that doesn't exist is rendered as a dead control, not a link. A 2001 site listing six departments and shipping three is period-accurate; six 404s are not.

## Escape Hatch

Present on every page of every era project (home, both secondary pages, kit) per [CONTEXT.md](../../CONTEXT.md): links to root home and lists the other 5 eras as sibling projects. Same fixed design as every other project in the site — it must not be re-skinned per era.

## Out of scope

- Curating eras down to a favorites subset — all 6 ship.
- Rewriting the inspiration copy — use as-is.
- Interactivity beyond what a static period-accurate mockup implies (e.g. no real auth on Era 2's "Log in," no real payment on Era 5's "Start free trial" — these are dead-end/decorative controls, matching how the inspiration sheet already treats them).
