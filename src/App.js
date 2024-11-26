import React from "react";
import HeroSection from "./pages/HeroSection";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./styles/TermsOfService.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/termsOfService" element={<TermsOfService />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
