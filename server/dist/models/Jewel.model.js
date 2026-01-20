"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jewel = void 0;
const mongoose_1 = require("mongoose");
const jewelSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ["ring", "necklace", "bracelet", "earring"],
        required: true,
    },
    material: {
        type: String,
        enum: ["gold", "silver"],
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    modelImage: {
        type: String,
    },
});
exports.Jewel = (0, mongoose_1.model)("Jewel", jewelSchema);
