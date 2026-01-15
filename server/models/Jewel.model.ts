import { model, Schema } from "mongoose";


const jewelSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    category: {
        type: String,
        enum: ["ring", "necklace", "bracelet", "earring"],
        require: true,
    },
    material: {
        type: String,
        enum: ["gold", "silver"],
        require: true,
    },
    price: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    modelImage: {
        type: String,
    },
})

export const Jewel = model("Jewel", jewelSchema);