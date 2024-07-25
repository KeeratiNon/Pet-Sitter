import PetForm from "../forms/PetForm";
import InfomationForm from "../forms/InfomationForm";
import PayMentForm from "../forms/PayMentForm";

const BookingForms = ({
  page,
  data,
  setData,
  handlePrev,
  handleNext,
  setIsModalOpen,
  width,
}) => {
  switch (page) {
    case 0:
      return (
        <PetForm
          width={width}
          onPrev={handlePrev}
          onNext={handleNext}
          data={data}
          setData={setData}
        />
      );
    case 1:
      return (
        <InfomationForm
          width={width}
          onPrev={handlePrev}
          onNext={handleNext}
          data={data}
          setData={setData}
        />
      );
    case 2:
      return (
        <PayMentForm
          width={width}
          onPrev={handlePrev}
          onConfirm={setIsModalOpen}
          data={data}
          setData={setData}
        />
      );
    default:
      return null;
  }
};

export default BookingForms;
