---
title: "Scaffolding the World page and the first era"
date: 2026-08-02T12:30:43
draft: true
project: "2000-dotcom"
nextFocus: ""
---

Started as a documentation session: pin down what Web Design Eras is actually testing, and get that written where a visitor would read it. It turned into a build once the philosophy had nowhere to live. The World page was still a stub, a hero plus an "first project is still being built" card, so there was no page around the philosophy to put it in.

The philosophy got rewritten to say the specific thing instead of the abstract one. The old version talked about holding a dated aesthetic "straight, not as pastiche," which is the idea but not the evidence. The new one names the evidence: 780 pixels wide, nested tables, a hit counter that means it. Nimbus is the control variable, so the only thing changing across the six pages is taste.

Then the World page got built for real: philosophy in the identity rail, the six eras as a scrollable band of cards, a dev log band, and world-to-world navigation. The navigation ended up as a "world select" panel that reads like a channel selector on a piece of hardware, which fits the instrument-panel language the meta layer already had.

Era 1 got scaffolded end to end: home, products, about, and the UI kit, all in genuine `<table>` layout with Verdana, Times, Courier and the six web-safe colors from the inspiration sheet's own style guide. The kit page is the style guide rendered in its own idiom, which is the point of a UI Kit per `CONTEXT.md`. The Escape Hatch went in as a shared component that hardcodes its own colors and system monospace, so no project stylesheet can reach it and it can't drag the meta layer's look into an isolated project.

Two things got fixed on the way through. The hero panel was clamping the description to four lines and truncating the tagline, which is fine for a project card and not fine for the one paragraph explaining what a world is for, so the tight-height treatment now tightens type well before it truncates. And the per-World Dev Log route didn't exist yet, so the main site's log page got split into a shared `LogFeed` plus a loader rather than copied.

## Decisions

- **Era 1's secondary pages are Products and About Us, not Products and Contact Us.** The spec listed the pair as proposed and swappable. A company profile page carries more of the era's voice (forward-looking statements, an executive table, NASDAQ ticker) than a contact form would.
- **Nav items with no page render as dead controls, not links.** A 2001 site advertising six departments and shipping three is period-accurate. Six 404s are not.
- **The UI Kit is reachable from inside the fiction.** Era 1 lists it in the sidebar as "Style Guide" with a blinking NEW! badge, credited to the fictional agency. It reads as something the company would actually have published.
- **Unbuilt projects get a real card, not a blank placeholder.** All six eras are named on the World page from day one, five of them marked "not built". The world's premise is the set of six, so hiding five of them undersells it.
- **The Escape Hatch is self-contained by construction.** No design tokens, no webfonts, no shared reset. It has to survive being dropped into six wildly different stylesheets without either contaminating them or being restyled by them.
- **Per-World Dev Log lives at `/<world-slug>/log/`,** sharing one `LogFeed` component with the main site's `/log/` rather than a second copy of the same page.

## Open threads

- The era band shows six cards at a fixed width with a lot of vertical dead space on each. It works, but a timeline might tell the 2000-to-2026 story better than a card row does.
- Nimbus's copy is currently only as deep as Era 1. Eras 2 through 6 have style notes in the inspiration sheet but no page-level copy yet.
