import { Helmet } from 'react-helmet-async';

import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/bannerthre/banner1.png'
import pantshart from '../../../assets/pantshart/panshart.jpg'

import soupImg from '../../../assets/myhero/shose.jpg'



import saladImg from '../../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');


    const offered = menu.filter(item => item.category === 'offered');


    const shatpant = menu.filter(item => item.category === 'shatpant');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
           <div className=''> <Cover img={menuImg} title="our menu"></Cover></div>
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items  */}
            <MenuCategory items={desserts} title="dessert" img={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>

            <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>

            <MenuCategory items={shatpant} title={"shatpant"} img={pantshart}></MenuCategory>
        </div>
    );
};

export default Menu;