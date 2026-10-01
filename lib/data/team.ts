export type TeamMember = {
  id: string;
  name: string;
  role: string;
  /** Path under /public. Leave empty to show initials instead. */
  image: string;
  bio?: string;
  linkedin?: string;
};

export type Portfolio = {
  id: string;
  title: string;
  blurb?: string;
  members: TeamMember[];
};

export const PORTFOLIOS: Portfolio[] = [
  {
    id: "co-chairs",
    title: "Co Chairs",
    blurb: "Setting direction and leading the committee.",
    members: [
      { id: "madeleine-katz", name: "Madeleine Katz", role: "Co-Chair", image: "/team/madeleinekatz.jpg" },
      { id: "ethan-buckland", name: "Ethan Buckland", role: "Co-Chair", image: "/team/ethanbuckland.jpg" },
    ],
  },
  {
    id: "senior-advisor",
    title: "Senior Advisor",
    blurb: "Guidance and continuity from experienced leadership.",
    members: [
      { id: "flynn-casey", name: "Flynn Casey", role: "Senior Advisor", image: "/team/flynncasey.jpg" },
    ],
  },
  {
    id: "speakers",
    title: "Speakers",
    blurb: "Curating founders and leaders who share their stories.",
    members: [
      { id: "emily-robinson", name: "Emily Robinson", role: "Director", image: "/team/emilyrobinson.jpg" },
      { id: "kelly-hof", name: "Kelly Hof", role: "Coordinator", image: "/team/kellyhof.png" },
      { id: "lukas-bordonali", name: "Lukas Bordonali", role: "Coordinator", image: "/team/lukasbordonali.jpg" },
      { id: "seth-tobin", name: "Seth Tobin", role: "Coordinator", image: "/team/sethtobin.jpg" },
    ],
  },
  {
    id: "brand",
    title: "Brand",
    blurb: "Shaping how QEIC looks, sounds, and is remembered.",
    members: [
      { id: "isabel-brick", name: "Isabel Brick", role: "Director", image: "/team/isabelbrick.png" },
      { id: "charlotte-trotman", name: "Charlotte Trotman", role: "Coordinator", image: "/team/charlottetrotman.png" },
      { id: "dimitri-kalpakidis", name: "Dimitri Kalpakidis", role: "Coordinator", image: "/team/dimitrikalpakidis.jpg" },
      { id: "siena-scharfe", name: "Siena Scharfe", role: "Coordinator", image: "/team/sienascharfe.jpg" },
    ],
  },
  {
    id: "sponsorships",
    title: "Sponsorships",
    blurb: "Building partnerships that make our events possible.",
    members: [
      { id: "liam-nowak", name: "Liam Nowak", role: "Director", image: "/team/liamnowak.jpg" },
      { id: "baz-kedairy", name: "Baz Kedairy", role: "Coordinator", image: "/team/bazkedairy.jpg" },
      { id: "jacob-mann", name: "Jacob Mann", role: "Coordinator", image: "/team/jacobmann.png" },
      { id: "abby-dacks", name: "Abby Dacks", role: "Coordinator", image: "/team/abbydacks.jpg" },
    ],
  },
  {
    id: "events",
    title: "Events",
    blurb: "Planning and running everything QEIC hosts.",
    members: [
      { id: "mark-hogan", name: "Mark Hogan", role: "Director", image: "/team/markhogan.png" },
      { id: "owen-mack", name: "Owen Mack", role: "Coordinator", image: "/team/owenmack.jpg" },
      { id: "harrison-macdougall", name: "Harrison MacDougall", role: "Coordinator", image: "/team/harrisonmacdougall.png" },
      { id: "nanaki-johal", name: "Nanaki Johal", role: "Coordinator", image: "/team/nanakijohal.jpg" },
    ],
  },
  {
    id: "culture",
    title: "Culture",
    blurb: "Keeping the team connected, motivated, and enjoying it.",
    members: [
      { id: "tyler-trotman", name: "Tyler Trotman", role: "Director", image: "/team/tylertrotman.jpg" },
      { id: "rhys-weissenborn", name: "Rhys Weissenborn", role: "Coordinator", image: "/team/rhysweissenborn.jpg" },
    ],
  },
  {
    id: "engagement",
    title: "Engagement",
    blurb: "Growing our audience and student community.",
    members: [
      { id: "ezekiel-madruga", name: "Ezekiel Madruga", role: "Director", image: "/team/ezekielmadruga.png" },
      { id: "kristen-chung", name: "Kristen Chung", role: "Coordinator", image: "/team/kristenchung.png" },
      { id: "ellen-wilbur", name: "Ellen Wilbur", role: "Coordinator", image: "/team/ellenwilbur.jpg" },
      { id: "felipe-halters", name: "Felipe Halters", role: "Coordinator", image: "/team/felipehalters.png" },
    ],
  },
  {
    id: "logistics",
    title: "Logistics",
    blurb: "Handling the operations behind every event.",
    members: [
      { id: "elizabeth-amato", name: "Elizabeth Amato", role: "Director", image: "/team/elizabethamato.jpg" },
      { id: "annie-nichols", name: "Annie Nichols", role: "Coordinator", image: "/team/annienichols.jpg" },
    ],
  },
];
