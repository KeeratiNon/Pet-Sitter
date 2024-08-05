import sql from "../utils/db.mjs";

export const bookingList = async (req, res) => {
  let result;

  try {
    result = await sql`select * from bookings`;
  } catch {
    return res.status(500).json({
      message: `Sever could not retrieves a booking list because database connection`,
    });
  }

  if (!result) {
    return res.status(404).json({
      message: `The reason the data could not be located was that it was never stored in the database you asked for`,
    });
  }

  return res.status(200).json({
    message: `Successfully retrieved the list of booking`,
    data: result,
  });
};

export const bookingId = async (req, res) => {
  const bookingIdFromClient = req.params.bookingId;
  let result;

  try {
    result =
      await sql`select * from bookings where id = ${bookingIdFromClient}`;
  } catch {
    return res.status(500).json({
      message: `Server could not retrieves a specific bookingID by its ID because database connection`,
    });
  }

  return res.status(200).json({
    message: `successfully retrieved the booking`,
    data: result.rows[0],
  });
};

export const booking = async (req, res) => {
  const newBooking = {
    ...req.body,
    created_at: new Date(),
    updated_at: new Date(),
  };

  let result;

  try {
    result = await sql`
    insert into bookings (users_pets_id, firstname, lastname, email, phone_number, status, message, created_at, updated_at)
    values (${newBooking.pet_id}, ${newBooking.first_name}, ${newBooking.last_name}, ${newBooking.email}, ${newBooking.phone_number}, ${newBooking.status}, ${newBooking.message}, ${newBooking.created_at}, ${newBooking.updated_at})
    returning *`;
  } catch {
    return res.status(500).json({
      message: `Sever could not create booking because database connection`,
    });
  }

  return res.status(201).json({
    message: `Created booking successfully`,
    data: result,
  });
};


// ฟังก์ชันสำหรับอัปเดตข้อมูลการจอง
export const updateBooking = async (req, res) => {
  const bookingId = req.params.bookingId;
  const { date, startTime, endTime } = req.body;

  try {
    const result = await sql`
      UPDATE bookings 
      SET 
        booking_date = ${date}, 
        booking_time_start = ${startTime}, 
        booking_time_end = ${endTime},
        updated_at = NOW()
      WHERE id = ${bookingId}
      RETURNING *`;

    if (result.count === 0) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({ message: "Booking updated successfully", data: result[0] });
  } catch (error) {
    console.error("Error updating booking:", error);
    res.status(500).json({ message: "Server error" });
  }
};
