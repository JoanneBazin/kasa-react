import { useState } from "react";
import "../styles/components/Slideshow.scss";
import prevArrow from "../assets/icons/prev-arrow-slide.svg";
import nextArrow from "../assets/icons/next-arrow-slide.svg";

const Slideshow = ({ images }) => {
  const [activeSlide, setActiveSlide] = useState(images[0]);
  const imgCount = images.length;
  const imgIndex = images.indexOf(activeSlide);

  const handleNextImg = () => {
    const nextIndex = (imgIndex + 1) % imgCount;

    setActiveSlide(images[nextIndex]);
  };
  const handlePrevImg = () => {
    const nextIndex = (imgIndex - 1 + imgCount) % imgCount;

    setActiveSlide(images[nextIndex]);
  };

  return (
    <div className="slideshow-container">
      {images?.length > 0 && (
        <img
          src={activeSlide}
          alt="Photo de l'hébergement"
          className="slideshow-img"
        />
      )}
      {images?.length > 1 && (
        <>
          <button className="slideshow-nav-btn prev" onClick={handlePrevImg}>
            <img src={prevArrow} alt="Photo précédente" />
          </button>
          <button className="slideshow-nav-btn next" onClick={handleNextImg}>
            <img src={nextArrow} alt="Photo suivante" />
          </button>
          <span className="slideshow-counter">
            {imgIndex + 1}/{imgCount}
          </span>
        </>
      )}
    </div>
  );
};

export default Slideshow;
