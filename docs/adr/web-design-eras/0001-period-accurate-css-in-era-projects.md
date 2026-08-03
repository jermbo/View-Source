---
status: accepted
---

# Era projects use period-accurate CSS mechanisms, not current ones

An era project in this World is meant to be believable in view-source, not only on screen. That is the whole conceit of the site's name: a visitor who opens the inspector on Era 1 should find nested `<table>` markup, because CSS flexbox did not exist in 2001 and a real site of that year could not have used it. Era 1's regions were converted from flex/grid to genuine tables for exactly this reason.

[docs/coding-conventions.md](../../coding-conventions.md) says container queries over media queries: responsive behavior belongs to the component and the space its container gives it, not the viewport. That rule holds for the meta layer and for any project whose design is not itself a historical reconstruction. It does not hold inside an era project.

Era 4 (`2012-flat`) is the first era with any responsive behavior at all, and it is the era where responsive design was the headline feature. It uses viewport media queries at Bootstrap 3's breakpoints, because that is what a 2013 site shipped. Container queries arrived roughly a decade later; using them here would produce the same pixels while making the source code lie about its date.

This exemption is scoped to `src/projects/web-design-eras/**` and applies only to mechanisms whose period is part of what the project is reconstructing (layout primitives, responsive mechanism, markup structure). It is not a general licence to ignore the repo's conventions inside these folders. Rules that are about code quality rather than period accuracy still apply everywhere, including "no ternaries in template markup," "one job per component," and "pass the object, not its fields."

## Considered options

- **Container queries throughout, per the global convention.** Rejected: the visual result is identical at every width, so the only thing the choice affects is what a visitor finds in the source, and there the anachronism is the entire cost.
- **Leave it undecided per-era and judge case by case.** Rejected: every remaining era (5 and 6) will hit the same question, and re-litigating it each time is how the eras drift apart.
