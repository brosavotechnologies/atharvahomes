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
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const fields = [
    {
      label: "Name",
      value: String(formData.get("name") || "").trim(),
    },
    {
      label: "Email",
      value: String(formData.get("email") || "").trim(),
    },
    {
      label: "Phone",
      value: String(formData.get("phone") || "").trim(),
    },
    {
      label: "Project Type",
      value: String(formData.get("projectType") || "").trim(),
    },
    {
      label: "Project Details",
      value: String(formData.get("message") || "").trim(),
    },
  ];

  const providedFields = fields
    .filter((field) => field.value.length > 0)
    .map((field) => `${field.label}: ${field.value}`);

  const whatsappMessage = [
    "Hello Atharva Homes,",
    "",
    "I would like to enquire about a project.",
    "",
    ...providedFields,
    "",
    "Please contact me to discuss the next steps.",
  ].join("\n");

  const whatsappUrl = `https://wa.me/919711257574?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}

  return (
    <main className="bg-background text-foreground">
      <section className="min-h-[calc(100vh-100px)] border-b border-border">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-10 lg:py-20">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Contact
            </p>

            <h1 className="mt-6 max-w-[560px] font-serif text-5xl font-normal leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Let&apos;s talk about
              <span className="block text-muted-foreground">
                your project.
              </span>
            </h1>

            <p className="mt-7 max-w-[470px] text-base leading-7 text-muted-foreground">
              Tell us a little about your project and our team will get in
              touch to discuss the next steps.
            </p>

            <div className="mt-10 space-y-5 border-t border-border pt-7">
              <div className="flex items-start gap-4">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground"
                  strokeWidth={1.5}
                />

                <p className="text-sm leading-6">
                  71, Sant Nagar,
                  <br />
                  East of Kailash,
                  <br />
                  New Delhi, India — 110065
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Phone
                  className="h-4 w-4 shrink-0 text-muted-foreground"
                  strokeWidth={1.5}
                />

                <a
                  href="tel:+919711257574"
                  className="text-sm transition-colors hover:text-muted-foreground"
                >
                  +91 97112 57574
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Mail
                  className="h-4 w-4 shrink-0 text-muted-foreground"
                  strokeWidth={1.5}
                />

                <a
                  href="mailto:vkjha2710@gmail.com"
                  className="break-all text-sm transition-colors hover:text-muted-foreground"
                >
                  vkjha2710@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0"
          >
            <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Start Here
            </p>

            <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
              Tell us what you&apos;re planning.
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
                  className="mt-2 w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground"
                />
              </div>

              {/* Email and Phone */}
              <div className="grid gap-6 sm:grid-cols-2">
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
                    className="mt-2 w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground"
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
                    className="mt-2 w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground"
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
                  className="mt-2 w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm outline-none focus:border-foreground"
                >
                  <option value="" disabled>
                    Select project type
                  </option>
                  <option value="Residential Construction">
                    Residential Construction
                  </option>
                  <option value="Interior Design">Interior Design</option>
                  <option value="Turnkey Project">Turnkey Project</option>
                  <option value="Renovation & Remodelling">
                    Renovation & Remodelling
                  </option>
                  <option value="Other">Other</option>
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
                  rows={3}
                  placeholder="Tell us about your project..."
                  className="mt-2 w-full resize-none border-0 border-b border-border bg-transparent px-0 py-3 text-sm leading-6 outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground"
                />
              </div>

              {/* Submit */}
              <div className="pt-1">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-8 border border-foreground px-7 py-3.5 text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-foreground hover:text-background"
                >
                  Send Enquiry

                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                  />
                </button>

                <p className="mt-3 text-[11px] leading-5 text-muted-foreground">
                  Your enquiry will open directly in WhatsApp.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}