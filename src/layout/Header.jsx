import { NavLink } from "react-router";
import "../styles/layout/Header.scss";
import Logo from "../components/Logo";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <nav>
        <ul className="navbar">
          <li className="fs-layout-content">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li className="fs-layout-content">
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
