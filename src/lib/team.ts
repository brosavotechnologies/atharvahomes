export type Person = {
  /** Placeholder name — replace with the real team member's name. */
  name: string;
  /** Placeholder role — confirm before publishing. */
  role: string;
  /** Placeholder bio — no real biography has been provided yet. */
  bio: string;
  image: {
    src: string;
    /** Full image-generation prompt, used verbatim as the alt text. */
    prompt: string;
  };
};

/** Founder details are placeholders until the real information is supplied. */
export const founder: Person = {
  name: "Founder name (placeholder)",
  role: "Founder & Principal Designer",
  bio: "Founder biography placeholder. Add the real background here — years in practice, training, and the thinking behind Atharva Homes. No details have been assumed.",
  image: {
    src: "/images/founder-portrait.png",
    prompt:
      "Editorial portrait of a founder-architect standing in a warm minimal studio in New Delhi, soft window daylight from the left, calm neutral background in sand beige plaster, holding rolled drawings, wearing simple linen shirt, shallow depth of field, warm natural colour grading, 50mm lens, quiet confident expression, no text.",
  },
};

/** All team entries are placeholders. */
export const team: Person[] = [
  {
    name: "Team member name (placeholder)",
    role: "Architect",
    bio: "Short bio placeholder.",
    image: {
      src: "/images/team-member-01.png",
      prompt:
        "Editorial studio portrait of an architect in a warm minimal New Delhi office, soft diffused daylight, plain sand beige plaster background, simple neutral linen shirt, calm natural expression, shallow depth of field, 85mm lens, warm natural colour grading, no text.",
    },
  },
  {
    name: "Team member name (placeholder)",
    role: "Interior Designer",
    bio: "Short bio placeholder.",
    image: {
      src: "/images/team-member-02.png",
      prompt:
        "Editorial studio portrait of an interior designer in a warm minimal New Delhi office, soft diffused daylight from a large window, plain warm off-white plaster background, simple neutral clothing, calm natural expression, shallow depth of field, 85mm lens, warm natural colour grading, no text.",
    },
  },
  {
    name: "Team member name (placeholder)",
    role: "Site Engineer",
    bio: "Short bio placeholder.",
    image: {
      src: "/images/team-member-03.png",
      prompt:
        "Editorial portrait of a site engineer photographed against a plain warm sand plaster wall in New Delhi, soft outdoor shade lighting, simple work shirt, calm natural expression, shallow depth of field, 85mm lens, warm natural colour grading, no text.",
    },
  },
];
