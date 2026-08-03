/**
 * Nav model for GLOBEX (2012-2016).
 *
 * "Pricing" points at an anchor on the home page rather than a page of its own,
 * which is the one-page scroll working as intended: in 2013 a section was the
 * unit of a marketing site, and only the deeper content earned a URL.
 * "Contact" is a period-accurate dead control.
 */
export interface NavLink {
	label: string;
	href?: string;
}

export const base = "/web-design-eras/2012-flat/";

export const navLinks: NavLink[] = [
	{ label: "Home", href: base },
	{ label: "Features", href: `${base}features/` },
	{ label: "Pricing", href: `${base}#pricing` },
	{ label: "Blog", href: `${base}blog/` },
	{ label: "Contact" },
];

export interface FooterColumn {
	heading: string;
	links: NavLink[];
}

export const footerColumns: FooterColumn[] = [
	{
		heading: "Product",
		links: [
			{ label: "Features", href: `${base}features/` },
			{ label: "Pricing", href: `${base}#pricing` },
			{ label: "Apps" },
			{ label: "API" },
		],
	},
	{
		heading: "Company",
		links: [{ label: "About" }, { label: "Careers" }, { label: "Blog", href: `${base}blog/` }, { label: "Press" }],
	},
	{
		heading: "Support",
		links: [
			{ label: "Help" },
			{ label: "Status" },
			{ label: "UI Kit", href: `${base}kit/` },
			{ label: "Privacy" },
		],
	},
];
