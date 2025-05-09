import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
import Heading from "../components/Heading";
function BigGestures() {
  const { products } = useContext(ShopContext);
  let bigGestureProducts = products.filter(
    (product) => product.category === "Anniversary"
  );
  bigGestureProducts=bigGestureProducts.slice(bigGestureProducts.length/2,bigGestureProducts.length);
  return (
    <div>
      <Heading heading1="Big Gestures!" heading2='"Thoughtful gifts to make a statement"' />
      {/* Rendering Product Items */}
      <div className="flex flex-wrap justify-evenly gap-y-6 gap-x-4">
        {bigGestureProducts.map((item, index) => (
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

export default BigGestures;
