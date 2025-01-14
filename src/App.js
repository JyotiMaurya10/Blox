import React from "react";
import HeroSection from "./pages/HeroSection";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CampusPartner from "./pages/CampusPartner";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/termsOfService" element={<TermsOfService />} />
          <Route path="/campusPartner" element={<CampusPartner />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
