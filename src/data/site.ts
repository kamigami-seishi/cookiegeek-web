export const siteConfig = {
  name: "CookieGeek",
  url: "https://cookiegeek.online",
  description:
    "CookieGeek builds social, utility, and entertainment products — mobile apps and web platforms designed to solve everyday problems and connect people worldwide.",
  tagline: "Building products people actually use.",
  logoText: "CookieGeek",
};

export const navbar = {
  links: [
    { label: "Overview", href: "#overview" },
    { label: "What We Do", href: "#what-we-do" },
    { label: "Vision", href: "#vision" },
    { label: "Contact", href: "#contact" },
  ],
};

export const hero = {
  title: "Connect People By Simple Technology",
  subtitle:
    "Our work spans mobile apps and web platforms designed to solve everyday problems and create meaningful interactions.",
  points: ["Product-driven Mindset", "User-centered Design", "Global-first Development"],
  ctaPrimary: {
    label: "Contact Us",
    href: "#contact",
  },
  ctaSecondary: {
    label: "Learn More",
    href: "#overview",
  },
  image: {
    src: "/cookiegeekvision.png",
    width: 1536,
    height: 1024,
    alt: "CookieGeek mascot — a cartoon chocolate-chip cookie wearing glasses and typing on a laptop",
    sizes: "(min-width: 1536px) 720px, (min-width: 1024px) 45vw, 92vw",
    webp: [
      { src: "/cookiegeekvision-640.webp", width: 640 },
      { src: "/cookiegeekvision-960.webp", width: 960 },
      { src: "/cookiegeekvision-1280.webp", width: 1280 },
      { src: "/cookiegeekvision-1536.webp", width: 1536 },
    ],
  },
};

export const companyOverview = {
  id: "overview",
  title: "Who We Are",
  description:
    "CookieGeek is a technology company focused on building social, utility, and entertainment products. We believe good software should feel intuitive, useful, and trustworthy.",
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "10+", label: "Products & Services" },
    { value: "95%+", label: "Positive Review Rate" },
    { value: "24/7", label: "Global Support" },
  ],
};

// Icons are referenced by key, not by component: this module is imported by the
// client-side Navbar, so holding icon components here would ship them to the
// browser. WhatWeDo.tsx resolves the keys, on the server.
export type FeatureIcon = "dashboard" | "shield" | "zap" | "globe" | "chart" | "users";

export const whatWeDo: {
  id: string;
  title: string;
  subtitle: string;
  features: { icon: FeatureIcon; title: string; description: string }[];
} = {
  id: "what-we-do",
  title: "What We Do",
  subtitle: "Creating tools, communities, and experiences online.",
  features: [
    {
      icon: "dashboard",
      title: "Mobile App Development",
      description:
        "We design and develop mobile applications across social, utility, and entertainment categories.",
    },
    {
      icon: "shield",
      title: "Performance & Security",
      description:
        "We focus on performance, stability, and security at every stage of development.",
    },
    {
      icon: "zap",
      title: "Rapid Product Prototyping",
      description:
        "We turn ideas into functional products through rapid prototyping and testing.",
    },
    {
      icon: "globe",
      title: "Global Localization",
      description: "We localize products for different markets and languages worldwide.",
    },
    {
      icon: "chart",
      title: "Data-driven Optimization",
      description:
        "We optimize products through continuous data analysis and user feedback.",
    },
    {
      icon: "users",
      title: "User Behavior Research",
      description:
        "We research user behavior to identify real needs and product opportunities.",
    },
  ],
};

export const ourVision = {
  id: "vision",
  title: "Our Vision",
  description:
    "We see technology as a way to simplify connections and amplify usefulness, and our vision is a product ecosystem that grows with its users over time.",
  quote: "Technology matters only when it genuinely helps people.",
  author: "Mr. Qiao, CEO",
};

export const contactCTA = {
  id: "contact",
  title: "Feel free to share your thoughts and help shape what we build next.",
  subtitle: "Your ideas and suggestions help us improve and move forward.",
  cta: {
    label: "Contact Us",
    href: "mailto:support@cookiegeek.online",
  },
};

export const footer = {
  // Evaluated at build time, so the year refreshes on every rebuild and deploy.
  copyright: (year: number) => `© ${year} CookieGeek Inc. All rights reserved.`,
  columns: [
    {
      title: "Company",
      links: [
        { label: "Overview", href: "#overview" },
        { label: "What We Do", href: "#what-we-do" },
        { label: "Vision", href: "#vision" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Contact Us", href: "#contact" },
        { label: "Email Support", href: "mailto:support@cookiegeek.online" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "https://nauty.online/a2/pp.html" },
        { label: "Terms of Service", href: "https://nauty.online/a2/tos.html" },
      ],
    },
  ],
};
