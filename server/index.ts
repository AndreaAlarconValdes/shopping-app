import express from "express";
import cors from "cors";
import productRoutes from "./routes/products";

const app = express();
app.use(express.json());
const PORT = 4000;

app.use('/images', express.static('public/images'));
app.use(cors());
app.use("/", productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
