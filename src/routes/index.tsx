import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SiteImage } from "@/components/SiteImage";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/services";
import { founder, team } from "@/lib/team";
import {
  galleryImages,
  heroImage,
  processSteps,
  site,
  teamImage,
  whyChooseUs,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atharva Homes — Construction & Interior Design, New Delhi" },
      {
        name: "description",
        content:
          "Atharva Homes designs and builds calm, material-led homes and interiors across New Delhi — construction, turnkey delivery, renovation and joinery.",
      },
      {
        property: "og:title",
        content: "Atharva Homes — Construction & Interior Design, New Delhi",
      },
      {
        property: "og:description",
        content:
          "A New Delhi practice designing and building calm, material-led homes and interiors.",
      },
    ],
  }),
  component: Home,
});

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{children}</p>
  );
}

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <SiteImage
            src={heroImage.src}
            prompt={heroImage.prompt}
            label={heroImage.caption}
            ratio="h-full"
            className="h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/25 to-ink/10" />
        </div>

        <div className="relative mx-auto w-full max-w-[1200px] px-6 pb-20 pt-40 lg:px-10 lg:pb-28">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[10px] uppercase tracking-[0.32em] text-background/80"
          >
            {site.tagline} &middot; {site.city}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-3xl font-serif text-4xl leading-[1.1] text-background sm:text-5xl lg:text-6xl"
          >
            Homes built with restraint, finished with care.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-background/85"
          >
            Construction and interior design under one roof — from the first drawing to the last
            coat of plaster.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-background px-7 py-4 text-xs uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-accent"
            >
              Book a consultation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-[1200px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Introduction</Eyebrow>
            <div className="mt-6 h-px w-16 bg-border" />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8">
            <p className="font-serif text-2xl leading-[1.45] text-foreground sm:text-3xl">
              {site.intro}
            </p>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Every project runs through one studio — design, structure, services and interiors —
              so decisions are made once and carried through to site without translation loss.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <Reveal className="max-w-2xl">
            <Eyebrow>Services</Eyebrow>
            <h2 className="mt-6 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              Six ways we work with you
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.08}>
                <article className="group">
                  <SiteImage
                    src={service.image.src}
                    prompt={service.image.prompt}
                    label={service.title}
                    ratio="aspect-[4/3]"
                  />
                  <h3 className="mt-6 font-serif text-xl text-foreground">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.summary}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-xs uppercase tracking-[0.12em] text-foreground/70"
                      >
                        <span className="mt-2 h-px w-4 shrink-0 bg-border" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-[1200px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Why choose us</Eyebrow>
            <h2 className="mt-6 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              Quiet work, held to a standard
            </h2>
          </Reveal>
          <div className="lg:col-span-8">
            <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
              {whyChooseUs.map((item, i) => (
                <Reveal key={item.title} delay={(i % 2) * 0.08}>
                  <div className="border-t border-border pt-6">
                    <h3 className="font-serif text-lg text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-muted py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 lg:grid-cols-12 lg:px-10">
          <Reveal className="lg:col-span-5">
            <SiteImage
              src={founder.image.src}
              prompt={founder.image.prompt}
              label="Founder portrait"
              ratio="aspect-[4/5]"
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7 lg:pl-6">
            <Eyebrow>Founder</Eyebrow>
            <h2 className="mt-6 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              {founder.name}
            </h2>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {founder.role}
            </p>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              {founder.bio}
            </p>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-3 border-b border-foreground pb-1 text-xs uppercase tracking-[0.18em] text-foreground"
            >
              More about the studio
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      {/* <section className="mx-auto max-w-[1200px] px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>Team</Eyebrow>
          <h2 className="mt-6 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
            A small studio, on every site
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Architects, interior designers and site engineers who stay with your project from
            drawing to handover. Names and profiles are placeholders for now.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <SiteImage
            src={teamImage.src}
            prompt={teamImage.prompt}
            label={teamImage.caption}
            ratio="aspect-[16/9]"
          />
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {team.map((person, i) => (
            <Reveal key={person.image.src} delay={i * 0.08}>
              <SiteImage
                src={person.image.src}
                prompt={person.image.prompt}
                label={person.role}
                ratio="aspect-[3/4]"
              />
              <h3 className="mt-5 font-serif text-lg text-foreground">{person.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {person.role}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12">
          <Link
            to="/team"
            className="inline-flex items-center gap-3 border-b border-foreground pb-1 text-xs uppercase tracking-[0.18em] text-foreground"
          >
            Meet the team
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section> */}

      {/* Gallery */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <Eyebrow>Projects</Eyebrow>
              <h2 className="mt-6 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                Selected work
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 border-b border-foreground pb-1 text-xs uppercase tracking-[0.18em] text-foreground"
            >
              View all projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, i) => (
              <Reveal key={image.src} delay={(i % 3) * 0.08}>
                <figure>
                  <SiteImage
                    src={image.src}
                    prompt={image.prompt}
                    label={image.caption}
                    ratio={i % 3 === 1 ? "aspect-[3/4]" : "aspect-[4/5]"}
                  />
                  <figcaption className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {image.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-[1200px] px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>Process</Eyebrow>
          <h2 className="mt-6 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
            Four steps, start to handover
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.08}>
              <div className="border-t border-border pt-6">
                <span className="font-serif text-3xl text-accent-foreground/40">{step.step}</span>
                <h3 className="mt-4 font-serif text-lg text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 text-center lg:px-10">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.32em] text-background/70">
              Start a project
            </p>
            <h2 className="mx-auto mt-6 max-w-2xl font-serif text-3xl leading-tight text-background sm:text-4xl">
              Tell us about the home you have in mind.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-background/75">
              A first conversation is a site visit, a brief and an honest view of what your budget
              can achieve in {site.city}.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 bg-background px-7 py-4 text-xs uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-accent"
            >
              Book a consultation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
