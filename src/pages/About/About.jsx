import ElasticSlider from "../../blocks/components/ElasticSlider/ElasticSlider";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h1>About Me</h1>
        <p>I am Javier Caballero, a web and front-end developer passionate about building modern web applications.</p>
        <ElasticSlider />
      </div>
    </section>
  );
};

export default About;
