import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./Home.css";
import heroImg from "../../assets/images/heroImg.png";
import ParallaxSection from "../../Components/Common/ParallaxSection/ParallaxSection";
import CircularGallery from "../../blocks/Components/CircularGallery/CircularGallery";
import ScrollIndicator from "../../Components/Common/ScrollIndicator";

const Home = () => {
  const { language } = useContext(LanguageContext);
  return (
    <main className="home-page">
      <section className="hero-section" id="hero">
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
            <button
              className="hero-button"
              onClick={() =>
                document.getElementById("showcase").scrollIntoView({
                  behavior: "smooth"
                })
              }
            >
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
        <ScrollIndicator targetId="showcase" />
      </section>

      <ParallaxSection />

      <section className="carousel-section" id="showcase">
        <h2>
          {language === "es" ? "Ejemplos de trabajo" : "Portfolio Samples"}
        </h2>
        <CircularGallery />
      </section>
    </main>
  );
};

export default Home;
