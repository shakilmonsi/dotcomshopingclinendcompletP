import React from "react";


const SliderContent = (props) => {
  const { image, imgFive, Discount, imgTwo, imgThre,Layer } = props;
  return <div>
<div className="flex">
<div className="flex items-center gap-44">

  <div>
  <img src={imgFive} alt="image"></img>
  </div>
 
  <div className="flex gap-20 items-center">
    <div> 
      <img src={image} alt="image -me-8"></img>
      <br></br>
      <img src={imgThre} alt="image"></img>
    </div>
 <div>
 <img src={Discount} alt="image"></img>
 </div>
 
  </div>
 
  <div>
  <img src={Layer} alt="image"></img>
  </div>
 


</div>


</div>


  </div>;
};


export default SliderContent;