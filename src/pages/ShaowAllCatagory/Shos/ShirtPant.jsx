import MenuCategory from "../../Menu/MenuCategory/MenuCategory";
import soupImg from "../../../assets/showAllProducts/tshirt.jpg";
import TopMenuCard from "../../AllMenuProducts/TopMenuCard";
import useMenu from "../../../hooks/useMenu";

const ShirtPant = () => {
  const [menu] = useMenu();
  const shatpant = menu.filter((item) => item.category === "shatpant");

  return (
    <div>
      {/* {
            soup.map(ss=> )
           } */}

      <div className=" grid gap-y-5  gap-x-3  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 ">
        {" "}
        {shatpant.map((item) => (
          <TopMenuCard item={item} key={item._id}></TopMenuCard>
        ))}{" "}
      </div>
    </div>
  );
};

export default ShirtPant;
