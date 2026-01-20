export type Product = {
  id: number;
  name: string;
  category: "ring" | "necklace" | "bracelet" | "earring";
  material: "gold" | "silver";
  price: number;
  image: string;
  modelImage?: string;
};