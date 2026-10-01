export const SITE_URL = "https://qeic.ca";
export const SITE_NAME = "Queen's Entrepreneurship and Innovation Committee";
export const SITE_SHORT_NAME = "QEIC";
export const SITE_DESCRIPTION =
  "QEIC connects Queen's University students with founders, innovators, and entrepreneurial opportunities through speaker events, workshops, and community experiences.";

export const QEIC_EMAIL = "queensentrepreneurship@outlook.com";
export const INSTAGRAM_URL = "https://www.instagram.com/queensentrepreneurship";
export const INSTAGRAM_HANDLE = "@queensentrepreneurship";
export const LINKEDIN_URL = "https://www.linkedin.com/company/qeic/";

export const SIGNUP_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeZQyosCqF0hJOm8PCiLmd9RN904bux3-ww-gM_t70Pu36CDA/viewform";

export type NavItem = { href: string; label: string; primary?: boolean };

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
  { href: "/signup", label: "Sign Up", primary: true },
];
