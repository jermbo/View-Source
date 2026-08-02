export interface WorldProject {
	name: string;
	slug: string;
	pitch: string;
	/** Optional short label shown above the project name (e.g. a year range). */
	meta?: string;
	/** False while the project is still just a row in this file. */
	built: boolean;
}

export interface World {
	slug: string;
	name: string;
	indexLabel: string;
	titleLine1: string;
	titleLine2: string;
	tagline: string;
	philosophy: string;
	projects: WorldProject[];
}

export const worlds: World[] = [
	{
		slug: "cosmic-strawberry",
		name: "Cosmic Strawberry",
		indexLabel: "01",
		titleLine1: "Cosmic",
		titleLine2: "Strawberry",
		tagline:
			"An eleven-person studio in Portland and Berlin, doing brand, product, motion, and immersive systems out of one room.",
		philosophy:
			"This world tests how many distinct, confident identities a single fictional creative studio can wear without any of them defaulting to the same template. One committed concept at a time, chosen from a much larger field of rejected ones.",
		projects: [],
	},
	{
		slug: "web-design-eras",
		name: "Web Design Eras",
		indexLabel: "02",
		titleLine1: "Web Design",
		titleLine2: "Eras",
		tagline: "One company, Nimbus, played straight across six four-year design eras, from 2000 to 2026.",
		philosophy:
			"Anyone can do the joke version of a 2001 website. The hard part is building one straight: 780 pixels wide, nested tables, a hit counter that means it, and body copy that believes every word about the e-business marketplace. Six eras, four years each, 2000 to 2026. Nimbus is the control variable, so the only thing changing is the taste.",
		projects: [
			{
				name: "Dot-Com Corporate",
				slug: "2000-dotcom",
				meta: "2000 — 2004",
				pitch: "Nested tables, beveled gray buttons, and a marquee that will not stop.",
				built: true,
			},
			{
				name: "Web 2.0 Beta",
				slug: "2004-web2",
				meta: "2004 — 2008",
				pitch: "Gloss, gradients, reflections, and a beta badge with no end date.",
				built: false,
			},
			{
				name: "Skeuomorphic",
				slug: "2008-skeuomorphic",
				meta: "2008 — 2012",
				pitch: "Letterpress type, linen texture, and stitching on things that were never sewn.",
				built: false,
			},
			{
				name: "Flat",
				slug: "2012-flat",
				meta: "2012 — 2016",
				pitch: "Every shadow deleted in one release, replaced with a great deal of scrolling.",
				built: false,
			},
			{
				name: "SaaS Gradient",
				slug: "2016-saas",
				meta: "2016 — 2020",
				pitch: "Floating screenshots, a trust bar of logos, and one very confident purple.",
				built: false,
			},
			{
				name: "Agent Era",
				slug: "2022-agent",
				meta: "2022 — 2026",
				pitch: "Hairline borders, bento grid, and a code block doing an impression of a trace log.",
				built: false,
			},
		],
	},
	{
		slug: "mint-panther-corp",
		name: "Mint Panther Corp",
		indexLabel: "03",
		titleLine1: "Mint Panther",
		titleLine2: "Corp",
		tagline:
			"“Every bunker needs a doctrine.” A hardware conglomerate manufacturing compute, chassis, and the operating layer beneath both.",
		philosophy:
			"This world tests how far an industrial, armor-plated, near-future aesthetic can be pushed before it stops reading as a website at all. Bunkers, gantries, and fabrication floors rendered in chrome and phosphor.",
		projects: [],
	},
];

export function findWorld(slug: string): World | undefined {
	return worlds.find((world) => world.slug === slug);
}
