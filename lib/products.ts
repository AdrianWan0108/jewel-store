import type { Product } from "./types";

export const products: Product[] = [
  {
    id: "necklace-1",
    slug: "amethyst-aurora-necklace",
    name: "Amethyst Aurora Necklace",
    category: "necklace",
    price: 189,
    shortDescription: "Soft violet glow for calm, intuitive days.",
    description:
      "A delicate amethyst pendant set in champagne gold, designed to sit just at the collarbone. Wear it as a daily reminder to trust your intuition and move with calm clarity.",
    mainImage: "/images/products/amethyst-aurora-necklace-1.jpg",
    images: [
      "/images/products/amethyst-aurora-necklace-1.jpg",
      "/images/products/amethyst-aurora-necklace-2.jpg",
    ],
    gemstone: "Amethyst",
    metal: "14k gold vermeil",
    isNew: true,
  },
  {
    id: "ring-1",
    slug: "garnet-vive-ring",
    name: "Garnet Vive Ring",
    category: "ring",
    price: 165,
    shortDescription: "A deep red spark for courage and momentum.",
    description:
      "Stackable garnet ring with a low-profile setting, made for everyday wear. Perfect alone or layered with your existing bands.",
    mainImage: "/images/products/garnet-vive-ring-1.jpg",
    images: [
      "/images/products/garnet-vive-ring-1.jpg",
      "/images/products/garnet-vive-ring-2.jpg",
    ],
    gemstone: "Garnet",
    metal: "14k gold vermeil",
  },
  {
    id: "earring-1",
    slug: "luna-drop-earrings",
    name: "Luna Drop Earrings",
    category: "earring",
    price: 145,
    shortDescription: "Gentle movement, quiet shimmer.",
    description:
      "Lightweight drop earrings that catch just enough light. Designed to feel effortless from day to night.",
    mainImage: "/images/products/luna-drop-earrings-1.jpg",
    images: ["/images/products/luna-drop-earrings-1.jpg"],
    gemstone: "Moonstone",
    metal: "Sterling silver with rhodium plating",
  },
  {
    id: "bracelet-1",
    slug: "emerald-vine-bracelet",
    name: "Emerald Vine Bracelet",
    category: "bracelet",
    price: 210,
    shortDescription: "A fine line of green for growth and renewal.",
    description:
      "A slim bracelet with emerald accents, inspired by climbing vines and quiet expansion. Adjustable to fit most wrists.",
    mainImage: "/images/products/emerald-vine-bracelet-1.jpg",
    images: ["/images/products/emerald-vine-bracelet-1.jpg"],
    gemstone: "Emerald",
    metal: "14k gold vermeil",
    isLimited: true,
  },
];
