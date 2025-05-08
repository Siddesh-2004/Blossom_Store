import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  customerEmail: {
    type: String,
    required: true,
  },
  customerAddress: {
    type: String,
    required: true,
  },
  items: {
    type: [
      {
        name: {
          type: String,
          required: true,
        },
        image: {
          type: String, // You can also use Array if it's multiple images
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        size: {
          type: String,
          required: false,
        },
      },
    ],
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ["pending", "paid", "failed"],
    default: "pending",
  },
  orderStatus: {
    type: String,
    enum: ["processing", "shipped", "delivered", "cancelled"],
    default: "processing",
  },
  orderDate: {
    type: Number, // store timestamp
    required: true,
  },
});

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);

export default orderModel;