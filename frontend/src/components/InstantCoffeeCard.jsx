import React from 'react';
import { Accordian } from '../data/Accordian';
import './InstantCoffeeCard.css'; 

const InstantCoffeeCard = () => {
  const data = Accordian.map(item => item.card).flat();
  
  return (
    <div className="coffee-container">
      <div className="coffee-cards-grid">
        {data.map(item => (
          <div key={item.id} className="coffee-card">
            <div 
              className="coffee-image-container"
              style={{
                backgroundImage: `url(${item.image})`
              }}
            >
              {item.status === 'sold out' ? (
                <button className="sold-out-button">
                  SOLD OUT
                </button>
              ) : (
                <button className="add-button">
                  <span>+</span>
                  ADD
                </button>
              )}
            </div>
            <div className="coffee-content">
              {item.isCombo && <span className="combo-badge">combo</span>}
              <h2 className="coffee-title">{item.name}</h2>
              <p className="coffee-description">{item.para}</p>
              <div className="price-container">
                <span className="original-price">MRP ₹{item.originalPrice}</span>
                <span className="discounted-price">₹{item.discountedPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstantCoffeeCard;