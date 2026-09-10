import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";

const team = [
  {
    number: "01",
    name: "Founder Name",
    role: "Founder & Principal Designer",
    image: "/images/team-founder.png",
    alt: "Professional editorial portrait of the founder and principal designer of Atharva Homes, standing in a refined contemporary architectural studio in New Delhi, wearing understated neutral clothing, natural window light, warm minimal interior with architectural drawings and material samples in the background, sophisticated candid portrait photography, 85mm lens, natural skin texture, no text.",
    bio: "The founder leads the studio's creative direction and remains closely involved in the design and execution of each project.",
  },
  {
    number: "02",
    name: "Architect Name",
    role: "Architect",
    image: "/images/team-architect.png",
    alt: "Professional editorial portrait of an architect working at Atharva Homes in New Delhi, contemporary architectural studio environment, reviewing architectural drawings beside a large work table with material samples, warm natural daylight, understated neutral clothing, sophisticated architectural practice photography, 50mm lens, realistic and natural, no text.",
    bio: "Responsible for translating project requirements into considered architectural layouts, drawings and design solutions.",
  },
  {
    number: "03",
    name: "Interior Designer Name",
    role: "Interior Designer",
    image: "/images/team-interior-designer.png",
    alt: "Professional editorial portrait of an interior designer working in a refined New Delhi architectural studio, surrounded by natural stone samples, timber samples, fabric swatches and material boards, soft daylight, warm minimal environment, understated neutral clothing, sophisticated editorial photography, 50mm lens, realistic and natural, no text.",
    bio: "Shapes the atmosphere of each interior through material selection, space planning, lighting and detailed design.",
  },
  {
    number: "04",
    name: "Site Engineer Name",
    role: "Site Engineer",
    image: "/images/team-site-engineer.png",
    alt: "Professional editorial portrait of a residential site engineer working on a premium construction project in New Delhi, standing inside a contemporary home under construction, reviewing architectural drawings and site details, clean organised construction environment, natural daylight, professional understated clothing, documentary architectural photography, 50mm lens, realistic and natural, no text.",
    bio: "Oversees on-site execution, quality control, coordination and the translation of drawings into built work.",
  },
];

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      {
        title: "Team — Atharva Homes, New Delhi",
      },
      {
        name: "description",
        content:
          "Meet the architects, designers and site professionals behind Atharva Homes and its residential projects in New Delhi.",
      },
      {
        property: "og:title",
        content: "Team — Atharva Homes",
      },
      {
        property: "og:description",
        content:
          "The people behind the design, construction and execution of Atharva Homes projects.",
      },
    ],
  }),

  component: TeamPage,
});

function TeamPage() {
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
              Team
            </p>

            <h1 className="mt-7 font-serif text-5xl font-normal leading-[1.05] tracking-[-0.025em] sm:text-6xl lg:text-8xl">
              The people behind
              <span className="block text-muted-foreground">
                the work.
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              A small, closely connected team bringing together design,
              construction and site expertise to create considered homes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Studio Introduction */}
      <section>
        <div className="mx-auto grid max-w-[1320px] gap-12 px-6 py-20 lg:grid-cols-[1fr_1.2fr] lg:px-10 lg:py-28">
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              The Studio
            </p>
          </div>

          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Small by design. Close to every project.
            </h2>

            <p className="mt-7 text-base leading-8 text-muted-foreground">
              We believe good work benefits from continuity. The people
              involved in understanding the brief should remain connected to
              the design, the site and the finished result.
            </p>

            <p className="mt-5 text-base leading-8 text-muted-foreground">
              Our team brings together different disciplines, but works as one
              studio. Architects, interior designers and site professionals
              collaborate throughout the process rather than working in
              isolated stages.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="flex items-end justify-between border-b border-border py-8">
            <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Our People
            </p>

            <p className="hidden text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:block">
              The Studio
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-20 py-16 sm:grid-cols-2 lg:gap-x-16 lg:gap-y-28 lg:py-24">
            {team.map((member, index) => (
              <motion.article
                key={member.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index % 2 === 1 ? 0.08 : 0,
                }}
                className={index % 2 === 1 ? "lg:mt-20" : ""}
              >
                <div className="overflow-hidden bg-muted">
                  <img
                    src={member.image}
                    alt={member.alt}
                    className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                  />
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <h2 className="font-serif text-2xl tracking-tight">
                      {member.name}
                    </h2>

                    <span className="text-[10px] text-muted-foreground">
                      {member.number}
                    </span>
                  </div>

                  <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {member.role}
                  </p>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Working Philosophy */}
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-[1320px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">
                How We Work
              </p>

              <h2 className="mt-7 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
                Different disciplines.
                <br />
                One standard.
              </h2>
            </div>

            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Stay Involved",
                  text: "The team stays connected from the initial brief through design, construction and final handover.",
                },
                {
                  number: "02",
                  title: "Work Together",
                  text: "Design decisions are made with construction realities, materials and execution in mind.",
                },
                {
                  number: "03",
                  title: "Pay Attention",
                  text: "Small details matter. We maintain a close eye on proportion, materials, workmanship and finish.",
                },
                {
                  number: "04",
                  title: "Take Responsibility",
                  text: "Every project has clear ownership, communication and accountability at every stage.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="bg-neutral-950 p-8 lg:p-10"
                >
                  <span className="text-[10px] tracking-[0.2em] text-white/30">
                    {item.number}
                  </span>

                  <h3 className="mt-8 text-lg font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/50">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join / Contact */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-28 text-center lg:py-40">
          <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            Work With Us
          </p>

          <h2 className="mt-8 font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s build something
            <br />
            worth coming home to.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-muted-foreground">
            If you are planning a new home, renovation or interior project,
            we would be happy to understand what you have in mind.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-8 border border-foreground px-7 py-4 text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-foreground hover:text-background"
            >
              Start a project

              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.5}
              />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center gap-3 px-7 py-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              About the studio
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}