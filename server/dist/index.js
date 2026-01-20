"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");

const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const products_1 = __importDefault(require("./routes/products"));

const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 4000;

app.use(express_1.default.json());

app.use((0, cors_1.default)());

app.use('/images', express_1.default.static('public/images'));

app.use("/", products_1.default);

app.use((err, _req, res, _next) => {
    console.error(err);
    res.status(500).json({ message: "Error interno del servidor" });
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
