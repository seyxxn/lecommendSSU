import "./app.css";
import React, { Component } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Recommend from "./pages/Recommend";
import Congestion from "./pages/Congestion";

class app extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/recommend" element={<Recommend />} />
          <Route exact path="/congestion" element={<Congestion />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default app;
