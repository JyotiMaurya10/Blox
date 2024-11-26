import React from "react";
import { Link } from "react-router-dom";
import "../styles/TermsOfService.css";

const Footer2 = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top-part">
        <p className="footer-links">
          Email Us · <Link className="linkNone" to="/termsOfService">Terms of Use</Link> ·
          <Link className="linkNone" to="/privacyPolicy"> Privacy Policy</Link>
        </p>
        <div className="social-icons">
          <img src="/instagram.png" alt="Instagram" />
          <img src="/facebook.png" alt="Facebook" />
          <img src="/twitter.png" alt="Twitter" />
        </div>
        <p className="footer-bottom">2024 Giggle LLC, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer2;
