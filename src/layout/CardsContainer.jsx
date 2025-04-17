import Card from "../components/Card";
import FetchError from "../components/FetchError";

import "../styles/layout/CardsContainer.scss";

const CardsContainer = ({ data }) => {
  return (
    <section className="cards-container">
      {data && data.length > 0 ? (
        data.map((item) => {
          return <Card key={item.id} data={item} />;
        })
      ) : (
        <FetchError error="Aucun logement trouvé" />
      )}
    </section>
  );
};

export default CardsContainer;
