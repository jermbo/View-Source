/**
 * Nav model for the Nimbus Systems (2000-2004) project.
 *
 * A real site of this era listed far more departments than it had pages. Items with
 * no `href` are rendered as dead controls rather than links: period-accurate, and it
 * keeps the project from shipping a pile of 404s. See the project's own kit page.
 */
export interface NavLink {
	label: string;
	href?: string;
	isNew?: boolean;
	isVisited?: boolean;
}

export const base = "/web-design-eras/2000-dotcom/";

export const topNav: NavLink[] = [
	{ label: "Home", href: base },
	{ label: "Products", href: `${base}products/` },
	{ label: "About Us", href: `${base}about/` },
	{ label: "Solutions" },
	{ label: "Support" },
	{ label: "Investor Relations" },
	{ label: "Contact Us" },
];

export const sideNav: NavLink[] = [
	{ label: "Company Profile", href: `${base}about/` },
	{ label: "Product Catalog", href: `${base}products/` },
	{ label: "Style Guide", href: `${base}kit/`, isNew: true },
	{ label: "Technical White Papers" },
	{ label: "Reseller Locator" },
	{ label: "Frequently Asked Questions" },
	{ label: "Employment" },
	{ label: "Site Map", isVisited: true },
];

export const footerLinks: NavLink[] = [
	{ label: "Home", href: base },
	{ label: "Products", href: `${base}products/` },
	{ label: "About Us", href: `${base}about/` },
	{ label: "Style Guide", href: `${base}kit/` },
	{ label: "Privacy Statement" },
	{ label: "Legal" },
	{ label: "webmaster@nimbussystems.net" },
];
