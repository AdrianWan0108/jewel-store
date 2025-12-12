import type { Product } from "./types";

export const products: Product[] = [
  // =========================
  // Necklaces (3)
  // =========================
  {
    id: "necklace-001",
    slug: "amethyst-aura-pendant",
    name: "Amethyst Aura Pendant",
    category: "necklace",
    price: 189,
    shortDescription: "Calm & intuition in a soft violet glow.",
    description:
      "A delicate amethyst pendant designed for everyday wear. Subtle sparkle, effortless elegance — your daily reminder to trust your inner voice.",
    mainImage: "/images/products/amethyst-aura-pendant/01.png",
    images: [
      "/images/products/amethyst-aura-pendant/01.png",
      "/images/products/amethyst-aura-pendant/02.png",
      "/images/products/amethyst-aura-pendant/03.png",
    ],
    gemstone: "Amethyst",
    metal: "14k gold vermeil",
    isNew: true,
  },
  {
    id: "necklace-002",
    slug: "sapphire-focus-charm-necklace",
    name: "Sapphire Focus Charm Necklace",
    category: "necklace",
    price: 225,
    shortDescription: "A cool blue note for clarity and focus.",
    description:
      "A minimalist sapphire charm that sits close to the collarbone. Designed to elevate daily outfits with a composed, confident presence.",
    mainImage: "/images/products/sapphire-focus-charm-necklace/01.png",
    images: [
      "/images/products/sapphire-focus-charm-necklace/01.png",
      "/images/products/sapphire-focus-charm-necklace/02.png",
      "/images/products/sapphire-focus-charm-necklace/03.png",
    ],
    gemstone: "Blue Sapphire",
    metal: "Sterling silver",
  },
  {
    id: "necklace-003",
    slug: "ruby-courage-solitaire-necklace",
    name: "Ruby Courage Solitaire Necklace",
    category: "necklace",
    price: 260,
    shortDescription: "A bold spark for courage and momentum.",
    description:
      "A clean solitaire ruby necklace with a refined profile — powerful enough for statement days, subtle enough for everyday rituals.",
    mainImage: "/images/products/ruby-courage-solitaire-necklace/01.png",
    images: [
      "/images/products/ruby-courage-solitaire-necklace/01.png",
      "/images/products/ruby-courage-solitaire-necklace/02.png",
      "/images/products/ruby-courage-solitaire-necklace/03.png",
    ],
    gemstone: "Ruby",
    metal: "14k gold vermeil",
    isLimited: true,
  },

  // =========================
  // Rings (3)
  // =========================
  {
    id: "ring-001",
    slug: "garnet-vitality-stack-ring",
    name: "Garnet Vitality Stack Ring",
    category: "ring",
    price: 165,
    shortDescription: "Deep red energy for bold decisions.",
    description:
      "A stackable garnet ring with a low setting designed for comfort. Wear alone for quiet power or stack for a richer look.",
    mainImage: "/images/products/garnet-vitality-stack-ring/01.png",
    images: [
      "/images/products/garnet-vitality-stack-ring/01.png",
      "/images/products/garnet-vitality-stack-ring/02.png",
      "/images/products/garnet-vitality-stack-ring/03.png",
    ],
    gemstone: "Garnet",
    metal: "14k gold vermeil",
  },
  {
    id: "ring-002",
    slug: "emerald-growth-band",
    name: "Emerald Growth Band",
    category: "ring",
    price: 210,
    shortDescription: "Green accents for growth and renewal.",
    description:
      "A slim band with emerald touches. Designed to be your daily ‘growth token’— refined, intentional, and easy to style.",
    mainImage: "/images/products/emerald-growth-band/01.png",
    images: [
      "/images/products/emerald-growth-band/01.png",
      "/images/products/emerald-growth-band/02.png",
      "/images/products/emerald-growth-band/03.png",
    ],
    gemstone: "Emerald",
    metal: "Sterling silver with rhodium plating",
    isNew: true,
  },
  {
    id: "ring-003",
    slug: "moonstone-calm-signet-ring",
    name: "Moonstone Calm Signet Ring",
    category: "ring",
    price: 195,
    shortDescription: "Soft glow for calm and balance.",
    description:
      "A modern signet silhouette with moonstone sheen. A gentle statement piece that pairs beautifully with neutrals and warm tones.",
    mainImage: "/images/products/moonstone-calm-signet-ring/01.png",
    images: [
      "/images/products/moonstone-calm-signet-ring/01.png",
      "/images/products/moonstone-calm-signet-ring/02.png",
      "/images/products/moonstone-calm-signet-ring/03.png",
    ],
    gemstone: "Moonstone",
    metal: "Sterling silver",
    isLimited: true,
  },

  // =========================
  // Earrings (3)
  // =========================
  {
    id: "earring-001",
    slug: "pearl-white-halo-studs",
    name: "Pearl White Halo Studs",
    category: "earring",
    price: 120,
    shortDescription: "Minimal studs with a soft luminous edge.",
    description:
      "Everyday studs with a gentle halo finish. Designed to feel polished and effortless — perfect for workdays and weekends.",
    mainImage: "/images/products/pearl-white-halo-studs/01.png",
    images: [
      "/images/products/pearl-white-halo-studs/01.png",
      "/images/products/pearl-white-halo-studs/02.png",
      "/images/products/pearl-white-halo-studs/03.png",
    ],
    gemstone: "Pearl",
    metal: "Sterling silver",
  },
  {
    id: "earring-002",
    slug: "amethyst-night-drop-earrings",
    name: "Amethyst Night Drop Earrings",
    category: "earring",
    price: 155,
    shortDescription: "A subtle drop that catches light as you move.",
    description:
      "Lightweight drop earrings with amethyst tones. Elegant motion, clean silhouette — the kind of piece you forget you’re wearing (in a good way).",
    mainImage: "/images/products/amethyst-night-drop-earrings/01.png",
    images: [
      "/images/products/amethyst-night-drop-earrings/01.png",
      "/images/products/amethyst-night-drop-earrings/02.png",
      "/images/products/amethyst-night-drop-earrings/03.png",
    ],
    gemstone: "Amethyst",
    metal: "14k gold vermeil",
    isNew: true,
  },
  {
    id: "earring-003",
    slug: "sapphire-line-huggies",
    name: "Sapphire Line Huggies",
    category: "earring",
    price: 175,
    shortDescription: "Refined huggies with a focused blue accent.",
    description:
      "Minimal huggie hoops with sapphire detail. Clean, modern, and perfect for stacking with other piercings.",
    mainImage: "/images/products/sapphire-line-huggies/01.png",
    images: [
      "/images/products/sapphire-line-huggies/01.png",
      "/images/products/sapphire-line-huggies/02.png",
      "/images/products/sapphire-line-huggies/03.png",
    ],
    gemstone: "Blue Sapphire",
    metal: "Sterling silver with rhodium plating",
    isLimited: true,
  },

  // =========================
  // Bracelets (3)
  // =========================
  {
    id: "bracelet-001",
    slug: "emerald-vine-chain-bracelet",
    name: "Emerald Vine Chain Bracelet",
    category: "bracelet",
    price: 210,
    shortDescription: "A fine chain with green renewal energy.",
    description:
      "A slim chain bracelet with emerald accents. Adjustable length for everyday comfort and easy layering.",
    mainImage: "/images/products/emerald-vine-chain-bracelet/01.png",
    images: [
      "/images/products/emerald-vine-chain-bracelet/01.png",
      "/images/products/emerald-vine-chain-bracelet/02.png",
      "/images/products/emerald-vine-chain-bracelet/03.png",
    ],
    gemstone: "Emerald",
    metal: "14k gold vermeil",
  },
  {
    id: "bracelet-002",
    slug: "ruby-courage-cuff",
    name: "Ruby Courage Cuff",
    category: "bracelet",
    price: 240,
    shortDescription: "A bold cuff with a red gemstone spark.",
    description:
      "A structured cuff designed to anchor your look. The ruby accent adds a confident edge without feeling loud.",
    mainImage: "/images/products/ruby-courage-cuff/01.png",
    images: [
      "/images/products/ruby-courage-cuff/01.png",
      "/images/products/ruby-courage-cuff/02.png",
      "/images/products/ruby-courage-cuff/03.png",
    ],
    gemstone: "Ruby",
    metal: "14k gold vermeil",
    isLimited: true,
  },
  {
    id: "bracelet-003",
    slug: "sapphire-night-tennis-bracelet",
    name: "Sapphire Night Tennis Bracelet",
    category: "bracelet",
    price: 290,
    shortDescription: "Classic line bracelet, cool blue glow.",
    description:
      "A refined tennis bracelet silhouette with sapphire tones. Elegant enough for events, subtle enough for daily wear.",
    mainImage: "/images/products/sapphire-night-tennis-bracelet/01.png",
    images: [
      "/images/products/sapphire-night-tennis-bracelet/01.png",
      "/images/products/sapphire-night-tennis-bracelet/02.png",
      "/images/products/sapphire-night-tennis-bracelet/03.png",
    ],
    gemstone: "Blue Sapphire",
    metal: "Sterling silver",
    isNew: true,
  },
];
