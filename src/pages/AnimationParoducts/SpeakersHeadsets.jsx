import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import arrowdown from "../../assets/electronice/uptodown/up.svg";
import arrowup from "../../assets/electronice/uptodown/down.svg";
import FollowedCard from "./FollowedCard";

const SpeakersHeadsets = () => {
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

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  const [swiperSlidesPerView, setSwiperSlidesPerView] = useState(1);

  //   useEffect(() => {
  //     // Update the number of slides per view based on screen size
  //     const handleResize = () => {
  //       if (window.innerWidth >= 1200) {
  //         // Large screens
  //         setSwiperSlidesPerView(4);
  //       } else if (window.innerWidth >= 992) {
  //         // Large screens
  //         setSwiperSlidesPerView(3);
  //       } else if (window.innerWidth >= 600) {
  //         // Medium screens
  //         setSwiperSlidesPerView(2);
  //       } else {
  //         // Small screens
  //         setSwiperSlidesPerView(1);
  //       }
  //     };

  //     // Initial call
  //     handleResize();

  //     // Add event listener to handle screen size changes
  //     window.addEventListener("resize", handleResize);

  //     // Cleanup the event listener on component unmount
  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, []);

  return (
    <div className="">
      <div className="flex  items-center py-4 pe-2 justify-between">
        <div className="flex items-center gap-6	">
          <h6 className="text-gray-700 font-inter text-base font-semibold">
            Speakers & Headsets
          </h6>
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

      <Swiper
        autoplay={{ delay: 1000 }}
        spaceBetween={0}
        className={`${"mySwiper"}`}
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
            slidesPerView: 3,
            spaceBetween: 30,
          },

          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },

          1536: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        onSlideChange={onSlideChange}
        pagination={{
          el: ".swiper-paginations",
          type: "fraction",
        }}
        navigation={false}
        modules={[Autoplay]}
      >
        {reviews?.map((item) => {
          return (
            <SwiperSlide>
              <FollowedCard item={item} key={item._id} />
            </SwiperSlide>
          );
        })}

        {/* {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col justify-center items-center border border-gray-200 rounded-xl h-full py-6">
            <img
              src={review.image}
              alt=""
              className="w-36 h-36 rounded-full"
            />
            <p className="text-lg mt-4 font-semibold">
           {review.name}
            </p>
          </div>
        </SwiperSlide>
      ))} */}
      </Swiper>
    </div>
  );
};

export default SpeakersHeadsets;
