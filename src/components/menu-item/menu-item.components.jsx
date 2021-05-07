import React from "react";
import "./menu-item.styles.scss";

export const MenuItem = ({ title, imgURL, size }) => (
  <div className={`${size} menu-item`}>
    <div
      style={{ backgroundImage: `url(${imgURL})` }}
      className="background-image"
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="Subtitle">SHOP NOW</span>
    </div>
  </div>
);
