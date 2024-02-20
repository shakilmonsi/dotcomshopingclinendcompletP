import { useContext } from "react";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import ReactImageMagnify from "react-image-magnify";

import star from "../../assets/FollowedProducts/logo/star.svg";

import grystart from "../../assets/FollowedProducts/logo/grystart.svg";
import imagess from "../../assets/FollowedProducts/FollowedProducts.png";

import Facebook from "../../assets/sherLogo/Facebook.svg";
import pinterest from "../../assets/sherLogo/pinterest.svg";
import Twitter from "../../assets/sherLogo/Twitter.svg";

import Delivery from "../../assets/sherLogo/Fast Delivery.png";
import Returns from "../../assets/sherLogo/Free Returns.png";
import Shipping from "../../assets/sherLogo/Trusted Shipping.png";
import useCart from "../../hooks/useCart";
import Animation from "../Animation/Animation";
import DelasSection from "../DelasSection/DelasSection";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ProductsDatils = () => {

  const { _id, title, price, recipe, category, image } = useLoaderData();
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
 

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const axiosSecure = useAxiosSecure();

  const handleAddToCart = () => {
    console.log("add to cart")
    if (user && user.email) {
      //send cart item to the database
      const cartItem = {
        menuId: _id,
        email: user.email,

        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch cart to update the cart items count
          refetch();
          navigate(from, { replace: true });
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          //   send the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;

    //  my new code ....
    const disrict = form.disrict.value;
    const policestation = form.policestation.value;
    const postoffce = form.postoffce.value;
    const village = form.village.value;

    const message = form.message.value;
   

    if (user && user.email) {


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
      message,
    };

    axiosSecure.post("/carts", order).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} added to your cart`,
          showConfirmButton: false,
          timer: 1500,
        });
        // refetch cart to update the cart items count
        refetch();
        navigate(from, { replace: true });
      }
    });
  } else {
    Swal.fire({
      title: "You are not Logged In",
      text: "Please login to add to the cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, login!",
    }).then((result) => {
      if (result.isConfirmed) {
        //   send the user to the login page
        navigate("/login", { state: { from: location } });
      }
    });
  }
};

  return (
    <div className="mt-6">
   
        {/* // new code    */}

        <div>
          <h4 className="text-4xl text-center font-bold py-3  text-green-700 ">
          𝓨𝓸𝓾𝓻 𝓟𝓻𝓸𝓭𝓾𝓬𝓽
          </h4>

          <section className="flex gap-12">
            <div>
              <div className="">
                <div className="fluid">
                  <div className="fluid__image-container">
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "Wristwatch by Ted Baker London",
                          isFluidWidth: true,
                          src: image,
                        },
                        largeImage: {
                          src: image,
                          width: 1600,
                          backgroundColor: "#000",
                          objectFit: "cover",
                          height: 2200,
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex  w-72">
                <div style={{ width: "80%" }}>
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: image,
                        width: 140,
                        height: 162,
                      },
                      largeImage: {
                        src: image,

                        width: 836,
                        margin: 20,
                        height: 1100,
                        enlargedImagePosition: "over",
                        lansStyle: { backgroundColor: "rgba(0,0,0,.2)" },
                      },
                    }}
                  />
                </div>

                <figure>
                  <img className="w-24 h-24 p-2" src={image} alt="Shoes" />
                </figure>

                <div></div>

                <figure>
                  <img className="w-24 h-24 p-2" src={image} alt="Shoes" />
                </figure>
                <figure>
                  <img className="w-24 h-24 p-2" src={image} alt="Shoes" />
                </figure>
              </div>
            </div>

            {/* // band  section  */}
            <div className=" mt-2">
              <div className="flex p-2 items-start gap-4 rounded-full bg-error">
                <h6 className="text-white text-base font-inter font-semibold">
                  HOTSALE
                </h6>
              </div>
              <div className="flex gap-2">
                <p className="text-gray-500 text-base font-inter font-normal">
                  Brand:
                </p>
                <p className="text-gray-500 text-base font-inter font-semibold">
                  Sony
                </p>
              </div>

              <h4 className="text-black text-lg font-inter font-medium leading-9">
                {recipe}
              </h4>
              <div className="flex gap-6 items-center ">
                <div className="flex">
                  <p className="text-gray-500 text-sm font-inter font-normal leading-normal">
                    {" "}
                    Model:{" "}
                  </p>
                  <h6 className="text-gray-500 text-sm font-inter font-medium leading-normal">
                    {category}
                  </h6>
                </div>

                <div class="bg-gray-300 w-1 h-5 hidden md:block"></div>
                {/* 5 reding  star  */}
                <div className="flex gap-1 items-center">
                  <img className="w-5 h-5" src={star} alt="reding"></img>
                  <img className="w-5 h-5" src={star} alt="reding"></img>
                  <img className="w-5 h-5" src={star} alt="reding"></img>
                  <img className="w-5 h-5" src={star} alt="reding"></img>
                  <img className="w-5 h-5" src={grystart} alt="reding"></img>
                  <p className="text-gray-500 text-sm font-inter font-medium leading-normal text-center">
                    4.5 (2130 reviews)
                  </p>
                </div>
                <div class="bg-gray-300 w-1 h-5 hidden md:block"></div>

                <div className="flex gap-2">
                  <p className="text-gray-500 text-base font-inter font-medium leading-normal">
                    Share:
                  </p>
                  <img className="w-5 h-5" src={Facebook} alt="reding"></img>
                  <img className="w-5 h-5" src={pinterest} alt="reding"></img>
                  <img className="w-5 h-5" src={Twitter} alt="reding"></img>
                </div>
              </div>

              {/* // Highlights  section  */}
              <div className="mt-2">
                <h4 className="text-black text-lg font-inter font-semibold leading-normal">
                  {" "}
                  Highlights
                </h4>
                <div>
                  <li className="text-rgba-90 text-base font-inter font-normal leading-normal">
                    A9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling
                  </li>
                  <li className="text-rgba-90 text-base font-inter font-normal leading-normal">
                    Hands-free Voice Control, Always Ready
                  </li>
                  <li className="text-rgba-90 text-base font-inter font-normal leading-normal">
                    Eye Comfort Display: Low-Blue Light, Flicker-Free
                  </li>
                </div>
              </div>

              {/* // price  section   and  coaluty  section  */}

              <div className="mt-2">
                <div className="items-center flex gap-3">
                  <p className="text-gray-500 text-base font-inter font-normal leading-normal">
                    Price:{" "}
                  </p>
                  <h3 className="text-black text-2xl font-inter font-medium leading-normal">
                    BDT {price}
                  </h3>
                  <p className="text-gray-500 text-base font-inter font-normal leading-normal">
                    including VAT
                  </p>
                </div>
              </div>

              {/* ///  Fast Delivery   section  */}

              <div className="flex  items-center   gap-16 mt-2">
                <div className="flex items-center  gap-2">
                  <img className="h-5 w-5" src={Delivery} alt=""></img>
                  <p className="text-black bg-opacity-90 font-inter font-medium text-base">
                    Fast Delivery
                  </p>
                </div>

                <div className="flex items-center  gap-2">
                  <img className="h-5 w-5" src={Returns} alt=""></img>
                  <p className="text-black bg-opacity-90 font-inter font-medium text-base">
                    Fast Delivery
                  </p>
                </div>

                <div className="flex items-center  gap-2">
                  <img className="h-5 w-5" src={Shipping} alt=""></img>
                  <p className="text-black bg-opacity-90 font-inter font-medium text-base">
                    Fast Delivery
                  </p>
                </div>
              </div>
            </div>
            <div>
              {/* // ____________new code ___________________ */}
   
            </div>
          </section>
        </div>
        <div class="bg-orange-400 h-2 min-w-screen	mt-6  hidden md:block py-1"></div>

        {/* // new code    */}

        <h4 className="text-4xl text-center font-bold   text-green-700 mt-3">
          Please enter your correct address to confirm the order{" "}
        </h4>
        <form onSubmit={handlePlaceOrder}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="input input-ghost w-full  input-bordered"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="input input-ghost w-full  input-bordered"
          />
          <input
            name="phone"
            type="text"
            placeholder="Your Phone"
            className="input input-ghost w-full  input-bordered"
            required
          />
          <input
            name="email"
            type="text"
            placeholder="Your email"
            defaultValue={user?.email}
            className="input input-ghost w-full  input-bordered"
            readOnly
          />

          <input
            name="disrict"
            type="text"
            placeholder="District Name"
            className="input input-ghost w-full  input-bordered"
          />
          <input
            name="policestation"
            type="text"
            placeholder="Police Station Name"
            className="input input-ghost w-full  input-bordered"
          />
          <input
            name="postoffce"
            type="text"
            placeholder="Post Office Name"
            className="input input-ghost w-full  input-bordered"
          />
          <input
            name="village"
            type="text"
            placeholder="village Name"
            className="input input-ghost w-full  input-bordered"
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered h-24 w-full"
          placeholder="Your node"
          required
        ></textarea>

        {/* <input className="btn" type="submit" value="Place Your Order" /> */}
        <input
              type="submit" value="Place Your Order"
                className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
              >
             
              </input>
      </form>
      <section>
        <DelasSection></DelasSection>
        <Animation></Animation>
      </section>
    </div>
  );
};

export default ProductsDatils;
