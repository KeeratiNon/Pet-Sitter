import { Router } from "express";
import { createPetsitterProfile, searchPetsitterProfile } from "../controllers/petSitterProfile.mjs";


export const petSitterProfileRouter = Router();

petSitterProfileRouter.post("/:id", createPetsitterProfile);
petSitterProfileRouter.get("/search", searchPetsitterProfile);
