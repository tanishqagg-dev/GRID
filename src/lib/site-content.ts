export type ProgramStatus = "Running" | "Applications Open" | "Upcoming";

export type SiteAction = {
  label: string;
  href: string;
  external?: boolean;
  secondary?: boolean;
};

export type ProgramSummary = {
  slug: "aurora" | "n3c" | "bootcamp" | "project-learn";
  name: string;
  shortLabel: string;
  status: ProgramStatus;
  tagline: string;
  summary: string;
  cta: string;
  href: string;
  external?: boolean;
  image: string;
  audience: string;
  proof: string;
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Impact", href: "/impact" },
  { label: "Team", href: "/team" },
  { label: "Partners", href: "/partners" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const programSummaries: ProgramSummary[] = [
  {
    slug: "aurora",
    name: "Aurora",
    shortLabel: "Aurora",
    status: "Applications Open",
    tagline: "Global AI hackathon",
    summary:
      "Aurora is GRID's public builder funnel: a high-visibility hackathon designed to surface serious student teams, mentors, and follow-on momentum.",
    cta: "Visit Aurora",
    href: "https://aurora.projectgrid.org",
    external: true,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1800&q=85",
    audience: "Student builders, teams, mentors, sponsors",
    proof: "External live site, multi-stage format, current application cycle",
  },
  {
    slug: "n3c",
    name: "N3C",
    shortLabel: "N3C",
    status: "Running",
    tagline: "School-scale challenge format",
    summary:
      "A repeatable challenge model that helps schools move students from problem identification to visible implementation with structure and support.",
    cta: "Explore N3C",
    href: "/programs/n3c",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1800&q=85",
    audience: "Schools, districts, student teams",
    proof: "Built for broad participation without losing clarity",
  },
  {
    slug: "bootcamp",
    name: "Young Changemakers Bootcamp",
    shortLabel: "Bootcamp",
    status: "Upcoming",
    tagline: "In-person campus immersion",
    summary:
      "A concentrated room for ambitious students who need proximity to mentors, campuses, and a faster feedback loop than online learning can offer.",
    cta: "See Bootcamp",
    href: "/programs/bootcamp",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1800&q=85",
    audience: "Students ready for an in-person cohort experience",
    proof: "Campus-led format designed around confidence, exposure, and pace",
  },
  {
    slug: "project-learn",
    name: "Project Learn",
    shortLabel: "Project Learn",
    status: "Running",
    tagline: "Rural and community AI access",
    summary:
      "A delivery model for schools and communities that are usually late to AI access, combining local partnership with structured student opportunity.",
    cta: "See Project Learn",
    href: "/programs/project-learn",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1800&q=85",
    audience: "Schools, NGOs, local delivery partners",
    proof: "Built to travel beyond flagship campuses and elite networks",
  },
];

export const homepageHero = {
  kicker: "Project GRID",
  title: "The student opportunity stack for AI, building, and real-world access.",
  lead:
    "GRID is a Section 8 nonprofit designing programs that give students a credible way into AI, entrepreneurship, and high-agency work. The goal is not awareness. The goal is entry.",
  actions: [
    { label: "See the programs", href: "/programs" },
    {
      label: "Visit Aurora",
      href: "https://aurora.projectgrid.org",
      external: true,
      secondary: true,
    },
  ] satisfies SiteAction[],
  chips: [
    "Section 8 nonprofit",
    "75,000+ students reached",
    "50+ countries",
    "Institution and school partners",
  ],
};

export const homeProofPoints = [
  {
    label: "What GRID does",
    title: "Programs first. Then proof.",
    body:
      "Everything on the site should resolve into a route a student or partner can actually take: a challenge, a campus experience, a school-scale format, or a delivery partnership.",
  },
  {
    label: "Who it is for",
    title: "Students who need a real way in.",
    body:
      "The model is built for students with ambition but uneven access to mentors, networks, rooms, and credible next steps.",
  },
  {
    label: "Why it matters",
    title: "Opportunity should not depend on proximity to the right campus or network.",
    body:
      "GRID exists to shorten that distance without flattening the ambition of the programs themselves.",
  },
];

export const homeOperatingSystem = [
  {
    step: "01",
    title: "Create legible entry points",
    body:
      "Students should not have to decode an institution before they can join the work. Each program has a clear audience, rhythm, and next step.",
  },
  {
    step: "02",
    title: "Pair credibility with energy",
    body:
      "The organization has to read as reliable to partners without becoming cold or bureaucratic for students.",
  },
  {
    step: "03",
    title: "Build routes, not one-off moments",
    body:
      "Aurora, N3C, Bootcamp, and Project Learn work as a connected system, not isolated campaigns.",
  },
  {
    step: "04",
    title: "Push access farther out",
    body:
      "The point is not just to serve students already close to opportunity. The point is to move the center of access itself.",
  },
];

export const homePartnerPitch = [
  "Research campuses for credibility and room-building",
  "Industry partners for prizes, mentors, and visibility",
  "Schools and NGOs for delivery where access is uneven",
];

export const siteStats = [
  { value: "75,000+", label: "students and teams reached across formats" },
  { value: "50+", label: "countries touched through the GRID network" },
  { value: "INR 20L", label: "headline prize value unlocked through programs" },
  { value: "4", label: "distinct routes into the ecosystem today" },
];

export const featuredMoments = [
  {
    label: "Aurora",
    headline: "Aurora is now a live external destination for serious student builders.",
    summary:
      "The main GRID site should hand people into Aurora quickly, while keeping the wider program system visible.",
    cta: "Visit Aurora",
    href: "https://aurora.projectgrid.org",
    external: true,
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1600&q=80",
  },
  {
    label: "Bootcamp",
    headline: "Bootcamp turns campus context into confidence and momentum.",
    summary:
      "The experience is designed around room quality, mentor proximity, and the belief shift that happens when ambition feels physically near.",
    cta: "See Bootcamp",
    href: "/programs/bootcamp",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1600&q=80",
  },
  {
    label: "Project Learn",
    headline: "Project Learn is where the access mission stops being abstract.",
    summary:
      "The model is built to work in schools and communities that are usually late to exposure, networks, and AI opportunity.",
    cta: "See Project Learn",
    href: "/programs/project-learn",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd59a93c6133?w=1600&q=80",
  },
];

export const aboutDifferentiators = [
  {
    title: "Program-first, not awareness-first",
    text:
      "GRID is organized around things students and partners can enter, fund, host, or deliver. The mission shows up as a system of routes, not only as messaging.",
  },
  {
    title: "Built close to the student reality",
    text:
      "The work is shaped by people who understand what it feels like to have ambition without a clear way into the room.",
  },
  {
    title: "Credible to institutions, legible to students",
    text:
      "The brand has to hold two truths at once: strong enough for serious partners, alive enough for students to want to belong to it.",
  },
];

export const leadershipTeam = [
  {
    name: "Tania Aggarwal",
    role: "Founder and executive lead",
    note:
      "Leads organizational direction, flagship partnerships, and the overall operating model behind GRID's programs.",
  },
  {
    name: "Moksh",
    role: "Co-founder",
    note:
      "Co-builds program architecture, partner momentum, and the student-facing experience across initiatives.",
  },
];

export const coreTeam = [
  {
    name: "Program presidents",
    role: "Program leadership",
    note:
      "Own the operating cadence, visibility, and execution quality of Aurora, N3C, Bootcamp, and Project Learn.",
  },
  {
    name: "Vice presidents",
    role: "Operations and growth",
    note:
      "Drive sponsor conversations, communications, community management, and delivery systems across the org.",
  },
  {
    name: "Campus and outreach leads",
    role: "Network activation",
    note:
      "Translate national ambition into local traction with schools, campuses, and partner ecosystems.",
  },
];

export const partnerTiers = [
  {
    tier: "Strategic partners",
    examples:
      "Institutions and ecosystems that expand credibility, room quality, and execution capacity.",
  },
  {
    tier: "Program partners",
    examples:
      "Hosts, collaborators, curriculum contributors, and delivery partners attached to a specific program route.",
  },
  {
    tier: "Sponsors",
    examples:
      "Backers funding prize pools, access support, student visibility, or direct program enablement.",
  },
];

export const blogEntries = [
  {
    category: "Announcement",
    title: "Why the site now behaves like an operating system, not a poster",
    summary:
      "A note on designing the GRID site around routes, proof, and clear entry points for both students and partners.",
  },
  {
    category: "Program note",
    title: "Aurora now lives as its own public destination",
    summary:
      "Why Aurora should feel like a live product in the world while still sitting inside the wider GRID story.",
  },
  {
    category: "Student story",
    title: "What changes when access becomes specific",
    summary:
      "The shift from vague inspiration to a real challenge, mentor loop, or room with stakes is where confidence starts to move.",
  },
];

export const impactTimeline = [
  {
    label: "Foundation",
    title: "GRID set up the organizational stack behind student opportunity",
    text:
      "The model was designed to connect programs, partnerships, and implementation into one visible operating system.",
  },
  {
    label: "Program layer",
    title: "Repeatable formats created real student entry points",
    text:
      "Aurora, N3C, Bootcamp, and Project Learn turned ambition into routes students could actually recognize and join.",
  },
  {
    label: "Access layer",
    title: "Delivery extended beyond the obvious rooms",
    text:
      "The work moved into school and community contexts where exposure and networks are usually delayed or absent.",
  },
];

export const testimonials = [
  {
    quote:
      "GRID made the path feel visible. Before that, AI and entrepreneurship looked like something happening somewhere else.",
    source: "Student participant",
  },
  {
    quote:
      "What stands out is the balance of energy and structure. It feels student-led without feeling loose or symbolic.",
    source: "Partner mentor",
  },
  {
    quote:
      "The strongest formats are the ones that collapse distance between ambition and an actual next step. GRID understands that.",
    source: "School collaborator",
  },
];

export const contactRoutes = [
  {
    label: "Schools and NGOs",
    inquiry: "schools",
    description:
      "Bring N3C or Project Learn into your institution, district, or local delivery network.",
  },
  {
    label: "Sponsors and partners",
    inquiry: "partners",
    description:
      "Fund a program, support a prize pool, or build a deeper institutional collaboration with the GRID team.",
  },
  {
    label: "Media",
    inquiry: "media",
    description:
      "Reach out for interviews, event coverage, founder profiles, or program announcements.",
  },
  {
    label: "Applicants",
    inquiry: "applicants",
    description:
      "Ask about fit, timelines, selection, or where to start across the different program routes.",
  },
];
