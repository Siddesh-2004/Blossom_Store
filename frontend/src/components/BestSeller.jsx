import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import Heading from "./Heading";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    
    setBestSeller(bestProduct);
  }, []);

  return (
    <div className="my-10 ">
      <div className="py-8 text-3xl text-center">
        <Heading heading1="Best Selling" heading2="Floral arrangements that get the most love"/>
        {/* <Title text1={"BEST"} text2={"SELLERS"} /> */}
        {/* <p className="w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base">
          Our best sellers are a curated selection of top-rated items that have
          won over shoppers with their quality, style, and value.
        </p> */}
      </div>
     < div className="flex flex-wrap justify-evenly gap-y-6 gap-x-4">
        {bestSeller.map((item, index) => (
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

export default BestSeller;
