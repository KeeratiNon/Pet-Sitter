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
        bookings.id AS booking_id,
        array_agg(pets.pet_name) AS pet_names
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
        bookings.id
      ORDER BY bookings.booking_date DESC
    `;

    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching booking history:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const postReviwes = async (req, res) => {
  const newReview = {
    ...req.body,
    created_at: new Date(),
  };

  try {
    const result =
      await sql`INSERT INTO user_reviews (booking_id, rating, review, created_at ) 
      VALUES (${newReview.booking_id},${newReview.rating},${newReview.review},${newReview.created_at}) 
      RETURNING * `;
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const postReport = async (req, res) => {
  const newReport = {
    ...req.body,
    created_at: new Date(),
  };

  try {
    const result = await sql`INSERT INTO user_reports (issue, description, created_at) 
      VALUES (${newReport.issue}, ${newReport.description}, ${newReport.created_at}) 
      RETURNING *`;
    return res.status(200).json({
      message: `Created report successfully`,
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


