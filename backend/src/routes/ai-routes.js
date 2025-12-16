import express from 'express';
import { getReview } from '../controllers/ai.controller.js';
import { protectRoute } from '../middleware/authMiddleware.js';
const router=express.Router();

router.use(express.json());

// router.use(protectRoute);


router.post("/get-review",getReview);

export default router;