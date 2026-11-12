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
  /** Bands personally seen live at an individual concert. */
  bandsSeenLive?: string[];
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
    description: "",
    image: "/images/festivals/hellfest2015.jpg",
    tags: ["Festival", "France", "Live music"],
    featured: false,
    images: [
      {
        "src": "/images/festivals/hellfest-2015/01.jpg",
        "alt": "A view of the Hellfest 2015 festival grounds in Clisson, France",
        "caption": "Hellfest 2015 — festival grounds"
      },
      {
        "src": "/images/festivals/hellfest-2015/02.jpg",
        "alt": "A scene capturing the atmosphere of Hellfest 2015",
        "caption": "The Hellfest atmosphere"
      },
      {
        "src": "/images/festivals/hellfest-2015/03.jpg",
        "alt": "A moment from the Hellfest 2015 festival",
        "caption": "A moment at Hellfest"
      },
      {
        "src": "/images/festivals/hellfest-2015/04.jpg",
        "alt": "Festival scenery at Hellfest 2015 in Clisson",
        "caption": "Clisson, France — Hellfest 2015"
      },
      {
        "src": "/images/festivals/hellfest-2015/alestorm.jpg",
        "alt": "Alestorm performing live at Hellfest 2015",
        "caption": "Alestorm"
      },
      {
        "src": "/images/festivals/hellfest-2015/bloodbath.jpg",
        "alt": "Bloodbath performing live at Hellfest 2015",
        "caption": "Bloodbath"
      },
      {
        "src": "/images/festivals/hellfest-2015/bolzer.jpg",
        "alt": "Bölzer performing live at Hellfest 2015",
        "caption": "Bölzer"
      },
      {
        "src": "/images/festivals/hellfest-2015/cannibalcorpse.jpg",
        "alt": "Cannibal Corpse performing live at Hellfest 2015",
        "caption": "Cannibal Corpse"
      },
      {
        "src": "/images/festivals/hellfest-2015/carachangren.jpg",
        "alt": "Carach Angren performing live at Hellfest 2015",
        "caption": "Carach Angren"
      },
      {
        "src": "/images/festivals/hellfest-2015/childrenofbodom.jpg",
        "alt": "Children of Bodom performing live at Hellfest 2015",
        "caption": "Children of Bodom"
      },
      {
        "src": "/images/festivals/hellfest-2015/derwegeinerfreiheit.jpg",
        "alt": "Der Weg Einer Freiheit performing live at Hellfest 2015",
        "caption": "Der Weg Einer Freiheit"
      },
      {
        "src": "/images/festivals/hellfest-2015/ensiferum.jpg",
        "alt": "Ensiferum performing live at Hellfest 2015",
        "caption": "Ensiferum"
      },
      {
        "src": "/images/festivals/hellfest-2015/judaspriest.jpg",
        "alt": "Judas Priest performing live at Hellfest 2015",
        "caption": "Judas Priest"
      },
      {
        "src": "/images/festivals/hellfest-2015/mayhem.jpg",
        "alt": "Mayhem performing live at Hellfest 2015",
        "caption": "Mayhem"
      },
      {
        "src": "/images/festivals/hellfest-2015/melechesh.jpg",
        "alt": "Melechesh performing live at Hellfest 2015",
        "caption": "Melechesh"
      },
      {
        "src": "/images/festivals/hellfest-2015/motorhead.jpg",
        "alt": "Motörhead performing live at Hellfest 2015",
        "caption": "Motörhead"
      },
      {
        "src": "/images/festivals/hellfest-2015/necrowretch.jpg",
        "alt": "Necrowretch performing live at Hellfest 2015",
        "caption": "Necrowretch"
      },
      {
        "src": "/images/festivals/hellfest-2015/obituary.jpg",
        "alt": "Obituary performing live at Hellfest 2015",
        "caption": "Obituary"
      },
      {
        "src": "/images/festivals/hellfest-2015/prostitutedisfigurement.jpg",
        "alt": "Prostitute Disfigurement performing live at Hellfest 2015",
        "caption": "Prostitute Disfigurement"
      }
    ]
  },
  {
    id: "headbangers-weekend-2015",
    collectionSlug: "festivals",
    title: "Headbangers' Weekend 2015",
    subtitle: "Festival edition",
    year: "2015",
    location: "Istanbul, Turkey",
    description: "",
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
    description: "",
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
    description: "",
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
    description: "",
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
    description: "",
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
    description: "",
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
    description: "",
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
    description: "",
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
    description: "",
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
    description: "",
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
    description: "",
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
    description: "",
    image: "/images/festivals/brutalassault2026.jpg",
    tags: ["Festival", "Czech Republic", "Live music"],
    featured: false,
  },
  {
    id: "cradle-of-filth-2024",
    collectionSlug: "concerts",
    title: "Cradle of Filth - By Order of the Dragon Tour",
    subtitle: "Concert edition",
    year: "2024",
    location: "Esch-sur-Alzette, Luxembourg",
    description: "",
    image: "/images/concerts/cradle-of-filth-2024.jpg",
    tags: ["Concert", "Luxembourg", "Live music"],
    featured: false,
    bandsSeenLive: ["Cradle of Filth", "Mental Cruelty", "Black Satellite"],
    images: [
      {
        "src": "/images/concerts/cradle/cradleoffilth.jpg",
        "alt": "Cradle of Filth — Live",
        "caption": "Cradle of Filth"
      },
      {
        "src": "/images/concerts/cradle/mentalcruelty.jpg",
        "alt": "Mental Cruelty — Live",
        "caption": "Mental Cruelty"
      },
      {
        "src": "/images/concerts/cradle/blacksatellite.jpg",
        "alt": "Black Satellite — Live",
        "caption": "Black Satellite"
      },
    ]
  },
  {
    id: "kreator-testament-anthrax-2024",
    collectionSlug: "concerts",
    title: "Kreator Testament Anthrax - European Tour",
    subtitle: "Concert edition",
    year: "2024",
    location: "Esch-sur-Alzette, Luxembourg",
    description: "",
    image: "/images/concerts/kreator-2024.jpg",
    tags: ["Concert", "Luxembourg", "Live music"],
    featured: false,
    bandsSeenLive: ["Kreator", "Testament", "Anthrax"],
    images: [
      {
        "src": "/images/concerts/kreator/kreator.jpg",
        "alt": "Kreator — Live",
        "caption": "Kreator"
      },
      {
        "src": "/images/concerts/kreator/testament.jpg",
        "alt": "Testament — Live",
        "caption": "Testament"
      },
      {
        "src": "/images/concerts/kreator/anthrax.jpg",
        "alt": "Anthrax— Live",
        "caption": "Anthrax"
      },
    ]
  },
  {
    id: "judas-priest-2025",
    collectionSlug: "concerts",
    title: "Judas Priest - Shield of Pain Tour",
    subtitle: "Concert edition",
    year: "2025",
    location: "Esch-sur-Alzette, Luxembourg",
    description: "",
    image: "/images/concerts/judas-priest-2025.jpg",
    tags: ["Concert", "Luxembourg", "Live music"],
    featured: false,
    bandsSeenLive: ["Judas Priest"],
    images: [
      {
        "src": "/images/concerts/priest/01.jpg",
        "alt": "Judas Priest 2025 — Live",
        "caption": ""
      },
      {
        "src": "/images/concerts/priest/02.jpg",
        "alt": "Judas Priest 2025 — Live",
        "caption": ""
      },
      {
        "src": "/images/concerts/priest/03.jpg",
        "alt": "Judas Priest 2025 — Live",
        "caption": ""
      },
    ]
  },

  // Vinyl entries
  {
    id: "echoes-of-battle-vinyl",
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

  // Meet & Greet entries
  {
    "id": "meet-and-greet-suffocation-2017",
    "collectionSlug": "meet-and-greets",
    "title": "Meet & Greet with Suffocation",
    "subtitle": "Suffocation",
    "year": "2017",
    "location": "Summer Breeze Festival, Dinkelsbühl, Germany",
    "description": "A moment with Suffocation.",
    "image": "/images/meet/suffocation-2017.jpg",
    "tags": ["Suffocation", "Artist", "Memory"]
  },
  {
    "id": "meet-and-greet-kreator-2024",
    "collectionSlug": "meet-and-greets",
    "title": "Meet & Greet with Kreator",
    "subtitle": "Kreator",
    "year": "2024",
    "location": "Rochal, Esch-sur-Alzette, Luxembourg",
    "description": "A moment with Kreator.",
    "image": "/images/meet/kreator.jpg",
    "tags": ["Kreator", "Artist", "Memory"]
  },
  {
    "id": "meet-and-greet-suffocation-2025",
    "collectionSlug": "meet-and-greets",
    "title": "Meet & Greet with Suffocation",
    "subtitle": "Suffocation",
    "year": "2025",
    "location": "Brutal Assault Festival, Czech Republic",
    "description": "A moment with Suffocation.",
    "image": "/images/meet/suffocation-2025.jpg",
    "tags": ["Suffocation", "Artist", "Memory"]
  },
  {
    "id": "meet-and-greet-nile-2025",
    "collectionSlug": "meet-and-greets",
    "title": "Meet & Greet with Nile",
    "subtitle": "Nile",
    "year": "2025",
    "location": "Brutal Assault Festival, Czech Republic",
    "description": "A moment with Nile.",
    "image": "/images/meet/nile.jpg",
    "tags": ["Nile", "Artist", "Memory"]
  },
  {
    "id": "meet-and-greet-rotting-christ-2025",
    "collectionSlug": "meet-and-greets",
    "title": "Meet & Greet with Rotting Christ",
    "subtitle": "Rotting Christ",
    "year": "2025",
    "location": "Brutal Assault Festival, Czech Republic",
    "description": "A moment with Rotting Christ.",
    "image": "/images/meet/rottingchrist.jpg",
    "tags": ["Rotting Christ", "Artist", "Memory"]
  },
  {
    "id": "meet-and-greet-ne-obliviscaris-2025",
    "collectionSlug": "meet-and-greets",
    "title": "Meet & Greet with Ne Obliviscaris",
    "subtitle": "Ne Obliviscaris",
    "year": "2025",
    "location": "Brutal Assault Festival, Czech Republic",
    "description": "A moment with Ne Obliviscaris.",
    "image": "/images/meet/neo.jpg",
    "tags": ["Ne Obliviscaris", "Artist", "Memory"]
  },
    {
    "id": "meet-and-greet-immolation-2026",
    "collectionSlug": "meet-and-greets",
    "title": "Meet & Greet with Immolation",
    "subtitle": "Immolation",
    "year": "2026",
    "location": "Brutal Assault Festival, Czech Republic",
    "description": "A moment with Immolation.",
    "image": "/images/meet/immolation.jpg",
    "tags": ["Immolation", "Artist", "Memory"]
  },
    {
    "id": "meet-and-greet-marduk-2026",
    "collectionSlug": "meet-and-greets",
    "title": "Meet & Greet with Marduk",
    "subtitle": "Marduk",
    "year": "2026",
    "location": "Brutal Assault Festival, Czech Republic",
    "description": "A moment with Marduk.",
    "image": "/images/meet/marduk.jpg",
    "tags": ["Marduk", "Artist", "Memory"]
  },
    {
    "id": "meet-and-greet-borknagar-2026",
    "collectionSlug": "meet-and-greets",
    "title": "Meet & Greet with Borknagar",
    "subtitle": "Borknagar",
    "year": "2026",
    "location": "Brutal Assault Festival, Czech Republic",
    "description": "A moment with Borknagar.",
    "image": "/images/meet/borknagar.jpg",
    "tags": ["Borknagar", "Artist", "Memory"]
  },
    {
    "id": "meet-and-greet-amorphis-2026",
    "collectionSlug": "meet-and-greets",
    "title": "Meet & Greet with Amorphis",
    "subtitle": "Amorphis",
    "year": "2026",
    "location": "Brutal Assault Festival, Czech Republic",
    "description": "A moment with Amorphis.",
    "image": "/images/meet/amorphis.jpg",
    "tags": ["Amorphis", "Artist", "Memory"]
  },
    {
    "id": "meet-and-greet-der-weg-einer-freiheit-2026",
    "collectionSlug": "meet-and-greets",
    "title": "Meet & Greet with Der Weg Einer Freiheit",
    "subtitle": "Der Weg Einer Freiheit",
    "year": "2026",
    "location": "Brutal Assault Festival, Czech Republic",
    "description": "A moment with Der Weg Einer Freiheit.",
    "image": "/images/meet/derweg.jpg",
    "tags": ["Der Weg Einer Freiheit", "Artist", "Memory"]
  },
  {
    id: "shirt-cradle-of-filth-2024",
    collectionSlug: "shirts",
    title: "Cradle of Filth",
    subtitle: "Band merchandise",
    year: "2024",
    location: "Esch-sur-Alzette, Luxembourg",
    description: "A Cradle of Filth shirt from the By Order of the Dragon Tour in Luxembourg, 2024.",
    image: "/images/shirts-hoodies/cof2024/front.jpg",
    tags: ["Cradle of Filth", "Band", "T-Shirt"],
    images: [
      {
        "src": "/images/shirts-hoodies/cof2024/back.jpg",
        "alt": "Cradle of Filth 2024 tour shirt — back view",
        "caption": ""
      },
    ]
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


// {
//   id: "hoodie-tour-2024",
//   collectionSlug: "shirts",
//   title: "Tour 2024",
//   subtitle: "Tour merchandise",
//   year: "2024",
//   location: "Add city or venue",
//   description: "Tour merchandise collected along the way — a wearable memory of a night spent with live metal.",
//   image: "/images/shirts/tour-2024.jpg",
//   tags: ["Tour", "Merchandise", "Hoodie"],
// },
// {
//   id: "shirt-hellfest-2024",
//   collectionSlug: "shirts",
//   title: "Hellfest 2024",
//   subtitle: "Festival shirt",
//   year: "2024",
//   location: "Clisson, France",
//   description: "A piece of Hellfest 2024 — a reminder of the bands, stages, and days that made the festival unforgettable.",
//   image: "/images/shirts/hellfest-2024.jpg",
//   tags: ["Hellfest", "Festival", "T-Shirt"],
// },
// {
//   id: "hoodie-brutal-assault",
//   collectionSlug: "shirts",
//   title: "Brutal Assault",
//   subtitle: "Festival hoodie",
//   year: "2023",
//   location: "Josefov, Czech Republic",
//   description: "A Brutal Assault hoodie from a festival built around extreme music, unforgettable performances, and underground culture.",
//   image: "/images/shirts/brutal-assault-2023.jpg",
//   tags: ["Brutal Assault", "Festival", "Hoodie"],
// },

// {
//   id: "signed-record-01",
//   collectionSlug: "signed-vinyl",
//   title: "A record with a story",
//   subtitle: "Signed edition",
//   year: "2025",
//   location: "Personal collection",
//   description: "Add the album, artist, signature details, and the story behind how you got it signed.",
//   image: "/images/signed-vinyl.svg",
//   tags: ["Signed", "Vinyl", "Memorabilia"],
// },
// {
//   id: "show-memory-01",
//   collectionSlug: "live",
//   title: "A night in the pit",
//   subtitle: "Live show",
//   year: "2025",
//   location: "Add venue",
//   description: "Add the band, venue, date, setlist, ticket, and any photographs you took at the show.",
//   image: "/images/live.svg",
//   tags: ["Concert", "Live"],
//   featured: true,
// },
// {
//   id: "wristband-01",
//   collectionSlug: "wristbands",
//   title: "Festival wristband",
//   subtitle: "Worn keepsake",
//   year: "2024",
//   location: "Festival archive",
//   description: "Record the festival, edition, dates, and any small detail that brings the experience back.",
//   image: "/images/wristbands.svg",
//   tags: ["Wristband", "Festival"],
// },
// {
//   id: "cup-01",
//   collectionSlug: "cups",
//   title: "Festival cup",
//   subtitle: "Reusable cup",
//   year: "2024",
//   location: "Festival archive",
//   description: "Add the printed design, festival, year, and where you found or collected the cup.",
//   image: "/images/cups.svg",
//   tags: ["Cup", "Merchandise"],
// },