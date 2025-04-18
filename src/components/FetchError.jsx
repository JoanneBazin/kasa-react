import "../styles/components/FetchError.scss";

const FetchError = ({ error }) => {
  return (
    <div className="fetch-error-container">
      <p className="fetch-error">{error}</p>
    </div>
  );
};

export default FetchError;
