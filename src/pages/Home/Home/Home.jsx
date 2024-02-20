import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";

import Order from "../../Order/Order/Order";
import HomeCategory from "../../HomeCatagory/HomeCategory";
import Animation from "../../Animation/Animation";
import SpeakersHeadsets from "../../AnimationParoducts/SpeakersHeadsets";
import FoodCard from "../../../components/FoodCard/FoodCard";
import Getthebestap from "../../Getthebestap/Getthebestap";
import DelasSection from "../../DelasSection/DelasSection";
import Services from "../../Services";
import AllProducts from "../../AllMenuProducts/AllProducts";
import ProductsPasition from "../../pasitioin/ProductsPasition";
import Shop from "../../Shop/Shop";
import Carousel from "../../Shared/Carosole/Carousel";
import Deliveryorder from "../../Deliveryorder/Deliveryorder";
import Black from "../../Black/Black";
// import DetilsDesign from "../../DetilsDesign";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <div>
        {/* <Banner></Banner> */}
      </div>
    <Carousel></Carousel>
  
    
      {/* 
      <DetilsDesign></DetilsDesign> */}
     
      <Category></Category>
      <div class="bg-orange-400 h-2 min-w-screen	  hidden md:block py-1"></div>

      <DelasSection></DelasSection>
      <div class="bg-orange-400 h-2 min-w-screen	  hidden md:block py-1 "></div>

      <SpeakersHeadsets></SpeakersHeadsets>
      <Animation></Animation>
      <Deliveryorder></Deliveryorder>
      <HomeCategory></HomeCategory>
      <Getthebestap></Getthebestap>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      
      <Black></Black>
            <AllProducts></AllProducts>

   
      <Services></Services>
    </div>
  );
};

export default Home;
