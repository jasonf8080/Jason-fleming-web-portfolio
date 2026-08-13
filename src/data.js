// ---------------------------------------------------------------------------
// Single source of truth for all site copy & repeatable content.
// Components map over these arrays/objects — nothing is hardcoded in JSX.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Jason Fleming',
  role: 'Web Designer & Developer',
  tagline: 'I build fast, beautifully animated websites for local businesses.',
  email: 'jasonf8080@gmail.com',
  location: 'South Salem, NY',
  url: 'https://jasonfleming.dev',
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Work', to: '/work' },
  { label: 'Contact', to: '/contact' },
]

export const about = {
  heading: 'About Me',
  paragraphs: [
    "I'm Jason Fleming, a web designer and developer based in South Salem, NY. I hold a degree in Marketing, and that background shapes how I build — every site I design is meant to look sharp and actually perform: bring in traffic, hold attention, and turn visitors into customers.",
    "My focus is building custom websites from the ground up — React-based, hand-coded, and animated with intention rather than assembled from a template. I care about the details other builds skip: seamless scroll animations, clean semantic markup, strong on-page SEO, and load times that stay fast as a site grows.",
    "Alongside web work, I help a handful of clients with social media here and there — keeping their online presence active between site updates. But websites are where most of my attention goes, and where I do my best work.",
  ],
  highlights: [
    { label: 'Marketing Degree', detail: 'Grounding every build in strategy, not just aesthetics.' },
    { label: 'Web Design & Development', detail: 'Custom React builds, hand-coded from scratch — my primary focus.' },
    { label: 'Social Media', detail: 'Light-touch support for a few clients, alongside website work.' },
  ],
}

export const services = [
  {
    id: 'web-design-dev',
    name: 'Web Design & Development',
    description:
      'Custom-built React websites — designed and developed from scratch, animated with GSAP, and optimized for search from day one.',
    features: [
      'Seamless, scroll-based animation',
      'High-SEO structure & metadata',
      'Performance & best-practice audits',
      'Fast load speeds on every device',
      'Ongoing updates & maintenance',
    ],
  },
  {
    id: 'social-media',
    name: 'Social Media',
    description:
      'Light, ongoing support keeping a business active and consistent on social — a complement to the website, not the main focus.',
    features: ['Content planning', 'Posting cadence', 'Profile upkeep'],
  },
]

export const process = [
  { step: '01', title: 'Discover', detail: 'Understand the business, the audience, and what the site needs to do.' },
  { step: '02', title: 'Design', detail: 'Build a clean, on-brand direction before a line of code is written.' },
  { step: '03', title: 'Build', detail: 'Hand-code the site in React — animated, accessible, and fast.' },
  { step: '04', title: 'Launch & Maintain', detail: 'Ship it, monitor performance, and keep it updated over time.' },
]

// ---------------------------------------------------------------------------
// Case studies
// ---------------------------------------------------------------------------

export const caseStudies = [
  {
    slug: 'south-salem-winery',
    client: 'South Salem Winery',
    year: '2024',
    industry: 'Winery / Tasting Room',
    url: 'https://southsalemwinery.com',
    tagline: 'A small-batch New York winery, built to feel as handcrafted online as the wine is in the bottle.',
    summary:
      'South Salem Winery needed a site that matched the care put into every bottle — clean, moody, and fast, with room to keep growing as new vintages and events are added.',
    theme: { bg: '#111111', fg: '#F7F4EF', accent: '#D84536' },
    socials: [
      { label: 'Instagram', url: 'https://www.instagram.com/southsalemwinery/' },
      { label: 'Facebook', url: 'https://www.facebook.com/southsalemwinery/' },
    ],
    features: [
      {
        title: 'Seamless animation',
        detail: 'GSAP + ScrollTrigger throughout — sections reveal and settle in as you scroll instead of popping in.',
      },
      {
        title: 'Built for search',
        detail: 'Semantic structure, local SEO metadata, and LocalBusiness schema so the tasting room surfaces for local search.',
      },
      {
        title: 'Performance-first',
        detail: 'Compressed, right-sized imagery and a lean build keep the site quick on mobile, where most visitors land.',
      },
      {
        title: 'Best practices',
        detail: 'Accessible markup, mobile-first layout, and a Netlify deploy that handles routing cleanly on every page.',
      },
      {
        title: 'Kept current',
        detail: "Ongoing updates as the wine list, hours, and events change — the site doesn't go stale.",
      },
    ],
    result:
      "The result is a site that feels distinctive without getting in its own way — fast, easy to navigate, and true to the winery's small-batch character.",
  },
  {
    slug: 'gardenside-kitchen',
    client: 'Gardenside Kitchen',
    year: '2024',
    industry: 'Café / Coffee Bar',
    url: 'https://gardensidekitchen.com',
    tagline: 'A café and coffee bar set inside a nursery greenhouse — the site had to carry that same warmth.',
    summary:
      "Gardenside Kitchen's setting is unusual — a coffee and wine bar tucked inside a working nursery. The site needed to sell that atmosphere while staying fast, findable, and easy to update.",
    theme: { bg: '#1B1815', fg: '#F7F4EF', accent: '#BE4A34' },
    socials: [{ label: 'Instagram', url: 'https://www.instagram.com/gardensidekitchen/' }],
    features: [
      {
        title: 'Seamless animation',
        detail: 'Subtle GSAP scroll transitions carry visitors through the menu and story sections without feeling gimmicky.',
      },
      {
        title: 'Built for search',
        detail: 'Full on-page SEO and structured data targeting South Salem and the surrounding Westchester area.',
      },
      {
        title: 'Performance-first',
        detail: 'Optimized imagery and a lightweight build keep load times fast even on a slow café Wi-Fi connection.',
      },
      {
        title: 'Best practices',
        detail: 'Semantic HTML, proper heading hierarchy, and mobile-first layout across every page.',
      },
      {
        title: 'Kept current',
        detail: 'Seasonal menus, hours, and events get updated regularly so the site always reflects what’s in the case.',
      },
    ],
    result:
      'The site now works as a second storefront — visitors get a feel for the space before they ever walk in.',
  },
]

// ---------------------------------------------------------------------------
// Shared "why work with me" points, used on Home + About
// ---------------------------------------------------------------------------

export const differentiators = [
  {
    title: 'Strategy first',
    detail: 'A Marketing degree means every build starts with the business goal, not just the visuals.',
  },
  {
    title: 'Hand-built, not templated',
    detail: 'Every site is custom-coded in React — no page builders, no bloated plugins.',
  },
  {
    title: 'Animation with a purpose',
    detail: 'GSAP-driven motion that guides attention instead of distracting from it.',
  },
  {
    title: 'Built to last',
    detail: 'Fast, SEO-solid, and kept updated well after launch.',
  },
]
