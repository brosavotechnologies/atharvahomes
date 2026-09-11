import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    number: "01",
    title: "The Quiet Residence",
    category: "Residential Interior",
    location: "New Delhi",
    year: "2026",
    description:
      "A warm, restrained residence shaped around natural materials, soft daylight and carefully considered proportions.",
    image: "/images/project-01-living-room.png",
    alt: "High-end editorial interior photograph of a sophisticated warm minimal living room in a luxury New Delhi residence, off-white lime plaster walls, low-profile natural linen sofa in sand beige, honed travertine coffee table, natural oak flooring, sheer linen curtains, subtle architectural lighting, carefully placed ceramic object, soft afternoon daylight, refined residential architecture, quiet luxury, no people, no text.",
  },
  {
    number: "02",
    title: "The Oak Kitchen",
    category: "Interior Design",
    location: "New Delhi",
    year: "2026",
    description:
      "A calm kitchen built around natural oak, honed stone and understated hardware, balancing everyday function with architectural clarity.",
    image: "/images/project-02-kitchen.png",
    alt: "High-end editorial interior photograph of a warm minimal luxury kitchen in a New Delhi residence, full-height natural oak veneer cabinetry, handleless doors, honed beige limestone worktop and backsplash, understated brushed metal tap, integrated appliances, carefully detailed joinery, soft morning daylight, warm neutral architectural palette, refined contemporary Indian interior, no people, no text.",
  },
  {
    number: "03",
    title: "The Garden Bedroom",
    category: "Residential Interior",
    location: "New Delhi",
    year: "2026",
    description:
      "A quiet primary bedroom designed as a soft retreat, with tactile materials and natural light defining the atmosphere.",
    image: "/images/project-03-bedroom.png",
    alt: "High-end editorial photograph of a serene primary bedroom in a luxury warm minimal New Delhi residence, textured sand beige plaster feature wall, natural linen upholstered bed, crisp white linen bedding, slim oak side tables, warm oak flooring, sheer linen curtains opening toward a planted garden, soft morning daylight, sophisticated restrained interior architecture, no people, no text.",
  },
  {
    number: "04",
    title: "The Limestone Stair",
    category: "Architecture & Interiors",
    location: "New Delhi",
    year: "2026",
    description:
      "A sculptural staircase where limestone, plaster and natural light create a simple architectural focal point.",
    image: "/images/project-04-staircase.png",
    alt: "High-end editorial architectural photograph of a sculptural staircase inside a contemporary luxury residence in New Delhi, cantilevered warm beige limestone stair treads, smooth off-white lime plaster walls, slim blackened steel handrail, tall narrow architectural window creating a dramatic soft band of daylight, minimal detailing, refined proportions, warm neutral palette, no people, no text.",
  },
  {
    number: "05",
    title: "The Courtyard House",
    category: "Residential Construction",
    location: "New Delhi",
    year: "2026",
    description:
      "A contemporary residence organised around light, shade and planted outdoor spaces, with a warm and understated material palette.",
    image: "/images/project-05-facade.png",
    alt: "High-end editorial exterior photograph of a contemporary luxury villa in New Delhi, India, warm minimal off-white plaster facade, deep shaded terraces, vertical natural teak screens, slim dark metal railings, mature bougainvillea and landscaped courtyard, carefully proportioned openings, warm afternoon sunlight and long architectural shadows, sophisticated residential architecture, no people, no text.",
  },
  {
    number: "06",
    title: "The Stone Bath",
    category: "Interior Design",
    location: "New Delhi",
    year: "2026",
    description:
      "A restrained bathroom combining warm mineral surfaces, natural timber and precise detailing.",
    image: "/images/project-06-bathroom.png",
    alt: "High-end editorial interior photograph of a luxurious warm minimal bathroom in a New Delhi residence, warm sand-toned microcement walls, honed natural stone floor, wall-hung oak vanity, sculptural stone basin, understated brushed metal fittings, frameless mirror, soft diffused daylight, precise architectural detailing, quiet spa-like atmosphere, sophisticated neutral palette, no people, no text.",
  },
];

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      {
        title: "Projects — Atharva Homes, New Delhi",
      },
      {
        name: "description",
        content:
          "Explore selected residential construction, interior design and renovation projects by Atharva Homes in New Delhi.",
      },
      {
        property: "og:title",
        content: "Projects — Atharva Homes",
      },
      {
        property: "og:description",
        content:
          "A selection of residential architecture, construction and interiors by Atharva Homes.",
      },
    ],
  }),

  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1320px] px-6 pb-24 pt-36 lg:px-10 lg:pb-32 lg:pt-44">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl"
          >
            <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Projects
            </p>

            <h1 className="mt-7 font-serif text-5xl font-normal leading-[1.05] tracking-[-0.025em] sm:text-6xl lg:text-8xl">
              Spaces made to be
              <span className="block text-muted-foreground">
                lived in.
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              A selection of residential spaces shaped through thoughtful
              design, honest materials and careful execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Archive */}
      <section>
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="flex items-end justify-between border-b border-border py-8">
            <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Selected Work
            </p>

            <p className="hidden text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:block">
              {projects.length} Projects
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-20 py-16 sm:grid-cols-2 lg:gap-x-12 lg:gap-y-28 lg:py-24">
            {projects.map((project, index) => (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index % 2 === 1 ? 0.08 : 0,
                }}
                className={index % 2 === 1 ? "lg:mt-24" : ""}
              >
                <Link
                  to="/contact"
                  className="group block"
                  aria-label={`Enquire about ${project.title}`}
                >
                  <div className="relative overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="aspect-[16/9] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />

                    <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                      <ArrowUpRight
                        className="h-4 w-4"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center justify-between gap-4">
                      <h2 className="font-serif text-2xl tracking-tight">
                        {project.title}
                      </h2>

                      <span className="text-[10px] text-muted-foreground">
                        {project.number}
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      <span>{project.category}</span>
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-[1320px] px-6 py-28 lg:px-10 lg:py-36">
          <div className="max-w-4xl">
            <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">
              Our Work
            </p>

            <h2 className="mt-8 font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              We are interested in the details that make a house feel like
              home.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/50">
              Proportion, light, texture and material are considered together
              to create spaces that feel natural rather than over-designed.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-28 text-center lg:py-40">
          <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            Your Project
          </p>

          <h2 className="mt-8 font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s create something
            <br />
            considered.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-muted-foreground">
            Whether you are building from the ground up or transforming an
            existing home, we would be glad to hear about your project.
          </p>

          <Link
            to="/contact"
            className="group mt-10 inline-flex items-center gap-8 border border-foreground px-7 py-4 text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-foreground hover:text-background"
          >
            Start a conversation

            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </section>
    </main>
  );
}