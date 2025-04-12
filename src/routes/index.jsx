import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import Pricing from "../pages/Pricing/Pricing";
import NotFound from "../pages/NotFound/NotFound";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SplashCursor from "../blocks/Animations/SplashCursor/SplashCursor";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <SplashCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
