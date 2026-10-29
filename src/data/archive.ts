// All collection and item content lives here so you can update the archive
// without digging through page components.
export type Collection = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  countLabel: string;
  accent: string;
  image: string;
};

export type ArchiveItem = {
  id: string;
  collectionSlug: string;
  title: string;
  subtitle: string;
  year: string;
  location: string;
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
};

export const collections: Collection[] = [
  // {
  //   slug: "live",
  //   title: "Live history",
  //   eyebrow: "THE PIT",
  //   description: "Shows, setlists, venues, and the nights that made the music feel enormous.",
  //   countLabel: "Concert memories",
  //   accent: "crimson",
  //   image: "images/hero/hero-stage.jpg",
  // },
    {
    slug: "festivals",
    title: "Festivals",
    eyebrow: "MULTIPLE DAYS. ONE OBSESSION.",
    description: "Festival editions, lineups, photographs, and the places that brought everyone together.",
    countLabel: "Festival editions",
    accent: "orange",
    image: "/images/hero-stage.jpg",
  },
  {
    slug: "vinyl",
    title: "Vinyl vault",
    eyebrow: "ON THE TURNTABLE",
    description: "The records that keep finding their way back onto the turntable.",
    countLabel: "Records",
    accent: "violet",
    image: "/images/vinyl-main.jpg",
  },
  // {
  //   slug: "signed-vinyl",
  //   title: "Signed vinyl",
  //   eyebrow: "INK & GROOVES",
  //   description: "Records with a story beyond the music: signatures, encounters, and memories.",
  //   countLabel: "Signed records",
  //   accent: "amber",
  //   image: "/images/signed-vinyl.svg",
  // },
  // {
  //   slug: "wristbands",
  //   title: "Wristbands",
  //   eyebrow: "PROOF OF ENTRY",
  //   description: "Fabric, plastic, faded ink, and tiny artifacts from days spent at festivals.",
  //   countLabel: "Wristbands",
  //   accent: "green",
  //   image: "/images/wristbands.svg",
  // },
  {
    slug: "cups",
    title: "Festival cups",
    eyebrow: "COLLECTED IN THE CROWD",
    description: "Reusable cups and odd souvenirs collected along the festival circuit.",
    countLabel: "Cups",
    accent: "blue",
    image: "/images/cups-main.jpg",
  },
  {
    slug: "meet-and-greets",
    title: "Meet & greets",
    eyebrow: "BACKSTAGE STORIES",
    description: "Brief conversations and unforgettable moments with the people behind the music.",
    countLabel: "Encounters",
    accent: "pink",
    image: "/images/meet-greet-kreator.jpg",
  },
];

// Example entries are deliberately labeled as sample data. Replace them with
// your own memories and image paths when you begin cataloguing your collection.
export const archiveItems: ArchiveItem[] = [
  {
    id: "hellfest-2014",
    collectionSlug: "festivals",
    title: "Hellfest 2014",
    subtitle: "Festival edition",
    year: "2014",
    location: "Clisson, France",
    description: "A festival entry ready for your photos, lineup notes, and personal memories. Replace this sample with your own record.",
    image: "/images/hellfest2014.jpg",
    tags: ["Festival", "France", "Live music"],
    featured: true,
  },
  {
    id: "festival-edition-02",
    collectionSlug: "festivals",
    title: "Summer Breeze 2017",
    subtitle: "Festival edition",
    year: "2017",
    location: "Dinkelsbühl, Germany",
    description: "Use this page to collect festival photos, lineup highlights, set notes, and your favorite moments.",
    image: "/images/summerbreeze2017.jpg",
    tags: ["Festival", "Memories"],
  },
  {
    id: "ba-2024",
    collectionSlug: "festivals",
    title: "Brutal Assault 2024",
    subtitle: "Festival edition",
    year: "2024",
    location: "Josefov Fortress, Jaroměř, Czech Republic",
    description: "A festival entry ready for your photos, lineup notes, and personal memories. Replace this sample with your own record.",
    image: "/images/brutalassault2024.jpg",
    tags: ["Festival", "Czech Republic", "Live music"],
    featured: true,
  },

  {
    id: "turntable-session-01",
    collectionSlug: "vinyl",
    title: "Now spinning",
    subtitle: "Turntable session",
    year: "2026",
    location: "Listening room",
    description: "Use this entry for an album you love, including pressing details, label, release year, and why it matters to you.",
    image: "/images/vinyl.svg",
    tags: ["Vinyl", "Now spinning"],
    featured: true,
  },
  {
    id: "signed-record-01",
    collectionSlug: "signed-vinyl",
    title: "A record with a story",
    subtitle: "Signed edition",
    year: "2025",
    location: "Personal collection",
    description: "Add the album, artist, signature details, and the story behind how you got it signed.",
    image: "/images/signed-vinyl.svg",
    tags: ["Signed", "Vinyl", "Memorabilia"],
  },
  {
    id: "show-memory-01",
    collectionSlug: "live",
    title: "A night in the pit",
    subtitle: "Live show",
    year: "2025",
    location: "Add venue",
    description: "Add the band, venue, date, setlist, ticket, and any photographs you took at the show.",
    image: "/images/live.svg",
    tags: ["Concert", "Live"],
    featured: true,
  },
  {
    id: "wristband-01",
    collectionSlug: "wristbands",
    title: "Festival wristband",
    subtitle: "Worn keepsake",
    year: "2024",
    location: "Festival archive",
    description: "Record the festival, edition, dates, and any small detail that brings the experience back.",
    image: "/images/wristbands.svg",
    tags: ["Wristband", "Festival"],
  },
  {
    id: "cup-01",
    collectionSlug: "cups",
    title: "Festival cup",
    subtitle: "Reusable cup",
    year: "2024",
    location: "Festival archive",
    description: "Add the printed design, festival, year, and where you found or collected the cup.",
    image: "/images/cups.svg",
    tags: ["Cup", "Merchandise"],
  },
  {
    id: "meet-and-greet-01",
    collectionSlug: "meet-and-greets",
    title: "An artist encounter",
    subtitle: "Meet & greet",
    year: "2023",
    location: "Add venue",
    description: "Document who you met, where it happened, and the story you want to remember.",
    image: "/images/meet-and-greets.svg",
    tags: ["Artist", "Memory"],
  },
];

export function getCollection(slug: string) {
  return collections.find((collection) => collection.slug === slug);
}

export function getItemsForCollection(slug: string) {
  return archiveItems.filter((item) => item.collectionSlug === slug);
}

export function getArchiveItem(slug: string, id: string) {
  return archiveItems.find((item) => item.collectionSlug === slug && item.id === id);
}
