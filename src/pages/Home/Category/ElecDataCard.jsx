import Swal from "sweetalert2";

import { Link, useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";

import promoter from  "../../../assets/promotorImg/logo/promoter.png"


const ElecDataCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            //send cart item to the database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch cart to update the cart items count
                        refetch();
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

        <Link to={`/datils/${ _id}`}>     
     <div className=" card rounded-md bg-white shadow-md overflow-hidden	gap-row-20  " style={{width:"210px"}}>
      <div className="bg-white h-[160px]">
     <div className='' >
     <img style={{height:"150px" ,width:"138px"}}  src={image} alt="" className=" ms-10 mt-2 p-4" />
     </div>
    
          <div className='absolute -mt-[160px] ms-3 bg-green-50  rounded-full'>
            <img  style={{color:"green"}} className=' p-2  
     ' src={promoter} alt='promoterlogo'></img>
          </div>
          <div className='absolute -mt-[140px] ms-32 rounded-md bg-opacity-60 bg-pink-200 transform rotate-45 '>
     <p className='text-red-500	px-8 py-1 text-xs text-centerv '>Offer</p>
          </div>
    
      </div>
      <div className="card-body bg-blue-100 h-[76px]">
      <div className='text-center text-center -mt-7'>
         <span className='style__name'>{name.substring(0, 4)}
</span>
         <div className='flex items-center  -ms-5 gap-8 mt-2'>
          <p className=' price_style'>{price}</p> 
          <del className='text-orange-500  pe-6'>$4956.0 </del>
         </div>
      </div>
      
      </div>
    </div>

     </Link>
    );
};


export default ElecDataCard;