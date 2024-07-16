import { Router } from "express";
import { getChatRoomList } from "../controllers/chatrooms.mjs";
import { protect } from "../middlewares/protect.mjs";

export const chatRouter = Router();

chatRouter.get("/list",[protect], getChatRoomList);
