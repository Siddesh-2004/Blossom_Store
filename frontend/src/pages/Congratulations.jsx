import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
import Heading from "../components/Heading";
function Congratulations() {
  const { products } = useContext(ShopContext);
  const congratulationProducts = products.filter(
    (product) => product.category === "Congratulations"
  );
  return (
    <div>
      <Heading heading1="Congratulations" heading2='"Celebrate your achievements with flowers"' />
      {/* Rendering Product Items */}
      <div className="flex flex-wrap justify-evenly gap-y-6 gap-x-4">
        {congratulationProducts.map((item, index) => (
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

export default Congratulations;
