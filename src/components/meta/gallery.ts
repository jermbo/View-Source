export type GalleryTone = "terracotta" | "mustard" | "sage";

export interface GalleryStat {
	value: string;
	label: string;
}

export interface GalleryWorldItem {
	kind: "world";
	indexLabel: string;
	title: string;
	subtitle: string;
	href: string;
	tone: GalleryTone;
	stat?: GalleryStat;
}

export interface GalleryPlaceholderItem {
	kind: "placeholder";
	indexLabel: string;
}

export type GalleryItem = GalleryWorldItem | GalleryPlaceholderItem;
