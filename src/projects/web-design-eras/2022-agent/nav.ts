/**
 * Nav model for Globex Platform (2022-2026).
 *
 * "Agents" and "Pricing" have no page of their own and render as dead
 * controls. "Log in" and "Get API key" are decorative per the world spec.
 */
export interface NavLink {
	label: string;
	href?: string;
}

export const base = "/web-design-eras/2022-agent/";

export const navLinks: NavLink[] = [
	{ label: "Platform", href: base },
	{ label: "Agents" },
	{ label: "Docs", href: `${base}docs/` },
	{ label: "Pricing" },
	{ label: "Changelog", href: `${base}changelog/` },
];

export interface FooterColumn {
	heading: string;
	links: NavLink[];
}

export const footerColumns: FooterColumn[] = [
	{
		heading: "Platform",
		links: [{ label: "Runtime" }, { label: "Connectors" }, { label: "Evals" }, { label: "Pricing" }],
	},
	{
		heading: "Developers",
		links: [
			{ label: "Docs", href: `${base}docs/` },
			{ label: "SDKs" },
			{ label: "Changelog", href: `${base}changelog/` },
			{ label: "Status" },
		],
	},
	{
		heading: "Company",
		links: [
			{ label: "About" },
			{ label: "Security" },
			{ label: "Careers" },
			{ label: "Contact" },
			{ label: "UI Kit", href: `${base}kit/` },
		],
	},
];
