// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";


 import  imgTwo from "../../../assets/heroBanner/1.png"
 import  img1 from "../../../assets/heroBanner/Layer_1.svg"
 import  imgThre from "../../../assets/heroBanner/35297222_8281847 1.png"
 import  Discount from "../../../assets/heroBanner/Discount-cuate 1.png"
 import  imgFive from "../../../assets/heroBanner/last.png"
 import  Layer from "../../../assets/heroBanner/1.png"


 import arrowdown from '../../../assets/electronice/uptodown/up.svg';
 import arrowup from '../../../assets/electronice/uptodown/down.svg';
 






import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import SliderContent from "../SliderContent"
import { useRef, useState } from "react"


const Products = [
  
  {
    id: 1,
    name: 'Sony WNC Headset',
    price: 'SAR31821.00',
    delPirce: 'SAR31821.00',
    description:
       'bestSeller.',
    img: img1,
    imgTwo: imgTwo,
    imgThre: imgThre,
    Discount:Discount,
    imgFive:imgFive,
    Layer:Layer


 },
  {
    id: 1,
    name: 'Sony WNC Headset',
    price: 'SAR31821.00',
    delPirce: 'SAR31821.00',
    description:
       'bestSeller.',
    img: img1,
    imgTwo: imgTwo,
    imgThre: imgThre,
    Discount:Discount,
    imgFive:imgFive,
    Layer:Layer


 },
  {
    id: 1,
    name: 'Sony WNC Headset',
    price: 'SAR31821.00',
    delPirce: 'SAR31821.00',
    description:
       'bestSeller.',
    img: img1,
    imgTwo: imgTwo,
    imgThre: imgThre,
    Discount:Discount,
    imgFive:imgFive,
    Layer:Layer


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

const Banner = () => {
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
                  <SliderContent
                     key={item.id}
                     image={item.img}
                     imgFive={item.imgFive}
                     Discount={item.Discount}
                     imgThre={item.imgThre}
                     imgTwo={item.imgTwo}
                     title={item.name}
                     Layer={item.Layer}
                     delPirce={item.delPirce}
                     
                     description={item.description}
                     alt={item.name}
                  />
               </SwiperSlide>
            );


          

         })}
          
      </Swiper>
      </div>

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
</div>



</section>
  );
};

export default Banner;