# Voice & tone

Standing rules for visitor-facing copy: hero text, world philosophy/tagline, project copy. Check this before writing or editing any copy a visitor would read. Doesn't apply to internal docs like `CONTEXT.md` or ADRs, which can read normally.

- **No em dashes.** They're an AI tell. Rewrite with a period, a comma, or a colon instead. Same goes for other over-the-top AI punctuation habits if they show up (e.g. excessive semicolons, "it's not X, it's Y" constructions) — plain punctuation reads more human.
- **Wry, dry, a little self-aware, backed by a real fact.** The joke isn't the whole sentence, it's a setup for something concretely true about how the site works (e.g. "fake clients, sealed off from each other" is a joke that is also literally the architecture in [ADR 0001](./adr/0001-project-isolation-with-a-single-escape-hatch.md)). Don't let it drift into pure gag writing untethered from what's actually true.
- **No marketing fluff.** Skip words like "seamless," "cutting-edge," "empower," "elevate," "unlock." Say the plain, specific thing instead.
- **Separator character:** use `·` for meta lines and title separators (e.g. `World Name · View-Source`), never an em dash.
- **Calibration sample:** the root home page hero copy ([src/pages/index.astro](../src/pages/index.astro)) is the reference for this voice. When in doubt, match its register.

More will be added here as they come up.
