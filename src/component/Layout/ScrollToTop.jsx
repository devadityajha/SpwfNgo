import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/*
 * Route badalne par page ko top pe le jata hai.
 * Iske bina blog card click karne par detail page scroll ke beech me khulta hai
 * aur lagta hai ki kuch hua hi nahi.
 * App.jsx me <Routes> se ठीक pehle ek baar render kar do.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
