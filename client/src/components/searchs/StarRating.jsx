import star2 from "../../assets/svgs/star2.svg";

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: rating }, (v, i) => (
    <img
      key={i}
      src={ star2 }
      alt="star"
      className=" size-3 md:size-5"
    />
  ));

 

  return (
    <>
      <div className="flex flex-nowrap w-full">{stars}</div>
    </>
  );
};

export default StarRating;
