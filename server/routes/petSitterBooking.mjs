import { Router } from "express";
import { protect } from "../middlewares/protect.mjs";
import { viewAllPetsitterBookingList } from "../controllers/petsitterbooking.mjs";
import { viewPetsitterBookingDetail } from "../controllers/petsitterbooking.mjs";


export const petSitterBookingRouter = Router();

petSitterBookingRouter.use((req, res, next) => {
    console.log(`petSitterBookingRouter request: ${req.method} ${req.url}`);
    next();
  });

petSitterBookingRouter.get("/:id",[protect], viewAllPetsitterBookingList);
petSitterBookingRouter.get("/detail/:id",[protect], viewPetsitterBookingDetail);