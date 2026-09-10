import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Atharva Homes, New Delhi" },
      {
        name: "description",
        content:
          "Construction, interior design, turnkey delivery, renovation, joinery and project management in New Delhi.",
      },
      { property: "og:title", content: "Services — Atharva Homes" },
      {
        property: "og:description",
        content: "Construction and interior design services across New Delhi.",
      },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Services"
      title="What we do"
      body="Detailed service pages are next. The six services are already summarised on the home page."
    />
  ),
});
