import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {} from "swiper";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import arrowdown from "../../assets/electronice/uptodown/up.svg";
import arrowup from "../../assets/electronice/uptodown/down.svg";
import FollowedProductss from "../../assets/FollowedProducts/FollowedProducts.png";
import ay from "../../assets/FollowedProducts/logo/ay.svg";
import coopy from "../../assets/FollowedProducts/logo/coopy.svg";
import love from "../../assets/FollowedProducts/logo/love.svg";
import star from "../../assets/FollowedProducts/logo/star.svg";
import grystart from "../../assets/FollowedProducts/logo/grystart.svg";
import verifide from "../../assets/FollowedProducts/logo/verifide.png";
import trend from "../../assets/FollowedProducts/logo/trend.svg";
import hot from "../../assets/FollowedProducts/logo/hot.svg";
import userVerifide from "../../assets/FollowedProducts/logo/userVerifide.svg";
import addCard from "../../assets/FollowedProducts/logo/cart white.png";

import BlackCard from "./BlackCard";
const followedProducts = [
  {
    id: 1,
    name: "Sony WNC Headset",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",

    trend: trend,
    userVerifide: userVerifide,
    hot: hot,
    verifide: verifide,
    grystart: grystart,
    star: star,
    love: love,
    coopy: coopy,
    ay: ay,
    addCard: addCard,

    description: "bestSeller.",
    img: FollowedProductss,
  },
  {
    id: 1,
    name: "Sony WNC Headset",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",

    trend: trend,
    userVerifide: userVerifide,
    hot: hot,
    verifide: verifide,
    grystart: grystart,
    star: star,
    love: love,
    coopy: coopy,
    ay: ay,
    addCard: addCard,

    description: "bestSeller.",
    img: FollowedProductss,
  },
  {
    id: 1,
    name: "Sony WNC Headset",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",

    trend: trend,
    userVerifide: userVerifide,
    hot: hot,
    verifide: verifide,
    grystart: grystart,
    star: star,
    love: love,
    coopy: coopy,
    ay: ay,
    addCard: addCard,

    description: "bestSeller.",
    img: FollowedProductss,
  },
  {
    id: 1,
    name: "Sony WNC Headset",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",

    trend: trend,
    userVerifide: userVerifide,
    hot: hot,
    verifide: verifide,
    grystart: grystart,
    star: star,
    love: love,
    coopy: coopy,
    ay: ay,
    addCard: addCard,

    description: "bestSeller.",
    img: FollowedProductss,
  },
  {
    id: 1,
    name: "Sony WNC Headset",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",

    trend: trend,
    userVerifide: userVerifide,
    hot: hot,
    verifide: verifide,
    grystart: grystart,
    star: star,
    love: love,
    coopy: coopy,
    ay: ay,
    addCard: addCard,

    description: "bestSeller.",
    img: FollowedProductss,
  },
  {
    id: 1,
    name: "Sony WNC Headset",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",

    trend: trend,
    userVerifide: userVerifide,
    hot: hot,
    verifide: verifide,
    grystart: grystart,
    star: star,
    love: love,
    coopy: coopy,
    ay: ay,
    addCard: addCard,

    description: "bestSeller.",
    img: FollowedProductss,
  },
  {
    id: 1,
    name: "Sony WNC Headset",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",

    trend: trend,
    userVerifide: userVerifide,
    hot: hot,
    verifide: verifide,
    grystart: grystart,
    star: star,
    love: love,
    coopy: coopy,
    ay: ay,
    addCard: addCard,

    description: "bestSeller.",
    img: FollowedProductss,
  },
  {
    id: 1,
    name: "Sony WNC Headset",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",

    trend: trend,
    userVerifide: userVerifide,
    hot: hot,
    verifide: verifide,
    grystart: grystart,
    star: star,
    love: love,
    coopy: coopy,
    ay: ay,
    addCard: addCard,

    description: "bestSeller.",
    img: FollowedProductss,
  },
  {
    id: 1,
    name: "Sony WNC Headset",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",

    trend: trend,
    userVerifide: userVerifide,
    hot: hot,
    verifide: verifide,
    grystart: grystart,
    star: star,
    love: love,
    coopy: coopy,
    ay: ay,
    addCard: addCard,

    description: "bestSeller.",
    img: FollowedProductss,
  },
  {
    id: 1,
    name: "Sony WNC Headset",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",

    trend: trend,
    userVerifide: userVerifide,
    hot: hot,
    verifide: verifide,
    grystart: grystart,
    star: star,
    love: love,
    coopy: coopy,
    ay: ay,
    addCard: addCard,

    description: "bestSeller.",
    img: FollowedProductss,
  },
  {
    id: 1,
    name: "Sony WNC Headset",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",

    trend: trend,
    userVerifide: userVerifide,
    hot: hot,
    verifide: verifide,
    grystart: grystart,
    star: star,
    love: love,
    coopy: coopy,
    ay: ay,
    addCard: addCard,

    description: "bestSeller.",
    img: FollowedProductss,
  },
  {
    id: 1,
    name: "Sony WNC Headset",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",

    trend: trend,
    userVerifide: userVerifide,
    hot: hot,
    verifide: verifide,
    grystart: grystart,
    star: star,
    love: love,
    coopy: coopy,
    ay: ay,
    addCard: addCard,

    description: "bestSeller.",
    img: FollowedProductss,
  },
  {
    id: 1,
    name: "Sony WNC Headset",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",

    trend: trend,
    userVerifide: userVerifide,
    hot: hot,
    verifide: verifide,
    grystart: grystart,
    star: star,
    love: love,
    coopy: coopy,
    ay: ay,
    addCard: addCard,

    description: "bestSeller.",
    img: FollowedProductss,
  },
  {
    id: 1,
    name: "Sony WNC Headset",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",

    trend: trend,
    userVerifide: userVerifide,
    hot: hot,
    verifide: verifide,
    grystart: grystart,
    star: star,
    love: love,
    coopy: coopy,
    ay: ay,
    addCard: addCard,

    description: "bestSeller.",
    img: FollowedProductss,
  },
  {
    id: 1,
    name: "Sony WNC Headset",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",

    trend: trend,
    userVerifide: userVerifide,
    hot: hot,
    verifide: verifide,
    grystart: grystart,
    star: star,
    love: love,
    coopy: coopy,
    ay: ay,
    addCard: addCard,

    description: "bestSeller.",
    img: FollowedProductss,
  },
  {
    id: 1,
    name: "Sony WNC Headset",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",

    trend: trend,
    userVerifide: userVerifide,
    hot: hot,
    verifide: verifide,
    grystart: grystart,
    star: star,
    love: love,
    coopy: coopy,
    ay: ay,
    addCard: addCard,

    description: "bestSeller.",
    img: FollowedProductss,
  },
  {
    id: 1,
    name: "Sony WNC Headset",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",

    trend: trend,
    userVerifide: userVerifide,
    hot: hot,
    verifide: verifide,
    grystart: grystart,
    star: star,
    love: love,
    coopy: coopy,
    ay: ay,
    addCard: addCard,

    description: "bestSeller.",
    img: FollowedProductss,
  },
  {
    id: 1,
    name: "Sony WNC Headset",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",

    trend: trend,
    userVerifide: userVerifide,
    hot: hot,
    verifide: verifide,
    grystart: grystart,
    star: star,
    love: love,
    coopy: coopy,
    ay: ay,
    addCard: addCard,

    description: "bestSeller.",
    img: FollowedProductss,
  },
  {
    id: 1,
    name: "Sony WNC Headset",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",

    trend: trend,
    userVerifide: userVerifide,
    hot: hot,
    verifide: verifide,
    grystart: grystart,
    star: star,
    love: love,
    coopy: coopy,
    ay: ay,
    addCard: addCard,

    description: "bestSeller.",
    img: FollowedProductss,
  },
  {
    id: 1,
    name: "Sony WNC Headset",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",

    trend: trend,
    userVerifide: userVerifide,
    hot: hot,
    verifide: verifide,
    grystart: grystart,
    star: star,
    love: love,
    coopy: coopy,
    ay: ay,
    addCard: addCard,

    description: "bestSeller.",
    img: FollowedProductss,
  },
  {
    id: 1,
    name: "Sony WNC Headset",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",

    trend: trend,
    userVerifide: userVerifide,
    hot: hot,
    verifide: verifide,
    grystart: grystart,
    star: star,
    love: love,
    coopy: coopy,
    ay: ay,
    addCard: addCard,

    description: "bestSeller.",
    img: FollowedProductss,
  },
  {
    id: 1,
    name: "Sony WNC Headset",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",

    trend: trend,
    userVerifide: userVerifide,
    hot: hot,
    verifide: verifide,
    grystart: grystart,
    star: star,
    love: love,
    coopy: coopy,
    ay: ay,
    addCard: addCard,

    description: "bestSeller.",
    img: FollowedProductss,
  },
  {
    id: 1,
    name: "Sony WNC Headset",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",

    trend: trend,
    userVerifide: userVerifide,
    hot: hot,
    verifide: verifide,
    grystart: grystart,
    star: star,
    love: love,
    coopy: coopy,
    ay: ay,
    addCard: addCard,

    description: "bestSeller.",
    img: FollowedProductss,
  },
  {
    id: 1,
    name: "Sony WNC Headset",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",

    trend: trend,
    userVerifide: userVerifide,
    hot: hot,
    verifide: verifide,
    grystart: grystart,
    star: star,
    love: love,
    coopy: coopy,
    ay: ay,
    addCard: addCard,

    description: "bestSeller.",
    img: FollowedProductss,
  },
];

