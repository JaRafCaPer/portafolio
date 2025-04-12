import "./Pricing.css";

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="pricing-container">
        <h1>Planes y Precios</h1>
        <div className="pricing-list">
          <div className="pricing-item">
            <h2>Plan Básico</h2>
            <p>$500 USD</p>
            <p>Landing page con plantilla predefinida.</p>
          </div>
          <div className="pricing-item">
            <h2>Proyecto Personalizado</h2>
            <p>Desde $1000 USD</p>
            <p>Desarrollo a medida con funcionalidades avanzadas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
