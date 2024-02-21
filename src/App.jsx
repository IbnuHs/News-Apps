import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Homepages from "./Pages/Homepages";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Homepages />
      <Footer />
    </>
  );
}

export default App;
