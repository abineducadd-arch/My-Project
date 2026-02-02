import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section with Columns */}
        <div className="footer-top">
          {/* First Column - COFFEE */}
          <div className="footer-column">
            <h3 className="footer-heading">COFFEE</h3>
            <ul className="footer-list">
              <li className="footer-list-item">
                <span className="highlight">Incredible DEALS</span>
              </li>
              <li className="footer-list-item">Premium Instant</li>
              <li className="footer-list-item nested">
                <ul className="nested-list">
                  <li>Cold Brew</li>
                  <li>5-Minute Bags</li>
                  <li>Arabica Beans</li>
                  <li>Ready to Drink</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Second Column - CURATED */}
          <div className="footer-column">
            <h3 className="footer-heading">CURATED</h3>
            <ul className="footer-list">
              <li className="footer-list-item">Best Sellers</li>
              <li className="footer-list-item">Deal of the Week</li>
              <li className="footer-list-item">Merchandise</li>
            </ul>
          </div>

          {/* Third Column - SLEEPY OWL */}
          <div className="footer-column">
            <h3 className="footer-heading">SLEEPY OWL</h3>
            <ul className="footer-list">
              <li className="footer-list-item">
                Reviews <span className="highlight">1,056</span>
              </li>
              <li className="footer-list-item">About Us</li>
              <li className="footer-list-item">Sustain Packs</li>
              <li className="footer-list-item">Returns</li>
              <li className="footer-list-item">Contact Us</li>
              <li className="footer-list-item">Terms of Use</li>
              <li className="footer-list-item">Compliance</li>
              <li className="footer-list-item">Sitemap</li>
              <li className="footer-list-item">Blog</li>
            </ul>
          </div>

          {/* Fourth Column - Company Description */}
          <div className="footer-column wide">
            <p className="company-description">
              Our journey started with three friends with a shared vision. It was simple—introduce people to real good coffee. Today, we're making high-quality, freshly roasted coffee accessible to everyone with our exclusive products.
            </p>
            
            {/* Newsletter Signup */}
            <div className="newsletter-section">
              <h4 className="newsletter-title">Email Newsletter</h4>
              <form className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-button">
                  Subscribe
                </button>
              </form>
              <p className="newsletter-note">Sign up for exclusive offers and coffee tips</p>
            </div>

            {/* Social Media Icons */}
            <div className="social-media">
              <a href="#" className="social-icon">
                <FaFacebook />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Sleepy Owl Coffee. All rights reserved.
          </p>
          <div className="payment-methods">
            <span>Payment Methods:</span>
            <div className="payment-icons">
              {/* Add payment icons here */}
              <span className="payment-icon">Visa</span>
              <span className="payment-icon">Mastercard</span>
              <span className="payment-icon">PayPal</span>
              <span className="payment-icon">UPI</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;