// All product categories your store will have
export type Category = "necklace" | "ring" | "earring" | "bracelet";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;

  price: number; // in your currency, e.g. CAD

  shortDescription: string;
  description: string;

  mainImage: string;   // main image path
  images: string[];    // extra gallery images

  gemstone?: string;
  metal?: string;
  isNew?: boolean;
  isLimited?: boolean;
}
