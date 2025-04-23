import { useLocation, useNavigate, useParams } from "react-router";
import "../styles/pages/Lodging.scss";

import { useFetchLodging } from "../hooks/useFetchLodging";
import Slideshow from "../components/SlideShow";
import Tag from "../components/Tag";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import { useEffect } from "react";
import Loader from "../components/Loader";
import FetchError from "../components/FetchError";

const Lodging = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const lodgingLink = location.state?.lodging || null;
  const { data, loading, error } = useFetchLodging(lodgingLink ? "none" : id);

  const lodging = lodgingLink || data;

  useEffect(() => {
    if (error === "Pas de logement correspondant") {
      navigate("/error");
    }
  }, [error, navigate]);

  if (loading) return <Loader />;
  if (error) return <FetchError error={error} />;

  const {
    title,
    pictures,
    description,
    host,
    rating,
    location: place,
    equipments,
    tags,
  } = lodging;

  return (
    <article className="lodging-container">
      <Slideshow images={pictures} />
      <section className="lodging-info">
        <div className="info-left">
          <h1 className="title">{title}</h1>
          <p className="fs-text-md">{place}</p>
          <ul className="info-tags">
            {tags.map((tag, index) => (
              <Tag key={index} title={tag} />
            ))}
          </ul>
        </div>

        <div className="info-right">
          <Host host={host} />
          <Rating rating={rating} />
        </div>

        <div className="info-bottom">
          <Collapse title="Description" content={description} size="medium" />
          <Collapse
            title="Équipements"
            content={equipments}
            size="medium"
            list={true}
          />
        </div>
      </section>
    </article>
  );
};

export default Lodging;
