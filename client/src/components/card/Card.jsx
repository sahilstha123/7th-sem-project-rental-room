import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

export const Card = ({ item }) => {
  // Defensive checks and fallback values
  if (!item) {
    return <div className="card">No item data available</div>;
  }

  const {
    id = "default-id",
    images = [],
    title = "Untitled",
    address = "Address not provided",
    price = "N/A",
    bedroom = 0,
  } = item;

  return (
    <div className="card">
      <Link to={`/${id}`} className="imageContainer">
        <img src={images[0] || "/placeholder.png"} alt="Property" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${id}`}>{title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="Location Pin" />
          <span>{address}</span>
        </p>
        <p className="price">Npr. {price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed (1).png" alt="Bedroom Icon" />
              <span>
                {bedroom} bedroom{bedroom > 1 ? "s" : ""}
              </span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="Save Icon" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="Chat Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
