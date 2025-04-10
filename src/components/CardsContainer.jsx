import useFetchLodging from "../hooks/useFetchLodging";
import Card from "./Card";
import "../styles/components/CardsContainer.scss";

const CardsContainer = () => {
  const { data, loading, error } = useFetchLodging();

  return (
    <section className="cards-container">
      {loading ? (
        <div className="fetch-loading">Loading...</div>
      ) : error ? (
        <div className="fetch-error">
          Erreur lors de la récupération des logements. Veuillez réessayer
          ultérieurement.
        </div>
      ) : data && data.length > 0 ? (
        data.map((item) => {
          return <Card key={item.id} data={item} />;
        })
      ) : null}
    </section>
  );
};

export default CardsContainer;
