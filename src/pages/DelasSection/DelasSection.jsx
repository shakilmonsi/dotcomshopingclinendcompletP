import React from "react";
import DealsYouMightLike from "./DealsYouMightLik/DealsYouMightLike";
import BannerAnimation from "./SidBanner/BannerAnimation";

// import Banner from "./Banner";

const  DelasSection=()=> {
  return (
    <div className="flex items-center gap-6 pe-20">
      
      <div className="w-5/12 ">
        <div>
          <DealsYouMightLike></DealsYouMightLike>
        </div>
      </div>

      <div class="bg-orange-400 w-1 min-h-screen	 hidden md:block px-1"></div>
      <div className="w-5/12 ">
        <div>
          <DealsYouMightLike></DealsYouMightLike>
        </div>
      </div>
      <div className="w-2/12  ">
        <div>
         <BannerAnimation></BannerAnimation>
        </div>
      </div>
    </div>
  );
}

export default DelasSection;
