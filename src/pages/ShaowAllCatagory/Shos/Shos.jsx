import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../Menu/MenuCategory/MenuCategory";
import soupImg from "../../../assets/showAllProducts/tshirt.jpg";
import ShosCart from "./ShosCart";
import TopMenuCard from "../../AllMenuProducts/TopMenuCard";

const Shos = () => {
  const [menu] = useMenu();

  const salad = menu.filter((item) => item.category === "salad");

  return (
    <div>
      <div className=" grid gap-y-5  gap-x-3  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 ">
        {" "}
        {salad.map((item) => (
          <TopMenuCard item={item} key={item._id}></TopMenuCard>
        ))}{" "}
      </div>
    </div>
  );
};

export default Shos;
