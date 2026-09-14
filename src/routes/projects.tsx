import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

// =====================================================
// PROJECT TYPES
// =====================================================

type Orientation = "horizontal" | "vertical";

type Project = {
  number: string;
  title: string;
  location: string;
  year: string;
  image: string;
  alt: string;
  description: string;
  orientation?: Orientation;
  beforeImage?: string;
  afterImage?: string;
  beforeOrientation?: Orientation;
  afterOrientation?: Orientation;
};

// =====================================================
// PROJECT DATA
// =====================================================

const ongoingProjects: Project[] = [
  {
    number: "01",
    title: "Ongoing Project 01",
    location: "New Delhi",
    year: "2026",
    image: "/images/ongoing-project-03.jpeg",
    alt: "Ongoing residential construction project",
    description:
      "A contemporary home currently taking shape through thoughtful design and careful execution.",
    orientation: "vertical",
  },
  {
    number: "02",
    title: "Ongoing Project 02",
    location: "New Delhi",
    year: "2026",
    image: "/images/drawing-room.jpg",
    alt: "Ongoing residential interior project",
    description:
      "A residential project in progress, bringing modern architecture and quality craftsmanship together.",
    orientation: "vertical",
  },
];

const completedProjects: Project[] = [
  {
    number: "01",
    title: "Completed Project 01",
    location: "New Delhi",
    year: "2026",
    image: "/images/almerah.jpg",
    alt: "Completed luxury residential project",
    description:
      "A thoughtfully designed home brought to life through quality materials and careful execution.",
    orientation: "vertical",
  },
  {
    number: "02",
    title: "Completed Project 02",
    location: "New Delhi",
    year: "2026",
    image: "/images/bathroom.jpg",
    alt: "Completed luxury bathroom interior",
    description:
      "A refined residential space shaped around comfort, proportion, and timeless design.",
    orientation: "vertical",
  },
  {
    number: "03",
    title: "Completed Project 03",
    location: "New Delhi",
    year: "2026",
    image: "/images/hallway-2.jpg",
    alt: "Completed residential hallway interior",
    description:
      "A thoughtfully finished hallway designed with balanced proportions, warm materials, and refined interior detailing.",
    orientation: "horizontal",
  },
  {
    number: "04",
    title: "Completed Project 04",
    location: "New Delhi",
    year: "2026",
    image: "/images/completed-project-03.jpeg",
    alt: "Completed residential kitchen interior",
    description:
      "A modern kitchen completed with clean cabinetry, durable surfaces, and carefully integrated functional details.",
    orientation: "horizontal",
  },
  {
    number: "05",
    title: "Completed Project 05",
    location: "New Delhi",
    year: "2026",
    image: "/images/completed-project-05.jpeg",
    alt: "Completed residential interior project",
    description:
      "A refined residential interior combining thoughtful planning, elegant finishes, and a comfortable everyday atmosphere.",
    orientation: "vertical",
  },
  // {
  //   number: "04",
  //   title: "Completed Project 04",
  //   location: "New Delhi",
  //   year: "2026",
  //   image: "/images/completed-project-03.jpeg",
  //   alt: "Completed residential project",
  //   description:
  //     "A complete transformation from construction stage to a finished residential space.",
  //   beforeImage: "/images/construction-started.jpg",
  //   afterImage: "/images/completed-project-03.jpeg",
  //   beforeOrientation: "vertical",
  //   afterOrientation: "vertical",
  // },
];

// =====================================================
// ROUTE
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
// IMAGE COMPONENT
// =====================================================

function ProjectImage({
  src,
  alt,
  orientation = "horizontal",
}: {
  src: string;
  alt: string;
  orientation?: Orientation;
}) {
  return (
    <div
      className={`group relative w-full overflow-hidden ${
        orientation === "vertical" ? "aspect-[3/4]" : "aspect-[3/2]"
      }`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="block h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.025]"
      />
    </div>
  );
}

// =====================================================
// BEFORE AND AFTER COMPONENT
// =====================================================

function BeforeAfterImages({
  beforeImage,
  afterImage,
  beforeOrientation = "horizontal",
  afterOrientation = "horizontal",
}: {
  beforeImage: string;
  afterImage: string;
  beforeOrientation?: Orientation;
  afterOrientation?: Orientation;
}) {
  return (
    <div className="col-span-1 grid w-full grid-cols-1 gap-6 md:col-span-2 md:grid-cols-2">
      <div className="min-w-0">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Before
          </span>

          <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">01</span>
        </div>

        <ProjectImage
          src={beforeImage}
          alt="Project before construction"
          orientation={beforeOrientation}
        />
      </div>

      <div className="min-w-0">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            After
          </span>

          <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">02</span>
        </div>

        <ProjectImage
          src={afterImage}
          alt="Project after completion"
          orientation={afterOrientation}
        />
      </div>
    </div>
  );
}

// =====================================================
// PROJECT CARD
// =====================================================

function ProjectCard({ project, status }: { project: Project; status: "Ongoing" | "Completed" }) {
  const hasBeforeAfter = Boolean(project.beforeImage && project.afterImage);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7 }}
      className={hasBeforeAfter ? "col-span-1 md:col-span-2" : ""}
    >
      <Link to="/contact" className="group block" aria-label={`Enquire about ${project.title}`}>
        <div className="relative">
          {hasBeforeAfter ? (
            <BeforeAfterImages
              beforeImage={project.beforeImage!}
              afterImage={project.afterImage!}
              beforeOrientation={project.beforeOrientation}
              afterOrientation={project.afterOrientation}
            />
          ) : (
            <ProjectImage src={project.image} alt={project.alt} orientation={project.orientation} />
          )}

          <div className="pointer-events-none absolute left-5 top-5">
            <span className="inline-flex items-center gap-2 bg-background/90 px-3 py-2 text-[10px] uppercase tracking-[0.15em] text-foreground backdrop-blur-sm">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  status === "Ongoing" ? "bg-amber-500" : "bg-emerald-600"
                }`}
              />

              {status}
            </span>
          </div>

          <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4 text-black" strokeWidth={1.5} />
          </div>
        </div>

        <div className="mt-7">
          <div className="flex items-start justify-between gap-5">
            <h3 className="font-serif text-2xl tracking-tight sm:text-3xl">{project.title}</h3>

            <span className="pt-1 text-[10px] text-muted-foreground">{project.number}</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <span>{project.location}</span>
            <span>{project.year}</span>
          </div>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">
            {project.description}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}

// =====================================================
// PROJECT SECTION
// =====================================================

function ProjectSection({
  title,
  subtitle,
  projects,
  status,
}: {
  title: string;
  subtitle: string;
  projects: Project[];
  status: "Ongoing" | "Completed";
}) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="flex flex-col gap-6 border-b border-border py-12 sm:flex-row sm:items-end sm:justify-between lg:py-16">
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

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 items-start gap-x-8 gap-y-20 py-16 md:grid-cols-2 lg:gap-x-12 lg:gap-y-28 lg:py-24">
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} status={status} />
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
