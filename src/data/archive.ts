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

export type ArchiveImage = {
  src: string;
  alt: string;
  /** Band name for performance photos; descriptive caption for atmosphere/location photos. */
  caption: string;
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
  /** Optional photo gallery for festival and concert entries. */
  images?: ArchiveImage[];
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
    slug: "concerts",
    title: "Concerts & Tours",
    eyebrow: "EVERY SHOW HAS A STORY",
    description: "Individual gigs, tour dates, and unforgettable nights. A personal archive of the bands, venues, cities, and live experiences along the way.",
    countLabel: "Concert memories",
    accent: "orange",
    image: "/images/concerts-main.jpg",
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
    slug: "meet-and-greets",
    title: "Meet & greets",
    eyebrow: "BACKSTAGE STORIES",
    description: "Brief conversations and unforgettable moments with the people behind the music.",
    countLabel: "Encounters",
    accent: "pink",
    image: "/images/meet-greet-kreator.jpg",
  },
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
    slug: "shirts",
    title: "Shirts & Hoodies",
    eyebrow: "WORN WITH PRIDE",
    description: "Tour merch, festival shirts, and hoodies collected over the years. Every piece carries a memory of the music, the bands, and the moments behind it.",
    countLabel: "Pieces",
    accent: "blue",
    image: "/images/shirts-main.jpg",
  },

];

// Example entries are deliberately labeled as sample data. Replace them with
// your own memories and image paths when you begin cataloguing your collection.

