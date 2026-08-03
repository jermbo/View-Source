/**
 * Nav model for the globex. (2004-2008) project.
 *
 * "Tour", "Blog" and "Log in" are period-accurate dead controls: a 2005 startup's
 * header always promised more than three pages actually existed. See the kit page
 * for how a dead control renders next to a live one.
 */
export interface NavLink {
	label: string;
	href?: string;
}

export const base = "/web-design-eras/2004-web2/";

export const navLinks: NavLink[] = [
	{ label: "Tour" },
	{ label: "Features", href: `${base}features/` },
	{ label: "Pricing", href: `${base}pricing/` },
	{ label: "Blog" },
	{ label: "Log in" },
];

export interface FooterColumn {
	heading: string;
	links: NavLink[];
}

export const footerColumns: FooterColumn[] = [
	{
		heading: "Globex",
		links: [{ label: "About us" }, { label: "Jobs" }, { label: "Press kit" }, { label: "Blog" }],
	},
	{
		heading: "Product",
		links: [
			{ label: "Take the tour" },
			{ label: "Pricing & plans", href: `${base}pricing/` },
			{ label: "Brand guide", href: `${base}kit/` },
			{ label: "API & widgets" },
		],
	},
	{
		heading: "Help",
		links: [{ label: "Support forum" }, { label: "FAQ" }, { label: "Contact us" }, { label: "System status" }],
	},
];
