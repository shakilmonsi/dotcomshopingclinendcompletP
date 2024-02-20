import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../Menu/MenuCategory/MenuCategory";
import soupImg from "../../../assets/showAllProducts/tshirt.jpg";
import TopMenuCard from "../../AllMenuProducts/TopMenuCard";

const Pant = () => {
  const [menu] = useMenu();
  const desserts = menu.filter(item => item.category === 'dessert');

  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');


  const offered = menu.filter(item => item.category === 'offered');

  return (
    <div>
    
  

      <div className=" grid gap-y-5  gap-x-3  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 ">
        {" "}
        {pizza.map((item) => (
          <TopMenuCard item={item} key={item._id}></TopMenuCard>
        ))}{" "}
      </div>
    </div>
  );
};

export default Pant;