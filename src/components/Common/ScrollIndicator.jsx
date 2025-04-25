import React from "react";
import "./ScrollIndicator.css";

const ScrollIndicator = ({ targetId }) => (
  <div
    className="scroll-indicator"
    onClick={() => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }}
  >
    <span className="arrow">↓</span>
  </div>
);

export default ScrollIndicator;
