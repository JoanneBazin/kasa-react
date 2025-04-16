import useFetchLodging from "../hooks/useFetchLodging";
import Banner from "../components/Banner";
import imgbanner from "../assets/images/img-home.png";
import CardsContainer from "../layout/CardsContainer";

const Home = () => {
  const { data, loading, error } = useFetchLodging();

  return (
    <>
      <Banner img={imgbanner} title="Chez vous, partout et ailleurs" />

      {loading ? (
        <div className="fetch-loading">Loading...</div>
      ) : error ? (
        <div className="fetch-error">
          Erreur lors de la récupération des logements. Veuillez réessayer
          ultérieurement.
        </div>
      ) : (
        <CardsContainer data={data} />
      )}
    </>
  );
};

export default Home;
