import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Atharva Homes — New Delhi" },
      {
        name: "description",
        content:
          "Start a construction or interior project with Atharva Homes in New Delhi. Book a consultation.",
      },
      { property: "og:title", content: "Contact Atharva Homes" },
      {
        property: "og:description",
        content: "Book a consultation with the Atharva Homes studio in New Delhi.",
      },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Contact"
      title="Book a consultation"
      body="The enquiry form is next. Address, phone and email are placeholders until you share the real details."
    />
  ),
});
