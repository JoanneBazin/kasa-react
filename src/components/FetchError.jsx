import "../styles/components/FetchError.scss";

const FetchError = ({ error }) => {
  return (
    <div className="error-container">
      <p className="fetch-error">{error}</p>
    </div>
  );
};

export default FetchError;
