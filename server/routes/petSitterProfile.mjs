import { Router } from "express";
import { protect } from "../middlewares/protect.mjs";
import { createPetsitterProfile, viewPetsitterProfile, updatePetsitterProfile, checkPetsitterProfile,  searchPetsitterProfile} from "../controllers/petSitterProfile.mjs";



export const petSitterProfileRouter = Router();

petSitterProfileRouter.post("/:id", createPetsitterProfile);

petSitterProfileRouter.get("/:id", viewPetsitterProfile);

petSitterProfileRouter.get("/search/:id", viewPetsitterProfile);

petSitterProfileRouter.get('/check/:id', checkPetsitterProfile);

petSitterProfileRouter.put("/:id", updatePetsitterProfile);

petSitterProfileRouter.get("/search", searchPetsitterProfile);
