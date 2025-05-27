import { Router } from "express";

const router = Router();

type Product = {
  id: number;
  name: string;
  category: "anillo" | "collar" | "pulsera" | "pendiente";
  price: number;
  image: string;
};

let products: Product[] = [
  {
    id: 1,
    name: "Anillo de diamantes",
    category: "anillo",
    price: 1500,
    image: "https://example.com/anillo.jpg",
  },
  {
    id: 2,
    name: "Collar de oro blanco",
    category: "collar",
    price: 1200,
    image: "https://example.com/collar.jpg",
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
