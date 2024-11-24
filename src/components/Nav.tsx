import hamburger from "../assets/hamburger.svg";
import profile from "../assets/profile.svg";
import cart from "../assets/carticon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Links {
  name: string;
  path: string;
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links: Links[] = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/categories" },
    { name: "Consultant", path: "/" },
  ];

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <img src={hamburger} onClick={toggleMenu} alt="Menu" />
        </div>

        {/* Logo - Centered with Hamburger on Mobile */}
        <div>
          <h1 className=" text-burgundy text-base sm:text-xl  xl:text-3xl font-semibold">
            SHEDA MART
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4">
          {links.map((link, index) => (
            <Link to={link.path}>
              <h1 key={index} className="block text-greyTitle font-medium">
                {link.name}
              </h1>
            </Link>
          ))}
          <input
            type="text"
            placeholder="Search"
            className=" border-[0.5px] border-[#5B5853] px-5 py-1 placeholder:text-grey placeholder:text-xs rounded-sm outline-none"
          />
        </div>

        {/* Profile and Cart Icons */}
        <div className="flex items-center space-x-4">
          <div className=" flex items-center gap-2">
            <img src={profile} alt="Profile" />
            <h1 className=" hidden md:block font-semibold text-greyTitle">
              Account
            </h1>
          </div>
          <div className=" flex items-center gap-2">
            <img src={cart} alt="Cart" />
            <h1 className=" hidden md:block font-semibold text-greyTitle">
              Cart
            </h1>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          {links.map((link, index) => (
            <h1
              key={index}
              // href={link.path}
              className="block text-greyTitle"
            >
              {link.name}
            </h1>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
