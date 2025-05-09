import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import Heading from "./Heading";
import OccassionCard from "./OccassionCard";


const OccasionContainer = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(10, 15));
  }, []);

  return (
    <div className="my-10 ">
      <div className="py-8 text-3xl text-center">
        {/* <Title text1={"LATEST"} text2={"COLLECTIONS"} /> */}
        <Heading heading1="Celebrate with flowers" heading2="May the fragrance of happiness elevate your occasion" />
        {/* <p className="w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base">
          Step into a world of style with our newest collections, carefully
          curated to bring you the best in fashion, home decor, and more.
        </p> */}
      </div>

      {/* Rendering Product Items */}
      {/* <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div> */}
      <div className="occassionConatainer flex flex-wrap gap-4 sm:flex-row sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-1 justify-center items-center mt-1">
      
        <OccassionCard occassionImageUrl="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt10prodlp/banners/birthday_d_split_illustration_830_1738154831704" page="Birthday"/>
        <OccassionCard occassionImageUrl="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt10prodlp/banners/anniversary_d_split_illustration_830_1738154869104" page="Aniversary"/>
        <OccassionCard occassionImageUrl="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt10prodlp/banners/wedding_gifts_d_split_illustration_830_1738155423856" page="Wedding"/>
        <OccassionCard occassionImageUrl="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt10prodlp/banners/grand_gestures_d_split_illustration_830_1738230308822" page="BigGestures"/>
        <OccassionCard occassionImageUrl="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt10prodlp/banners/gifts_for_men_d_split_illustration_830_1738154921657" page="GiftsForMen"/>
        <OccassionCard occassionImageUrl="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt10prodlp/banners/congratulations_d_split_illustration_830_1738155459964" page="Congratulations"/>
      </div>
    </div>
  );
};

export default OccasionContainer;
