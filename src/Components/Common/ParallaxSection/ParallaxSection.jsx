import { useContext, useRef } from "react";
import { LanguageContext } from "../../../context/LanguageContext";
import useReveal from "../../../hooks/useReveal";
import "./ParallaxSection.css";

const ParallaxSection = () => {
  const { lang } = useContext(LanguageContext);
  const sectionRef = useRef(null);
  const isVisible = useReveal(sectionRef, { threshold: 0.5 });

  return (
    <section
      ref={sectionRef}
      className={`parallax-section ${!isVisible ? "fade-out" : ""}`}
    >
      <div className="parallax-overlay">
        <div className="parallax-content">
          <h2>
            {lang === "es"
              ? "Construyo experiencias únicas"
              : "I build unique digital experiences"}
          </h2>
          <p>
            {lang === "es"
              ? "Diseño y desarrollo sitios con impacto visual, velocidad y propósito."
              : "I design and develop websites with visual impact, performance, and purpose."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;
