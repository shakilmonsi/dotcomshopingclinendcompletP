// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";


import  Layer1 from "../../../assets/carouselDaraz/1.jpg"
import  Layer2 from "../../../assets/carouselDaraz/2.jpg"
import  Layer3 from "../../../assets/carouselDaraz/3.jpg"
import  Layer4 from "../../../assets/carouselDaraz/4.jpg"

import  Layer5 from "../../../assets/carouselDaraz/5.jpg"
import  Layer6 from "../../../assets/carouselDaraz/6.jpg"

import  Layer7 from "../../../assets/carouselDaraz/7.jpg"
import  Layer8 from "../../../assets/carouselDaraz/8.jpg"
import  Layer9 from "../../../assets/carouselDaraz/9.jpg"

import arrowdown from '../../../assets/electronice/uptodown/up.svg';
import arrowup from '../../../assets/electronice/uptodown/down.svg';







import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useRef, useState } from "react"
import CarouselCard from "./CarouselCard"


const Products = [
 
 {
   id: 1,
   name: 'Sony WNC Headset',
   price: 'SAR31821.00',
   delPirce: 'SAR31821.00',
   description:
      'bestSeller.',

   Layer:Layer1


},
 {
   id: 1,
   name: 'Sony WNC Headset',
   price: 'SAR31821.00',
   delPirce: 'SAR31821.00',
   description:
      'bestSeller.',
 
   Layer:Layer2


},
 {
   id: 1,
   name: 'Sony WNC Headset',
   price: 'SAR31821.00',
   delPirce: 'SAR31821.00',
   description:
      'bestSeller.',
 
   Layer:Layer3


},
 {
   id: 1,
   name: 'Sony WNC Headset',
   price: 'SAR31821.00',
   delPirce: 'SAR31821.00',
   description:
      'bestSeller.',
 
   Layer:Layer4


},
 {
   id: 1,
   name: 'Sony WNC Headset',
   price: 'SAR31821.00',
   delPirce: 'SAR31821.00',
   description:
      'bestSeller.',
 
   Layer:Layer5


},
 {
   id: 1,
   name: 'Sony WNC Headset',
   price: 'SAR31821.00',
   delPirce: 'SAR31821.00',
   description:
      'bestSeller.',
 
   Layer:Layer6


},
 {
   id: 1,
   name: 'Sony WNC Headset',
   price: 'SAR31821.00',
   delPirce: 'SAR31821.00',
   description:
      'bestSeller.',
 
   Layer:Layer7


},
 {
   id: 1,
   name: 'Sony WNC Headset',
   price: 'SAR31821.00',
   delPirce: 'SAR31821.00',
   description:
      'bestSeller.',
 
   Layer:Layer8


},
 {
   id: 1,
   name: 'Sony WNC Headset',
   price: 'SAR31821.00',
   delPirce: 'SAR31821.00',
   description:
      'bestSeller.',
 
   Layer:Layer9


},
 // {
 //    id: 1,
 //    name: 'Sony WNC Headset',
 //    price: 'SAR31821.00',
 //    delPirce: 'SAR31821.00',
 //    description:
 //       'bestSeller.',
 //    img: img1,
 //    imgTwo: imgTwo,
 //    imgThre: imgThre,
 //    Discount:Discount,
 //    imgFive:imgFive,
 //    Layer:Layer


 // },
 // {
 //    id: 1,
 //    name: 'Sony WNC Headset',
 //    price: 'SAR31821.00',
 //    delPirce: 'SAR31821.00',
 //    description:
 //       'bestSeller.',
 //    img: img1,
 //    imgTwo: imgTwo,
 //    imgThre: imgThre,
 //    Discount:Discount,
 //    imgFive:imgFive,
 //    Layer:Layer


 // },
 

];

const Carousel = () => {
 // const [reviews, setReviews] = useState([]);

 // useEffect(() => {
 //   fetch("http://localhost:5000/categories")
 //     .then((res) => res.json())
 //     .then((data) => setReviews(data))
 //     .catch((error) => console.error("Error fetching reviews:", error));
 // }, []);

 

 // useEffect(() => {
 //   // Update the number of slides per view based on screen size
 //   const handleResize = () => {
 //     if (window.innerWidth >= 1200) {
 //       // Large screens
 //       setSwiperSlidesPerView(4);
 //     } else if (window.innerWidth >= 992) {
 //       // Large screens
 //       setSwiperSlidesPerView(3);
 //     } else if (window.innerWidth >= 600) {
 //       // Medium screens
 //       setSwiperSlidesPerView(2);
 //     } else {
 //       // Small screens
 //       setSwiperSlidesPerView(1);
 //     }
 //   };

 //   // Initial call
 //   handleResize();

 //   // Add event listener to handle screen size changes
 //   window.addEventListener("resize", handleResize);

 //   // Cleanup the event listener on component unmount
 //   return () => {
 //     window.removeEventListener("resize", handleResize);
 //   };
 // }, []);

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
   <section className=' bg-yellow-50 shadow-md    overflow-hidden'> 




   <div className=" mt-1">
    
     <Swiper
       autoplay={{
         delay: 2500,
         disableOnInteraction: false,
       }}
       pagination={{ clickable: true }} // Enable clickable pagination
 
       spaceBetween={30}
       modules={[Autoplay, Pagination]}
       className="mySwiper mt-10 relative"
     >
         {Products.map((item) => {
           return (
              <SwiperSlide key={item.id}>
                 <CarouselCard
                    key={item.id}
               
              
                    Layer={item.Layer}
       
               
                 />
              </SwiperSlide>
           );


         

        })}
         
     </Swiper>
     </div>
{/* 
<div className=' absolute	 -mt-40  -ms-12'>
<img src={arrowup}

className={`   Arrow ${isFirst ? 'disabled' : ''}`}
onClick={handlePrev}
/>
</div>


<div className='absolute	-mt-40  ms-[1550px]'> 
<img  src={arrowdown}
   className={`Arrow ${isLast ? 'disabled' : ''}`}
   onClick={handleNext}
/>
</div> */}



</section>
 );
};

export default Carousel;