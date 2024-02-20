import { useContext } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const  ProductsDatils=()=> {

    const { _id, title, price , recipe,category,image} = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;

    //  my new code ....
        const disrict = form.disrict.value;
        const policestation = form.policestation.value;
        const postoffce = form.postoffce.value;
        const village = form.village.value;


        const message = form.message.value;

        const order = {
            disrict,
            policestation,
            postoffce,
            village,
            service: _id,
            serviceName: title,
            price,
            title,
            image,
            category,
            customer: name,
            email,
            recipe,
            phone,
            message

        }

        // if(phone.length > 10){
        //     alert('Phone number should be 10 characters or longer')
        // }
        // else{

        // }

        fetch('http://localhost:5000/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Order placed successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));


    }

    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <h2 className="text-4xl">You are about to order: {title}</h2>
                <h4 className="text-3xl">Price: {price}</h4>
                <h4 className="text-3xl">recipe: {recipe}</h4>
                <h4 className="text-3xl">category: {category}</h4>
                <figure><img src={image} alt="Shoes" /></figure>






         


                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
              
              
                    <input name="disrict" type="text" placeholder="District Name" className="input input-ghost w-full  input-bordered"  />
                    <input name="policestation" type="text" placeholder="Police Station Name" className="input input-ghost w-full  input-bordered" />
                    <input name="postoffce" type="text" placeholder="Post Office Name" className="input input-ghost w-full  input-bordered" />
                    <input name="village" type="text" placeholder="village Name" className="input input-ghost w-full  input-bordered" />
              
              
              
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>

                <input className='btn' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};
 

export default ProductsDatils;




import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import arrowdown from "../../../assets/electronice/uptodown/up.svg";

import arrowup from "../../../assets/electronice/uptodown/down.svg";

import img1 from "../../../assets/delSectionProducts/image 58 (1).png";
import img2 from "../../../assets/delSectionProducts/image 62.png";
import img3 from "../../../assets/delSectionProducts/image 64 (1).png";
import img4 from "../../../assets/delSectionProducts/image 64.png";
import img5 from "../../../assets/delSectionProducts/image 65.png";
import img6 from "../../../assets/delSectionProducts/image 68.png";
import DelasMigCard from "./DelasMigCard";

const Products = [
  {
    id: 1,
    name: "Desktops",
    delPirce: "SAR31821.00",
    description: "bestSeller.",
    img: img1,
  },
  {
    id: 2,
    name: "Smartwatches",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",
    description: "bestSeller.",
    img: img2,
  },
  {
    id: 2,
    name: "Airpods",
    description: "bestSeller.",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",
    img: img3,
  },
  {
    id: 2,
    name: "Gadgets",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",
    description: "bestSeller.",
    img: img4,
  },

  {
    id: 2,
    name: "Gaming Consoles",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",
    description: "bestSeller",
    img: img5,
  },
  {
    id: 2,
    name: "Cameras .",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",
    description: "BestSeller",
    img: img6,
  },

  {
    id: 2,
    name: "Headsets",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",
    description: "BestSeller",
    img: img6,
  },

  {
    id: 2,
    name: "Powerbanks",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",
    description: "BestSeller",
    img: img6,
  },
  {
    id: 1,
    name: "Desktops",
    delPirce: "SAR31821.00",
    description: "bestSeller.",
    img: img1,
  },
  {
    id: 2,
    name: "Smartwatches",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",
    description: "bestSeller.",
    img: img2,
  },
  {
    id: 2,
    name: "Airpods",
    description: "bestSeller.",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",
    img: img3,
  },
  {
    id: 2,
    name: "Gadgets",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",
    description: "bestSeller.",
    img: img4,
  },

  {
    id: 2,
    name: "Gaming Consoles",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",
    description: "bestSeller",
    img: img5,
  },
  {
    id: 2,
    name: "Cameras .",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",
    description: "BestSeller",
    img: img6,
  },

  {
    id: 2,
    name: "Headsets",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",
    description: "BestSeller",
    img: img6,
  },

  {
    id: 2,
    name: "Powerbanks",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",
    description: "BestSeller",
    img: img6,
  },
];

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
        const chunks = chunkArray(data, 4);
        console.log(chunks);
        setChunkedArray(chunks);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(chunkedArray);

  return (
    <section className=" ">
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

            {chunkedArray.map((chunk, index) => (
              <SwiperSlide key={index}>
                {/* Render your chunk of items here */}
                {chunk.map((item) => (
                  <DelasMigCard
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

export default DealsYouMightLike;
