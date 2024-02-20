import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import ProductsDatils from "../pages/ProductsDatils/ProductsDatils";
import ProductsPasition from "../pages/pasitioin/ProductsPasition";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Shop from "../pages/Shop/Shop";
import cartProductsLoader from "../pages/Shop/cartProductsLoader/cartProductsLoader";
import ManageBookings from "../pages/Dashboard/ManageBookings/ManageBookings";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import MakAdminUSer from "../pages/SignUp/MakeAdmin/MakAdminUSer";
import PhoneHonder from "../pages/PhoneHonder/PhoneHonder";
import Shos from "../pages/ShaowAllCatagory/Shos/Shos";
import Tshirt from "../pages/ShaowAllCatagory/Shos/Tshirt";
import ShirtPant from "../pages/ShaowAllCatagory/Shos/ShirtPant";
import Pant from "../pages/ShaowAllCatagory/Shos/Pant";
import BooRka from "../pages/ShaowAllCatagory/Shos/BooRka";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
  
      // _____________________________Phone Honder ____________________

      {
        path: "/phonehonder",
        element: <PhoneHonder></PhoneHonder>,
      },
//_________________________________Show All CataGory ___________________________________


{
  path: "shos",
  element: <Shos></Shos>
},
{
path: "tshirt",
element: <Tshirt></Tshirt>
},
{
path: "shirtpant",
element: <ShirtPant></ShirtPant>
},
{
path: "pant",
element: <Pant></Pant>
},
{
path: "boorka",
element: <BooRka></BooRka>
},


//_________________________________Show All CataGory ___________________________________

      {
        path: "order/:category",
        element: <Order></Order>,
      },

      //_____________________________pagionnation_________________________________________
      {
        path: "/shoping",
        element: <Shop></Shop>,
        loader: cartProductsLoader,
        // loader: () => fetch('http://localhost:5000/productsCount')
      },
      //_____________________________pagionnation_________________________________________

      // pasition  class 72
      // {
      //   path: "/",
      //   element: <ProductsPasition></ProductsPasition>,
      //   loader: () => fetch("http://localhost:5000/totalProducts"),
      // },
      /// my code in qyery      date

      {
        path: "/datils/:id",
        element: <ProductsDatils></ProductsDatils>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },

      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "managebooking",
        element: (
          <AdminRoute>
            <ManageBookings></ManageBookings>
          </AdminRoute>
        ),
      },

      {
        path: "cart",
        element: <Cart></Cart>,
      },

      {
        path: "additems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
// __________admni and suer home   loader data show and dashboard ok _______________
      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "adminhome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "makeAdminUser",
        element: (
          <AdminRoute>
         <MakAdminUSer></MakAdminUSer>
          </AdminRoute>
        ),
      },
 // _____________admni and suer home   loader data show and dashboard ok ___________
      {
        path: "allusers",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);
