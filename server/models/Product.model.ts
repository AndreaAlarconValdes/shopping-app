import { model, Schema } from "mongoose";


const productSchema = new Schema({
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
})

export const Jewel = model("Jewel", productSchema);