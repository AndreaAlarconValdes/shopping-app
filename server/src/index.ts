import express from "express";
import cors from "cors";
import productRoutes from "./routes/products";

const app = express();
const PORT = 4000;

app.use('/images', express.static('public/images'));
app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
