export type GalleryTone = "terracotta" | "mustard" | "sage";
export type GalleryStatus = "active" | "pending";

export interface GalleryStat {
	value: string;
	label: string;
}

/** A built, linkable card. */
export interface GalleryWorldItem {
	kind: "world";
	indexLabel: string;
	title: string;
	subtitle: string;
	status: GalleryStatus;
	href: string;
	tone: GalleryTone;
	meta?: string;
	stat?: GalleryStat;
}

/** A real, named thing that exists on paper but has no page to link to yet. */
export interface GalleryPendingItem {
	kind: "pending";
	indexLabel: string;
	title: string;
	subtitle: string;
	meta?: string;
}

/** An unnamed future slot. */
export interface GalleryPlaceholderItem {
	kind: "placeholder";
	indexLabel: string;
}

export type GalleryItem = GalleryWorldItem | GalleryPendingItem | GalleryPlaceholderItem;
