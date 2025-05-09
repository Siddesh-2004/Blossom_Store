import express from "express";
import {payment,validatePayment} from "../controllers/paymentController.js";
import { get } from "mongoose";

const router = express.Router();

router.post("/payment", payment);
router.post("/validate",validatePayment);


export default router;