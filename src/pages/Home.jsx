import Banner from "../components/Banner";
import imgbanner from "../assets/images/img-home.png";
import "../styles/pages/Home.scss";
import CardsContainer from "../components/CardsContainer";

const Home = () => {
  return (
    <>
      <Banner img={imgbanner} title="Chez vous, partout et ailleurs" />

      <CardsContainer />
    </>
  );
};

export default Home;
