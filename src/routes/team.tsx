import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Atharva Homes, New Delhi" },
      {
        name: "description",
        content: "The architects, designers and site engineers behind Atharva Homes in New Delhi.",
      },
      { property: "og:title", content: "Team — Atharva Homes" },
      {
        property: "og:description",
        content: "Meet the people who design and build Atharva Homes projects.",
      },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Team"
      title="The people behind the work"
      body="Full profiles are next. Names and biographies are still placeholders until you share the real details."
    />
  ),
});
