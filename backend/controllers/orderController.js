import orderModel from "../models/ordersModel.js";

// Create a new order
const createOrder = async (req, res) => {
  try {
    const {
      customerName,
      customerEmail,
      customerAddress,
      items,
      totalAmount,
      paymentStatus,
      orderStatus,
      orderDate,
    } = req.body;

    if (!customerName || !customerEmail || !items || items.length === 0) {
      return res.status(400).json({ error: "Missing required order fields" });
    }

    const newOrder = new orderModel({
      customerName,
      customerEmail,
      customerAddress,
      items,
      totalAmount,
      paymentStatus: paymentStatus || "pending",
      orderStatus: orderStatus || "processing",
      orderDate: orderDate || Date.now(),
    });

    const savedOrder = await newOrder.save();
    res
      .status(201)
      .json({ message: "Order placed successfully", order: savedOrder });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
// Get all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await orderModel.find().sort({ orderDate: -1 }); 
    // newest first
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};
// Delete Order by ID provided in the request body
 const deleteOrder = async (req, res) => {
  const { orderId } = req.body; // Expecting orderId in the request body

  if (!orderId) {
    return res.status(400).json({ message: "Order ID is required" });
  }

  try {
    // Find the order by ID and delete it
    const deletedOrder = await orderModel.findByIdAndDelete(orderId);

    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    return res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error("Error deleting order:", error);
    return res
      .status(500)
      .json({ message: error.message || "Failed to delete order" });  
  }
};

export { createOrder, getAllOrders, deleteOrder };
