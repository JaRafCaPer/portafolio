import GooeyNav from "../../blocks/Components/GooeyNav/GooeyNav";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const language = navigator.language.startsWith("es") ? "es" : "en";
  const items = [
    { label: language === "es" ? "Inicio" : "Home", href: "/" },
    { label: language === "es" ? "Sobre mí" : "About", href: "/about" },
    { label: language === "es" ? "Servicios" : "Services", href: "/services" },
    { label: language === "es" ? "Contacto" : "Contact", href: "/contact" },
  ];

  return (
    <nav className="navbar">
      <div >
        <GooeyNav
          items={items}
          animationTime={600}
          pCount={15}
          minDistance={20}
          maxDistance={42}
          maxRotate={75}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          timeVariance={300}
        />
      </div>
    </nav>
  );
};

export default Navbar;
