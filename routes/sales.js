import express from "express";
import { getSales } from "../controllers/sales.js";
import { getBreakdown } from "../controllers/sales.js";

const router = express.Router();

router.get("/sales", getSales);
router.get("/breakdown", getBreakdown);

export default router;
