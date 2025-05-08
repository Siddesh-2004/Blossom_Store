import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import Heading from "./Heading";

const OccasionContainer = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(10, 15));
  }, []);

  return (
    <div className="my-10">
      <div className="py-8 text-3xl text-center">
        {/* <Title text1={"LATEST"} text2={"COLLECTIONS"} /> */}
        <Heading heading1="Celebrate with flowers" heading2="May the fragrance of happiness elevate your occasion" />
        {/* <p className="w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base">
          Step into a world of style with our newest collections, carefully
          curated to bring you the best in fashion, home decor, and more.
        </p> */}
      </div>

      {/* Rendering Product Items */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6">
        {latestProducts.map((item, index) => (
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
};

export default OccasionContainer;
