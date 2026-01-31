import { LayoutDashboard, Shield, Zap, Globe, BarChart, Users } from "lucide-react";

export const siteConfig = {
  name: "CookieGeek",
  description: "Building products people actually use.",
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
  subtitle: "Our work spans mobile apps and web platforms designed to solve everyday problems and create meaningful interactions.",
  points: [
    "Product-driven Mindset",
    "User-centered Design",
    "Global-first Development",
  ],
  ctaPrimary: {
    label: "Contact Us",
    href: "#contact",
  },
  ctaSecondary: {
    label: "Learn More",
    href: "#overview",
  },
  image: {
    src: "cookiegeekvision.png",
    alt: "Enterprise Dashboard Visualization",
  },
};

export const companyOverview = {
  id: "overview",
  title: "Who We Are",
  description: "CookieGeek is a technology company focused on building social, utility, and entertainment products. We believe good software should feel intuitive, useful, and trustworthy.",
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "10+", label: "Products & Servies" },
    { value: "95%+", label: "Postive Review Rate" },
    { value: "24/7", label: "Global Support" },
  ],
};

export const whatWeDo = {
  id: "what-we-do",
  title: "What We Do",
  subtitle: "Creating tools, communities, and experiences online.",
  features: [
    {
      icon: LayoutDashboard,
      title: "Mobile App Development",
      description: "We design and develop mobile applications across social, utility, and entertainment categories.",
    },
    {
      icon: Shield,
      title: "Performance & Security",
      description: "We focus on performance, stability, and security at every stage of development.",
    },
    {
      icon: Zap,
      title: "Rapid Product Prototyping",
      description: "We turn ideas into functional products through rapid prototyping and testing.",
    },
    {
      icon: Globe,
      title: "Global Localization",
      description: "We localize products for different markets and languages worldwide.",
    },
    {
      icon: BarChart,
      title: "Data-driven Pptimization",
      description: "We optimize products through continuous data analysis and user feedback.",
    },
    {
      icon: Users,
      title: "User Behavior Research",
      description: "We research user behavior to identify real needs and product opportunities.",
    },
  ],
};

export const ourVision = {
  id: "vision",
  title: "Our Vision",
  description: "We see technology as a way to simplify connections and amplify usefulness, and our vision is a product ecosystem that grows with its users over time.",
  quote: "Technology matters only when it genuinely helps people.",
  author: "Mr. Qiao, CEO",
};

export const contactCTA = {
  id: "contact",
  title: "Feel free to share your thoughts and help shape what we build next.",
  subtitle: "Your ideas and suggestions help us improve and move forward.",
  cta: {
    label: "Contact Us",
    href: "cookiegeekdev@gmail.com",
  },
};

export const footer = {
  copyright: "© 2026 CookieGeek Inc. All rights reserved.",
  links: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
