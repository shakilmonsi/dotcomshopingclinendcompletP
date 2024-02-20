import { useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { useParams } from "react-router";
import { Helmet } from "react-helmet-async";
import OrderTab from "../Order/OrderTab/OrderTab";
import useMenu from "../../hooks/useMenu";

import shose from "../../assets/homeCategory/shose.png";
import pant from "../../assets/homeCategory/pant.jpg";
import shart from "../../assets/homeCategory/t-shart.png";
import borka from "../../assets/homeCategory/borka.png";
import pngwing from "../../assets/homeCategory/pngwing.png";
// import  image6  from "../../assets/catagoryproduct/image 6.png"

const HomeCategory = () => {
  const catagrytrowelproducts = [
    {
      id: 1,
      name: "SHOSE",
      catagryimg: shose,
    },
    {
      id: 2,
      name: "pant",
      catagryimg: pant,
    },

    {
      id: 3,
      name: "T-Shirt",
      catagryimg: shart,
    },
    {
      id: 4,
      name: "Borka",
      catagryimg: borka,
    },
    {
      id: 5,
      name: "pant-shart",
      catagryimg: pngwing,
    },
    // {
    //         id: 6,
    //         name: "Laptops & Tablets ",

    //         catagryimg: image6

    // },
    // {
    //         id: 7,
    //         name: "Fitness",
    //         catagryimg: img7

    // },
    // {
    //         id: 8,
    //         name: "Toys",
    //         catagryimg: img8

    // },
    // {
    //         id: 9,
    //         name: "Books",
    //         catagryimg: image9

    // },
    // {
    //         id: 10,
    //         name: "Gaming Accessories",

    //         catagryimg: image10

    // },
    // {
    //         id: 11,
    //         name: " Health & Personal Care",

    //         catagryimg: img11

    // },
    // {
    //         id: 12,
    //         name: "Home & Kitchen",

    //         catagryimg: img12

    // },
  ];
  const categories = ["salad", "pizza", "soup", "dessert", "shatpant"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");

  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  const shatpant = menu.filter((item) => item.category === "shatpant");

  return (
    <div className="py-6">
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>

      <h className="text-3xl text-primary   font-bold  text-center py-6">
        Category
      </h>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          {/* <div className='grid  md:grid-cols-6'>
                   <Tab><div className=''>
                        <img src={shose} alt='shoe'></img>
                    <h3>  shos</h3>
                        </div></Tab>
                    <Tab>pant</Tab>
                    <Tab>t-shirt </Tab>
                    <Tab>borka</Tab>
                    <Tab>shatpant</Tab>
                   </div> */}

          <section className="">
            <div className="grid grid-cols-1 md:grid-cols-4 items-center justify-center lg:grid-cols-5  gap-x- 2 gap-y-2">
              {catagrytrowelproducts?.map((catagrytrowelproduct) => (
                <Tab
                  className="flex p-2 text-center"
                  key={catagrytrowelproduct.id}
                >
                  <div className="">
                    <img
                      className="ms-4 p-2"
                      src={catagrytrowelproduct.catagryimg}
                    ></img>
                    <h6 className="">{catagrytrowelproduct.name}</h6>
                  </div>
                </Tab>
              ))}
            </div>
          </section>
        </TabList>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>

        <TabPanel>
          <OrderTab items={shatpant}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default HomeCategory;
