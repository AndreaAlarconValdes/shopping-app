import { Router } from "express";

const router = Router();

type Product = {
  id: number;
  name: string;
  category: "ring" | "necklace" | "bracelete" | "earring";
  price: number;
  image: string;
};

let products: Product[] = [
  {
    id: 1,
    name: "Zahara Ring",
    category: "ring",
    price: 48,
    image: "http://localhost:4000/images/zahara-ring.jpg",
  },
  {
    id: 2,
    name: "Lira Ring",
    category: "ring",
    price: 48,
    image: "http://localhost:4000/images/lira-ring.jpg",
  },
  {
    id: 3,
    name: "Lumina Ring",
    category: "ring",
    price: 48,
    image: "http://localhost:4000/images/lumina-ring.jpg",
  },
  {
    id: 4,
    name: "Eclat Ring",
    category: "ring",
    price: 48,
    image: "http://localhost:4000/images/eclat-ring.jpg",
  },
  {
    id: 5,
    name: "Stone Ring",
    category: "ring",
    price: 48,
    image: "http://localhost:4000/images/stone-ring.jpg",
  },
  {
    id: 6,
    name: "Solis Ring",
    category: "ring",
    price: 35,
    image: "http://localhost:4000/images/solis-ring.jpg",
  },
  {
    id: 7,
    name: "Jade Ring",
    category: "ring",
    price: 48,
    image: "http://localhost:4000/images/jade-ring.jpg",
  },
  {
    id: 8,
    name: "Zafiro Ring",
    category: "ring",
    price: 48,
    image: "http://localhost:4000/images/zafiro-ring.jpg",
  },
  {
    id: 9,
    name: "Sun Necklace",
    category: "necklace",
    price: 48,
    image: "http://localhost:4000/images/sun-necklace.jpg",
  },
  {
    id: 10,
    name: "Shining Necklace",
    category: "necklace",
    price: 48,
    image: "http://localhost:4000/images/shining-necklace.jpg",
  },
  {
    id: 11,
    name: "Sea Pearls Necklace",
    category: "necklace",
    price: 48,
    image: "http://localhost:4000/images/sea-pearls-necklace.jpg",
  },
  {
    id: 12,
    name: "Rainbow Necklace",
    category: "necklace",
    price: 48,
    image: "http://localhost:4000/images/rainbow-necklace.jpg",
  },
  {
    id: 13,
    name: "Nazar Necklace",
    category: "necklace",
    price: 48,
    image: "http://localhost:4000/images/nazar-necklace.jpg",
  },
  {
    id: 14,
    name: "Ireland Necklace",
    category: "necklace",
    price: 48,
    image: "http://localhost:4000/images/ireland-necklace.jpg",
  },
  {
    id: 15,
    name: "Bali Necklace",
    category: "necklace",
    price: 48,
    image: "http://localhost:4000/images/bali-necklace.jpg",
  },
  {
    id: 16,
    name: "Armonia Necklace",
    category: "necklace",
    price: 48,
    image: "http://localhost:4000/images/armonia-necklace.jpg",
  },
  {
    id: 17,
    name: "Aurum Bracelete",
    category: "bracelete",
    price: 48,
    image: "http://localhost:4000/images/aurum-bracelete.jpg",
  },
  {
    id: 18,
    name: "Elara Bracelete",
    category: "bracelete",
    price: 48,
    image: "http://localhost:4000/images/elara-bracelete.jpg",
  },
  {
    id: 19,
    name: "Fall Bracelete",
    category: "bracelete",
    price: 48,
    image: "http://localhost:4000/images/fall-bracelete.jpg",
  },
  {
    id: 20,
    name: "Inicial Bracelete",
    category: "bracelete",
    price: 48,
    image: "http://localhost:4000/images/inicial-bracelete.jpg",
  },
  {
    id: 21,
    name: "Les Soleils Bracelete",
    category: "bracelete",
    price: 48,
    image: "http://localhost:4000/images/les-soleils-bracelete.jpg",
  },
  {
    id: 22,
    name: "Ribera Bracelete",
    category: "bracelete",
    price: 48,
    image: "http://localhost:4000/images/ribera-bracelete.jpg",
  },
  {
    id: 23,
    name: "Sun Bracelete",
    category: "bracelete",
    price: 48,
    image: "http://localhost:4000/images/sun-bracelete.jpg",
  },
  {
    id: 24,
    name: "Rainbow Bracelete",
    category: "bracelete",
    price: 48,
    image: "http://localhost:4000/images/rainbow-bracelete.jpg",
  },
 
];

router.get("/", (req, res) => {
  res.json(products);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);
  product ? res.json(product) : res.status(404).json({ message: "No encontrado" });
});

router.post("/", (req, res) => {
  const newProduct = { ...req.body, id: Date.now() };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  products = products.filter((p) => p.id !== id);
  res.status(204).send();
});

export default router;
