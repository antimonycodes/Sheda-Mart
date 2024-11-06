import hamburger from "../assets/hamburger.svg";
import logo from "../assets/logo.svg";
import profile from "../assets/profile.svg";
import cart from "../assets/carticon.svg";
import { useState } from "react";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    // <div className=" w-full py-3 px-6 md:px-12 flex items-center gap-12">
    //   <img src={hamburger} alt="" className=" md:hidden" />
    //   <img src={logo} alt="" />
    //   {/* List */}
    //   <div className=" flex">
    //     <ul className=" w-full flex items-center gap-4 justify-center">
    //       <li>Home</li>
    //       <li>Shop</li>
    //       <li>Consultation</li>
    //     </ul>
    //     {/*  */}
    //     <div className=" w-full">
    //       <input
    //         type="search"
    //         className=" border-[0.5px] border-lightGrey rounded-[4px] max-w-[306px]"
    //         placeholder="Search"
    //       />
    //     </div>
    //   </div>
    //   <div className=" flex items-center justify-between gap-2">
    //     <div className=" flex items-center gap-2">
    //       <img src={profile} alt="" />
    //       <h1>Account</h1>
    //     </div>
    //     <div className=" flex items-center gap-2">
    //       <img src={cart} alt="" className=" w-6 h-6" />
    //       <h1>Cart</h1>
    //     </div>
    //   </div>
    // </div>
    <nav className="bg-white  p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Hamburger Icon for Mobile -  */}
        <div className="md:hidden">
          <img src={hamburger} onClick={toggleMenu} alt="" />
        </div>

        {/* Logo - Centered with Hamburger on Mobile */}
        <img src={logo} className=" text-center md:text-left md:flex-grow-0" />

        {/* Links (Hidden on mobile by default) */}
        <div
          className={`md:flex items-center space-x-6 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Home
          </a>
          <div className="relative group">
            <button className="text-gray-700 hover:text-gray-900 flex items-center">
              Shop
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg hidden group-hover:block">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Category 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Category 2
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Category 3
              </a>
            </div>
          </div>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Consultation
          </a>
        </div>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-md px-3 py-1 text-sm focus:outline-none"
            />
            <button className="absolute right-2 top-1.5 text-gray-500">
              SS
            </button>
          </div>

          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 flex items-center"
          >
            <img src={profile} alt="" />
            <span className="ml-1">Account</span>
          </a>

          <a
            href="#"
            className="relative text-gray-700 hover:text-gray-900  flex items-center"
          >
            <img src={cart} alt="" className=" relative" />

            <span className="ml-1">Cart</span>
          </a>
          <span className="absolute top-2 right-[0%] bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            1
          </span>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isOpen && (
        <div className="mt-4 md:hidden">
          <input
            type="text"
            placeholder="Search"
            className="border w-full rounded-md px-3 py-1 text-sm focus:outline-none"
          />
        </div>
      )}
    </nav>
  );
};

export default Nav;
