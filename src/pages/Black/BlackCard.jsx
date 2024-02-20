import React from 'react';
import promoter from "../../assets/promotorImg/logo/promoter.png"
import { Link } from 'react-router-dom';

function BlackCard(props) {
    const { trend, userVerifide, hot, grystart,star,love,coopy,ay,addCard ,img,verifide} = props;

    return (
        <div className="">
        <div className="card w-[233px] h-[420px] ms-5 rounded-md bg-white shadow-md p-7 overflow-hidden	">
          <div className="bg-white 	">
            <div className="bg-red m-3 -mt-8">
              <img src={img} alt="Shoes" className="  mt-2 p-4" />
            </div>
  
            <div className="absolute -mt-40 -ms-6 bg-green-50  rounded-full">
              <img style={{ color: "green" }}className="p-2"src={promoter} alt="promoterlogo"></img></div>
  
            <div className="absolute -mt-36 ms-28 rounded-md bg-opacity-60 bg-pink-200 transform rotate-45">
              <p className="text-red-500	px-10 py-1 text-xs leading-normal">
                5.5%Off{" "}
              </p>
            </div>
            {/* // leove and  copyb  logo  add  */}
            <div className="absolute gap-5 -mt-4 ms-3 flex">
              <div className=" bg-green-50  rounded-full">
                <img
                  style={{ color: "green" }}
                  className=" p-2  "
                  src={ay}
                  alt="promoterlogo"
                ></img>
              </div>
  
              <div className=" bg-green-50  rounded-full">
                <img
                  style={{ color: "green" }}
                  className=" p-2  "
                  src={coopy}
                  alt="promoterlogo"
                ></img>
              </div>
              <div className=" bg-green-50  rounded-full">
                <img
                  style={{ color: "green" }}
                  className=" p-2  "
                  src={love}
                  alt="promoterlogo"
                ></img>
              </div>
            </div>
          </div>
  
          <div className="card-body">
    

    <div className=''>           <div >
              <p className="text-gray-800 font-inter text-md font-medium leading-normal ">Intel Corei512thGenCPU.....!</p>
  
              </div>
  
            <div className="flex items-center gap-6 mt-2">
              <div className="flex gap-1 items-center	-ms-12">
                     <img className="w-4 h-4" src={star} alt="reding"></img>
                     <img className="w-4 h-4" src={star} alt="reding"></img>
                     <img className="w-4 h-4" src={star} alt="reding"></img>
                     <img className="w-4 h-4" src={star} alt="reding"></img>
                     <img className="w-4 h-4" src={grystart} alt="reding"></img>
                     <span>(169)</span>
              </div>
              <div className="flex items-center -me-10 gap-1">
                  <img src={verifide} alt=""></img> 
                  <span className="text-yellow-400 font-inter text-xs font-semibold leading-normal">1000</span>
              </div>
            </div>
       
              
  {/* // hot_denger  section style  */}
  <div className="flex items-stretch gap-3 mt-2  -ms-8">
      <div className="bg-green-50  -ms-4  rounded-full">
          <h6 className="px-2 py-1 text-green-500 font-inter text-xs font-semibold leading-normal">New</h6>
      </div>
  
         <div className="bg-green-50 items-center	  rounded-full flex ">
              <img style={{ color: "green" }}className="px-2 py-1"src={hot} alt="promoterlogo"></img> <p className="text-red-500 font-inter text-xs font-semibold leading-normal">Hot</p></div>
  
  
              <div className="bg-green-50 items-center	  rounded-full flex ">
              <img style={{ color: "green" }}className="px-2 py-1"src={hot} alt="promoterlogo"></img> <p className="text-red-500 font-inter text-xs font-semibold leading-normal">Hot</p></div>
  
  
              <div className="express_style -me-8">
          <h6 className="text-white font-inter text-xs italic font-semibold leading-normal">Express</h6>
      </div>
  
  
  </div>
  
  
  {/* /// user  name  style    */}
  
  <div className="flex items-center gap-2 -ms-6 mt-1">
      <p className=" font-inter text-xs italic font-semibold leading-normal">Soldby:</p>
      <img className="h-4 w-4" src={userVerifide} alt=""></img>
      <p className="text-gray-600 font-inter text-xs font-medium leading-norma">Mr.Mohammad</p>
  </div>
  
  
  {/* /// del prices    style    */}
  
  <div className="flex items-center justify-between -ms-10 gap-14 mt-2">
      <p className=" text-gray-900 font-inter text-base font-medium leading-normal">SAR5321.00</p>
      <del className="text-orange-500 font-inter text-xs font-semibold line-through leading-normal">5693.00 </del>
  
  </div></div>
  
 {/* // add to card button  */}
 <div className=' -ms-11 '>
  <Link to="" className="add_card_button justify-center flex gap-2" >                
  <img className="h-4 w-4" src={addCard}  alt="" /> <span className="text-white font-inter text-base font-medium leading-normal"> Add to card</span>  
   </Link>
   </div>

          </div>
  
   
 
  </div>
  
  
        </div>
    );
}

export default BlackCard;