import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = ({ isFull = false }) => {
  return (
    <footer className={isFull ? "footer-container" : "footer"}>
      <div className={isFull ? "footer-top-part" : "footer-top"}>
        <p className="footer-links">
          <Link className="linkNone" to="mailto:support@bloxsocial.co">Email Us </Link>·
          <Link className="linkNone" to="/termsOfService"> Terms of Use </Link>·
          <Link className="linkNone" to="/privacyPolicy"> Privacy Policy </Link>·
          <Link className="linkNone" to="/campusPartner"> Campus Partner </Link>
        </p>

        <div className="social-icons">
          <Link to="https://www.linkedin.com/company/bloxsocial/" target="_blank">
            <img src="/linkedin.png" alt="Instagram" />
          </Link>
          <Link
            to="https://www.instagram.com/blox.social/"
            target="_blank"
          >
            <img src="/instagram.png" alt="Facebook" />
          </Link>
        </div>
        <p className="footer-bottom">
          © 2024 Blox Technologies Pvt Ltd | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
