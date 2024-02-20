import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../Menu/MenuCategory/MenuCategory";
import soupImg from "../../../assets/showAllProducts/tshirt.jpg";
import TopMenuCard from "../../AllMenuProducts/TopMenuCard";

const Tshirt = () => {
  const [menu] = useMenu();
  const soup = menu.filter((item) => item.category === "soup");
  console.log("shop ", soup);

  return (
    <div>
      <h3 className="text-4xl text-center font-bold">
        {" "}
        this is shos{soup.length}{" "}
      </h3>
      {/* {
            soup.map(ss=> )
           } */}

      <div className=" grid gap-y-5  gap-x-3  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 ">
        {" "}
        {soup.map((item) => (
          <TopMenuCard item={item} key={item._id}></TopMenuCard>
        ))}{" "}
      </div>
    </div>
  );
};

export default Tshirt;
