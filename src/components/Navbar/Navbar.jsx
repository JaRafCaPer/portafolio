import React from "react";
import GooeyNav from "../../blocks/Components/GooeyNav/GooeyNav";
import LanguageSelector from "../Common/LanguageSelector";
import "./Navbar.css";

const Navbar = () => {
  const items = [
    { label: "Inicio", href: "/" },
    { label: "Sobre mí", href: "/about" },
    { label: "Servicios", href: "/services" },
    { label: "Contacto", href: "/contact" }
  ];

  return (
    <nav className="navbar">
      <LanguageSelector />
      <div style={{ height: "70px", position: "relative" }}>
        <GooeyNav
          items={items}
          animationTime={600}
          pCount={15}
          minDistance={20}
          maxDistance={42}
          maxRotate={75}
          colors={[1,2,3,1,2,3,1,4]}
          timeVariance={300}
        />
      </div>
    </nav>
  );
};

export default Navbar;