import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
import Heading from "../components/Heading";
function Anniversary() {
  const { products } = useContext(ShopContext);
  const anniversaryProducts = products.filter(
    (product) => product.category === "Anniversary"
  );
  return (
    <div >
        <Heading heading1="Anniversary" heading2='"Love grows stronger with every bloom'/>
      {/* Rendering Product Items */}
      <div className="flex flex-wrap justify-evenly gap-y-6 gap-x-4">
        {anniversaryProducts.map((item, index) => (
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

export default Anniversary;