// description: "A festival entry ready for your photos, lineup notes, and personal memories. Replace this sample with your own record.",
//
export const archiveItems: ArchiveItem[] = [
{
  "id": "hellfest-2014",
  "collectionSlug": "festivals",
  "title": "Hellfest 2014",
  "subtitle": "Festival edition",
  "year": "2014",
  "location": "Clisson, France",
  "description": "",
  "image": "/images/festivals/hellfest2014.jpg",
  "images": [
    {
      "src": "/images/festivals/hellfest-2014/01.jpg",
      "alt": "Festival atmosphere at Hellfest 2014 in Clisson, France",
      "caption": "Hellfest 2014 — festival atmosphere"
    },
    {
      "src": "/images/festivals/hellfest-2014/02.jpg",
      "alt": "A view from the Hellfest 2014 festival grounds",
      "caption": "Around the festival grounds"
    },
    {
      "src": "/images/festivals/hellfest-2014/03.jpg",
      "alt": "A scene from the Hellfest 2014 festival",
      "caption": "A moment at Hellfest"
    },
    {
      "src": "/images/festivals/hellfest-2014/04.jpg",
      "alt": "Festival surroundings at Hellfest 2014",
      "caption": "The Hellfest surroundings"
    },
    {
      "src": "/images/festivals/hellfest-2014/05.jpg",
      "alt": "The atmosphere at Hellfest 2014",
      "caption": "The festival experience"
    },
    {
      "src": "/images/festivals/hellfest-2014/06.jpg",
      "alt": "Another view of the Hellfest 2014 festival site",
      "caption": "Clisson, France — Hellfest 2014"
    },
    {
      "src": "/images/festivals/hellfest-2014/annihilator.jpg",
      "alt": "Annihilator performing live at Hellfest 2014",
      "caption": "Annihilator"
    },
    {
      "src": "/images/festivals/hellfest-2014/behemoth.jpg",
      "alt": "Behemoth performing live at Hellfest 2014",
      "caption": "Behemoth"
    },
    {
      "src": "/images/festivals/hellfest-2014/blacksabbath.jpg",
      "alt": "Black Sabbath performing live at Hellfest 2014",
      "caption": "Black Sabbath"
    },
    {
      "src": "/images/festivals/hellfest-2014/emperor.jpg",
      "alt": "Emperor performing live at Hellfest 2014",
      "caption": "Emperor"
    },
    {
      "src": "/images/festivals/hellfest-2014/gorgoroth.jpg",
      "alt": "Gorgoroth performing live at Hellfest 2014",
      "caption": "Gorgoroth"
    },
    {
      "src": "/images/festivals/hellfest-2014/incantation.jpg",
      "alt": "Incantation performing live at Hellfest 2014",
      "caption": "Incantation"
    },
    {
      "src": "/images/festivals/hellfest-2014/ironmaiden.jpg",
      "alt": "Iron Maiden performing live at Hellfest 2014",
      "caption": "Iron Maiden"
    },
    {
      "src": "/images/festivals/hellfest-2014/sepultura.jpg",
      "alt": "Sepultura performing live at Hellfest 2014",
      "caption": "Sepultura"
    },
    {
      "src": "/images/festivals/hellfest-2014/slayer.jpg",
      "alt": "Slayer performing live at Hellfest 2014",
      "caption": "Slayer"
    },
    {
      "src": "/images/festivals/hellfest-2014/d666.jpg",
      "alt": "Deströyer 666 performing live at Hellfest 2014",
      "caption": "Deströyer 666"
    }
  ],
  "tags": [
    "Festival",
    "France",
    "Live music"
  ],
  "featured": true
  },
  {
    id: "hellfest-2015",
    collectionSlug: "festivals",
    title: "Hellfest 2015",
    subtitle: "Festival edition",
    year: "2015",
    location: "Clisson, France",
    description:"",
    image: "/images/festivals/hellfest2015.jpg",
    tags: ["Festival", "France", "Live music"],
    featured: false,
  },
  {
    id: "headbangers-weekend-2015",
    collectionSlug: "festivals",
    title: "Headbangers' Weekend 2015",
    subtitle: "Festival edition",
    year: "2015",
    location: "Istanbul, Turkey",
    description:"",
    image: "/images/festivals/headbangers-weekend-2015.jpg",
    tags: ["Festival", "Turkey", "Live music"],
    featured: false,
  },
  {
    id: "hellfest-2016",
    collectionSlug: "festivals",
    title: "Hellfest 2016",
    subtitle: "Festival edition",
    year: "2016",
    location: "Clisson, France",
    description:"",
    image: "/images/festivals/hellfest2016.jpg",
    tags: ["Festival", "France", "Live music"],
    featured: false,
  },
  {
    id: "summer-breeze-2017",
    collectionSlug: "festivals",
    title: "Summer Breeze 2017",
    subtitle: "Festival edition",
    year: "2017",
    location: "Dinkelsbühl, Germany",
    description:"",
    image: "/images/festivals/summerbreeze2017.jpg",
    tags: ["Festival", "Memories"],
  },
  {
    id: "knotfest-2019",
    collectionSlug: "festivals",
    title: "Knotfest 2019",
    subtitle: "Festival edition",
    year: "2019",
    location: "Nantes, France",
    description:"",
    image: "/images/festivals/knotfest2019.jpg",
    tags: ["Festival", "France", "Live music"],
    featured: false,
  },
  {
    id: "hellfest-2019",
    collectionSlug: "festivals",
    title: "Hellfest 2019",
    subtitle: "Festival edition",
    year: "2019",
    location: "Clisson, France",
    description:"",
    image: "/images/festivals/hellfest2019.jpg",
    tags: ["Festival", "France", "Live music"],
    featured: false,
  },
  {
    id: "hellfest-2023",
    collectionSlug: "festivals",
    title: "Hellfest 2023",
    subtitle: "Festival edition",
    year: "2023",
    location: "Clisson, France",
    description:"",
    image: "/images/festivals/hellfest2023.jpg",
    tags: ["Festival", "France", "Live music"],
    featured: false,
  },
  {
    id: "motocultor-2023",
    collectionSlug: "festivals",
    title: "Motocultor 2023",
    subtitle: "Festival edition",
    year: "2023",
    location: "Carhaix-Plouguer, Bretagne, France",
    description:"",
    image: "/images/festivals/motocultor2023.jpg",
    tags: ["Festival", "France", "Live music"],
    featured: false,
  },
  {
    id: "hellfest-2024",
    collectionSlug: "festivals",
    title: "Hellfest 2024",
    subtitle: "Festival edition",
    year: "2024",
    location: "Clisson, France",
    description:"",
    image: "/images/festivals/hellfest2024.jpg",
    tags: ["Festival", "France", "Live music"],
    featured: false,
  },
  {
    id: "brutal-assault-2024",
    collectionSlug: "festivals",
    title: "Brutal Assault 2024",
    subtitle: "Festival edition",
    year: "2024",
    location: "Josefov Fortress, Jaroměř, Czech Republic",
    description:"",
    image: "/images/festivals/brutalassault2024.jpg",
    tags: ["Festival", "Czech Republic", "Live music"],
    featured: false,
  },
  {
    id: "brutal-assault-2025",
    collectionSlug: "festivals",
    title: "Brutal Assault 2025",
    subtitle: "Festival edition",
    year: "2025",
    location: "Josefov Fortress, Jaroměř, Czech Republic",
    description:"",
    image: "/images/festivals/brutalassault2025.jpg",
    tags: ["Festival", "Czech Republic", "Live music"],
    featured: false,
  },
  {
    id: "tolminator-2026",
    collectionSlug: "festivals",
    title: "Tolminator 2026",
    subtitle: "Festival edition",
    year: "2026",
    location: "Tolmin, Slovenia",
    description:"",
    image: "/images/festivals/tominator2026.jpg",
    tags: ["Festival", "Slovenia", "Live music"],
    featured: true,
  },
  {
    id: "brutal-assault-2026",
    collectionSlug: "festivals",
    title: "Brutal Assault 2026",
    subtitle: "Festival edition",
    year: "2026",
    location: "Josefov Fortress, Jaroměř, Czech Republic",
    description:"",
    image: "/images/festivals/brutalassault2026.jpg",
    tags: ["Festival", "Czech Republic", "Live music"],
    featured: false,
  },
  {
    id: "turntable-session-01",
    collectionSlug: "vinyl",
    title: "Caladan Brood",
    subtitle: "Echoes of Battle",
    year: "2013",
    location: "Listening room",
    description: "Use this entry for an album you love, including pressing details, label, release year, and why it matters to you.",
    image: "/images/vinyls/vinyl-caladanbrood.jpg",
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
