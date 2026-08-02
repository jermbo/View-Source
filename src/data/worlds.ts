export interface WorldProject {
	name: string;
	slug: string;
	pitch: string;
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
			"An eleven-person studio in Portland and Berlin — brand, product, motion, and immersive systems out of one room.",
		philosophy:
			"This world tests how many distinct, confident identities a single fictional creative studio can wear without any of them defaulting to the same template — one committed concept at a time, chosen from a much larger field of rejected ones.",
		projects: [],
	},
	{
		slug: "web-design-eras",
		name: "Web Design Eras",
		indexLabel: "02",
		titleLine1: "Web Design",
		titleLine2: "Eras",
		tagline: "One company, Nimbus, played straight across six four-year design eras — 2000 to 2026.",
		philosophy:
			"This world tests whether an agent can hold a specific, dated aesthetic straight — not as pastiche — across a real span of web history, using one continuous fictional company as the throughline from table layouts to the agentic era.",
		projects: [],
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
			"This world tests how far an industrial, armor-plated, near-future aesthetic can be pushed before it stops reading as a website at all — bunkers, gantries, and fabrication floors rendered in chrome and phosphor.",
		projects: [],
	},
];
