import { getCollection, render } from "astro:content";
import type { LogItem } from "./log";

const dateFormatter = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "numeric" });
const shortDateFormatter = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" });

/**
 * Log entries live in one flat collection keyed by `<world-slug>/<entry>`, so every
 * reader has to slice its own World out. Both callers of that logic want it sorted
 * newest-first and with the folder prefix already stripped off the anchor, so it
 * lives here once rather than in every page that shows a log.
 */
async function loadEntries(worldSlug: string) {
	const prefix = `${worldSlug}/`;
	const entries = await getCollection("log", (entry) => !entry.data.draft && entry.id.startsWith(prefix));
	return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Full entries with rendered bodies, for a Dev Log page. */
export async function loadLogFeed(worldSlug: string) {
	const entries = await loadEntries(worldSlug);

	return Promise.all(
		entries.map(async (entry) => ({
			anchor: entry.id.slice(worldSlug.length + 1),
			date: entry.data.date,
			dateLabel: dateFormatter.format(entry.data.date),
			title: entry.data.title,
			nextFocus: entry.data.nextFocus,
			Content: (await render(entry)).Content,
		})),
	);
}

/** Headline-only entries, for the log band on a hub page. */
export async function loadLogSummaries(worldSlug: string, limit: number, feedHref: string): Promise<LogItem[]> {
	const entries = await loadEntries(worldSlug);

	return entries.slice(0, limit).map((entry) => ({
		date: shortDateFormatter.format(entry.data.date),
		title: entry.data.title,
		href: `${feedHref}#${entry.id.slice(worldSlug.length + 1)}`,
	}));
}
