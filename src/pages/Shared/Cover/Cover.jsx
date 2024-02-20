

import banner2 from "../../../assets/bannerthre/banner2.png";
import banner3 from "../../../assets/bannerthre/banner3.png";

const Cover = ({ img, title }) => {
    return (

      
       
<div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-y-3	 gap-x-4 py-4 ">

      <img className=" rounded-md	 h-[308px] w-[616px]" src={img} alt="banner2"></img>
      <img className=" rounded-md	 h-[308px] w-[616px]" src={banner2} alt="banner2"></img>
      <img className=" rounded-md	 h-[308px] w-[616px]" src={banner3} alt="banner2"></img>
 



        
    </div>

            
  

    );
};

export default Cover;