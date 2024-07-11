import { Formik, Form, Field } from "formik";
import { bookingInfoSchema } from "../../schemas/BookingInfo";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  message: "",
};

const InfomationForm = () => {
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
        <Form className="flex flex-col gap-4 py-10 px-4 rounded-t-2xl md:bg-white md:p-10">
            <div className="flex flex-wrap gap-4 md:gap-10">
              <div className="w-full flex flex-col gap-1 md:flex-1">
                <label htmlFor="firstname" className="input-label">
                  First Name*
                </label>
                <Field
                  type="text"
                  name="firstname"
                  placeholder="First name"
                  className="input-box"
                />
              </div>

              <div className="w-full flex flex-col flex-1 gap-1 md:flex-1">
                <label htmlFor="lastname" className="input-label">
                  Last Name*
                </label>
                <Field
                  type="text"
                  name="lastname"
                  placeholder="Last name"
                  className="input-box"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-10">
              <div className="w-full flex flex-col gap-1 md:flex-1">
                <label htmlFor="email" className="input-label">
                  Email*
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="youremail@company.com"
                  className="input-box"
                />
              </div>

              <div className="w-full flex flex-col flex-1 gap-1 md:flex-1">
                <label htmlFor="phone" className="input-label">
                  Phone*
                </label>
                <Field
                  type="tel"
                  name="phone"
                  placeholder="xxx-xxx-xxxx"
                  className={`input-box ${
                    errors.phone && touched.phone && "outline-[#EA1010]"
                  }`}
                />
              </div>
            </div>

            <div className="w-full flex flex-col flex-1 gap-1 mt-5 border-t-[1px] md:flex-1">
              <label htmlFor="message" className="input-label mt-8">
                Additional Message (To pet sitter)
              </label>
              <Field
                type="text"
                name="message"
                as="textarea"
                rows={4}
                resize={false}
                className="input-box"
              />
            </div>
        </Form>
      )}
    </Formik>
  );
};

export default InfomationForm;
