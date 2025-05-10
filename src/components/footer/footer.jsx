import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top-section">
        <div className="footer-left-section">
          <h2 className="logo">MakeMePretty 🌸</h2>
          <p className="footer-description">
            Your one-stop shop for beauty essentials.Discover the best in
            skincare and make with exclusive discount
          </p>
        </div>
        <div className="footer-mid-section">
          <h3 className="footer-quick-links">Quick Links</h3>
          <h5 className="footer-home-btn">
            <a href="/">Home</a>
          </h5>
          <h5 className="footer-shop-btn">
            <a href="/">Shop</a>
          </h5>
          <h5 className="footer-about-btn">
            <a href="/">About</a>
          </h5>
          <h5 className="footer-contact-btn">
            <a href="/">Contact</a>
          </h5>
        </div>
        <div className="footer-right-section">
          <h3 className="footer-Faqs-btn">FAQs</h3>
          <h5 className="footer-returns-btn">
            <a href="/">Returns</a>
          </h5>
          <h5 className="footer-shipping-btn">
            <a href="/">Shipping</a>
          </h5>
          <h5 className="footer-privacy-btn">
            <a href="/">Privacy Policy</a>
          </h5>
        </div>

        <div className="footer-social-section">
          <h3 className="footer-follow-us">Follow Us</h3>
          <h6 className="facebook">Facebook</h6>
          <h6 className="instagram">Instagram</h6>
          <h6 className="twitter">Twitter</h6>
          <h6 className="tiktok">TikTok</h6>
          <h6 className="linkedin">LinkedIn</h6>
          <h6 className="whatsapp">WhatsApp</h6>
        </div>
      </div>
      <div className="footer-bottom-section">
        <p className="footer-reserved-rights">
          © 2025 MakeMePretty.All rights reserved.
        </p>
      </div>
    </div>
  );
}
