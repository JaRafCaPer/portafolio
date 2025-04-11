import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Javier Caballero. Todos los derechos reservados.</p>
        <ul className="footer-links">
          <li><Link to="/about">Sobre mí</Link></li>
          <li><Link to="/services">Servicios</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
