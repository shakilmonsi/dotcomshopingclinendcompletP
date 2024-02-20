import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import arrowdown from "../../../assets/electronice/uptodown/up.svg";

import arrowup from "../../../assets/electronice/uptodown/down.svg";

import DelasMigCard from "./DelasMigCard";


const DealsYouMightLike = () => {
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

  const [chunkedArray, setChunkedArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/menu");
        const data = await response.json();

        // Apply chunkArray function to the fetched data
        const chunks = chunkArray(data, 2);
  
        setChunkedArray(chunks);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);



  return (
    <section className="" style={{backgroundColor:"#F5F7FB"}}>
      <div className="flex  items-center  justify-between pe-2 py-2 ps-2">
        <div className="flex items-center ">
          <p className="deals_you_might">Deals You Might Like </p>
        </div>

        <div className="flex">
          <img
            src={arrowup}
            className={`Arrow ${isFirst ? "disabled" : ""}`}
            onClick={handlePrev}
          />
          <img
            src={arrowdown}
            className={`Arrow ${isLast ? "disabled" : ""}`}
            onClick={handleNext}
          />
        </div>
      </div>
      <div className="">
        <div className="post-conatin">
          <Swiper
            autoplay={{ delay: 2500 }}
            spaceBetween={0}
            className={`row-gap-4${"mySwiper"}`}
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
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            onSlideChange={onSlideChange}
            modules={[Autoplay]}
          >
            {/* {chunkedArray?.map((item) => {
              return (
                <SwiperSlide>
                  <DelasMigCard item={item} key={item._id} />
                  <DelasMigCard item={item} key={item._id} />
                </SwiperSlide>
              );
            })} */}
   {/* setup this code    show  row  data   2  || 3  */}
            {chunkedArray?.map((chunk, index) => (
              <SwiperSlide key={index}>
                {/* Render your chunk of items here */}
                {chunk.map((item) => (
             
                 
                    <DelasMigCard item={item} key={item._id} />
                    
                  
                ))}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default DealsYouMightLike;
