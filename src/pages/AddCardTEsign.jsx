<div className="">
<div className="card w-[233px] h-[420px] -ms-1 rounded-md bg-white shadow-md p-7 overflow-hidden	">
  <div className="bg-white 	">
    <div className="bg-red m-3 -mt-8">
      <img style={{height:"150px"}}  src={image} alt="Shoes" className="  mt-2   p-4" />
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
<button className='btn '   onClick={ ()=>handleAddToCart(item)}>Add Cart</button>

  </div>
</div>


</div>



// complet cart  

import React, { useContext } from 'react';
// import promoter from "../../assets/promotorImg/logo/promoter.png";
// import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./FollowedProductsd.css"
// import FollowedProductss from "../../assets/FollowedProducts/FollowedProducts.png";
// import ay from "../../assets/FollowedProducts/logo/ay.svg";
// import coopy from "../../assets/FollowedProducts/logo/coopy.svg";
// import love from "../../assets/FollowedProducts/logo/love.svg";
// import star from "../../assets/FollowedProducts/logo/star.svg";
// import grystart from "../../assets/FollowedProducts/logo/grystart.svg";
// import verifide from "../../assets/FollowedProducts/logo/verifide.png";
// import trend from "../../assets/FollowedProducts/logo/trend.svg";
// import hot from "../../assets/FollowedProducts/logo/hot.svg";
// import userVerifide from "../../assets/FollowedProducts/logo/userVerifide.svg";
// import addCard from "../../assets/FollowedProducts/logo/cart white.png";
// import useAuth from '../../hooks/useAuth';
// import useAxiosSecure from '../../hooks/useAxiosSecure';
// import useCart from '../../hooks/useCart';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

function FollowedCard({item}) {
    const { name, image, price, recipe, _id } = item;
    const {user}= useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const handleAddToCart = item => {
        console.log(item)  
      if(user && user.email){
        const orderItem = {menuItemId: _id,name, image, price, email: user.email}
        fetch('http://localhost:5000/carts', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderItem)
        })
        .then(res=>res.json())
        .then(data=> {
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `added to your cart`,
                    showConfirmButton: false,
                    timer: 1500
                });

            }
        })
      }
      else {
        Swal.fire({
            title: "You are not Logged In",
            text: "Please login to add to the cart?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, login!"
        }).then((result) => {
            if (result.isConfirmed) {
                //   send the user to the login page
                navigate('/login', { state: { from: location } })
            }
        });
    }
    }

  
    return (
        <>  
      

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={()=>handleAddToCart(item)}
                        className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
                    >Add to Cart</button>
                </div>
            </div>
        </div>
        

        </>
    );
  }
export default FollowedCard;

...........................................................................................................accordion-accordion





import React, { useContext } from 'react';
import promoter from "../../assets/promotorImg/logo/promoter.png";

import "./FollowedProductsd.css"
import addCard from "../../assets/FollowedProducts/logo/cart white.png";

import ay from "../../assets/FollowedProducts/logo/ay.svg";
import coopy from "../../assets/FollowedProducts/logo/coopy.svg";
import love from "../../assets/FollowedProducts/logo/love.svg";
import star from "../../assets/FollowedProducts/logo/star.svg";
import grystart from "../../assets/FollowedProducts/logo/grystart.svg";
import verifide from "../../assets/FollowedProducts/logo/verifide.png";
import trend from "../../assets/FollowedProducts/logo/trend.svg";
import hot from "../../assets/FollowedProducts/logo/hot.svg";
import userVerifide from "../../assets/FollowedProducts/logo/userVerifide.svg";

import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function FollowedCard({item}) {
    const { name, image, price, recipe, _id } = item;
    const {user}= useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const handleAddToCart = item => {
        console.log(item)  
      if(user && user.email){
        const orderItem = {menuItemId: _id,name, image, price, email: user.email}
        fetch('http://localhost:5000/carts', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderItem)
        })
        .then(res=>res.json())
        .then(data=> {
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `added to your cart`,
                    showConfirmButton: false,
                    timer: 1500
                });

            }
        })
      }
      else {
        Swal.fire({
            title: "You are not Logged In",
            text: "Please login to add to the cart?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, login!"
        }).then((result) => {
            if (result.isConfirmed) {
                //   send the user to the login page
                navigate('/login', { state: { from: location } })
            }
        });
    }
    }

  
    return (
        <div className="">
        <div className="card w-[233px] h-[420px] -ms-1 rounded-md bg-white shadow-md p-7 overflow-hidden	">
          <div className="bg-white 	">
            <div className="bg-red m-3 -mt-8">
              <img style={{height:"150px"}}  src={image} alt="Shoes" className="  mt-2   p-4" />
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
              <p className="text-gray-800 font-inter text-md font-medium leading-normal ">good products--</p>
        
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
        {/* <button className='btn '   onClick={ ()=>handleAddToCart(item)}>Add Cart</button> */}


        <div className=' -ms-11 ' onClick={ ()=>handleAddToCart(item)}>
  <Link to="" className="add_card_button justify-center flex gap-2" >                
  <img className="h-4 w-4" src={addCard}  alt="" /> <span className="text-white font-inter text-base font-medium leading-normal"> Add to card</span>  
   </Link>
   </div>
        
          </div>
        </div>
        
        
        </div>
        
        
        

    );
  }
export default FollowedCard;
