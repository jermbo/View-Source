---
title: "Building Era 2: Web 2.0 Beta"
date: 2026-08-03T10:36:52
draft: true
project: "2004-web2"
nextFocus: ""
---

Session started to pick up where Era 1 left off. Confirmed the next unbuilt project per `worlds.ts` and the spec is Era 2, Web 2.0 Beta (2004–2008): gloss, gradients, perpetual beta. The prior session's log entry was left in draft with an empty `nextFocus`, so this entry starts from the spec and inspiration sheet directly rather than a handoff note.

Deferred the two open threads from the previous entry (era band as timeline, deeper Nimbus copy across eras) — explicitly out of scope for today.

Era 2 got built: header/nav, hero, feature grid, tag cloud and footer on the home page, plus Features, Pricing and a kit (style guide) page, all in the gloss/gradient Web 2.0 idiom. `worlds.ts` now marks `2004-web2` as built.

While reviewing Era 1 against memory of actual 2001-era sites, two corrections came up: the canvas needs to stay genuinely fixed-width (period sites had no responsive behavior at all — this was already true in the built CSS, just confirmed), and several Era 1 regions were still div/flexbox under the hood despite looking table-based. Converted every flex/grid-driven layout (masthead, top nav, side nav list and badges, the investor notice block, the news rail and its hit counter, the footer link row, and the kit page's swatches/button/section demos) to genuine nested `<table>`/`<tr>`/`<td>` markup, matching how these were actually built.

Also caught that "Nimbus" is a real company's name. Renamed the fictional company to **Globex** across both built eras, following the same drift the spec already called for (Globex Systems, Inc. → globex. → Globex → GLOBEX → Globex → Globex Platform). The 2026-08-02 log entries still say "Nimbus" — left as an accurate record of what was decided in that session, not rewritten.

## Decisions

- **Company renamed Nimbus → Globex**, everywhere in the built site (copy, nav, CSS comments, domains, ticker symbol, product-line prefixes). Reason: Nimbus collides with a real, live company. Historical log entries from before the rename are left as-is.
- **Era 1's remaining flex/grid layouts converted to nested tables.** The 3-column page layout was already a table; the smaller regions (masthead, nav bars, sidebar lists, notice blocks, news rail, footer, kit demos) were still divs doing the arrangement via CSS flex/grid. Converted all of it to `<table>`/`<tr>`/`<td>`, which is what a real 2001 site would have used — CSS flexbox and grid didn't exist yet.
- **Era 2's canvas stays fixed-width**, no container/media-query responsiveness. Consistent with Era 1 and period-accurate: responsive design wasn't a thing until years later.

## Open threads

- Carried over, still untouched: the era band on the World page as a timeline instead of a card row, and writing Nimbus/Globex copy further ahead for eras 3–6.
