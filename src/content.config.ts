import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const log = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/log" }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		draft: z.boolean().default(false),
		project: z.string().optional(),
		nextFocus: z.string().optional(),
		screenshots: z
			.array(
				z.object({
					src: z.string(),
					caption: z.string(),
				}),
			)
			.optional(),
	}),
});

export const collections = { log };
