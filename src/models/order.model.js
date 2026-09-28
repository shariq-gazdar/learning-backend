import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderBy: {
        type: mongoose.Schema.ObjectId,
        ref:"User",
    }
} , {timestamps:true});

export const Order = mongoose.model("Order", orderSchema);
