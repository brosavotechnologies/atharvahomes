export const site = {
  name: "Atharva Homes",
  tagline: "Construction & Interior Design",
  // city: "New Delhi",
  /** Placeholder — replace with the real one-line positioning statement. */
  intro:
    "Atharva Homes is a construction and interior design practice based in New Delhi. We build and finish homes with a calm, material-led approach — considered proportions, honest surfaces and detailing that lasts.",
  /** Contact details are placeholders. Do not treat as real. */
  contact: {
    address: "71, Sant Nagar, East of Kailash, New Delhi, India - 110065",
    phone: "+91 97112 57574",
    email: "vkjha2710@gmail.com",
    hours: "Mon – Sat, 10:00 – 19:00",
  },
  social: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Team", to: "/team" },
  // { label: "Contact", to: "/contact" },
] as const;

export const whyChooseUs = [
  {
    title: "One team, start to handover",
    body: "Structure, services and interiors are handled by a single team, so drawings, site work and finishes stay aligned.",
  },
  {
    title: "Material-first detailing",
    body: "Stone, timber, lime plaster and metal are specified for how they age, not just how they photograph on day one.",
  },
  {
    title: "Transparent costing",
    body: "Line-item estimates and staged billing, so you always know what a decision changes before it is made.",
  },
  {
    title: "Site discipline",
    body: "Weekly progress reviews, quality checks at every stage and a written snag list before handover.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Consultation",
    body: "We visit the site, understand how you want to live or work, and set a realistic brief, budget band and timeline.",
  },
  {
    step: "02",
    title: "Design & drawings",
    body: "Layouts, elevations and material palettes are developed together, with detailed drawings issued for execution.",
  },
  {
    step: "03",
    title: "Execution",
    body: "Civil work, services and joinery are built by our own supervised teams against approved drawings and samples.",
  },
  {
    step: "04",
    title: "Handover",
    body: "Finishes are cleaned, snags closed and the home handed over with warranties and maintenance guidance.",
  },
] as const;

export type GalleryImage = {
  src: string;
  /** Full image-generation prompt, used verbatim as the alt text. */
  prompt: string;
  caption: string;
};

export const heroImage: GalleryImage = {
  src: "/images/hero-atharva-homes.png",
  prompt:
    "Wide architectural photograph of a contemporary New Delhi residence at golden hour, warm minimal exterior in off-white lime plaster with deep window reveals, teak louvred screen, cantilevered concrete canopy, planted courtyard with a frangipani tree, warm neutral palette of white, sand beige and warm grey, soft directional daylight, natural shadows, shot on a 35mm lens, editorial architectural photography, no people, no text.",
  caption: "Residence, New Delhi",
};

export const founderImage: GalleryImage = {
  src: "/images/founder-portrait.png",
  prompt:
    "Editorial portrait of a founder-architect standing in a warm minimal studio in New Delhi, soft window daylight from the left, calm neutral background in sand beige plaster, holding rolled drawings, wearing simple linen shirt, shallow depth of field, warm natural colour grading, 50mm lens, quiet confident expression, no text.",
  caption: "Founder, Atharva Homes",
};

export const teamImage: GalleryImage = {
  src: "/images/team-studio.png",
  prompt:
    "Wide documentary photograph of a small architecture and interiors team working around a large light oak table in a warm minimal New Delhi studio, drawings and stone and timber material samples spread across the table, sand beige plaster walls, large window with soft daylight, warm neutral palette, natural candid working atmosphere, 35mm lens, no text.",
  caption: "The studio",
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/project-01-living-room.png",
    prompt:
      "Interior architectural photograph of a warm minimal living room in a New Delhi home, off-white lime plaster walls, low linen sofa in sand beige, travertine coffee table, teak wood floor, sheer curtains diffusing afternoon light, single large ceramic vase, warm neutral palette, soft natural shadows, 24mm lens, editorial interior photography, no people, no text.",
    caption: "Living room",
  },
  {
    src: "/images/project-02-kitchen.png",
    prompt:
      "Interior photograph of a warm minimal kitchen in a New Delhi apartment, handleless oak veneer cabinetry, honed beige limestone counter and full-height splashback, brushed brass tap, open shelf with two stoneware bowls, morning daylight raking across the counter, warm neutral palette, 35mm lens, editorial interior photography, no people, no text.",
    caption: "Kitchen",
  },
  {
    src: "/images/project-03-bedroom.png",
    prompt:
      "Interior photograph of a serene primary bedroom in a warm minimal New Delhi home, textured sand beige plaster headboard wall, white linen bedding, slim teak side table with a paper lamp, wide plank oak floor, soft morning light through a linen curtain, warm neutral palette, 35mm lens, editorial interior photography, no people, no text.",
    caption: "Bedroom",
  },
  {
    src: "/images/project-04-staircase.png",
    prompt:
      "Interior architectural photograph of a sculptural staircase in a warm minimal New Delhi home, cantilevered beige limestone treads against a smooth lime plaster wall, slim blackened steel handrail, tall slot window casting a soft band of daylight down the wall, warm neutral palette, quiet geometry, 24mm lens, editorial architectural photography, no people, no text.",
    caption: "Staircase",
  },
  {
    src: "/images/project-05-facade.png",
    prompt:
      "Exterior architectural photograph of a warm minimal New Delhi villa facade in the late afternoon, off-white plaster massing with deep shaded terraces, vertical teak battens, slim black metal railings, mature bougainvillea against the boundary wall, warm neutral palette, long soft shadows, 35mm lens, editorial architectural photography, no people, no text.",
    caption: "Facade",
  },
  {
    src: "/images/project-06-bathroom.png",
    prompt:
      "Interior photograph of a warm minimal bathroom in a New Delhi residence, microcement walls in warm sand tone, wall-hung oak vanity, undermount stone basin, brushed brass fittings, frameless mirror, single folded white towel, soft diffused daylight from a frosted window, warm neutral palette, 35mm lens, editorial interior photography, no people, no text.",
    caption: "Bathroom",
  },
];
