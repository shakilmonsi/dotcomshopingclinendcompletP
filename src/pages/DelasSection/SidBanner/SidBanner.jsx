import React from 'react';

function SidBanner(props) {
    const { title, description, image, alt,delPirce,price } = props;
    return (
 

   

        <div >
    
       <div className='my-4 '  >
       <img   style={{height:"235px",width:"375.747px"}} src={image} alt={alt}className="  " />
       </div>
    
      
      </div>
      
      
      
      
          );
       };
       

export default SidBanner;