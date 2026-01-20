import "dotenv/config";
import express from "express";
import cors from "cors";
import productRoutes from "./routes/products";
import { connectToDB } from "./db";

const app = express();
const PORT = process.env.PORT ?? 4000;

app.use(express.json());
app.use(cors()); 
app.use('/images', express.static('public/images'));
app.use("/", productRoutes);
// app.use("/", re)

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ message: "Error interno del servidor" });
});

app.listen(PORT, () => {
  connectToDB()
  console.log(`Server running on http://localhost:${PORT}`);
});
