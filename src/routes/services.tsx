import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    number: "01",
    title: "Residential Construction",
    summary:
      "Ground-up homes built with disciplined execution, coordinated services and careful attention to every stage of construction.",
    points: [
      "Foundation & RCC structure",
      "Masonry and plaster",
      "Waterproofing & services",
      "Flooring and finishes",
    ],
    image: "/images/service-residential-construction.png",
    alt: "High-end editorial architectural photograph of a contemporary residential construction project in New Delhi, India, showing a clean exposed RCC structure with refined brick infill, precise architectural proportions, neatly organised construction materials, warm sand and grey tones, soft natural daylight, calm and orderly construction site, premium residential architecture, no people, no text.",
  },
  {
    number: "02",
    title: "Interior Design",
    summary:
      "Interiors designed around how you live, combining thoughtful layouts, natural materials, refined finishes and considered lighting.",
    points: [
      "Space planning",
      "Material & finish palettes",
      "Lighting design",
      "Furniture & styling direction",
    ],
    image: "/images/service-interior-design.png",
    alt: "High-end editorial interior photograph of a warm minimal luxury residence in New Delhi, India, featuring off-white lime plaster walls, natural oak flooring, refined built-in joinery, understated stone surfaces, linen curtains, soft natural daylight and warm ambient lighting, sophisticated architectural proportions, calm material palette, premium residential interior design, no people, no text.",
  },
  {
    number: "03",
    title: "Turnkey Projects",
    summary:
      "A complete design-to-handover service where one team takes responsibility for coordinating the entire project.",
    points: [
      "Single-contract delivery",
      "Design coordination",
      "Vendor management",
      "Quality-controlled handover",
    ],
    image: "/images/service-turnkey-projects.png",
    alt: "High-end editorial photograph of a newly completed luxury residence in New Delhi, India, prepared for final handover, warm minimal interior with seamless off-white lime plaster walls, natural oak flooring, precise shadow-gap detailing, refined built-in joinery, elegant stone surfaces and large windows bringing in soft natural daylight, immaculate finished space, understated premium craftsmanship, no people, no text.",
  },
  {
    number: "04",
    title: "Renovation & Remodelling",
    summary:
      "Thoughtful transformation of existing homes through better planning, structural improvements and carefully selected new finishes.",
    points: [
      "Structural repair",
      "Layout replanning",
      "Services upgrades",
      "Finish replacement",
    ],
    image: "/images/service-renovation.png",
    alt: "Editorial architectural photograph of a carefully renovated residential interior in New Delhi, India, showing the transformation of an older home with a partially restored brick wall beside newly finished warm sand plaster, refined flooring, clean architectural detailing, natural daylight entering through a large window, organised renovation materials, sophisticated warm neutral palette, no people, no text.",
  },
  {
    number: "05",
    title: "Modular & Custom Joinery",
    summary:
      "Kitchens, wardrobes and built-in furniture designed to fit the architecture precisely and made with durable materials and hardware.",
    points: [
      "Kitchens & wardrobes",
      "Built-in storage",
      "Custom furniture",
      "Material & hardware selection",
    ],
    image: "/images/service-joinery.png",
    alt: "Close editorial architectural photograph of bespoke handleless oak veneer joinery in a luxury New Delhi residence, full-height wardrobe and storage wall with precise shadow-gap detailing, refined brushed metal hardware, honed limestone flooring, soft raking daylight highlighting natural wood grain, warm minimal material palette, exceptional craftsmanship, no people, no text.",
  },
  {
    number: "06",
    title: "Project Management",
    summary:
      "Structured oversight for projects where the design is already established and needs disciplined execution on site.",
    points: [
      "Cost estimation",
      "Programme tracking",
      "Vendor coordination",
      "Quality inspections",
    ],
    image: "/images/service-project-management.png",
    alt: "High-end editorial still-life photograph of architectural project management materials in a refined New Delhi design studio, architectural drawings, measuring tape, pencil, stone samples, timber samples and material boards arranged precisely on a light oak table, soft natural daylight, warm beige and grey palette, sophisticated architectural practice atmosphere, no people, no text.",
  },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: "Services — Atharva Homes, New Delhi",
      },
      {
        name: "description",
        content:
          "Residential construction, interior design, turnkey projects, renovation, custom joinery and project management by Atharva Homes in New Delhi.",
      },
      {
        property: "og:title",
        content: "Services — Atharva Homes",
      },
      {
        property: "og:description",
        content:
          "Construction, interiors and project execution for considered homes in New Delhi.",
      },
    ],
  }),

  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1320px] px-6 pb-24 pt-36 lg:px-10 lg:pb-32 lg:pt-44">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Services
            </p>

            <h1 className="mt-7 max-w-4xl font-serif text-5xl font-normal leading-[1.05] tracking-[-0.025em] sm:text-6xl lg:text-8xl">
              Everything your home needs,
              <span className="block text-muted-foreground">
                under one roof.
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              From construction and interiors to renovation and project
              management, Atharva Homes brings the different parts of a
              project together through one coordinated approach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section>
        <div className="mx-auto grid max-w-[1320px] gap-12 px-6 py-20 lg:grid-cols-[1fr_1.2fr] lg:px-10 lg:py-28">
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Our Approach
            </p>
          </div>

          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Design and execution should speak the same language.
            </h2>

            <p className="mt-7 text-base leading-8 text-muted-foreground">
              A home is shaped by hundreds of decisions. Materials, structure,
              lighting, joinery, services and finishes all need to work
              together. Our approach keeps these decisions connected from the
              beginning, reducing unnecessary layers between the idea and the
              finished space.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
              className="grid border-b border-border py-20 lg:grid-cols-2 lg:gap-20 lg:py-28"
            >
              {/* Image */}
              <div
                className={`overflow-hidden ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              {/* Content */}
              <div
                className={`flex flex-col justify-center pt-10 lg:pt-0 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {service.number}
                  </span>

                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Atharva Homes
                  </span>
                </div>

                <h2 className="mt-8 max-w-xl font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl">
                  {service.title}
                </h2>

                <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground">
                  {service.summary}
                </p>

                <div className="mt-9 border-t border-border pt-6">
                  <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Includes
                  </p>

                  <ul className="grid gap-3 sm:grid-cols-2">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="text-sm text-foreground/80"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-[1320px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/45">
                Why Atharva Homes
              </p>

              <h2 className="mt-7 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
                One standard,
                <br />
                from drawing to handover.
              </h2>
            </div>

            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {[
                {
                  title: "One Team",
                  text: "Design, construction, services and interiors remain coordinated throughout the project.",
                },
                {
                  title: "Clear Costs",
                  text: "Transparent estimates and staged decisions help keep the project financially controlled.",
                },
                {
                  title: "Material Focus",
                  text: "Materials are selected for their character, performance and ability to age well.",
                },
                {
                  title: "Site Discipline",
                  text: "Regular reviews, quality checks and structured execution keep the work moving with clarity.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-neutral-950 p-8 lg:p-10"
                >
                  <h3 className="text-lg font-medium">{item.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-white/50">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-28 text-center lg:py-40">
          <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            Start a Project
          </p>

          <h2 className="mt-8 font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Have a home in mind?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-muted-foreground">
            Tell us what you are planning. We will start with the site, the
            brief and an honest conversation about what is possible.
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