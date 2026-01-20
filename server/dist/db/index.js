"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_URI = process.env.MONGODB_URI;
if (!MONGO_URI) {
    throw new Error("MONGODB_URI is not defined");
}
mongoose_1.default.connect(MONGO_URI)
    .then(() => {
    console.log("Database connected");
})
    .catch((err) => {
    console.error(err.message);
});
