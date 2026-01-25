import React, { useState } from "react";
import "./ShopDropDown.css";
import { Accordian as data } from "../data/Accordian";
const ShopDropDown = () => {
  const [select, setSelect] = useState("");
  return (
    <div>
      <h1>Best Sellers</h1>

      <div>
        {data.map((x) => (
          <button className="head-button" onClick={() => setSelect(x.id)} key={x.id}>
            {x.name}
          </button>
        ))}
      </div>
      <div>
        {data.map((item) => (
          <div className="product-grid">
            {select === item.id
              ? item.card.map((x) => (
                  <div className="item"  key={x.id}>
                    
                    <div
                    className="backgroung-image"
                      style={{
                        backgroundImage: `url(${x.image})`,
                        height: "200px",
                        width: "200px",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display : "flex",
                        justifyContent : "end",
                        alignItems :"start"
                      }}
                    >
                      <button>+  Add</button>
                    </div>
                    <div>
                      <div className="heading">
                        <h5>{x.name}</h5>
                        <h5>{x.price}</h5>
                      </div>
                      <p>{x.para}</p>
                    </div>
                  </div>
                ))
              : null}
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default ShopDropDown;
