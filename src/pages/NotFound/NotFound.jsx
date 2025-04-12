import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="not-found-container">
        <h1>404</h1>
        <p>Página no encontrada</p>
        <Link to="/" className="home-link">Volver al inicio</Link>
      </div>
    </section>
  );
};

export default NotFound;
