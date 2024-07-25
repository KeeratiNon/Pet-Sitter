import sql from "../utils/db.mjs";

const calculateDuration = (startTime, endTime) => {
  const start = new Date(`1970-01-01T${startTime}Z`);
  const end = new Date(`1970-01-01T${endTime}Z`);
  const duration = (end - start) / (1000 * 60 * 60);
  return duration;
};

const formatBookedDate = (date, startTime, endTime) => {
  const options = { day: '2-digit', month: 'short' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(new Date(date));
  
  const timeOptions = { hour: 'numeric', hour12: true, timeZone: 'UTC' };
  const formattedStartTime = new Date(`1970-01-01T${startTime}Z`).toLocaleTimeString('en-US', timeOptions);
  const formattedEndTime = new Date(`1970-01-01T${endTime}Z`).toLocaleTimeString('en-US', timeOptions);

  return `${formattedDate}, ${formattedStartTime} - ${formattedEndTime}`;
};

export const viewAllPetsitterBookingList = async (req, res) => {
  const { id } = req.params;
  const { searchQuery = '', status = 'All status' } = req.query;

  try {
    let query = sql`
      SELECT id, firstname, lastname, booking_date, booking_time_start, booking_time_end, status 
      FROM bookings 
      WHERE petsitter_id = ${id}
    `;

    if (searchQuery) {
      query = sql`${query} AND (LOWER(firstname) LIKE ${'%' + searchQuery.toLowerCase() + '%'} OR LOWER(lastname) LIKE ${'%' + searchQuery.toLowerCase() + '%'})`;
    }

    if (status !== 'All status') {
      query = sql`${query} AND status = ${status}`;
    }

    query = sql`${query} ORDER BY booking_date DESC, booking_time_start DESC`;

    const bookings = await query;

    const bookingPets = await sql`
      SELECT booking_id, COUNT(*) as pet_count 
      FROM booking_pets 
      WHERE booking_id IN (
        SELECT id 
        FROM bookings 
        WHERE petsitter_id = ${id}
      ) 
      GROUP BY booking_id
    `;

    const bookingsData = bookings.map(booking => {
      const petCount = bookingPets.find(pet => pet.booking_id === booking.id)?.pet_count || 0;
      const duration = calculateDuration(booking.booking_time_start, booking.booking_time_end);
      const bookedDate = formatBookedDate(booking.booking_date, booking.booking_time_start, booking.booking_time_end);

      return {
        id: booking.id,
        petOwnerName: `${booking.firstname} ${booking.lastname}`,
        petCount,
        duration: `${duration} hours`,
        bookedDate,
        status: booking.status,
      };
    });

    res.json({ data: bookingsData });
  } catch (error) {
    console.error('Error fetching bookings data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

