import Logo from "../components/Logo";
import "../styles/layout/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Logo size="medium" color="#FFFFFF" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
