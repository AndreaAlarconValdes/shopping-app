import express from "express";
import cors from "cors";
import productRoutes from "./routes/products";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());
app.use('/images', express.static('public/images'));
app.use("/", productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
