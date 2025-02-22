import React from "react";
import { NavLink } from "react-router-dom";

const Product = ({ id, name, image, price, category }) => {
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={name} /> {/* Ensure image prop is used here */}
          <figcaption className="caption">{category}</figcaption>
        </figure>
        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{price}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
