import { Router } from "express";
import {
  createUserProfile,
  createPet,
  updatePet,
  deletePet,
  selectAllPet,
} from "../controllers/user.mjs";

export const userRouter = Router();

userRouter.post("/", createUserProfile);
userRouter.post("/pet", createPet);
userRouter.put("/pet/:petId", updatePet);
userRouter.delete("/pet/:petId", deletePet);
userRouter.get("/pet", selectAllPet);
