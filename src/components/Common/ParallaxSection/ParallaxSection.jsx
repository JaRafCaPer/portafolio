import { useEffect, useRef, useState } from "react";
import "./ParallaxSection.css";

const ParallaxSection = () => {
  const sectionRef = useRef(null);
  const [fadeOut, setFadeOut] = useState(false);
  const language = navigator.language.startsWith("es") ? "es" : "en";

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const { top, height } = section.getBoundingClientRect();
      const threshold = height * 0.5;

      setFadeOut(top < -threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`parallax-section ${fadeOut ? "fade-out" : ""}`}
    >
      <div className="parallax-overlay">
        <div className="parallax-content">
          <h2>
            {language === "es"
              ? "Construyo experiencias únicas"
              : "I build unique digital experiences"}
          </h2>
          <p>
            {language === "es"
              ? "Diseño y desarrollo sitios con impacto visual, velocidad y propósito."
              : "I design and develop websites with visual impact, performance, and purpose."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;
