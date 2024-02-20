import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import fire from '../../../assets/electronice/firelogo/fire.png';
//_____________________filter products ____________
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
//_____________________filter products ____________
import arrowdown from "../../../assets/electronice/uptodown/up.svg";
import arrowup from "../../../assets/electronice/uptodown/down.svg";

import ElecDataCard from "./ElecDataCard";
import { Link, useParams } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../../Order/OrderTab/OrderTab";

const Category = () => {
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
  // ______________flash salwe  timer ____________________________________________

  const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []); // Empty dependency array ensures effect runs only once on mount

    const days = currentTime.getDay();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();



  // ______________flash salwe  timer ____________________________________________

  //_________________________section to  flase sale catagory ___________________________

  //________________filter  section_____________

  const catagrytrowelproducts = [
    {
      id: 1,
      name: "SHOSE",
  
    },
    {
      id: 2,
      name: "pant",
  
    },

    {
      id: 3,
      name: "T-Shirt",

    },
    {
      id: 4,
      name: "Borka",
    
    },
    {
      id: 5,
      name: "pant-shart",
      
    },
    // {
    //         id: 6,
    //         name: "Laptops & Tablets ",

    //         catagryimg: image6

    // },
    // {
    //         id: 7,
    //         name: "Fitness",
    //         catagryimg: img7

    // },
    // {
    //         id: 8,
    //         name: "Toys",
    //         catagryimg: img8

    // },
    // {
    //         id: 9,
    //         name: "Books",
    //         catagryimg: image9

    // },
    // {
    //         id: 10,
    //         name: "Gaming Accessories",

    //         catagryimg: image10

    // },
    // {
    //         id: 11,
    //         name: " Health & Personal Care",

    //         catagryimg: img11

    // },
    // {
    //         id: 12,
    //         name: "Home & Kitchen",

    //         catagryimg: img12

    // },
  ];
  //________________filter  section_____________

    //____________________filter data and products _____________________

    const categories = ["salad", "pizza", "soup", "dessert", "shatpant"];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const salad = menu.filter((item) => item.category === "salad");
    const desserts = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
  
    const pizza = menu.filter((item) => item.category === "pizza");
    const drinks = menu.filter((item) => item.category === "drinks");
    const shatpant = menu.filter((item) => item.category === "shatpant");
  
    //____________________filter data and products _____________________

  //_________________________section to  flase sale catagory ___________________________

  return (
 
    
    <section className='mt-4 bg-gray-100 backdrop-blur-md  ps-20  pe-20   py-4'> 

<div className='flex gap-8 justify-center	items-center mt-4 '>

<div className='flex'>
<img className='w-8 h-8' src={fire} alt='fire'></img>
<h6 className='text-gray-900 font-inter text-2xl font-semibold'>Flash Sale</h6>
</div>

<div  className='flex  gap-2'>
<div>

<div className='rounded-md bg-red-500 flex p-2 justify-center items-center gap-4'>
   <p className='text-white font-inter text-lg font-semibold'>{days} </p>
</div>
<p className='text-red-500 font-inter text-base font-semibold'>Day</p>
</div>
<div>
<div className='rounded-md bg-red-500 flex p-2 justify-center items-center gap-4'>
   <p className='text-white font-inter text-lg font-semibold'>{hours}</p>
</div>
<p className='text-red-500 font-inter text-base font-semibold'>Hour</p>
</div>
<div>
<div className='rounded-md bg-red-500 flex p-2 justify-center items-center gap-4'>
   <p className='text-white font-inter text-lg font-semibold'> {minutes}</p>
</div>
<p className='text-red-500 font-inter text-base font-semibold'>Min</p>
</div>
<div>
<div className='rounded-md bg-red-500 flex p-2 justify-center items-center gap-4'>
   <p className='text-white font-inter text-lg font-semibold'>{seconds}</p>
</div>
<p className='text-red-500 font-inter text-base font-semibold'>Sec</p>
</div>


</div>


<div>
<h6 className='text-gray-900 font-inter text-3xl font-semibold'>Up to <span className='text-red-500 font-inter text-3xl font-semibold'> 70% </span> off</h6>


</div>


</div>


<div className='flex  items-center  justify-between pe-8 py-4'>
{/* // filter section ________________ */}

<div className="flex  items-center">



      <Tabs
                      defaultIndex={tabIndex}
                      onSelect={(index) => setTabIndex(index)}
                    >
                      <TabList>
                        {/* <div className='grid  md:grid-cols-6'>
                 <Tab><div className=''>
                      <img src={shose} alt='shoe'></img>
                  <h3>  shos</h3>
                      </div></Tab>
                  <Tab>pant</Tab>
                  <Tab>t-shirt </Tab>
                  <Tab>borka</Tab>
                  <Tab>shatpant</Tab>
                 </div> */}

                        <section className="flex  items-center  justify-between pe-8 py-4">
                          <div className="grid grid-cols-1 md:grid-cols-4 items-center justify-center lg:grid-cols-5  gap-x- 2 gap-y-2">
                            {catagrytrowelproducts?.map(
                              (catagrytrowelproduct) => (
                                <Tab
                                  className="flex p-2 text-center"
                                  key={catagrytrowelproduct.id}
                                >
                                  <div className="">
                                    
                                    <h6 className="text-red-500 font-inter text-xl font-semibold">
                                      {catagrytrowelproduct.name}
                                    </h6>
                                  </div>
                                </Tab>
                              )
                            )}
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
                        </section>
                      </TabList>

  <Swiper>
                      <TabPanel>
                        <OrderTab items={salad}></OrderTab>
                      </TabPanel>
                      <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
                      </TabPanel>
                      <TabPanel>
                        <OrderTab items={soup}></OrderTab>
                      </TabPanel>
                      <TabPanel>
                        <OrderTab items={desserts}></OrderTab>
                      </TabPanel>

                      <TabPanel>
                        <OrderTab items={shatpant}></OrderTab>
                      </TabPanel>

                      </Swiper>
                    </Tabs>


</div>



</div>

           <div className="">
      
{/* <h1 className="heading">Post Carousel Using React Swiper Js</h1> */}

<div className="post-box">
   <div className="bg-left"></div>
   <div className="bg-right"></div>

   <div className="post-heading">
      <div className="heading-box">
 

         <div className="pagination-slide">
            <p className="swiper-paginations"></p>
           
         </div>
      </div>
   </div>
   <div className="post-conatin">



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
              <ElecDataCard item={item} key={item._id} />
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
</div>
</div>
      </section>
  );
};

export default Category;