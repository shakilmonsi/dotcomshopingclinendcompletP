import React from "react";
import BlackBanner from "./BlackBanner";
import BlackProducts from "./BlackProducts";

const   Black=()=> {
  
  
  return (
   <div className=" bg-[#F1EAE1] py-8 ps-20 pe-20 ">
     <div className="flex items-center">
      <div className="w-3/12 hidden md:block">
        <BlackBanner></BlackBanner>
      </div>
      <div className="w-9/12  ps-14	">
        <BlackProducts></BlackProducts>
      </div>
    </div>
   </div>
  );
}



export default Black;