import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGODB_URI;

if (!MONGO_URI) {
    throw new Error("MONGODB_URI is not defined");
}

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("Database connected");
    })
    .catch((err: Error) => {
        console.error(err.message);
    });