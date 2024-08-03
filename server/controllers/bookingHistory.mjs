import sql from "../utils/db.mjs"; // นำเข้าโมดูลฐานข้อมูลที่คุณเชื่อมต่อ

export const getBookingHistory = async (req, res) => {
  try {
    const userId = req.user.id; // รับค่า userId จากการ authenticate (ถ้ามี)
    // console.log(userId);

    // ใช้ SQL query ในการดึงข้อมูลและจัดรูปแบบวันที่และเวลา
    const rows = await sql`
      SELECT 
        bookings.pet_sitter_id,
        to_char(bookings.booking_date, 'DD Mon, YYYY') AS formatted_booking_date,
        to_char(bookings.booking_time_start, 'HH12:MI AM') AS formatted_booking_time_start,
        to_char(bookings.booking_time_end, 'HH12:MI AM') AS formatted_booking_time_end,
        bookings.status,
        pet_sitter_profiles.profile_image,
        pet_sitter_profiles.pet_sitter_name,
        pet_sitter_profiles.firstname,
        pet_sitter_profiles.lastname,
        to_char(booking_payments.created_at, 'Dy, DD Mon YYYY') AS formatted_payment_created_at,
        booking_payments.amount,
        bookings.id AS booking_id,
        array_agg(pets.pet_name) AS pet_names,
        to_char(bookings.updated_at, 'Dy, DD Mon YYYY | HH12:MI AM') AS formatted_updated_at 
      FROM bookings
      JOIN pet_sitter_profiles 
        ON bookings.pet_sitter_id = pet_sitter_profiles.pet_sitter_id
      JOIN booking_payments 
        ON bookings.id = booking_payments.booking_id
      JOIN booking_pets 
        ON bookings.id = booking_pets.booking_id
      JOIN pets
        ON booking_pets.pet_id = pets.id
      WHERE bookings.user_id = ${userId}
      GROUP BY 
        bookings.pet_sitter_id,
        bookings.booking_date,
        bookings.booking_time_start,
        bookings.booking_time_end,
        bookings.status,
        pet_sitter_profiles.profile_image,
        pet_sitter_profiles.pet_sitter_name,
        pet_sitter_profiles.firstname,
        pet_sitter_profiles.lastname,
        booking_payments.created_at,
        booking_payments.amount,
        bookings.id,
        bookings.updated_at
      ORDER BY bookings.booking_date DESC
    `;

    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching booking history:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ฟังก์ชันสำหรับดึงรายละเอียดการจองเฉพาะ bookingId
export const getBookingHistoryDetail = async (req, res) => {
  try {
    const { bookingId } = req.params; // รับค่า bookingId จาก URL parameter

    // ใช้ SQL query ในการดึงข้อมูลการจองเฉพาะ
    const rows = await sql`
      SELECT 
        to_char(bookings.booking_date, 'DD Mon, YYYY') AS formatted_booking_date,
        to_char(bookings.booking_time_start, 'HH12:MI AM') AS formatted_booking_time_start,
        to_char(bookings.booking_time_end, 'HH12:MI AM') AS formatted_booking_time_end,
        bookings.status,
        pet_sitter_profiles.profile_image,
        pet_sitter_profiles.pet_sitter_name,
        pet_sitter_profiles.firstname,
        pet_sitter_profiles.lastname,
        to_char(booking_payments.created_at, 'Dy, DD Mon YYYY') AS formatted_payment_created_at,
        booking_payments.amount,
        bookings.id AS booking_id,
        array_agg(pets.pet_name) AS pet_names,
        to_char(bookings.updated_at, 'Dy, DD Mon YYYY | HH12:MI AM') AS formatted_updated_at 
      FROM bookings
      JOIN pet_sitter_profiles 
        ON bookings.pet_sitter_id = pet_sitter_profiles.pet_sitter_id
      JOIN booking_payments 
        ON bookings.id = booking_payments.booking_id
      JOIN booking_pets 
        ON bookings.id = booking_pets.booking_id
      JOIN pets
        ON booking_pets.pet_id = pets.id
      WHERE bookings.id = ${bookingId}
      GROUP BY 
        bookings.booking_date,
        bookings.booking_time_start,
        bookings.booking_time_end,
        bookings.status,
        pet_sitter_profiles.profile_image,
        pet_sitter_profiles.pet_sitter_name,
        pet_sitter_profiles.firstname,
        pet_sitter_profiles.lastname,
        booking_payments.created_at,
        booking_payments.amount,
        bookings.id,
        bookings.updated_at
    `;

    if (rows.length === 0) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json(rows[0]);
  } catch (error) {
    console.error("Error fetching booking detail:", error);
    res.status(500).json({ message: "Server error" });
  }
};