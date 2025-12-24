import { Router } from "express";

const router = Router();

type Product = {
  id: number;
  name: string;
  category: "ring" | "necklace" | "bracelet" | "earring";
  material: "gold" | "silver";
  price: number;
  image: string;
  modelImage?: string;
};

let products: Product[] = [
  {
    id: 1,
    name: "Zahara Ring",
    category: "ring",
    price: 48,
    image: "http://localhost:4000/images/zahara-ring.jpg",
    modelImage: "http://localhost:4000/images/zahara-model-ring.jpg",
    material: "gold",
  },
  {
    id: 2,
    name: "Lira Ring",
    category: "ring",
    price: 48,
    image: "http://localhost:4000/images/lira-ring.jpg",
    modelImage: "http://localhost:4000/images/lira-model-ring.jpg",
    material: "gold",
  },
  {
    id: 3,
    name: "Lumina Ring",
    category: "ring",
    price: 48,
    image: "http://localhost:4000/images/lumina-ring.jpg",
    modelImage: "http://localhost:4000/images/lumina-model-ring.jpg",
    material: "gold",
  },
  {
    id: 4,
    name: "Eclat Ring",
    category: "ring",
    price: 48,
    image: "http://localhost:4000/images/eclat-ring.jpg",
    modelImage: "http://localhost:4000/images/eclat-model-ring.jpg",
    material: "gold",
  },
  {
    id: 5,
    name: "Stone Ring",
    category: "ring",
    price: 48,
    image: "http://localhost:4000/images/stone-ring.jpg",
    modelImage: "http://localhost:4000/images/stone-model-ring.jpg",
    material: "gold",
  },
  {
    id: 6,
    name: "Solis Ring",
    category: "ring",
    price: 35,
    image: "http://localhost:4000/images/solis-ring.jpg",
    modelImage: "http://localhost:4000/images/solis-model-ring.jpg",
    material: "gold",
  },
  {
    id: 7,
    name: "Jade Ring",
    category: "ring",
    price: 48,
    image: "http://localhost:4000/images/jade-ring.jpg",
    modelImage: "http://localhost:4000/images/jade-model-ring.jpg",
    material: "gold",
  },
  {
    id: 8,
    name: "Zafiro Ring",
    category: "ring",
    price: 48,
    image: "http://localhost:4000/images/zafiro-ring.jpg",
    modelImage: "http://localhost:4000/images/zafiro-model-ring.jpg",
    material: "gold",
  },
  {
    id: 9,
    name: "Sun Necklace",
    category: "necklace",
    price: 48,
    image: "http://localhost:4000/images/sun-necklace.jpg",
    material: "gold",
  },
  {
    id: 10,
    name: "Shining Necklace",
    category: "necklace",
    price: 48,
    image: "http://localhost:4000/images/shining-necklace.jpg",
    material: "gold",
  },
  {
    id: 11,
    name: "Sea Pearls Necklace",
    category: "necklace",
    price: 48,
    image: "http://localhost:4000/images/sea-pearls-necklace.jpg",
    material: "gold",
  },
  {
    id: 12,
    name: "Rainbow Necklace",
    category: "necklace",
    price: 48,
    image: "http://localhost:4000/images/rainbow-necklace.jpg",
    material: "gold",
  },
  {
    id: 13,
    name: "Nazar Necklace",
    category: "necklace",
    price: 48,
    image: "http://localhost:4000/images/nazar-necklace.jpg",
    material: "gold",
  },
  {
    id: 14,
    name: "Ireland Necklace",
    category: "necklace",
    price: 48,
    image: "http://localhost:4000/images/ireland-necklace.jpg",
    material: "gold",
  },
  {
    id: 15,
    name: "Bali Necklace",
    category: "necklace",
    price: 48,
    image: "http://localhost:4000/images/bali-necklace.jpg",
    material: "gold",
  },
  {
    id: 16,
    name: "Armonia Becklace",
    category: "necklace",
    price: 48,
    image: "http://localhost:4000/images/armonia-necklace.jpg",
    material: "gold",
  },
  {
    id: 17,
    name: "Aurum Bracelet",
    category: "bracelet",
    price: 48,
    image: "http://localhost:4000/images/aurum-bracelet.jpg",
    material: "gold",
  },
  {
    id: 18,
    name: "Elara Bracelet",
    category: "bracelet",
    price: 48,
    image: "http://localhost:4000/images/elara-bracelet.jpg",
    material: "gold",
  },
  {
    id: 19,
    name: "Fall Bracelet",
    category: "bracelet",
    price: 48,
    image: "http://localhost:4000/images/fall-bracelet.jpg",
    material: "gold",
  },
  {
    id: 20,
    name: "Inicial Bracelet",
    category: "bracelet",
    price: 48,
    image: "http://localhost:4000/images/inicial-bracelet.jpg",
    material: "gold",
  },
  {
    id: 21,
    name: "Les Soleils Bracelet",
    category: "bracelet",
    price: 48,
    image: "http://localhost:4000/images/les-soleils-bracelet.jpg",
    material: "gold",
  },
  {
    id: 22,
    name: "Ribera Bracelet",
    category: "bracelet",
    price: 48,
    image: "http://localhost:4000/images/ribera-bracelet.jpg",
    material: "gold",
  },
  {
    id: 23,
    name: "Sun Bracelet",
    category: "bracelet",
    price: 48,
    image: "http://localhost:4000/images/sun-bracelet.jpg",
    material: "gold",
  },
  {
    id: 24,
    name: "Rainbow Bracelet",
    category: "bracelet",
    price: 48,
    image: "http://localhost:4000/images/rainbow-bracelet.jpg",
    material: "gold",
  },

  {
    id: 25,
    name: "Midnight Earrings",
    category: "earring",
    price: 45,
    image: "http://localhost:4000/images/midnight-earrings.jpg",
    modelImage: "http://localhost:4000/images/midnight-model-earrings.jpg",
    material: "gold",
  },
  {
    id: 26,
    name: "Love Ring",
    category: "ring",
    price: 48,
    image: "http://localhost:4000/images/love-ring.jpg",
    modelImage: "http://localhost:4000/images/love-model-ring.jpg",
    material: "silver",
  },
];

router.get("/", (req, res) => {
  res.json(products);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(product => product.id === id);
  product
    ? res.json(product)
    : res.status(404).json({ message: "Product not found" });
});

router.post("/", (req, res) => {
  const product = req.body;
  const ids = products.map(product => product.id);
  const maxId = Math.max(...ids);

  const newProduct = {
    id: maxId + 1,
    name: product.name,
    category: product.category,
    price: product.price,
    image: product.image,
    modelImage: product.modelImage,
    material: product.material
  };

  products = [...products, newProduct]
  res.status(201).json(product);
});

// router.put("/:id", (req, res) => {
//   const { id } = req.params;
//   const updatedData = req.body;

//   const productIndex = products.findIndex(p => p.id === Number(id));

//   if (productIndex === -1) {
//     return res.status(404).json({ error: "Producto no encontrado" });
//   }

//   const updatedProduct = {
//     ...products[productIndex],
//     ...updatedData,
//     id: Number(id)
//   };

//   products[productIndex] = updatedProduct;

//   res.json(updatedProduct);
// });


router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  products = products.filter(product => product.id !== id);
  res.status(204).send();
});

export default router;
