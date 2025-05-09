import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
import Heading from "../components/Heading";

function Wedding() {
  const { products } = useContext(ShopContext);
  const weddingProducts = products.filter(
    (product) => product.category === "Wedding"
  );
  return (
    <div>
      <Heading heading1="Wedding" heading2='"A day to remember, a love to cherish"' />
      {/* Rendering Product Items */}
      <div className="flex flex-wrap justify-evenly gap-y-6 gap-x-4">
        {weddingProducts.map((item, index) => (
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

export default Wedding;