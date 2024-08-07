import { Router } from "express";
import { protect } from "../middlewares/protect.mjs";

import { getUserReview } from "../controllers/review.mjs";

export const userReview = Router();

userReview.get("/reviews/:pet_sitter_id", getUserReview);