const BlackProducts = () => {
  const [slideBegOrNot, handleSlideByState] = useState({
    isFirst: true,
    isLast: false,
  });
  const SlideRef = useRef();

  const handleNext = () => {
    SlideRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
  };

  const onSlideChange = (swiper) => {
    handleSlideByState({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    });
  };

  const { isLast, isFirst } = slideBegOrNot;

  return (
    <div className="">
      {/* <h1 className="heading">Post Carousel Using React Swiper Js</h1> */}

      <div className="">
        <div>
          <Swiper
            autoplay={{ delay: 1000 }}
            spaceBetween={0}
            className={`gap-y-2 gap-x-3 ${"mySwiper"}`}
            ref={SlideRef}
            slidesPerView={6}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            onSlideChange={onSlideChange}
            pagination={{
              el: ".swiper-paginations",
              type: "fraction",
            }}
            navigation={false}
            modules={[Pagination, Navigation, Autoplay]}
          >
            {followedProducts?.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <BlackCard
                    trend={item.trend}
                    userVerifide={item.userVerifide}
                    hot={item.hot}
                    verifide={item.verifide}
                    grystart={item.grystart}
                    star={item.star}
                    love={item.love}
                    coopy={item.coopy}
                    ay={item.ay}
                    addCard={item.addCard}
                    img={item.img}
                    key={item.id}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};



export default BlackProducts;