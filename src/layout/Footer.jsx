import logo from "../assets/logo/logo-footer.png";
import "../styles/layout/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
