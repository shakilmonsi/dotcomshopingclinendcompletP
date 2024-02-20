import { useState } from 'react';
import orderCoverImg from '../../../assets/pantshart/panshart.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';
import SpeakersHeadsets from '../../AnimationParoducts/SpeakersHeadsets';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert','shatpant'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const salad = menu.filter(item => item.category === 'salad');
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
  
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    const shatpant = menu.filter(item => item.category === 'shatpant');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={orderCoverImg} title="Order Food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>shos</Tab>
                    <Tab>pant</Tab>
                    <Tab>t-shirt </Tab>
                    <Tab>borka</Tab>
                    <Tab>shatpant</Tab>
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


            <SpeakersHeadsets items={soup} 
            
            
            > </SpeakersHeadsets>
        </div>
    );
};

export default Order;