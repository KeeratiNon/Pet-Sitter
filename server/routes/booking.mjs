import { Router } from "express";
import {
  saveBookingData,
  bookingInformation,
  bookingList,
  createPaymentIntent,
  cancelPaymentIntent,
} from "../controllers/booking.mjs";
import { protect } from "../middlewares/protect.mjs";

export const bookingRouter = Router();

bookingRouter.get("/", [protect], bookingList);
bookingRouter.post("/paymentIntent", [protect], createPaymentIntent);
bookingRouter.post("/cancelPaymentIntent", [protect], cancelPaymentIntent);
bookingRouter.post("/", [protect], saveBookingData);
bookingRouter.get("/information", [protect], bookingInformation);
bookingRouter.put("/:bookingId", updateBooking); // เพิ่มเส้นทางสำหรับอัปเดตการจอง
bookingRouter.get("/", bookingList);
bookingRouter.get("/:bookingId", bookingId);
bookingRouter.post("/", booking);