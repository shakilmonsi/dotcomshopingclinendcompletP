import React from "react";


import scr from "../../assets/appimg/scrn.png";


import cart from "../../assets/appimg/cart.svg";
import aple from "../../assets/appimg/aple.svg";
import ply from "../../assets/appimg/ply.svg";

const Getthebestap = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-100  pe-3 ps-4 to-teal-400 bg-opacity-25   py-8   justify-center items-center">
    {/* <div className="flex w-screen h-120 p-[24px 119.982px 25px 119px] justify-center items-center bg-gradient-to-r from-rgba-yellow-300 via-transparent to-rgba-teal-500"> */}
      <div className="  sm:flex items-center sm:overflow-y-auto ">

        <div>
          <p className="text-opacity-90 font-inter text-base font-medium text-gray-700">Get the best experience by downloading our mobile app </p>
        </div>

        <div className="sm:flex items-center 	">
          
          <img src={scr} alt="src"></img>


          <div className="flex items-center gap-4">
          <p className="text-opacity-90 font-inter text-base font-medium text-gray-700">Download The <span
           className="text-opacity-90 font-inter text-xl font-semibold text-gray-700">FREE</span> </p>
          <img src={cart} alt="src"></img>
          <p className="text-opacity-90 font-inter text-base font-medium text-gray-700">App  &  Shop On The GO</p>

          </div>
        </div>

        <div>
            <div className="flex items-center gap-11">

<div className="rounded-md border border-solid border-gray-700 flex flex-col justify-center items-center p-4 space-y-2">
    <img className="w-[153.166px] h-8" src={aple}  alt=""></img>
</div>

<div className="rounded-md border border-solid border-gray-700 flex flex-col justify-center items-center p-4 space-y-2">
    <img className="w-[153.166px] h-8" src={ply}  alt=""></img>
</div>


            </div>
        </div>

      </div>
    </div>
  );
};

export default Getthebestap;
