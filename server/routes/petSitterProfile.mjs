import { Router } from "express";
import { createPetsitterProfile, viewPetsitterProfile, updatePetsitterProfile, checkPetsitterProfile,  searchPetsitterProfile} from "../controllers/petSitterProfile.mjs";



export const petSitterProfileRouter = Router();

petSitterProfileRouter.post("/:id", createPetsitterProfile);

petSitterProfileRouter.get("/search", searchPetsitterProfile);

petSitterProfileRouter.get("/:id", viewPetsitterProfile);

petSitterProfileRouter.get('/check/:id', checkPetsitterProfile);

petSitterProfileRouter.put("/:id", updatePetsitterProfile);

