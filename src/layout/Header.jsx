import { NavLink } from "react-router";
import logo from "../assets/logo/logo-header.png";
import "../styles/layout/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo Kasa" />
      <nav>
        <ul className="navbar">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
