import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Atharva Homes — Construction & Interiors, New Delhi" },
      {
        name: "description",
        content:
          "Atharva Homes is a New Delhi construction and interior design practice building calm, material-led homes.",
      },
      { property: "og:title", content: "About Atharva Homes" },
      {
        property: "og:description",
        content: "A New Delhi construction and interior design practice.",
      },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="About"
      title="About Atharva Homes"
      body="This page is next in line. The studio story, values and credentials will live here."
    />
  ),
});
