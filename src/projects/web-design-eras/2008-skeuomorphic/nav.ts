/**
 * Nav model for Globex Software Company (2008-2012).
 *
 * "Pricing" and "Sign in" are period-accurate dead controls: a 2010 desktop-app
 * site advertised an account system whether or not the marketing site could
 * reach it. See the kit page for how a dead control renders beside a live one.
 */
export interface NavLink {
	label: string;
	href?: string;
}

export const base = "/web-design-eras/2008-skeuomorphic/";

export const navLinks: NavLink[] = [
	{ label: "Overview", href: base },
	{ label: "Features", href: `${base}features/` },
	{ label: "Pricing" },
	{ label: "Journal", href: `${base}journal/` },
];

export interface FooterColumn {
	heading: string;
	links: NavLink[];
}

export const footerColumns: FooterColumn[] = [
	{
		heading: "Globex",
		links: [
			{ label: "About" },
			{ label: "The Journal", href: `${base}journal/` },
			{ label: "Careers" },
			{ label: "Press" },
		],
	},
	{
		heading: "Support",
		links: [{ label: "Help centre" }, { label: "Forums" }, { label: "Status" }, { label: "Contact" }],
	},
	{
		heading: "Legal",
		links: [
			{ label: "Terms of service" },
			{ label: "Privacy" },
			{ label: "The Style Manual", href: `${base}kit/` },
			{ label: "Copyright" },
		],
	},
];
