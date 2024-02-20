import { useEffect, useState } from "react";
import TopMenuCard from "./TopMenuCard";
import { Link, useLoaderData } from "react-router-dom";

const AllProducts=()=>{
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);

    
    useEffect(() => {
      fetch("http://localhost:5000/menu")
        .then((res) => res.json())
        .then((data) => {
          setReviews(data);
          setLoading(false); // Move setLoading inside the promise chain
        })
        .catch((error) => {
          console.error("Error fetching reviews:", error);
          setLoading(false); // Make sure to set loading to false in case of an error
        });
    }, []); // Remove the dependency array if you want it to run only once
    
    if (loading) {
      return <p className="text-center text-5xl text-green-7000 ">loading...</p>;
    }
    
    // Render your component with the fetched data
    
    return (
         <div className=' ps-24 sm:ps-8 sm:pe-24'>
         <div  className="flex justify-between ps-8	 py-4 "> 
        <div><h4 className="text-gray-700 font-inter text-md font-medium">Top Electronic Deals</h4></div>
        <div><Link className="text-gray-800 font-inter text-xs font-semibold" to="/Viewall">View all</Link></div> </div>
        <div className=' grid gap-y-5  gap-x-3  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 '> {reviews.map(item=> <TopMenuCard item={item} key={item._id} >
         
            </TopMenuCard>) } </div>  </div>  
    );
}
export default AllProducts;