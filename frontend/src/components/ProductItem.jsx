import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import './ProductItem.css';
const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="cardContainer" >
          <div className="imageContainer">
            <img src={image[0]} className="img1" />
          </div>
          <div className="contentContainer formatContainer">
            <p className="flowerName content">{name} </p>
          </div>
          <div className="priceContainer formatContainer">
            <p className="priceValue content">$ {price}</p>
          </div>
          <div className="reviewAndAvalibilityContainer formatContainer">
            <p className="content review"> {"4"}/5 ⭐ (120)</p>
            <p className="availabityStatus content">
              { "Available"}
            </p>
          </div>
        </div>
    </Link>
  );
};

export default ProductItem;




 {/* <div className="overflow-hidden">
        <img
          className="transition ease-in-out hover:scale-110"
          src={image[0]}
          alt="Product"
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}&nbsp;
        {price.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p> */}