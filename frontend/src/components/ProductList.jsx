import React from "react";
import { PRODUCTS } from "../data/products";

const ProductList = () => {
  return (
    <div className="background px-3">
      <div className="product-list">
        <div>
          <div className="background-image my-2 rounded">

          </div>

          <div className="">
            <ol className=" ">
              <li className="border p-2 my-2 rounded ">
                <button className="btn icon">icon</button>
                <button className="btn">Login</button>
                <span>-</span>
                <button className="btn">Signup</button>
              </li>
              <li className="border p-2 my-2 rounded ">Bulk Orders</li>
              <li className="border p-2 rounded">Blog</li>
              <li className="border p-2 my-2 rounded">About Us</li>
            </ol>
          </div>
        </div>
        <div>
          {PRODUCTS.map((x) => (
            <div key={x.id} className="card shadow">
              <img src={x.image} alt="" />
              <div>
                <h6>{x.name}</h6>
                <p>{x.description }</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
