export type QeicEvent = {
  id: string;
  category: string;
  title: string;
  description: string;
  /** When it happens, e.g. "January 2027". */
  date?: string;
  status: string;
  /** Shown in the "Featured events" list on the home page. */
  featured?: boolean;
};

export const EVENTS: QeicEvent[] = [
  {
    id: "annual-conference",
    category: "Conference",
    title: "QEIC Annual Conference",
    description:
      "Our flagship annual conference, a culminating gathering of founders, students, and ideas from across the year.",
    date: "January 2027",
    status: "Registration soon",
    featured: true,
  },
];

export type Speaker = {
  id: string;
  name: string;
  image: string;
  event: string;
};

export const PREVIOUS_SPEAKERS: Speaker[] = [
  { id: "josh-domingues", name: "Josh Domingues", image: "/speakers/joshdomingues.jpg", event: "QEIC Speaker Event · 2026" },
  { id: "jake-karls", name: "Jake Karls", image: "/speakers/jakekarls.jpg", event: "QEIC Speaker Event · 2026" },
  { id: "phil-de-luna", name: "Phil De Luna", image: "/speakers/phildeluna.jpg", event: "QEIC Speaker Event · 2026" },
  { id: "andrew-black", name: "Andrew Black", image: "/speakers/andrewblack.jpg", event: "QEIC Speaker Event · 2026" },
  { id: "palmer-simpson", name: "Palmer Simpson", image: "/speakers/palmersimpson.jpg", event: "QEIC Speaker Event · 2026" },
];
