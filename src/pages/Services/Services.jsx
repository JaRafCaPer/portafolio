import SpotlightCard from "../../blocks/Components/SpotlightCard/SpotlightCard";
import "./Services.css";

const Services = () => {
  return (
    <section className="services">
      <div className="services-container">
        <h1>My Services</h1>
        <SpotlightCard title="Basic Plan" description="Landing page with a pre-built template." />
        <SpotlightCard title="Custom Project" description="Full custom development with advanced features." />
      </div>
    </section>
  );
};

export default Services;
