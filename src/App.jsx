// import React from "react";
// import HomePage from "./pages/HomePage";

// function App() {
//   return (
//     <div className="min-h-screen bg-white font-sans">
//       <HomePage />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Layout/Navbar";
import Footer from "./component/Layout/Footer";

// Import your Pages
import HomePage from "./pages/HomePage";

import About from "./pages/About";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* 1. Global Navbar: Shows on EVERY page, floating on top */}
      <Navbar />

      {/* 2. The Page Router: Swaps out the middle content */}
      <main className="flex-grow">
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />

          {/* About Page Route (Ready for when you build it!) */}
          {/* <Route path="/about" element={<AboutPage />} /> */}

          {/* Add more routes here as you build your other pages */}
        </Routes>
      </main>

      {/* 3. Global Footer: Shows at the bottom of EVERY page */}
      <Footer />
    </div>
  );
}

export default App;
