import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";


import img6 from "../../../assets/sectionImg/banners/image 51.png";
import img1 from "../../../assets/sectionImg/banners/image 58 (1).png";


import arrowdown from "../../../assets/electronice/uptodown/up.svg";
 

import arrowup from "../../../assets/electronice/uptodown/down.svg";

import SidBanner from "./SidBanner";
import { Link } from "react-router-dom";

// const Products = [
//   {
//     id: 1,
//     img: bannerImg,
//   },

//   {
//     id: 2,
//     img: bannerImg2,
//   },
// ];

const BannerAnimation = () => {

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

    function chunkArray(array, chunkSize) {
      const result = [];
      for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
      }
      return result;
    }
  
    const originalArray = [
    
      
      {
        id: 1,
     
        img: img6,
      },
      {
        id: 2,
       
        img: img1,
      },
      
      {
        id: 3,
     
        img: img6,
      },
      {
        id: 4,
     
        img: img6,
      },
      {
        id: 1,
     
        img: img6,
      },
      {
        id: 2,
       
        img: img1,
      },
      
      {
        id: 3,
     
        img: img6,
      },
      {
        id: 4,
     
        img: img6,
      },
    ];
    const [chunkedArray, setChunkedArray] = useState([]);
  
    useEffect(( ) => {
      const chunks = chunkArray(originalArray, 2);
      console.log(chunks);
      setChunkedArray(chunks);
    }, []);
  
   
  
    return (
      <section className="    ">
 
<div className='flex  items-center  justify-between  '>
   <div className='flex items-center '>
<Link className='deals_you_might'>Mega Deals of the Day </Link>

   </div>

   <div className='flex'> 
               <img src={arrowup}

                  className={`Arrow ${isFirst ? 'disabled' : ''}`}
                  onClick={handlePrev}
               />
               <img  src={arrowdown}
                  className={`Arrow ${isLast ? 'disabled' : ''}`}
                  onClick={handleNext}
               />
            </div>




</div>
        <div className="">
          <div className="post-conatin">
            <Swiper
              autoplay={{ delay: 2500}}
              spaceBetween={0}
              className={`${"mySwiper"}`}
              ref={SlideRef}
              slidesPerView={3}
              grabCursor={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                480: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
              }}
              onSlideChange={onSlideChange}
              pagination={{
                el: ".swiper-paginations",
                type: "fraction",
              }}
   
              modules={[ Autoplay]}
            >
              {chunkedArray.map((chunk, index) => (
                <SwiperSlide key={index}>
                  {/* Render your chunk of items here */}
                  {chunk.map((item) => (
              <SidBanner
              key={item.id}
              image={item.img}
              title={item.name}
              price={item.price}
              delPirce={item.delPirce}
              description={item.description}
              alt={item.name}
            />
                  ))}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    );
  };
export default BannerAnimation;
