import { Router } from "express";
import { protect } from "../middlewares/protect.mjs";
import { viewAllPetsitterBookingList } from "../controllers/petsitterbooking.mjs";


export const petSitterBookingRouter = Router();

petSitterBookingRouter.get("/:id",[protect], viewAllPetsitterBookingList);