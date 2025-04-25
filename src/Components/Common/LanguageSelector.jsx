import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./LanguageSelector.css";

const LanguageSelector = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <div className="language-selector">
      <button
        onClick={() => setLanguage("es")}
        className={language === "es" ? "active" : ""}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={language === "en" ? "active" : ""}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;