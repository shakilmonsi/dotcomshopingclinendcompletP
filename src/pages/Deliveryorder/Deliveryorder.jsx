import React from "react";
import "./deliveryorder.css";
import car from "../../assets/dekevaryDesign/car.png"
import Cartcuate   from "../../assets/dekevaryDesign/gal.png"
function Deliveryorder(props) {
  return (
  <div className="rounded-md   py-4   pe-20 ps-14" style={{backgroundColor:"#FFFEE4"}}>
      <div className="sm:flex justify-between	px-14">
      <div className="  sm:flex  items-center gap-20">
        <div>
          <img className="h-20  w-[106.988px]" src={car} alt="car"></img>
        </div>

        <div>
          <div className="flex  items-center gap-2">
            <div>
              <p className="text-gray-800 bg-opacity-85 text-base font-medium">
                Get<span className="text-gray-800 bg-opacity-85"> 40% </span>
                Cashback and
              </p>
            </div>
            <div className="flex p-1 justify-center items-center rounded-md bg_verified">
              <p className="text-white font-inter font-semibold text-18">
                Free Delivery
              </p>
            </div>
          </div>
          {/* // step 2  */}
          <div className="flex items-center gap-2">
            <p className="text-gray-700 font-inter text-base font-medium">
              with
            </p>
            <div className="express_style__set    h-6  w-20 text-center ">
              <p className="express_text_style ">Express</p>
            </div>
            <p>
              <p className="text-gray-700 font-inter text-base font-medium">
                delivery on your first order
              </p>
            </p>
          </div>
        </div>
      </div>
{/* //  step 2222222222222222222222222222222 */}
      <div className="sm:flex  items-center gap-20">
        <div>
          <img className="h-20    sm:w-[106.988px]" src={Cartcuate} alt="car"></img>
        </div>

        <div>
          <span className="text-gray-700 font-inter text-base font-medium">Use Code :</span>
          <div className="flex items-center gap-2">
            <div className="flex p-1 justify-center items-center rounded-md bg_verified">
              <p className="text-white font-inter font-semibold text-18">
                CART40{" "}
              </p>
            </div>
            <div>
              <p className="text-gray-800 bg-opacity-85 text-base font-medium">
                when you checkout{" "}
              </p>

              <p className="text-gray-800 bg-opacity-85 text-base font-medium">
                Get<span className="text-gray-800 bg-opacity-85"> 40% </span>
                Cashback and
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Deliveryorder;
