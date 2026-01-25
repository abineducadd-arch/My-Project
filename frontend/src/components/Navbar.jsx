import React, { useState } from "react";
import ProductList from "./ProductList";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import ShopDropdown from "./ShopDropDown";

const Navbar = () => {
  const [disInstantCoffee, setDisInstantCoffee] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container d-flex align-items-center">

          {/* Logo */}
          <a className="navbar-brand fw-bold" href="#">
            Sleepy Owl
          </a>

          {/* Center Menu */}
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav gap-4 align-items-center">

              {/* SHOP DROPDOWN */}
              <li className="nav-item dropdown position-relative">
                <span className="shop-dot"></span>

                <button
                  className="nav-link fw-semibold active-link dropdown-toggle btn btn-link"
                  data-bs-toggle="dropdown"
                >
                  SHOP
                </button>

                <ul className="dropdown-menu shadow">
                  <li>
                    
                    <ProductList/>
                    </li>
                 
                </ul>
              </li>

              {/* INSTANT COFFEE */}
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link fw-semibold text-dark"
                  onClick={() => setDisInstantCoffee(!disInstantCoffee)}
                >
                  INSTANT COFFEE
                </button>
              </li>

              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#">
                  BESTSELLERS
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#">
                  BULK ORDERS
                </a>
              </li>
            </ul>
          </div>

          {/* Right Icons */}
          <div className="d-flex gap-3 fs-5">
            <FaSearch />
            <FaShoppingBag />
          </div>
        </div>
      </nav>

      {disInstantCoffee && <ProductList />}
    </>
  );
};

export default Navbar;
