---
title: "Eras 5 and 6: the gradient, then the grid"
date: 2026-08-03T18:29:31
draft: false
nextFocus: "All six eras of Web Design Eras are now built (2000-dotcom through 2022-agent), so there is no more era-building work left in this world. The open thread from the last three sessions running is the World page's era band, still a plain row of six cards in src/pages/[world]/index.astro via GalleryBand — now that the full six-era picture is visible, revisit whether a chronological timeline treatment tells the 'one company across 26 years' story better than the card grid. New ideas surfaced for this during the Era 5/6 session but were deliberately deferred rather than captured, so this needs a fresh look rather than a list of prior notes."
---

Built the last two eras as a pair: Era 5 (SaaS Gradient, 2016-saas) and Era 6 (Agent Era, 2022-agent). All six eras are now built.

**Era 5, SaaS Gradient (2016-2020)** is the gradient-clipped-headline, floating-screenshot register: Poppins, a purple-to-pink brand gradient, pill buttons with a soft colored shadow, and two blurred blobs behind the hero. Home, Pricing and Customers, plus kit, all reuse the inspiration file's copy and structure directly. Footer is the 5-column mega footer the era's own notes called for.

**Era 6, Agent Era (2022-2026)** is dark hairlines and bento: near-black oklch surfaces, depth from 1px rgba borders instead of shadows, one radial glow behind the hero, IBM Plex Mono for every label, and an `npm i @globex/agent` install command standing in for the era's developer-tool register. Home's bento grid (trace log, latency bars, model routing, guardrails) is a close copy of the mockup's own four-cell layout. Docs and Changelog are the two secondary pages, each in the same trace-log/mono idiom as home.

Both eras are responsive and use viewport media queries per the world's period-accurate-CSS ADR, same as Eras 4 and 5's precedent. Both reused the era-4 checkbox-hack mobile nav, verified working on both projects at 375px.

Company naming followed the drift table in the world spec: Era 5's brand is plain "Globex," Era 6's is "Globex Platform," rendered as a wordmark plus a small mono "Platform" tag in the header rather than spelling out the full two-word name inline everywhere. No prior era had a two-word drift name, so this was a judgment call with no existing precedent to follow.

## Decisions

- **The no-em-dash voice rule is scoped to the site's own voice (meta layer), not in-fiction era copy.** Era copy stays era-accurate and reuses the inspiration file's copy as-is, em dashes included where the mockup has them. Resolves the open thread from the previous session's entry.
- **Era 6's drift name "Globex Platform" is rendered as "Globex" wordmark + a small mono "Platform" tag, not spelled out in full everywhere.** Keeps the header logotype compact and matches the era's own mono-label visual vocabulary (e.g. "01 / Trace"). Full "Globex Platform" is used in page titles and the footer copyright line.
- **Era 5's footer is 5 columns (brand + Product/Solutions/Resources/Company); Era 6's is 4 (brand + Platform/Developers/Company).** Matches each era's own inspiration notes ("5-column mega footer" for Era 5; no such note for Era 6, where a tighter bento-consistent footer fit better).

## Open threads

- World page's era band as a timeline instead of a card row: still deferred, the fourth session running. Now that all six eras are built, the whole picture is finally visible, so this is worth a real look next.
