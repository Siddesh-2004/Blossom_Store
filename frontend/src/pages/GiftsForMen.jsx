import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
import Heading from "../components/Heading";

function GiftsForMen() {
  const { products } = useContext(ShopContext);
  const giftsForMenProducts = products.filter(
    (product) => product.category === "giftsForMen"
  );
  return (
    <div>
      <Heading heading1="Gifts For Men" heading2='"Thoughtful presents for the special man in your life"' />
      {/* Rendering Product Items */}
      <div className="flex flex-wrap justify-evenly gap-y-6 gap-x-4">
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