import "./Home.css";
import heroImg from "../../assets/images/heroimg.png";
import ParallaxSection from "../../components/Common/ParallaxSection/ParallaxSection";
import Stack from "../../blocks/Components/Stack/Stack";



const Home = () => {
  const language = navigator.language.startsWith("es") ? "es" : "en";

  return (
    <main className="home-page">   
      <section className="hero-section">
        <div className="parallax-bg" />
        <div className="hero-content">
          <div className="hero-left">
            <h1>
              {language === "es"
                ? "Hola, soy Javier Caballero"
                : "Hi, I'm Javier Caballero"}
            </h1>
            <p>
              {language === "es"
                ? "Desarrollador full stack y diseñador web enfocado en soluciones digitales visuales, modernas y personalizadas."
                : "Full stack developer and web designer focused on modern, visually engaging, and custom digital solutions."}
            </p>
            <button className="hero-button">
              {language === "es" ? "Ver servicios" : "See Services"}
            </button>
          </div>
          <div className="hero-right">
            <img
              src={heroImg}
              alt="Creative Developer"
              className="hero-image"
            />
          </div>
        </div>
      </section>
<ParallaxSection />
      <section className="carousel-section">
        <h2>{language === "es" ? "Ejemplos de trabajo" : "Portfolio Samples"}</h2>
        <Stack/>
      </section>
    </main>
  );
};

export default Home;
