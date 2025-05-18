import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Homepages from "./Pages/Homepages";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import ByCategoryPages from "./Pages/ByCategoryPages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/category/:category/" element={<ByCategoryPages />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
