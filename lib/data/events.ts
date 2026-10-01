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
      "Our flagship annual conference, bringing together entrepreneurs, students, and industry leaders through inspiring conversations, networking, and engaging activities.",
    date: "January 2027",
    status: "Registration soon",
    featured: true,
  },
];

export type Speaker = {
  id: string;
  name: string;
  /** Role and company, e.g. "Co-Founder, Midday Squares". */
  title: string;
  image: string;
  linkedin?: string;
  event: string;
};

const SPEAKER_EVENT = "QEIC Speaker Event · 2026";

export const PREVIOUS_SPEAKERS: Speaker[] = [
  {
    id: "andrew-black",
    name: "Andrew Black",
    title: "Founder, Brand Project VC",
    image: "/speakers/andrewblack.jpg",
    linkedin: "https://www.linkedin.com/in/andrew-black-2b3764/",
    event: SPEAKER_EVENT,
  },
  {
    id: "phil-de-luna",
    name: "Phil De Luna",
    title: "Co-Founder & CTO, Cura",
    image: "/speakers/phildeluna.jpg",
    linkedin: "https://www.linkedin.com/in/phildeluna/",
    event: SPEAKER_EVENT,
  },
  {
    id: "josh-domingues",
    name: "Josh Domingues",
    title: "Founder & CEO, MedWallet",
    image: "/speakers/joshdomingues.jpg",
    linkedin: "https://www.linkedin.com/in/joshdomingues/",
    event: SPEAKER_EVENT,
  },
  {
    id: "palmer-simpson",
    name: "Palmer Simpson",
    title: "Co-Founder, Connect-X",
    image: "/speakers/palmersimpson.jpg",
    linkedin: "https://www.linkedin.com/in/palmersimpson/",
    event: SPEAKER_EVENT,
  },
  {
    id: "jake-karls",
    name: "Jake Karls",
    title: "Co-Founder, Midday Squares",
    image: "/speakers/jakekarls.jpg",
    linkedin: "https://www.linkedin.com/in/jake-karls-653106ba/",
    event: SPEAKER_EVENT,
  },
];
