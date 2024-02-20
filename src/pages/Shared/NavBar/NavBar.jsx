import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  //_________________ catagry section setup _____________________

  const [isOpen, setIsOpen] = useState(false);
  const naviget = useNavigate();

  const navigetCt = (link) => {
    naviget(`${link}`);
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  //_________________ catagry section setup _____________________
  const [cart] = useCart();
  // _______________ setup admin  home and suer home _______________
  const [isAdmin] = useAdmin();
  // _______________ setup admin  home and suer home _______________

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <div className="relative mt-7">
        <button
          onClick={toggleMenu}
          className="text-green-500a flex hover:text-gray-700 focus:outline-none focus:text-gray-700"
        >
          {" "}
          <span className="text-gray-900 font-inter text-2xl font-semibold">
            Catagory
          </span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute z-10 mt-2 w-48 bg-cyan-500  rounded-lg shadow-lg">
            <ul>
              <li className="py-2 px-4 hover:bg-green-900">
                <div onClick={() => navigetCt("/shirtpant")}>ShirtPant</div>
              </li>
              <li className="py-2 px-4 hover:bg-green-900">
                <div onClick={() => navigetCt("/tshirt")}>t-shir </div>
              </li>

              <li className="py-2 px-4 hover:bg-green-900">
                <div onClick={() => navigetCt("/shos")}> Shos </div>
              </li>
              <li className="py-2 px-4 hover:bg-green-900">
                <div onClick={() => navigetCt("/pant")}> Pant </div>
              </li>
              <li className="py-2 px-4 hover:bg-green-900">
                <div onClick={() => navigetCt("/boorka")}> BooRka </div>
              </li>
            </ul>
          </div>
        )}
      </div>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/phonehonder">PHoneHonder</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li>
        <Link to="/secret">Secret</Link>
      </li>

      {isAdmin ? (
        <li>
          <Link to="/dashboard/adminhome">Dashboard </Link>{" "}
        </li>
      ) : (
        <li>
          <Link to="/dashboard/userhome">Dashboard </Link>{" "}
        </li>
      )}
      <li>
        <Link to="/dashboard/cart">
          <button className="btn">
            <FaShoppingCart className="mr-2"></FaShoppingCart>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          {/* <span>{user?.displayName}</span> */}
          <button onClick={handleLogOut} className="btn btn-ghost">
            LogOut
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar z-10 bg-green-900 mx-auto bg-black text-white">
        <div className="flex justify-between mx-auto">
          <div className="navbar-start  ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navOptions}
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1  text-gray-900 font-semibold">
              {navOptions}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
