import { Router } from "express";
import {
  booking,
  bookingId,
  bookingList,
  createPaymentIntent,
  cancelPaymentIntent,
} from "../controllers/booking.mjs";
import { protect } from "../middlewares/protect.mjs";

export const bookingRouter = Router();

bookingRouter.get("/", [protect], bookingList);
bookingRouter.get("/:bookingId", [protect], bookingId);
bookingRouter.post("/", [protect], booking);
bookingRouter.post("/paymentIntent", [protect], createPaymentIntent);
bookingRouter.post("/cancelPaymentIntent", [protect], cancelPaymentIntent);
