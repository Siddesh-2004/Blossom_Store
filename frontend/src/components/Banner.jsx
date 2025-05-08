// import React from 'react'
// import { assets } from '../assets/assets'

// const Hero = () => {
//   return (
//     <div className='flex flex-col border border-gray-400 sm:flex-row'>
//         {/* Hero left side */}
//         <div className='flex items-center justify-center w-full py-10 sm:w-1/2 sm:py-0'>
//             <div className='text-[#414141]'>
//                 <div className='flex items-center gap-2'>
//                     <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//                     <p className='text-sm font-medium md:text-base'>OUR BEST SELLERS</p>
//                 </div>
//                 <h1 className='text-3xl leading-relaxed sm:py-3 lg:text-5xl prata-regular'>Latest Arrivals</h1>
//                 <div className='flex items-center gap-2'>
//                     <p className='text-sm font-semibold md:text-base'>SHOP NOW</p>
//                     <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
//                 </div>
//             </div>
//         </div>
//         {/* Hero right side */}
//         <img className='w-full sm:w-1/2' src={assets.hero_img} alt="Hero Image" />
//     </div>

//   )
// }

// export default Hero



import './Banner.css';
import React, { useEffect, useState } from 'react';


   
    function Banner( {banners={images:[
      "https://www.mayflower.in/cdn/shop/files/1880_Banner_Home_Main_Fresh_Flowers.jpg?v=1735736721",
      "https://www.mayflower.in/cdn/shop/files/1880_Banner_Home_Hydrangea.jpg?v=1631626710",
      "https://www.mayflower.in/cdn/shop/files/1880_Banner_Home_Bunch.jpg?v=1638691960",
    ]}} ) {
      const [currentIndex, setCurrentIndex] = useState(0);

      useEffect(() => {
        setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.images.length);
        }, 3000);
      },[]);

      return (
        <div className="bannerContainer">
          <img src={banners.images[currentIndex]} className="slide" alt="banner" />
        </div>
      );
    }
    
 
export default Banner;
