import "./app.css";
import React, { Component } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Recommend from "./pages/Recommend";
import Congestion from "./pages/Congestion";
import RealTimeCongestion from "./pages/RealTimeCongestion";
import DayAndMonthCongestion from "./pages/DayAndMonthCongestion";
import PredictCongestion from "./pages/PredictCongestion";

class app extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/recommend" element={<Recommend />} />
          <Route exact path="/congestion" element={<Congestion />} />
          <Route
            exact
            path="/realtimecongetsion"
            element={<RealTimeCongestion />}
          />
          <Route
            exact
            path="/dayandmonthcongestion"
            element={<DayAndMonthCongestion />}
          />
          <Route
            exact
            path="/predictCongestion"
            element={<PredictCongestion />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default app;
