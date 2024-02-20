import React from 'react';

const  MaleWoman=() =>{

    const categories = ['salad', 'pizza', 'soup', 'dessert','shatpant'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const shatpant = menu.filter(item => item.category === 'shatpant');
    return (
        <div>
    
        </div>
    );
}

export default MaleWoman;