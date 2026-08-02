# Coding conventions

Standing rules for how code in this repo is written. Check this before writing or editing any component, page, or stylesheet.

- **Container queries over media queries.** Responsive behavior belongs to the component and the space its container gives it, not the viewport. Give the relevant wrapper `container-type: inline-size` and respond with `@container`, not `@media`. Reach for a media query only when there's genuinely no container to query against (rare).
- **No ternaries in template markup.** A `cond ? a : b` inside a `.astro`/JSX template is banned. Resolve the condition in the frontmatter/script into a plain value or boolean first, then use a simple condition-and-result in the markup (e.g. `{isEmpty && <Empty />}` / `{!isEmpty && <List />}`, or two sibling components each guarded by their own condition). Ternaries in plain script logic (not template markup) are fine.
- **One job per component.** If a component is doing three or more distinct things (e.g. laying out a region *and* rendering two different kinds of content within it), split it — pull the sub-jobs into smaller leaf components and let the parent just compose them.
- **Pass the object, not its fields.** Don't destructure a prop object at the call site and re-pass its fields one at a time into a child (prop drilling by another name). If a child needs the data, pass the whole object as one prop and let the child destructure internally.

More will be added here as they come up.
