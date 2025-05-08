import express from "express";
import { createOrder, getAllOrders,deleteOrder} from "../controllers/orderController.js";
import { get } from "mongoose";

const router = express.Router();

router.post("/create", createOrder);
router.get("/getAll", getAllOrders);
router.post("/delete", deleteOrder); // Delete order by ID

export default router;