import express from 'express';
import { getBookingHistory } from '../controllers/bookingHistory.mjs';
import { protect } from '../middlewares/protect.mjs'; // สมมติว่ามี middleware สำหรับการ authenticate

const router = express.Router();

// กำหนดเส้นทาง GET สำหรับการดึงข้อมูล Booking History
router.get('/', [protect], getBookingHistory);

export default router;
