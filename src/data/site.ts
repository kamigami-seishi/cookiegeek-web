export const siteConfig = {
  name: "CookieGeek",
  url: "https://cookiegeek.online",
  description:
    "CookieGeek is a curious product studio building useful, human digital experiences across mobile and the web.",
  tagline: "Useful technology. Made delightful.",
  logoText: "CookieGeek",
};

export const navbar = {
  links: [
    { label: "About", href: "#overview" },
    { label: "What we do", href: "#what-we-do" },
    { label: "Our vision", href: "#vision" },
    { label: "Contact", href: "#contact" },
  ],
};

export const hero = {
  eyebrow: "THE COOKIEGEEK PRODUCT LAB",
  titleFirst: "Useful technology.",
  titleSecond: "Made delightful.",
  subtitle:
    "We dream up, build, and refine digital products that make everyday moments a little easier and a lot more human.",
  ctaPrimary: { label: "Let's talk ideas", href: "#contact" },
  ctaSecondary: { label: "See what we do", href: "#what-we-do" },
  image: {
    src: "/brand/cookie-mascot.webp",
    alt: "CookieGeek's smiling cookie mascot wearing glasses and working on a laptop",
  },
};

export const companyOverview = {
  id: "overview",
  eyebrow: "A LITTLE ABOUT US",
  title: "Curiosity is only the beginning.",
  description:
    "CookieGeek brings product thinking, design, and engineering into one continuous loop. We explore what people need, build with care, and keep improving what we put into the world.",
  principles: [
    {
      label: "Find the real need",
      detail:
        "Start with people, their routines, and the little frictions worth solving.",
    },
    {
      label: "Make it feel effortless",
      detail: "Give useful technology a clear, approachable, and memorable shape.",
    },
    {
      label: "Keep getting better",
      detail: "Learn from real use and make every release more helpful than the last.",
    },
  ],
};

export const whatWeDo = {
  id: "what-we-do",
  eyebrow: "WHAT WE DO",
  title: "From first spark to everyday use.",
  subtitle:
    "Our work moves between playful exploration and practical engineering. Every step serves a better product.",
  groups: [
    {
      id: "create",
      number: "01",
      label: "CREATE",
      title: "Turn an idea into something people can use.",
      description:
        "We move from the first sketch to a working experience, testing the idea while there is still room to make it better.",
      image: "/brand/feature-create.webp",
      imageAlt: "CookieGeek illustration of ideas becoming a digital product",
      capabilities: [
        {
          title: "Rapid product prototyping",
          description: "Turn early ideas into functional products and test them quickly.",
        },
        {
          title: "Mobile app development",
          description: "Design and build social, utility, and entertainment apps.",
        },
      ],
    },
    {
      id: "refine",
      number: "02",
      label: "REFINE",
      title: "Make the good parts even better.",
      description:
        "A product has to earn its place in someone's day. We pay attention to the details that make it dependable and easy to return to.",
      image: "/brand/feature-refine.webp",
      imageAlt:
        "CookieGeek illustration of improving a product through research and engineering",
      capabilities: [
        {
          title: "Performance & security",
          description: "Build for speed, stability, and trust at every stage.",
        },
        {
          title: "Data-driven optimization",
          description: "Use data and feedback to guide meaningful improvements.",
        },
      ],
    },
    {
      id: "connect",
      number: "03",
      label: "CONNECT",
      title: "Build for people, wherever they are.",
      description:
        "We look beyond the screen to the people using it, shaping experiences that feel relevant across different lives and places.",
      image: "/brand/feature-connect.webp",
      imageAlt: "CookieGeek illustration of connected people and digital experiences",
      capabilities: [
        {
          title: "User behavior research",
          description: "Understand real needs and find new product opportunities.",
        },
        {
          title: "Global localization",
          description: "Adapt products for different languages and markets.",
        },
      ],
    },
  ],
};

export const ourVision = {
  id: "vision",
  eyebrow: "OUR VISION",
  title: "The next useful thing starts with a human need.",
  description:
    "We believe technology should make life simpler, more connected, or more fun. Our ambition is a family of products that keeps growing with the people who use them.",
  note: "A little curiosity can go a long way.",
};

export const contactCTA = {
  id: "contact",
  eyebrow: "YOUR MOVE",
  title: "Have a spark worth exploring?",
  subtitle: "Tell us what you are thinking. We would love to hear it.",
  cta: {
    label: "Email CookieGeek",
    href: "mailto:support@cookiegeek.online",
  },
};

export const footer = {
  copyright: (year: number) => `© ${year} CookieGeek Inc. All rights reserved.`,
  columns: [
    {
      title: "Explore",
      links: [
        { label: "About", href: "#overview" },
        { label: "What we do", href: "#what-we-do" },
        { label: "Our vision", href: "#vision" },
      ],
    },
    {
      title: "Get in touch",
      links: [
        { label: "Contact", href: "#contact" },
        { label: "Email support", href: "mailto:support@cookiegeek.online" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy policy", href: "https://nauty.online/a2/pp.html" },
        { label: "Terms of service", href: "https://nauty.online/a2/tos.html" },
      ],
    },
  ],
};
