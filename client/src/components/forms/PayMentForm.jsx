import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import BookingSummary from "../booking/BookingSummary";

const PayMentForm = ({ onPrev, onConfirm, bookingData, setBookingData }) => {
  const stripe = useStripe();
  const elements = useElements();

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardNumberElement,
      billing_details: {
        name: bookingData.card_owner,
      },
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("PaymentMethod", paymentMethod);
      onConfirm(true); // Or handle confirmation however you need
    }
  };

  return (
    <form
      className="flex flex-col gap-4 py-10 px-4 rounded-2xl md:bg-white md:p-10"
      onSubmit={onSubmit}
    >
      <h3 className="text-[24px] leading-[32px] font-bold text-[#3A3B46]">
        Credit Card
      </h3>
      <div className="flex flex-wrap gap-4 md:gap-10">
        <div className="w-full flex flex-col gap-1 md:flex-1">
          <label htmlFor="cardNumber" className="input-label">
            Card Number*
          </label>
          <CardNumberElement id="cardNumber" className="input-box" />
        </div>
        <div className="w-full flex flex-col flex-1 gap-1 md:flex-1">
          <label htmlFor="cardOwner" className="input-label">
            Card Owner*
          </label>
          <input
            type="text"
            name="card_owner"
            placeholder="Card owner name"
            className="input-box"
            value={bookingData.card_owner}
            onChange={(event) =>
              setBookingData({ ...bookingData, card_owner: event.target.value })
            }
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 md:gap-10">
        <div className="w-full flex flex-col gap-1 md:flex-1">
          <label htmlFor="expiry" className="input-label">
            Expiry Date*
          </label>
          <CardExpiryElement id="expiry" className="input-box" />
        </div>
        <div className="w-full flex flex-col flex-1 gap-1 md:flex-1">
          <label htmlFor="cvc" className="input-label">
            CVC/CVV*
          </label>
          <CardCvcElement id="cvc" className="input-box" />
        </div>
      </div>
      <div className="md:hidden">
        <BookingSummary bookingData={bookingData} />
      </div>
      <div className="flex justify-between gap-[10px] py-6 px-4 bg-white md:rounded-b-2xl">
        <button
          type="button"
          className="btn-secondary md:w-[120px]"
          onClick={onPrev}
        >
          Back
        </button>
        <button type="submit" className="btn-primary md:w-[175px]">
          Confirm Booking
        </button>
      </div>
    </form>
  );
};

export default PayMentForm;
