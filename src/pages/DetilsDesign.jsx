
import star from "../assets/FollowedProducts/logo/star.svg";
import grystart from "../assets/FollowedProducts/logo/grystart.svg";
import image from "../assets/FollowedProducts/FollowedProducts.png"

import Facebook from "../assets/sherLogo/Facebook.svg"
import pinterest from "../assets/sherLogo/pinterest.svg"
import Twitter from "../assets/sherLogo/Twitter.svg"


import Delivery from "../assets/sherLogo/Fast Delivery.png"
import Returns from "../assets/sherLogo/Free Returns.png"
import Shipping from "../assets/sherLogo/Trusted Shipping.png"

const  DetilsDesign =()=>{
    return (
        <div>
            <h4 className="text-4xl text-center font-bold   text-green-700 ">this is   desing   </h4>


            <section className="flex gap-12">  

            <div >
            <div className="rounded-lg p-10 bg-blue-100 w-72 h-68 flex-shrink-0"> 
            <figure><img src={image} alt="Shoes" /></figure>
            </div>
            <div className="flex  w-72"> 
            <figure><img className="w-24 h-24 p-2" src={image} alt="Shoes" /></figure>
            <figure><img className="w-24 h-24 p-2" src={image} alt="Shoes" /></figure>
            <figure><img className="w-24 h-24 p-2" src={image} alt="Shoes" /></figure>
            <figure><img className="w-24 h-24 p-2" src={image} alt="Shoes" /></figure>
            </div>
            </div>

      {/* // band  section  */}
      <div className=" mt-2">
      <div className="flex p-2 items-start gap-4 rounded-full bg-error">
        <h6 className="text-white text-base font-inter font-semibold">HOTSALE</h6>
       </div>
<div className="flex gap-2">
<p className="text-gray-500 text-base font-inter font-normal">Brand:</p>
<p className="text-gray-500 text-base font-inter font-semibold">Sony</p>
</div>
<h4 className="text-black text-lg font-inter font-medium leading-9"> Sony Plus 43 Inch Android Smart Wifi Hd Led Tv 4k Supported
Ram 2 gb Rom 16 Gb</h4>
      <div className="flex gap-6 items-center ">
    <div className="flex">
    <p className="text-gray-500 text-sm font-inter font-normal leading-normal"> Model: </p>
<h6 className="text-gray-500 text-sm font-inter font-medium leading-normal"> OLED42C2PSA</h6>
    </div>
 <div class="bg-gray-300 w-1 h-5 hidden md:block"></div>
     {/* 5 reding  star  */}
                      <div className="flex gap-1 items-center">
                     <img className="w-5 h-5" src={star} alt="reding"></img>
                     <img className="w-5 h-5" src={star} alt="reding"></img>
                     <img className="w-5 h-5" src={star} alt="reding"></img>
                     <img className="w-5 h-5" src={star} alt="reding"></img>
                     <img className="w-5 h-5" src={grystart} alt="reding"></img>
                     <p className="text-gray-500 text-sm font-inter font-medium leading-normal text-center">4.5 (2130 reviews)</p>
                      </div>

              
              <div class="bg-gray-300 w-1 h-5 hidden md:block"></div>


              <div className="flex gap-2">
                <p className="text-gray-500 text-base font-inter font-medium leading-normal">Share:</p>
                <img className="w-5 h-5" src={Facebook} alt="reding"></img>
                <img className="w-5 h-5" src={pinterest} alt="reding"></img>
                <img className="w-5 h-5" src={Twitter} alt="reding"></img>
              </div>

</div>

{/* // Highlights  section  */}
<div className="mt-2">
    <h4 className="text-black text-lg font-inter font-semibold leading-normal"> Highlights</h4>
    <div>
        <li className="text-rgba-90 text-base font-inter font-normal leading-normal">A9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</li>
        <li className="text-rgba-90 text-base font-inter font-normal leading-normal">Hands-free Voice Control, Always Ready</li>
        <li className="text-rgba-90 text-base font-inter font-normal leading-normal">Eye Comfort Display: Low-Blue Light, Flicker-Free</li>
      
    </div>
</div>


{/* // price  section   and  coaluty  section  */}

<div className="mt-2">
    <div className="items-center flex gap-3">
    <p className="text-gray-500 text-base font-inter font-normal leading-normal">Price:  </p>
<h3 className="text-black text-2xl font-inter font-medium leading-normal">BDT  5321.00</h3>

<p className="text-gray-500 text-base font-inter font-normal leading-normal">including VAT</p>
    </div>
</div>

{/* ///  Fast Delivery   section  */}


<div className="flex  items-center   gap-16 mt-2">

    <div className="flex items-center  gap-2">
        <img className="h-5 w-5" src={Delivery} alt=""></img>
        <p className="text-black bg-opacity-90 font-inter font-medium text-base">Fast Delivery</p>
    </div>

    <div className="flex items-center  gap-2">
        <img className="h-5 w-5" src={Returns} alt=""></img>
        <p className="text-black bg-opacity-90 font-inter font-medium text-base">Fast Delivery</p>
    </div>
    <div className="flex items-center  gap-2">
        <img className="h-5 w-5" src={Shipping} alt=""></img>
        <p className="text-black bg-opacity-90 font-inter font-medium text-base">Fast Delivery</p>
    </div>
</div>
</div>






            </section>
        </div>
    );
}

export default DetilsDesign;