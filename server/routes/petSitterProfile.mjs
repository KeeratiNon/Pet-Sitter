import { Router } from "express";
import { createPetsitterProfile } from "../controllers/petSitterProfile.mjs";


export const petSitterProfileRouter = Router();

petSitterProfileRouter.post("/:id", createPetsitterProfile);