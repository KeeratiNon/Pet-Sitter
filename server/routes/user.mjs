import { Router } from "express";
import {
  viewUserProfile,
  createUserProfile,
  viewPetProfile,
  createPetProfile,
  updatePetProfile,
  deletePetProfile,
} from "../controllers/user.mjs";

export const userRouter = Router();

userRouter.get("/profile/:userId", viewUserProfile);
userRouter.put("/profile", createUserProfile);
userRouter.get("/pet/:userId", viewPetProfile);
userRouter.post("/pet", createPetProfile);
userRouter.put("/pet/:petId", updatePetProfile);
userRouter.delete("/pet/:petId", deletePetProfile);
