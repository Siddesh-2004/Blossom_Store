import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";

function GiftsForMen() {
  const { products } = useContext(ShopContext);
  const giftsForMenProducts = products.filter(
    (product) => product.category === "Kids"
  );
  return (
    <div>
      <h1>Just For Men!</h1>
      {/* Rendering Product Items */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6">
        {giftsForMenProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default GiftsForMen;