import React, { useState, useEffect, useMemo } from "react";
import { useCart } from "../context/CartContext";
import "./ShopDropDown.css";
import { Accordian as data } from "../data/Accordian";

const ShopDropDown = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { addToCart } = useCart();
  
  
  useEffect(() => {
    if (data.length > 0) {
      setSelectedCategory(data[0].id);
    }
  }, []);

  
  const selectedCategoryData = useMemo(() => {
    return data.find(item => item.id === selectedCategory);
  }, [selectedCategory]);

  const handleAddToCart = (product, event) => {
    event.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="shop-dropdown-container">
      <h1 className="shop-title">Best Sellers</h1>

     
      <div className="category-buttons">
        {data.map((category) => (
          <button
            className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
            key={category.id}
            aria-pressed={selectedCategory === category.id}
          >
            {category.name}
          </button>
        ))}
      </div>

      
      <div className="products-container">
        {selectedCategoryData ? (
          <div className="product-grid">
            {selectedCategoryData.card.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-image-container">
                  <div
                    className="product-image"
                    style={{
                      backgroundImage: `url(${product.image})`,
                    }}
                  >
                    <button 
                      className="add-to-cart-btn"
                      onClick={(e) => handleAddToCart(product, e)}
                    >
                      <span>+</span> Add
                    </button>
                  </div>
                </div>
                
                <div className="product-details">
                  <div className="product-header">
                    <h5 className="product-name">{product.name}</h5>
                    <h5 className="product-price">{product.price}</h5>
                  </div>
                  <p className="product-description">{product.para}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-products">
            <p>No products available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopDropDown;