import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
import Heading from "../components/Heading";
function Birthday() {
  const { products } = useContext(ShopContext);
  const birthdayProducts = products.filter(
    (product) => product.category === "Birthday"
  );
  return (
    <div>
      <Heading heading1="Birthday" heading2='"Celebrate the day with a bouquet of joy"' />
      {/* Rendering Product Items */}
            <div className="flex flex-wrap justify-evenly gap-y-6 gap-x-4">

        {birthdayProducts.map((item, index) => (
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

export default Birthday;
