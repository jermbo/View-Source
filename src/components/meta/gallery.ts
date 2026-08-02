export type GalleryTone = "terracotta" | "mustard" | "sage";

export interface GalleryItem {
	indexLabel: string;
	title: string;
	subtitle: string;
	href: string;
	tone: GalleryTone;
}
