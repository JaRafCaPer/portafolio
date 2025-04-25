import { useEffect } from "react";

const useParallaxEffect = (layerRefs, speeds) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      layerRefs.forEach((ref, index) => {
        if (ref.current) {
          ref.current.style.transform = `translateY(${scrollY * speeds[index]}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [layerRefs, speeds]);
};

export default useParallaxEffect;
