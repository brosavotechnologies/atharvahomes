import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Atharva Homes — Construction & Interiors, New Delhi",
      },
      {
        name: "description",
        content:
          "Atharva Homes is a New Delhi construction and interior design practice creating thoughtfully designed homes through architecture, construction and interiors.",
      },
      {
        property: "og:title",
        content: "About Atharva Homes",
      },
      {
        property: "og:description",
        content:
          "A New Delhi construction and interior design practice creating considered, enduring homes.",
      },
    ],
  }),

  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="bg-white text-neutral-900">
      {/* Hero */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-neutral-500">
              About Atharva Homes
            </p>

            <h1 className="text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
              We create homes
              <br />
              <span className="text-neutral-400">made to be lived in.</span>
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-neutral-600 lg:text-xl">
              Atharva Homes is a New Delhi construction and interior design
              practice focused on creating thoughtful, enduring and deeply
              personal spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section>
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Who We Are
            </p>

            <h2 className="mt-6 max-w-xl text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              Building with clarity, care and purpose.
            </h2>
          </div>

          <div className="max-w-xl space-y-6 text-base leading-8 text-neutral-600">
            <p>
              Atharva Homes brings together construction, architecture,
              interiors and project execution under one considered approach.
              We believe a well-designed home should not only look beautiful,
              but also feel effortless to live in.
            </p>

            <p>
              From the first conversation to the final handover, we work
              closely with our clients to understand how they want to live,
              what they value and what they expect from their space.
            </p>

            <p>
              Our work is guided by proportion, natural materials, thoughtful
              detailing and disciplined execution. The result is architecture
              that feels refined without becoming excessive.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
                Our Philosophy
              </p>

              <h2 className="mt-6 text-4xl font-light leading-tight tracking-tight sm:text-5xl">
                Less noise.
                <br />
                More intention.
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Thoughtful Design",
                  body: "Every decision begins with how a space should feel, function and evolve over time.",
                },
                {
                  number: "02",
                  title: "Material Honesty",
                  body: "We favour natural materials, restrained palettes and details that age with character.",
                },
                {
                  number: "03",
                  title: "Craftsmanship",
                  body: "Good design means little without careful execution. We maintain close attention to detail throughout.",
                },
                {
                  number: "04",
                  title: "Built to Last",
                  body: "Our aim is to create spaces that remain relevant, comfortable and beautiful for years.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="bg-neutral-950 p-8 lg:p-10"
                >
                  <span className="text-sm text-neutral-500">
                    {item.number}
                  </span>

                  <h3 className="mt-10 text-xl font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-neutral-400">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              What We Do
            </p>

            <h2 className="mt-6 text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              From idea to finished home.
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Our integrated approach allows design and execution to work
              together from the beginning.
            </p>
          </div>

          <div className="mt-16 divide-y divide-neutral-200 border-y border-neutral-200">
            {[
              {
                title: "Residential Construction",
                description:
                  "End-to-end construction for new homes, residences and private developments.",
              },
              {
                title: "Interior Design",
                description:
                  "Calm, functional interiors shaped around the people who use them.",
              },
              {
                title: "Renovation & Transformation",
                description:
                  "Thoughtful upgrades that improve existing spaces without losing their character.",
              },
              {
                title: "Project Execution",
                description:
                  "Coordinated execution, material selection and on-site management from start to finish.",
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className="grid gap-4 py-8 md:grid-cols-[80px_1fr_1fr] md:items-center"
              >
                <span className="text-sm text-neutral-400">
                  0{index + 1}
                </span>

                <h3 className="text-xl font-medium tracking-tight">
                  {service.title}
                </h3>

                <p className="max-w-lg text-sm leading-7 text-neutral-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder / Leadership */}
      <section className="bg-neutral-100">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Leadership
            </p>

            <h2 className="mt-6 text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              A personal approach to every project.
            </h2>
          </div>

          <div className="max-w-xl">
            <div className="aspect-[4/3] bg-neutral-200">
              <img
                src="/images/founder.png"
                alt="Professional portrait of the founder of Atharva Homes"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-8">
              <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
                Founder & Director
              </p>

              <h3 className="mt-2 text-2xl font-medium">
                Atharva Homes
              </h3>

              <p className="mt-5 text-base leading-8 text-neutral-600">
                The practice is built around a simple belief: every project
                deserves personal attention. From understanding a client's
                lifestyle to overseeing the smallest finishing detail, our
                leadership remains closely involved throughout the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Our Process
              </p>

              <h2 className="mt-6 text-4xl font-light leading-tight tracking-tight sm:text-5xl">
                A clear process from first conversation to final detail.
              </h2>
            </div>

            <div className="space-y-0">
              {[
                {
                  number: "01",
                  title: "Understand",
                  body: "We begin by understanding your requirements, lifestyle, aspirations, budget and the character of the site.",
                },
                {
                  number: "02",
                  title: "Design",
                  body: "Ideas become a considered design through material studies, spatial planning and careful detailing.",
                },
                {
                  number: "03",
                  title: "Build",
                  body: "Our team coordinates execution, vendors, materials and site activities with a strong focus on quality.",
                },
                {
                  number: "04",
                  title: "Deliver",
                  body: "Every project is reviewed carefully before handover so the finished space reflects the original vision.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="grid gap-6 border-t border-neutral-200 py-8 md:grid-cols-[70px_180px_1fr]"
                >
                  <span className="text-sm text-neutral-400">
                    {step.number}
                  </span>

                  <h3 className="text-xl font-medium">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-7 text-neutral-600">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-5xl px-6 py-28 text-center lg:py-40">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Let&apos;s Build Something Meaningful
          </p>

          <h2 className="mt-8 text-4xl font-light leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Your home should feel like
            <br />
            <span className="text-neutral-400">it could only be yours.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-neutral-600">
            Tell us about your project, and let&apos;s explore what we can
            create together.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-flex items-center border border-neutral-900 px-7 py-4 text-sm font-medium transition hover:bg-neutral-900 hover:text-white"
          >
            Start a Conversation
            <span className="ml-8">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}