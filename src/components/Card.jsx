import { Link } from "react-router";
import "../styles/components/Card.scss";

const Card = ({ data }) => {
  return (
    <Link to={`/accommodation/${data.id}`} className="card">
      <figure key={data.id}>
        <img src={data.cover} alt={data.title} className="card-img" />
        <figcaption>
          <h2 className="card-title">{data.title}</h2>
        </figcaption>
      </figure>
    </Link>
  );
};

export default Card;
