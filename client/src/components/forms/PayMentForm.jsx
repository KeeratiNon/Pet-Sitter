import { Formik, Form, Field } from "formik";
import { bookingInfoSchema } from "../../schemas/BookingInfo";

const initialValues = {
  cardNumber: "",
  cardOwner: "",
  expiryDate: "",
  cvv: "",
};

const PayMentForm = () => {
  const onSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={bookingInfoSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <section className="flex flex-col gap-4 py-10 px-4 rounded-t-2xl md:bg-white md:p-10">
            <h3 className="text-[24px] leading-[32px] font-bold text-[#3A3B46]">
              Credit Card
            </h3>
            <div className="flex flex-wrap gap-4 md:gap-10">
              <div className="w-full flex flex-col gap-1 md:flex-1">
                <label htmlFor="firstname" className="input-label">
                  Card Number*
                </label>
                <Field
                  type="text"
                  name="cardNumber"
                  placeholder="xxx-xxxx-x-xx-xx"
                  className="input-box"
                />
              </div>

              <div className="w-full flex flex-col flex-1 gap-1 md:flex-1">
                <label htmlFor="lastname" className="input-label">
                  Card Owner*
                </label>
                <Field
                  type="text"
                  name="cardOwner"
                  placeholder="Card owner name"
                  className="input-box"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-10">
              <div className="w-full flex flex-col gap-1 md:flex-1">
                <label htmlFor="email" className="input-label">
                  Expiry Date*
                </label>
                <Field
                  type="text"
                  name="expiryDate"
                  placeholder="xxx-xxx-xxxx"
                  className="input-box"
                />
              </div>

              <div className="w-full flex flex-col flex-1 gap-1 md:flex-1">
                <label htmlFor="phone" className="input-label">
                  CVC/CVV*
                </label>
                <Field
                  type="text"
                  name="cvv"
                  placeholder="xxx"
                  className={`input-box ${
                    errors.phone && touched.phone && "outline-[#EA1010]"
                  }`}
                />
              </div>
            </div>
          </section>
        </Form>
      )}
    </Formik>
  );
};

export default PayMentForm;
