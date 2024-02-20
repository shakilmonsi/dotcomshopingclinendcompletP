import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay} from "swiper/modules";

 
const Animation = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  const [swiperSlidesPerView, setSwiperSlidesPerView] = useState(1);

  useEffect(() => {
    // Update the number of slides per view based on screen size
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        // Large screens
        setSwiperSlidesPerView(4);
      } else if (window.innerWidth >= 992) {
        // Large screens
        setSwiperSlidesPerView(3);
      } else if (window.innerWidth >= 600) {
        // Medium screens
        setSwiperSlidesPerView(2);
      } else {
        // Small screens
        setSwiperSlidesPerView(1);
      }
    };

    // Initial call
    handleResize();

    // Add event listener to handle screen size changes
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mb-20 md:mx-12 xl:mx-[135px] relative mt-16">
     
      <h4 className="text-4xl text-center font-bold   text-green-700 mt-3">
   ____________________ DEMO PRODUCTS_____________________
        </h4>

     
    
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }} // Enable clickable pagination
      slidesPerView={swiperSlidesPerView}
      spaceBetween={30}
      modules={[Autoplay]}
      className="mySwiper mt-10 relative"
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col justify-center items-center border border-gray-200 rounded-xl h-full py-6">
            <img
              src={review.image}
              alt=""
              className="w-36 h-36 rounded-full"
            />
            <p className="text-lg mt-4 font-semibold">
           
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

     ) }

export default Animation;