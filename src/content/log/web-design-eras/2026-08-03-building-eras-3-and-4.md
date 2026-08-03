---
title: "Eras 3 and 4: texture, then the deletion of texture"
date: 2026-08-03T18:05:06
draft: false
nextFocus: "Next unbuilt project is Era 5 (2016-saas: gradient-clipped headline word, floating screenshot, trust bar of client logos, purple CTA band, 5-column mega footer). Era 4 established that era projects may use period-accurate CSS mechanisms, recorded in docs/adr/web-design-eras/0001-period-accurate-css-in-era-projects.md; Era 5 is responsive too, so it inherits that exemption and should use media queries. Three open threads still deferred: the era band on the World page as a timeline rather than a card row, deeper Globex copy for eras 5 and 6, and whether the no-em-dash rule in docs/voice-and-tone.md is meant to bind in-fiction era copy (Era 2's built pages currently contain em dashes; Eras 3 and 4 avoid them)."
---

Two eras this session instead of the usual one, on the theory that they are better built as a pair than in sequence. Era 4 is the direct reaction against Era 3: the whole flat movement was an argument that Era 3's stitching, linen and letterpress were decoration pretending to be information. Building them back to back meant Era 4 could be defined by exactly what it deletes.

**Era 3, Skeuomorphic (2008 to 2012)** is a 980px cream paper sheet floating on a dark linen ground. Everything on it obeys one rule, which the era's own style guide states outright: the light source is directly above. Text on light takes a white shadow below, text on dark a black shadow above, buttons get a highlight along the top edge and a hard 3px shadow underneath standing in for the thickness of the thing, and input fields invert all of it to look sunk instead of raised. Pages are home, Features, Journal, and the UI kit, which presents itself as "The Style Manual, third edition" because a company with this much confidence in its own craft would absolutely have published one.

**Era 4, Flat (2012 to 2016)** deletes every gradient, bevel, shadow and rounded corner from that vocabulary in one release. The only radius left in the stylesheet is 50%, on circles. Full-viewport hero, 100-weight type at 74px, ghost buttons with 2px borders, outline icon rings, a turquoise statistics band, and sections that stack full-bleed and alternate white, #ECF0F1 and #2C3E50. Home is the one-page scroll the era invented, and Features and Blog are the deeper pages that still earned their own URLs.

The interesting problem was that Era 4 is the first era in this World with any responsive behavior at all. Eras 1 through 3 are fixed-width because that is what those years shipped, but responsive was the actual headline feature of 2013, and the inspiration sheet's own copy sells it: a single fluid grid, from 320 pixels wide to whatever comes next. That collided with `docs/coding-conventions.md`, which says container queries over media queries.

Period accuracy won, and the reasoning got written down as this World's first ADR, `docs/adr/web-design-eras/0001-period-accurate-css-in-era-projects.md`. The deciding argument is that both options produce identical pixels at every width, so the only thing the choice affects is what a visitor finds when they open the inspector, and on a site called View-Source that is not a small thing. It follows the precedent from the previous session, where Era 1's flex layouts were converted to genuine nested tables for the same reason. The exemption is deliberately narrow: it covers mechanisms whose period is part of the reconstruction, and not the conventions that are about code quality.

Era 4's mobile nav turned out to be a happy case of the same principle paying off twice. A 2013 site collapsed its menu without JavaScript by hanging the open state off a hidden checkbox next to the label, and that trick still works, so the burger menu is both period-accurate and genuinely functional rather than a dead control.

One small thing caught in verification: page titles were being written with `&mdash;` and rendering the entity literally in the browser tab, because Astro escapes text expressions. Switched all eight to the `·` separator, which `docs/voice-and-tone.md` asks for anyway.

## Decisions

- **Era projects may use period-accurate CSS mechanisms, overriding the global container-query rule.** Recorded as `docs/adr/web-design-eras/0001-period-accurate-css-in-era-projects.md`, the first World-scoped ADR in the repo. Era 4 uses Bootstrap 3's breakpoints (1200 / 992 / 768) as viewport media queries. ADR 0003 still says no World-scoped ADR exists yet; left as-is, since it was true when written, same treatment the pre-rename entries got.
- **Era 3 stays fixed-width at 980px.** Responsive design was an article in May 2010 and a practice years after that. Consistent with Eras 1 and 2.
- **Era 4's mobile menu uses the checkbox hack, not a dead control.** Period-accurate for 2013 and it actually opens, so a visitor on a phone can still reach the other pages.
- **Era 4's "Pricing" nav item points at an anchor on the home page, not a page of its own.** That is the one-page scroll working as intended: in 2013 a section was the unit of a marketing site, and only deeper content earned a URL.
- **Both eras keep the secondary pages the spec proposed** (Features and Journal, Features and Blog). Nothing about either era told a better story than the proposed pair.
- **Page titles use `·`, not an em dash entity.** The entity rendered literally through Astro's expression escaping, and the separator rule already called for `·`.

## Open threads

- The era band on the World page is still a row of six cards. Deferred for the third session running. Now that four of six are built and linkable, the card row is carrying more weight than it was designed for.
- Globex's copy is written to page depth for Eras 1 through 4. Eras 5 and 6 still have only style notes in the inspiration sheet.
- `docs/voice-and-tone.md` bans em dashes in project copy, but the inspiration sheet's in-fiction copy uses them freely and the spec says to reuse that copy as-is. Era 2's built pages contain several; Eras 3 and 4 were written to avoid them without losing the period voice. Worth deciding whether the rule is about the site's own voice or about every word on the site.
