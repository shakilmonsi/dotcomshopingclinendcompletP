// api, axios (axios secure), tan stack

// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
// import useAuth from "./useAuth";

// const useCart = () => {
//     const axiosSecure = useAxiosSecure();
//     const token = localStorage.getItem("access-token");
//     const { user} = useAuth();
//     const { refetch, data: cart = [] } = useQuery({
//         queryKey: ['cart', user?.email],
//         queryFn: async() => {
//             const res = await axiosSecure.get(`/carts?email=${user.email}`, {
//                 headers: {
//                     Authorization: `bearer ${token}`
//                 }
//             });
//             return res.data;
//         }
//     })

//     return [cart, refetch]
// };

// export default useCart;

//_____________________ class number part-10  axios___________________________________________________________________

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user ,loading} = useAuth();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    enabled: !loading,

    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });

  return [cart, refetch];
};

export default useCart;

//_____________________ class number part-10  axios___________________________________________________________________
