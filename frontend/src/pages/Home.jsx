import React from 'react'
import Banner from '../components/Banner'
import OccasionContainer from '../components/OccasionContainer'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'
import './Home.css'
import Heading from '../components/Heading'
import ScrollingCards from '../components/ScrollingCards'

const Home = () => {
  const customer1 = {
    imgUrl:
      "https://res.cloudinary.com/interflora/f_auto,q_auto,t_prodth/products/p-the-prosperity-duet-302335-m.jpg",
    reviewStars: "⭐⭐⭐⭐⭐",
    reviewDate: "05-03-2019",
    reviewContent:
      `"Absolutely stunning flowers! They arrived fresh and on time. Highly recommend!"`,
    reviewerName: "Aarav Mehta",
  };
  const customer2 = {
    imgUrl:
      "https://res.cloudinary.com/interflora/f_auto,q_auto,t_prodth/products/p-the-prosperity-duet-302335-m.jpg",
    reviewStars: "⭐⭐⭐⭐",
    reviewDate: "12-07-2021",
    reviewContent:
      `"Good service but the flowers could have been arranged better. Still loved them!"`,
    reviewerName: "Priya Sharma",
  };
  const customer3 = {
    imgUrl:
      "https://res.cloudinary.com/interflora/f_auto,q_auto,t_prodth/products/p-the-prosperity-duet-302335-m.jpg",
    reviewStars: "⭐⭐⭐⭐⭐",
    reviewDate: "30-01-2023",
    reviewContent:
      `"The bouquet was gorgeous, and the fragrance lasted for days. Will order again!"`,
    reviewerName: "Rohan Verma",
  };
  const customer4 = {
    imgUrl:
      "https://res.cloudinary.com/interflora/f_auto,q_auto,t_prodth/products/p-the-prosperity-duet-302335-m.jpg",
    reviewStars: "⭐⭐⭐⭐",
    reviewDate: "18-06-2022",
    reviewContent:
      `"Beautiful flowers but slightly delayed delivery. Otherwise, great experience!"`,
    reviewerName: "Sanya Kapoor",
  };

  const customer5 = {
    imgUrl:
      "https://res.cloudinary.com/interflora/f_auto,q_auto,t_prodth/products/p-the-prosperity-duet-302335-m.jpg",
    reviewStars: "⭐⭐⭐⭐⭐",
    reviewDate: "08-09-2020",
    reviewContent:
    `"Perfect gift for my mom's birthday. She absolutely loved it!"`,
    reviewerName: "Vikram Joshi",
  };

  const customer6 = {
    imgUrl:
      "https://res.cloudinary.com/interflora/f_auto,q_auto,t_prodth/products/p-the-prosperity-duet-302335-m.jpg",
    reviewStars: "⭐⭐⭐⭐⭐",
    reviewDate: "14-02-2018",
    reviewContent:
      `"Ordered for Valentine's Day. My partner was delighted! Beautiful arrangement!"`,
    reviewerName: "Megha Singh",
  };

  const customer7 = {
    imgUrl:
      "https://res.cloudinary.com/interflora/f_auto,q_auto,t_prodth/products/p-the-prosperity-duet-302335-m.jpg",
    reviewStars: "⭐⭐⭐⭐",
    reviewDate: "22-11-2017",
    reviewContent:
      `"Lovely flowers, but a bit expensive. Still, the quality is worth it!"`,
    reviewerName: "Rahul Tiwari",
  };

  const customer8 = {
    imgUrl:
      "https://res.cloudinary.com/interflora/f_auto,q_auto,t_prodth/products/p-the-prosperity-duet-302335-m.jpg",
    reviewStars: "⭐⭐⭐⭐⭐",
    reviewDate: "01-05-2021",
    reviewContent:
      `"Excellent customer service and a beautiful arrangement. Will buy again!"`,
    reviewerName: "Ananya Gupta",
  };

  const customer9 = {
    imgUrl:
      "https://res.cloudinary.com/interflora/f_auto,q_auto,t_prodth/products/p-the-prosperity-duet-302335-m.jpg",
    reviewStars: "⭐⭐⭐⭐",
    reviewDate: "10-08-2016",
    reviewContent:
      `"The flowers were vibrant and fresh! Just wished the delivery was quicker."`,
    reviewerName: "Kunal Sharma",
  };
  const reviews = [
    customer1,
    customer2,
    customer3,
    customer4,
    customer5,
    customer6,
    customer7,
    customer8,
    customer9,
  ];
  return (
    <div>
      <Banner />
      <OccasionContainer />
      <BestSeller />
      <div className="backgroundImageContainer">
        <p className="sentimentTitle sentimentTitle1">SOFT SENTIMENTS ,</p>
        <p className="sentimentTitle sentimentTitle2">
          WHISPERED THROUGH FLOWERS
        </p>
        <div className="sentimentButtons">
          <div className="sentimentButtonColumn">
            <button className="sentimentButton">
              <p>SEND</p>
              <p>THANK YOU</p>
            </button>
            <button className="sentimentButton">
              <p>SEND</p>
              <p>GET WELL SOON</p>
            </button>
            <button className="sentimentButton">
              <p>SEND</p>
              <p>CONGRATS</p>
            </button>
          </div>
          <div className="sentimentButtonColumn">
            <button className="sentimentButton">
              <p>FOR</p>
              <p>HOUSEWARMING</p>
            </button>
            <button className="sentimentButton">
              <p>FOR</p>
              <p>BABY SHOWER</p>
            </button>
            <button className="sentimentButton">
              <p>FOR</p>
              <p>THE HOST</p>
            </button>
          </div>
        </div>
      </div>
      <div className="customerReviewContainer">
        <Heading heading1="Customer Reviews" />
        <ScrollingCards Reviews={reviews} />
      </div>
      <OurPolicy />
      <NewsLetterBox />
    </div>
  )
}

export default Home
