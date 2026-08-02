---
status: accepted
---

# World-scoped ADRs live in per-World subfolders

`docs/adr/` holds decisions that apply globally, across the whole site (isolation rules, the Dev Log itself). As Worlds and Projects grow more distinct, some decisions will only ever apply to one World — a choice specific to how Cosmic Strawberry curates its concepts, say, not a rule for the whole site. Filing those in the same flat, globally-numbered folder as global decisions would make it impossible to tell which is which without opening every file.

World-specific ADRs live in `docs/adr/<world-slug>/`, numbered sequentially within that subfolder, independent of the global sequence in `docs/adr/`. Global ADRs (0001, 0002, ...) stay exactly where they are. This also lets `focus-mode` (see [docs/dev-log-conventions.md](../dev-log-conventions.md)) read only the ADRs relevant to the World it's focused on, plus the global set, instead of every ADR in the repo regardless of scope.

No World-scoped ADR exists yet as of this writing — this records the convention ahead of the first one.
