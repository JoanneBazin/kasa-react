import Banner from "../components/Banner";
import imgBanner from "../assets/images/img-about.png";
import Collapse from "../components/Collapse";
import aboutItems from "../data/aboutItems";
import "../styles/pages/About.scss";

const About = () => {
  return (
    <>
      <Banner img={imgBanner} variant="light" />
      <section className="collapse-container">
        {aboutItems.map((item, index) => {
          return (
            <Collapse
              key={index}
              title={item.title}
              content={item.content}
              size="large"
            />
          );
        })}
      </section>
    </>
  );
};

export default About;
