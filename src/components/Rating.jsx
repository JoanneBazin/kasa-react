import StarRating from "./StarRating";
import "../styles/components/Rating.scss";

const Rating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="rating">
      {stars.map((star) => (
        <StarRating key={star} color={star <= rating ? "#FF6060" : "#E3E3E3"} />
      ))}
    </div>
  );
};

export default Rating;
