/**
 * Nav model for Globex (2016-2020).
 *
 * "Log in" and "Start free trial" are decorative per the world spec — no real
 * auth or payment behind either, matching how the inspiration sheet already
 * treats them. "Solutions" and "Resources" have no page of their own and
 * render as dead controls.
 */
export interface NavLink {
	label: string;
	href?: string;
}

export const base = "/web-design-eras/2016-saas/";

export const navLinks: NavLink[] = [
	{ label: "Product", href: base },
	{ label: "Solutions" },
	{ label: "Pricing", href: `${base}pricing/` },
	{ label: "Customers", href: `${base}customers/` },
	{ label: "Resources" },
];

export interface FooterColumn {
	heading: string;
	links: NavLink[];
}

export const footerColumns: FooterColumn[] = [
	{
		heading: "Product",
		links: [
			{ label: "Overview", href: base },
			{ label: "Workflows" },
			{ label: "Integrations" },
			{ label: "Changelog" },
			{ label: "Pricing", href: `${base}pricing/` },
		],
	},
	{
		heading: "Solutions",
		links: [{ label: "Marketing" }, { label: "Operations" }, { label: "Engineering" }, { label: "Agencies" }, { label: "Enterprise" }],
	},
	{
		heading: "Resources",
		links: [{ label: "Blog" }, { label: "Guides" }, { label: "Webinars" }, { label: "Help centre" }, { label: "API docs" }],
	},
	{
		heading: "Company",
		links: [
			{ label: "About" },
			{ label: "Careers" },
			{ label: "Press" },
			{ label: "Security" },
			{ label: "Contact" },
			{ label: "UI Kit", href: `${base}kit/` },
		],
	},
];
