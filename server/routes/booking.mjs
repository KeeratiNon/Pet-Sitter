import { Router } from "express";
import {
  booking,
  bookingId,
  bookingList,
  createPaymentIntent,
} from "../controllers/booking.mjs";

export const bookingRouter = Router();

bookingRouter.get("/", bookingList);
bookingRouter.get("/:bookingId", bookingId);
bookingRouter.post("/", booking);
bookingRouter.post("/paymentIntent", createPaymentIntent);
