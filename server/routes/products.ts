import { Router } from "express";
import { Jewel } from "../models/Product.model";

const router = Router();

router.get("/", async (_, res) => {
  res.json(
    await Jewel.collection.find({}).toArray()
  );
});


router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const product = await Jewel.collection.findOne({ id });
  product
    ? res.json(product)
    : res.status(404).json({ message: "Product not found" });
});

// const REQUIRED = ["name", "category", "material", "price", "image"] as const;

// router.post("/", (req, res): void => {
//   const body = req.body;
//   if (!body || typeof body !== "object") {
//     res.status(400).json({ message: "Cuerpo inválido" });
//     return;
//   }
//   for (const key of REQUIRED) {
//     if (body[key] == null || body[key] === "") {
//       res.status(400).json({ message: `Falta el campo requerido: ${key}` });
//       return;
//     }
//   }
//   const category = String(body.category);
//   if (!["ring", "necklace", "bracelet", "earring"].includes(category)) {
//     res.status(400).json({ message: "Categoría inválida" });
//     return;
//   }
//   const material = String(body.material);
//   if (!["gold", "silver"].includes(material)) {
//     res.status(400).json({ message: "Material inválido" });
//     return;
//   }
//   const price = Number(body.price);
//   if (Number.isNaN(price) || price < 0) {
//     res.status(400).json({ message: "Precio inválido" });
//     return;
//   }

//   const ids = products.map((p) => p.id);
//   const maxId = ids.length === 0 ? 0 : Math.max(...ids);

//   const newProduct: Product = {
//     id: maxId + 1,
//     name: String(body.name).trim(),
//     category: category as Product["category"],
//     material: material as Product["material"],
//     price,
//     image: String(body.image).trim(),
//     modelImage: body.modelImage != null ? String(body.modelImage).trim() : undefined,
//   };

//   products = [...products, newProduct];
//   res.status(201).json(newProduct);
// });

// // router.put("/:id", (req, res) => {
// //   const { id } = req.params;
// //   const updatedData = req.body;

// //   const productIndex = products.findIndex(p => p.id === Number(id));

// //   if (productIndex === -1) {
// //     return res.status(404).json({ error: "Producto no encontrado" });
// //   }

// //   const updatedProduct = {
// //     ...products[productIndex],
// //     ...updatedData,
// //     id: Number(id)
// //   };

// //   products[productIndex] = updatedProduct;

// //   res.json(updatedProduct);
// // });


// router.delete("/:id", (req, res) => {
//   const id = Number(req.params.id);
//   products = products.filter(product => product.id !== id);
//   res.status(204).send();
// });

export default router;
