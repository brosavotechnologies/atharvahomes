import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

// =====================================================
// ADD YOUR PROJECT PHOTOS HERE
// =====================================================

const ongoingProjects = [
  {
    number: "01",
    title: "Ongoing Project 01",
    location: "New Delhi",
    year: "2026",
    image: "/images/ongoing-project-03.jpeg",
    alt: "Ongoing residential construction project",
    description:
      "A contemporary home currently taking shape through thoughtful design and careful execution.",
  },
  {
    number: "02",
    title: "Ongoing Project 02",
    location: "New Delhi",
    year: "2026",
    image: "/images/drawing-room.jpg",
    alt: "Ongoing residential construction project",
    description:
      "A residential project in progress, bringing modern architecture and quality craftsmanship together.",
  },
  {
    number: "03",
    title: "Ongoing Project 03",
    location: "New Delhi",
    year: "2026",
    image: "/images/construction-started.jpg",
    alt: "Ongoing residential construction project",
    description: "A new residential space taking shape with careful attention to detail.",
  },
];

const completedProjects = [
  {
    number: "01",
    title: "Completed Project 01",
    location: "New Delhi",
    year: "2026",
    image: "/images/almerah.jpg",
    alt: "Completed luxury residential project",
    description:
      "A thoughtfully designed home brought to life through quality materials and careful execution.",
  },
  {
    number: "02",
    title: "Completed Project 02",
    location: "New Delhi",
    year: "2026",
    image: "/images/bathroom.jpg",
    alt: "Completed luxury residential project",
    description:
      "A refined residential space shaped around comfort, proportion, and timeless design.",
  },
  {
    number: "03",
    title: "Completed Project 03",
    location: "New Delhi",
    year: "2026",
    image: "/images/hallway-2.jpg",
    alt: "Completed luxury residential project",
    description:
      "A completed residence combining thoughtful architecture with beautiful interior details.",
  },
];

// =====================================================
// PAGE ROUTE
// =====================================================

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      {
        title: "Projects — Atharva Homes, New Delhi",
      },
      {
        name: "description",
        content:
          "Explore ongoing and completed residential construction, interior design and renovation projects by Atharva Homes.",
      },
      {
        property: "og:title",
        content: "Projects — Atharva Homes",
      },
      {
        property: "og:description",
        content: "Explore ongoing and completed residential projects by Atharva Homes.",
      },
    ],
  }),
  component: ProjectsPage,
});

// =====================================================
// RESPONSIVE IMAGE COMPONENT
// DETECTS VERTICAL OR HORIZONTAL IMAGES
// =====================================================

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto aspect-[3/4] w-[72%] overflow-hidden bg-muted sm:w-[68%] lg:w-[62%]">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
      />
    </div>
  );
}

// =====================================================
// REUSABLE PROJECT SECTION
// =====================================================

function ProjectSection({
  title,
  subtitle,
  projects,
  status,
}: {
  title: string;
  subtitle: string;
  projects: typeof ongoingProjects;
  status: "Ongoing" | "Completed";
}) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Section heading */}
        <div className="flex flex-col gap-5 border-b border-border py-10 sm:flex-row sm:items-end sm:justify-between lg:py-14">
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              {status === "Ongoing" ? "In Progress" : "Our Portfolio"}
            </p>

            <h2 className="mt-5 font-serif text-4xl font-normal tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              {subtitle}
            </p>
          </div>

          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {projects.length} Projects
          </p>
        </div>

        {/* Project photo gallery */}
        {projects.length > 0 ? (
          <div className="grid items-start gap-x-8 gap-y-16 py-16 sm:grid-cols-2 lg:gap-x-12 lg:gap-y-24 lg:py-24">
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
                  {/* Photo with automatic orientation detection */}
                  <div className="relative">
                    <ProjectImage src={project.image} alt={project.alt} />

                    {/* Status badge */}
                    <div className="absolute left-5 top-5">
                      <span className="inline-flex items-center gap-2 bg-background/90 px-3 py-2 text-[10px] uppercase tracking-[0.15em] text-foreground backdrop-blur-sm">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            status === "Ongoing" ? "bg-amber-500" : "bg-emerald-600"
                          }`}
                        />
                        {status}
                      </span>
                    </div>

                    {/* Arrow */}
                    <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4 text-black" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Project details */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-serif text-2xl tracking-tight">{project.title}</h3>

                      <span className="text-[10px] text-muted-foreground">{project.number}</span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
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
        ) : (
          <div className="py-20 text-center text-sm text-muted-foreground">
            No projects added yet.
          </div>
        )}
      </div>
    </section>
  );
}

// =====================================================
// PROJECTS PAGE
// =====================================================

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
              <span className="block text-muted-foreground">lived in.</span>
            </h1>

            <p className="mt-10 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              A selection of residential spaces shaped through thoughtful design, honest materials
              and careful execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <ProjectSection
        title="Ongoing Projects"
        subtitle="A glimpse into the homes and spaces currently taking shape."
        projects={ongoingProjects}
        status="Ongoing"
      />

      {/* Completed Projects */}
      <ProjectSection
        title="Completed Projects"
        subtitle="A selection of homes brought to life through thoughtful design and careful execution."
        projects={completedProjects}
        status="Completed"
      />

      {/* Statement */}
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-[1320px] px-6 py-28 lg:px-10 lg:py-36">
          <div className="max-w-4xl">
            <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">Our Work</p>

            <h2 className="mt-8 font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              We are interested in the details that make a house feel like home.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/50">
              Proportion, light, texture and material are considered together to create spaces that
              feel natural rather than over-designed.
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
            Whether you are building from the ground up or transforming an existing home, we would
            be glad to hear about your project.
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
