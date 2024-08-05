import sql from "../utils/db.mjs";
import "dotenv/config";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

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

  try {
    const petIds = newBooking.pet_id;

    const result = await sql`
      WITH new_booking AS (
        INSERT INTO bookings (
          pet_sitter_id, 
          user_id, 
          firstname, 
          lastname, 
          email, 
          phone_number, 
          booking_date, 
          booking_time_start, 
          booking_time_end, 
          created_at, 
          updated_at
        )
        VALUES (
          ${newBooking.pet_sitter_id}, 
          ${newBooking.user_id}, 
          ${newBooking.firstname}, 
          ${newBooking.lastname}, 
          ${newBooking.email}, 
          ${newBooking.phone_number}, 
          ${newBooking.booking_date}, 
          ${newBooking.booking_time_start[0]}, 
          ${newBooking.booking_time_end[0]}, 
          ${newBooking.created_at}, 
          ${newBooking.updated_at}
        )
        RETURNING id
      ),
      inserted_pets AS (
        INSERT INTO booking_pets (
          booking_id, 
          pet_id, 
          created_at, 
          updated_at
        )
        VALUES
        ${sql(
          petIds.map(
            (pet_id) =>
              sql`((SELECT id FROM new_booking), ${pet_id}, ${newBooking.created_at}, ${newBooking.updated_at})`
          )
        )}
        RETURNING *
      )
      INSERT INTO booking_payments (
        booking_id, 
        transaction_number, 
        amount, 
        created_at, 
        updated_at
      )
      VALUES (
        (SELECT id FROM new_booking), 
        ${newBooking.transaction_number}, 
        ${newBooking.amount}, 
        ${newBooking.created_at}, 
        ${newBooking.updated_at}
      )
      RETURNING *;
    `;

    return res.status(201).json({
      message: `Created booking successfully`,
      data: result,
    });
  } catch {
    return res.status(500).json({
      message: `Server could not create booking because of database connection issue`,
    });
  }
};

export const createPaymentIntent = async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "thb",
      payment_method_types: ["card"],
    });

    if (paymentIntent.client_secret) {
      res.send({ clientSecret: paymentIntent.client_secret });
    } else {
      throw new Error("Failed to generate client secret");
    }
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).json({
      message: `Failed to create payment intent: ${error.message}`,
    });
  }
};
