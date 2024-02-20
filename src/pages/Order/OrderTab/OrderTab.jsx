import FoodCard from '../../../components/FoodCard/FoodCard';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import CatagorDetils from '../../CatagorDetils/CatagorDetils';

const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <div >

            <Swiper
                pagination={pagination}
    
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-6 gap-x-12   gap-y-5 '>
                        {
                            items.map(item => <CatagorDetils
                                key={item._id}
                                item={item}
                            ></CatagorDetils>)
                        }
                    </div>

                    

                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default OrderTab;