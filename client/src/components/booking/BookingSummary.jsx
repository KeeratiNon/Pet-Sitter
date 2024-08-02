const BookingSummary = ({ bookingData }) => {
  const formatDate = (date) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const dateString = new Date(date).toLocaleDateString("en-US", options);
    const [month, day, year] = dateString.replace(",", "").split(" ");
    return `${day} ${month}, ${year}`;
  };

  const calculateDuration = (bookingTimeStart, bookingTimeEnd) => {
    let durationInMinutes = bookingTimeEnd - bookingTimeStart;

    if (durationInMinutes < 0) {
      durationInMinutes += 24 * 60;
    }

    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;

    const hoursDisplay =
      hours > 0 ? `${hours} Hour${hours > 1 ? "s" : ""}` : "";
    const minutesDisplay =
      minutes > 0 ? `${minutes} Minute${minutes > 1 ? "s" : ""}` : "";

    return [hoursDisplay, minutesDisplay].filter(Boolean).join(" ");
  };

  const calculateTotalCost = (pets, bookingTimeStart, bookingTimeEnd) => {
    let countPet = pets.length;
    let startMinutes = bookingTimeStart[0];
    let endMinutes = bookingTimeEnd[0];

    let hours = (endMinutes - startMinutes) / 60;

    let perHour = 200;
    let firstPetCost = 600;
    let additionalPetCost = 300;

    let totalHourCost = hours * perHour;
    let totalPetCost = 0;

    if (countPet > 0) {
      totalPetCost += firstPetCost;
      totalPetCost += (countPet - 1) * additionalPetCost;
    }

    let totalCost = totalHourCost + totalPetCost;

    return totalCost.toFixed(2);
  };

  return (
    <div className="z-0 w-[396px] rounded-2xl overflow-hidden h-fit min-w-[396px]">
      <section className="w-full bg-white">
        <h1 className="text-[20px] leading-[28px] font-bold p-4 border-b md:text-2xl">
          Booking Detail
        </h1>

        <ul className="py-6 px-4 list-detail gap-4">
          <li className="list-detail">
            <span className="text-[#7B7E8F] text-[14px] leading-[24px] font-medium">
              Pet Sitter:
            </span>
            <span className="text-[#3A3B46] text-[16px] leading-[28px] font-medium">
              {`${bookingData.pet_sitter_firstname} ${bookingData.pet_sitter_lastname}`}
            </span>
          </li>
          <li className="list-detail">
            <span className="text-[#7B7E8F] text-[14px] leading-[24px] font-medium">
              Date & Time:
            </span>
            <span className="text-[#3A3B46] text-[16px] leading-[28px] font-medium">
              {`${formatDate(bookingData.booking_date)} | ${
                bookingData.booking_time_start[1]
              } ${bookingData.booking_time_end[1]}`}
            </span>
          </li>
          <li className="list-detail">
            <span className="text-[#7B7E8F] text-[14px] leading-[24px] font-medium">
              Duration:
            </span>
            <span className="text-[#3A3B46] text-[16px] leading-[28px] font-medium">
              {calculateDuration(
                bookingData.booking_time_start[0],
                bookingData.booking_time_end[0]
              )}
            </span>
          </li>
          <li className="list-detail">
            <span className="text-[#7B7E8F] text-[14px] leading-[24px] font-medium">
              Pet:
            </span>
            <span className="text-[#3A3B46] text-[16px] leading-[28px] font-medium">
              {bookingData.pet_name.length > 0
                ? bookingData.pet_name.join(", ")
                : "-"}
            </span>
          </li>
        </ul>

        <ul className="bg-black p-4">
          <li className="flex justify-between">
            <span className="text-white text-[16px] leading-[28px] font-medium">
              Total
            </span>
            <span className="text-white text-[16px] leading-[28px] font-medium">
              {`${calculateTotalCost(
                bookingData.pet_name,
                bookingData.booking_time_start,
                bookingData.booking_time_end
              )} THB`}
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default BookingSummary;
