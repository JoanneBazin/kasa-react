import Card from "../components/Card";
import "../styles/layout/CardsContainer.scss";

const CardsContainer = ({ data }) => {
  return (
    <section className="cards-container">
      {data && data.length > 0
        ? data.map((item) => {
            return <Card key={item.id} data={item} />;
          })
        : null}
    </section>
  );
};

export default CardsContainer;
