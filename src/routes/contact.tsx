import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Atharva Homes — New Delhi",
      },
      {
        name: "description",
        content:
          "Start a construction, interior design, renovation or turnkey project with Atharva Homes in New Delhi. Book a consultation.",
      },
      {
        property: "og:title",
        content: "Contact Atharva Homes",
      },
      {
        property: "og:description",
        content:
          "Start a conversation about your construction or interior project with Atharva Homes.",
      },
    ],
  }),

  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1320px] px-6 pb-20 pt-36 lg:px-10 lg:pb-28 lg:pt-44">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl"
          >
            <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Contact
            </p>

            <h1 className="mt-7 font-serif text-5xl font-normal leading-[1.05] tracking-[-0.025em] sm:text-6xl lg:text-8xl">
              Let&apos;s talk about
              <span className="block text-muted-foreground">
                your project.
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Whether you are building a new home, renovating an existing
              space or planning its interiors, start by telling us a little
              about what you have in mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Area */}
      <section>
        <div className="mx-auto grid max-w-[1320px] gap-16 px-6 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-28">
          {/* Contact Information */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Start Here
            </p>

            <h2 className="mt-6 font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
              Tell us what you&apos;re planning.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">
              A little information about your project helps us understand what
              you need and prepare for an initial conversation.
            </p>

            {/* Contact Details */}
            <div className="mt-12 space-y-7 border-t border-border pt-8">
              <div className="flex gap-5">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground"
                  strokeWidth={1.5}
                />

                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Studio
                  </p>

                  <p className="mt-2 text-sm leading-6">
                    71, Sant Nagar,
                    <br />
                    East of Kailash,
                    <br />
                    New Delhi, India — 110065
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground"
                  strokeWidth={1.5}
                />

                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Phone
                  </p>

                  <a
                    href="tel:+919711257574"
                    className="mt-2 block text-sm transition-colors hover:text-muted-foreground"
                  >
                    +91 97112 57574
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground"
                  strokeWidth={1.5}
                />

                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Email
                  </p>

                  <a
                    href="mailto:vkjha2710@gmail.com"
                    className="mt-2 block break-all text-sm transition-colors hover:text-muted-foreground"
                  >
                    vkjha2710@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />

                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Studio Hours
                  </p>

                  <p className="mt-2 text-sm leading-6">
                    Monday — Saturday
                    <br />
                    10:00 — 19:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
            <form
              action="#"
              method="POST"
              className="space-y-10"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Your Name *
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="mt-4 w-full border-0 border-b border-border bg-transparent px-0 py-4 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground"
                />
              </div>

              {/* Contact */}
              <div className="grid gap-10 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    Email *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="mt-4 w-full border-0 border-b border-border bg-transparent px-0 py-4 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91"
                    className="mt-4 w-full border-0 border-b border-border bg-transparent px-0 py-4 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div>
                <label
                  htmlFor="projectType"
                  className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Project Type *
                </label>

                <select
                  id="projectType"
                  name="projectType"
                  required
                  defaultValue=""
                  className="mt-4 w-full border-0 border-b border-border bg-transparent px-0 py-4 text-sm outline-none focus:border-foreground"
                >
                  <option value="" disabled>
                    Select project type
                  </option>
                  <option value="residential-construction">
                    Residential Construction
                  </option>
                  <option value="interior-design">
                    Interior Design
                  </option>
                  <option value="turnkey">
                    Turnkey Project
                  </option>
                  <option value="renovation">
                    Renovation & Remodelling
                  </option>
                  <option value="joinery">
                    Modular & Custom Joinery
                  </option>
                  <option value="project-management">
                    Project Management
                  </option>
                  <option value="other">
                    Other
                  </option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="location"
                  className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Project Location
                </label>

                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="City / Area"
                  className="mt-4 w-full border-0 border-b border-border bg-transparent px-0 py-4 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground"
                />
              </div>

              {/* Budget */}
              <div>
                <label
                  htmlFor="budget"
                  className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Approximate Budget
                </label>

                <select
                  id="budget"
                  name="budget"
                  defaultValue=""
                  className="mt-4 w-full border-0 border-b border-border bg-transparent px-0 py-4 text-sm outline-none focus:border-foreground"
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  <option value="under-25">
                    Under ₹25 Lakhs
                  </option>
                  <option value="25-50">
                    ₹25 — ₹50 Lakhs
                  </option>
                  <option value="50-1cr">
                    ₹50 Lakhs — ₹1 Crore
                  </option>
                  <option value="1-2cr">
                    ₹1 — ₹2 Crore
                  </option>
                  <option value="2cr-plus">
                    ₹2 Crore+
                  </option>
                  <option value="discuss">
                    Prefer to discuss
                  </option>
                </select>
              </div>

              {/* Timeline */}
              <div>
                <label
                  htmlFor="timeline"
                  className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Expected Timeline
                </label>

                <select
                  id="timeline"
                  name="timeline"
                  defaultValue=""
                  className="mt-4 w-full border-0 border-b border-border bg-transparent px-0 py-4 text-sm outline-none focus:border-foreground"
                >
                  <option value="" disabled>
                    Select timeline
                  </option>
                  <option value="immediate">
                    Ready to start
                  </option>
                  <option value="1-3">
                    Within 1 — 3 months
                  </option>
                  <option value="3-6">
                    Within 3 — 6 months
                  </option>
                  <option value="6-12">
                    Within 6 — 12 months
                  </option>
                  <option value="planning">
                    Still planning
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Tell Us About Your Project *
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about the property, what you are planning and anything else we should know."
                  className="mt-4 w-full resize-none border-0 border-b border-border bg-transparent px-0 py-4 text-sm leading-7 outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-8 border border-foreground px-7 py-4 text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-foreground hover:text-background"
                >
                  Send Enquiry

                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                  />
                </button>

                <p className="mt-5 max-w-lg text-[11px] leading-6 text-muted-foreground">
                  By submitting this form, you agree to be contacted regarding
                  your project enquiry.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-[1320px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">
                What Happens Next
              </p>

              <h2 className="mt-7 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
                A straightforward
                <br />
                first conversation.
              </h2>
            </div>

            <div>
              {[
                {
                  number: "01",
                  title: "We review your enquiry",
                  text: "We look through your requirements, project type, location and timeline.",
                },
                {
                  number: "02",
                  title: "We speak",
                  text: "We arrange an initial conversation to understand the project in more detail.",
                },
                {
                  number: "03",
                  title: "We understand the site",
                  text: "Where appropriate, the next step is a site visit and a clearer understanding of the scope.",
                },
                {
                  number: "04",
                  title: "We define the way forward",
                  text: "We discuss the appropriate service, scope, budget and next steps for your project.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="grid gap-5 border-t border-white/10 py-7 sm:grid-cols-[60px_1fr_1fr]"
                >
                  <span className="text-[10px] tracking-[0.2em] text-white/30">
                    {step.number}
                  </span>

                  <h3 className="text-base font-medium">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-7 text-white/45">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-28 text-center lg:py-36">
          <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            Atharva Homes
          </p>

          <h2 className="mt-8 font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            A better home begins
            <br />
            with a conversation.
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-muted-foreground">
            Share your idea with us. We&apos;ll take it from there.
          </p>
        </div>
      </section>
    </main>
  );
}