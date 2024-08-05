import express from 'express';
import { getBookingHistory, postReviwes } from '../controllers/bookingHistory.mjs';
import { protect } from '../middlewares/protect.mjs'; // สมมติว่ามี middleware สำหรับการ authenticate

const router = express.Router();

// กำหนดเส้นทาง GET สำหรับการดึงข้อมูล Booking History
router.get('/', [protect], getBookingHistory);




router.post('/', postReviwes) //สร้าง review&rating


export default router;
