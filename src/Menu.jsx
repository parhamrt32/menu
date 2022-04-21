import React, { useState } from "react";
import "./Menu.css";
function Menu({ items }) {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, desc , price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                  <h4 className="title"> {title} </h4>
                  <h5 className="price"> ${price} </h5>
              </header>
              <p className="item-text"> {desc} </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
