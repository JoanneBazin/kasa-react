import "../styles/components/Banner.scss";

const Banner = ({ img, title, variant }) => {
  return (
    <div
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
    </div>
  );
};

export default Banner;
