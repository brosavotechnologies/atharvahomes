export type Service = {
  slug: string;
  title: string;
  summary: string;
  points: string[];
  image: {
    src: string;
    /** Full image-generation prompt, used verbatim as the alt text. */
    prompt: string;
  };
};

export const services: Service[] = [
  {
    slug: "residential-construction",
    title: "Residential Construction",
    summary:
      "Ground-up homes built from foundation to finish, with structure, services and finishes coordinated by one team.",
    points: ["Foundation & RCC structure", "Masonry and plaster", "Waterproofing & services"],
    image: {
      src: "/images/service-residential-construction.png",
      prompt:
        "Architectural photograph of a residential construction site in New Delhi at mid-morning, clean exposed RCC frame with brick infill walls, neatly stacked materials, scaffolding, warm sand and grey palette, soft haze and directional daylight, orderly and calm site, 35mm lens, editorial documentary photography, no people, no text.",
    },
  },
  {
    slug: "interior-design",
    title: "Interior Design",
    summary:
      "Layouts, material palettes and lighting designed as one, then detailed for execution on site.",
    points: ["Space planning", "Material & finish palettes", "Lighting design"],
    image: {
      src: "/images/service-interior-design.png",
      prompt:
        "Interior photograph of a warm minimal New Delhi apartment living space, off-white lime plaster walls, low sand beige upholstery, travertine side table, oak floor, sheer linen curtain diffusing daylight, subtle warm accent lighting, warm neutral palette, 24mm lens, editorial interior photography, no people, no text.",
    },
  },
  {
    slug: "turnkey-projects",
    title: "Turnkey Projects",
    summary:
      "A single contract covering design, execution and handover, with one point of accountability throughout.",
    points: ["Single-contract delivery", "Vendor coordination", "Snag-free handover"],
    image: {
      src: "/images/service-turnkey-projects.png",
      prompt:
        "Interior photograph of a freshly completed warm minimal New Delhi home interior ready for handover, empty rooms with lime plaster walls, oak floors, clean skirting and shadow-gap detailing, soft daylight from tall windows, warm neutral palette, calm and pristine, 24mm lens, editorial architectural photography, no people, no text.",
    },
  },
  {
    slug: "renovation-remodelling",
    title: "Renovation & Remodelling",
    summary:
      "Careful upgrades to existing homes — replanning, structural repair and new finishes with minimum disruption.",
    points: ["Structural repair", "Replanning of layouts", "Finish replacement"],
    image: {
      src: "/images/service-renovation.png",
      prompt:
        "Photograph of a partially renovated room in an older New Delhi home, one wall stripped back to brick and the adjacent wall newly finished in warm sand plaster, protective sheeting on the floor, tools resting neatly, warm neutral palette, strong window daylight, 35mm lens, editorial documentary photography, no people, no text.",
    },
  },
  {
    slug: "modular-joinery",
    title: "Modular & Custom Joinery",
    summary:
      "Wardrobes, kitchens and built-in furniture made to measure in seasoned veneers and durable hardware.",
    points: ["Kitchens & wardrobes", "Built-in storage", "Custom furniture"],
    image: {
      src: "/images/service-joinery.png",
      prompt:
        "Close architectural photograph of handleless oak veneer joinery in a warm minimal New Delhi home, full-height wardrobe run with fine shadow-gap reveals, brushed brass detail, honed limestone floor, soft raking daylight highlighting the wood grain, warm neutral palette, 50mm lens, editorial interior photography, no people, no text.",
    },
  },
  {
    slug: "project-management",
    title: "Project Management",
    summary:
      "Programme, cost and quality control for projects where you already have a design in hand.",
    points: ["Cost estimation", "Programme tracking", "Quality inspections"],
    image: {
      src: "/images/service-project-management.png",
      prompt:
        "Overhead photograph of architectural drawings, a measuring tape, a pencil and stone and timber material samples arranged on a light oak table in a warm minimal New Delhi studio, soft daylight from one side, warm neutral palette of sand beige and warm grey, 50mm lens, editorial still-life photography, no people, no text.",
    },
  },
];
