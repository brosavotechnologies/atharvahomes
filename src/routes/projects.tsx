import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Atharva Homes, New Delhi" },
      {
        name: "description",
        content: "Completed homes and interiors by Atharva Homes across New Delhi.",
      },
      { property: "og:title", content: "Projects — Atharva Homes" },
      {
        property: "og:description",
        content: "A selection of completed homes and interiors in New Delhi.",
      },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Projects"
      title="Selected work"
      body="The full project archive is next. A first selection appears in the home page gallery."
    />
  ),
});
