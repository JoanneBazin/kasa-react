import useFetchLodging from "../hooks/useFetchLodging";
import Banner from "../components/Banner";
import imgbanner from "../assets/images/img-home.png";
import CardsContainer from "../layout/CardsContainer";
import Loader from "../components/Loader";
import FetchError from "../components/FetchError";

const Home = () => {
  const { data, loading, error } = useFetchLodging();

  return (
    <>
      <Banner img={imgbanner} title="Chez vous, partout et ailleurs" />

      {loading ? (
        <Loader />
      ) : error ? (
        <FetchError error={error} />
      ) : (
        <CardsContainer data={data} />
      )}
    </>
  );
};

export default Home;
