import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleRecipe from "./pages/SingleRecipe";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import "./index.css";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single-recipe/:id" element={<SingleRecipe />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
