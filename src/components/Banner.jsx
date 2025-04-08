import "../styles/components/Banner.scss";

const Banner = ({ img, title, variant }) => {
  return (
    <section
      className={`banner ${
        variant === "light" ? "banner-light" : "banner-dark"
      }`}
      style={{ backgroundImage: `url(${img})` }}
    >
      {title && (
        <p className="banner-title">
          <span className="stroke">{title}</span>
          {title}
        </p>
      )}
    </section>
  );
};

export default Banner;
