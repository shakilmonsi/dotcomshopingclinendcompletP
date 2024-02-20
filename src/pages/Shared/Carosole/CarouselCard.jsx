import React from "react";


const CarouselCard = (props) => {
  const { Layer } = props;
  return <div>
<div className="flex">
<div className="flex items-center gap-44">

  

 
  
 
  <div>
  <img src={Layer} alt="image"></img>
  </div>
 


</div>


</div>


  </div>;
};


export default CarouselCard;