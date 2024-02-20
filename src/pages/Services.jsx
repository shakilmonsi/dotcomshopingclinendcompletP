import React from 'react';
import car from "../assets/servicesimg/cash on delivery.png"
import image from "../assets/servicesimg/image 52.png"
import sec3 from "../assets/servicesimg/sec3.png"
import owem4 from "../assets/servicesimg/owem4.png"

const Services=()=>{
    return (
        <div className=' ms-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mt-5'>

      
            <div className='flex items-center gap-10  '>
               <div className='flex items-center gap-5'>
               <div>
                  <img className='w-12 h-8' src={car} alt='carServices'></img>   
                </div>
                <div>
                <h6 className='text-opacity-90 font-inter font-semibold text-gray-700 text-sm'>FAST & FREE </h6>
               <p className='text-opacity-90 font-inter text-base font-normal text-gray-700'>Fastest worldwide shipping</p>
                </div>
               </div>
                <div class="bg-gray-300 w-1 h-10 hidden md:block"></div>
            </div>

            <div className='flex items-center gap-10'>
               <div className='flex items-center gap-5'>
               <div>
                  <img className='w-8 h-8' src={image} alt='carServices'></img>   
                </div>
                <div>
                <h6 className='text-opacity-90 font-inter font-semibold text-gray-700 text-sm'>EASY RETURNS</h6>
               <p className='text-opacity-90 font-inter text-base font-normal text-gray-700'>100% money back guarantee</p>
                </div>
               </div>
                <div class="bg-gray-300 w-1 h-10 hidden md:block"></div>
            </div>

            <div className='flex items-center gap-10'>
               <div className='flex items-center gap-5'>
               <div>
                  <img className='w-8 h-8' src={sec3} alt='carServices'></img>   
                </div>
                <div>
                <h6 className='text-opacity-90 font-inter font-semibold text-gray-700 text-sm'>SECURE SHOPPING & PAYMENT</h6>
               <p className='text-opacity-90 font-inter text-base font-normal text-gray-700'>You’re in safe hands</p>
                </div>
               </div>
                <div class="bg-gray-300 w-1 h-10 hidden md:block"></div>
            </div>

       
               <div className='flex items-center gap-5 '>
               <div>
                  <img className='w-8 h-8' src={owem4} alt='carServices'></img>   
                </div>
                <div>
                <h6 className='text-opacity-90 font-inter font-semibold text-gray-700 text-sm'>OVER 10.7 M</h6>
               <p className='text-opacity-90 font-inter text-base font-normal text-gray-700'>Unique products</p>
                </div>
               </div>
         
       
      

         
            
        </div>
    );
}

export default Services;