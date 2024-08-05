import { Router } from "express";
import { booking, bookingId, bookingList } from "../controllers/booking.mjs";

export const bookingRouter = Router();

bookingRouter.get("/", bookingList);
bookingRouter.get("/:bookingId", bookingId);
bookingRouter.post("/", booking);
bookingRouter.put("/:bookingId", updateBooking); // เพิ่มเส้นทางสำหรับอัปเดตการจอง