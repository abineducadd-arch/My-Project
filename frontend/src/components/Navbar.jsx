import React, { useState, useRef, useEffect } from "react";
import { useCart } from "../context/CartContext";
import ProductList from "./ProductList";
import { FaSearch, FaShoppingBag, FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./CartDropdown.css";
import "./Navbar.css"; // Add this import

const Navbar = () => {
  const [disInstantCoffee, setDisInstantCoffee] = useState(false);
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const { 
    cartItems, 
    getTotalItems, 
    getTotalPrice, 
    updateQuantity, 
    removeFromCart,
    toggleCart
  } = useCart();
  
  const location = useLocation(); // Track current route
  const cartRef = useRef(null);
  const cartButtonRef = useRef(null);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cartRef.current && 
        !cartRef.current.contains(event.target) &&
        cartButtonRef.current &&
        !cartButtonRef.current.contains(event.target)
      ) {
        setIsCartDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCartToggle = () => {
    setIsCartDropdownOpen(!isCartDropdownOpen);
    toggleCart();
  };

  const handleIncreaseQuantity = (itemId) => {
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
      updateQuantity(itemId, item.quantity + 1);
    }
  };

  const handleDecreaseQuantity = (itemId) => {
    const item = cartItems.find(item => item.id === itemId);
    if (item && item.quantity > 1) {
      updateQuantity(itemId, item.quantity - 1);
    } else {
      removeFromCart(itemId);
    }
  };

  
  const formatPriceDisplay = (price) => {
    if (typeof price === 'string') {
      return price; 
    }
    if (typeof price === 'number') {
      return `₹${price.toFixed(2)}`;
    }
    return '₹0.00';
  };

 
  const getDisplayPrice = (item) => {
    return formatPriceDisplay(item.price || item.numericPrice);
  };

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container d-flex align-items-center">
          
          {/* Brand Logo */}
          <Link to={'/'} className="navbar-brand fw-bold">
            <img 
              style={{
                height: "20px"
              }} 
              src="https://sleepyowl.co/cdn/shop/files/logo_107a2c0c-7f30-46ef-b852-05b27807f310_110x@2x.png?v=1629351406" 
              alt="Sleepy Owl Logo" 
            />
          </Link>

         
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav gap-4 align-items-center">
              
              {/* SHOP Dropdown */}
              <li className="nav-item dropdown position-relative">
                <span className="shop-dot"></span>
                <button
                  className={`nav-link fw-semibold dropdown-toggle btn btn-link ${isActive('/shop') ? 'active' : ''}`}
                  data-bs-toggle="dropdown"
                >
                  SHOP
                </button>
                <ul className="dropdown-menu shadow">
                  <li>
                    <ProductList />
                  </li>
                </ul>
              </li>

              {/* INSTANT COFFEE */}
              <li className="nav-item">
                <Link 
                  to={"/InstantCoffee"} 
                  className={`nav-link fw-semibold ${isActive('/InstantCoffee') ? 'active' : ''}`}
                  onClick={() => setDisInstantCoffee(!disInstantCoffee)}
                >
                  INSTANT COFFEE
                </Link>
              </li>

              {/* BEST SELLER */}
              <li className="nav-item">
                <Link 
                  to={'/bestseller'} 
                  className={`nav-link fw-semibold ${isActive('/bestseller') ? 'active' : ''}`}
                >
                  BEST SELLER
                </Link>
              </li>

              {/* BULK ORDERS */}
              <li className="nav-item">
                <Link 
                  to={'/bulkorders'} 
                  className={`nav-link fw-semibold ${isActive('/bulkorders') ? 'active' : ''}`}
                >
                  BULK ORDERS
                </Link>
              </li>
            </ul>
          </div>

          
          <div className="d-flex gap-3 fs-5 align-items-center">
            {/* Search Icon */}
            <button className="nav-icon-btn">
              <FaSearch className="nav-icon" />
            </button>
            
            {/* Cart Dropdown */}
            <div className="position-relative" ref={cartRef}>
              <button
                ref={cartButtonRef}
                className="nav-icon-btn position-relative"
                onClick={handleCartToggle}
                aria-label="Shopping Cart"
              >
                <FaShoppingBag className="nav-icon" />
                {getTotalItems() > 0 && (
                  <span className="cart-badge">
                    {getTotalItems()}
                  </span>
                )}
              </button>

              
              {isCartDropdownOpen && (
                <div className="cart-dropdown shadow-lg">
                  <div className="cart-dropdown-header d-flex justify-content-between align-items-center p-3 border-bottom">
                    <h5 className="mb-0 fw-bold">Your Cart</h5>
                    <button 
                      className="btn-close" 
                      onClick={() => setIsCartDropdownOpen(false)}
                      aria-label="Close"
                    />
                  </div>
                  
                  {cartItems.length === 0 ? (
                    <div className="cart-empty text-center p-5">
                      <p className="text-muted mb-0">Your cart is empty</p>
                    </div>
                  ) : (
                    <>
                      <div className="cart-items p-3" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                        {cartItems.map((item) => (
                          <div key={item.id} className="cart-item d-flex align-items-center mb-3 pb-3 border-bottom">
                            <div className="cart-item-image me-3">
                              <div 
                                className="bg-light rounded"
                                style={{
                                  width: '60px',
                                  height: '60px',
                                  backgroundImage: `url(${item.image})`,
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center'
                                }}
                              />
                            </div>
                            <div className="cart-item-details flex-grow-1">
                              <h6 className="cart-item-name mb-1 fw-semibold" style={{ fontSize: '0.9rem' }}>
                                {item.name}
                              </h6>
                              <p className="cart-item-price mb-2 fw-bold text-dark">
                                {getDisplayPrice(item)}
                              </p>
                              <div className="cart-item-quantity d-flex align-items-center">
                                <button 
                                  className="quantity-btn btn btn-outline-secondary btn-sm px-2"
                                  onClick={() => handleDecreaseQuantity(item.id)}
                                >
                                  <FaMinus size={12} />
                                </button>
                                <span className="quantity-value mx-2 fw-semibold">{item.quantity}</span>
                                <button 
                                  className="quantity-btn btn btn-outline-secondary btn-sm px-2"
                                  onClick={() => handleIncreaseQuantity(item.id)}
                                >
                                  <FaPlus size={12} />
                                </button>
                              </div>
                            </div>
                            <button 
                              className="cart-item-remove btn btn-link text-danger p-0 ms-2"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <FaTimes size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                      
                      <div className="cart-summary p-3 border-top">
                        <div className="cart-total d-flex justify-content-between align-items-center mb-3">
                          <span className="fw-bold">Total:</span>
                          <span className="total-price fw-bold fs-5">
                            ₹{getTotalPrice().toFixed(2)}
                          </span>
                        </div>
                        <Link to="/checkout" className="btn-checkout w-100 btn btn-dark btn-lg mb-2">
                          CHECKOUT
                        </Link>
                        <Link to="/cart" className="btn-view-cart w-100 btn btn-outline-dark">
                          VIEW CART
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;