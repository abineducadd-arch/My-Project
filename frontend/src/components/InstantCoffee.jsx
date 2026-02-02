import React from "react";
import { FaArrowDownAZ } from "react-icons/fa6";
import InstantCoffeeCard from "./InstantCoffeeCard";
import './InstantCoffee.css' // Import the hero CSS

const InstantCoffee = () => {
  // Background image URL (you can change this to your own image)
  const backgroundImage = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

  return (
    <div className="instant-coffee-page">
      {/* Hero Section */}
      <section 
        className="instant-coffee-hero"
        style={{
          background: `linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.1) 100%), url(${backgroundImage}) no-repeat center center`,
          backgroundSize: 'cover'
        }}
      >
        <div className="hero-content">
          <h1 className="hero-heading">
            100% Arabica
            <br />
            <span className="hero-subheading">Instant Coffee</span>
          </h1>
          <p className="hero-description">
            Premium cup of coffee ready in seconds. This is instant like you've never had it before.
          </p>
          <button className="shop-now-button">
            <span className="button-icon">
              <FaArrowDownAZ />
            </span>
            SHOP NOW
          </button>
        </div>
      </section>

      {/* Coffee Cards Section */}
      <div className="coffee-cards-section">
        <InstantCoffeeCard />
      </div>
    </div>
  );
};

export default InstantCoffee;