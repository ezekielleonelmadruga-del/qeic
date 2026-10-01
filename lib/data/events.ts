export type QeicEvent = {
  id: string;
  category: string;
  title: string;
  description: string;
  status: string;
  /** Shown in the "Featured events" list on the home page. */
  featured?: boolean;
};

export const EVENTS: QeicEvent[] = [
  {
    id: "ace-beverage-innovation-day",
    category: "Innovation Day",
    title: "Ace Beverage Innovation Day",
    description:
      "A hands-on innovation day hosted in partnership with Ace Beverage, giving students a firsthand look at how products are developed and brought to market. Further details to follow.",
    status: "Registration soon",
    featured: true,
  },
  {
    id: "venture-capital-speaker-event",
    category: "Speaker Event",
    title: "Venture Capital Speaker Event",
    description:
      "A prospective venture capital event connecting students directly with active investors. Details to be announced.",
    status: "Registration soon",
    featured: true,
  },
  {
    id: "qec-x-qiec",
    category: "Collaboration",
    title: "QEC x QIEC Event",
    description:
      "A prospective collaboration with QEC that brings two communities together for a larger shared experience. Details to be announced.",
    status: "Registration soon",
    featured: true,
  },
  {
    id: "annual-conference",
    category: "Conference",
    title: "QEIC Annual Conference",
    description:
      "Our flagship annual conference, a culminating gathering of founders, students, and ideas from across the year.",
    status: "Registration soon",
  },
  {
    id: "new-introduction",
    category: "New This Year",
    title: "A New Introduction",
    description:
      "A new addition to the QEIC calendar this year. Full details will be announced in due course.",
    status: "Registration soon",
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
