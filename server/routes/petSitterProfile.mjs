import { Router } from "express";
import { protect } from "../middlewares/protect.mjs";
import { createPetsitterProfile, viewPetsitterProfile, updatePetsitterProfile, checkPetsitterProfile,  searchPetsitterProfile} from "../controllers/petSitterProfile.mjs";



export const petSitterProfileRouter = Router();

petSitterProfileRouter.post("/petsitter/profile/:id",[protect], createPetsitterProfile);

petSitterProfileRouter.get("/petsitter/profile/:id",[protect], viewPetsitterProfile);


petSitterProfileRouter.get("/search/:id", viewPetsitterProfile);

petSitterProfileRouter.get('/petsitter/profile/check/:id', checkPetsitterProfile);

petSitterProfileRouter.put("/petsitter/profile/:id",[protect], updatePetsitterProfile);

petSitterProfileRouter.get("/search", searchPetsitterProfile);
