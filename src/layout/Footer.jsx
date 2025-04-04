import logo from "../assets/logo-footer.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
