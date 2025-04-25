import React, { useContext, lazy, Suspense, useRef } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./Home.css";
import heroImg from "../../assets/images/heroImg.png";
import ParallaxSection from "../../Components/Common/ParallaxSection/ParallaxSection";
import ScrollIndicator from "../../Components/Common/ScrollIndicator";
import useParallaxEffect from "../../hooks/useParallaxEffect";



const CircularGallery = lazy(() =>
      import("../../blocks/Components/CircularGallery/CircularGallery")
      );
const Home = () => {
  const bgRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  useParallaxEffect([bgRef, overlayRef, contentRef], [0.2, 0.4, 0.6]);
  const { language } = useContext(LanguageContext);
  return (
    <main className="home-page">
      <section className="hero-section" id="hero">
      <div ref={bgRef} className="parallax-bg" />
        <div ref={overlayRef} className="parallax-overlay" />
        <div ref={contentRef} className="hero-content">
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
              loading="lazy"
            />
          </div>
        </div>
        <ScrollIndicator targetId="showcase" />
      </section>
      <section className="carousel-section" id="showcase">
        <h2>
          {language === "es" ? "Ejemplos de trabajo" : "Portfolio Samples"}
        </h2>
        <Suspense fallback={<div>Loading...</div>}>
        <CircularGallery />
        </Suspense>
      </section>
      
    </main>
  );
};

export default Home;
