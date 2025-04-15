import { Link } from "react-router";
import "../styles/pages/Error.scss";

const Error = () => {
  return (
    <section className="error-container">
      <h2 className="error-title">404</h2>
      <p className="error-message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="error-redirection fs-text-md" to="/">
        Retourner sur la page d'accueil
      </Link>
    </section>
  );
};

export default Error;
