// import hamburger from "../assets/hamburger.svg";
import profile from "../assets/profile.svg";
import cart from "../assets/carticon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

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

  // Mobile Menu Slide Down Animation
  const menuVariants = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      y: "-100vh",
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  // Logo Slide Down Animation
  const logoVariants = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Menu Links Animation with Stagger Effect
  const linkVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3 + index * 0.2, // Stagger animation for each link
        duration: 0.5,
      },
    }),
  };

  return (
    <nav className="bg-white p-4 md:px-20  flex flex-col items-center">
      <div className=" mx-auto w-full flex flex-col  gap-4  ">
        <div className=" flex items-center justify-between">
          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            {/* <img src={hamburger} onClick={toggleMenu} alt="Menu" /> */}
            <Menu size={25} onClick={toggleMenu} />
          </div>
          {/* Logo */}
          <div>
            <Link to="/">
              <h1 className="text-burgundy text-base sm:text-xl xl:text-3xl font-semibold">
                SHEDA MART.
              </h1>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-4">
            {links.map((link, index) => (
              <Link key={index} to={link.path}>
                <h1 className="block text-greyTitle font-medium">
                  {link.name}
                </h1>
              </Link>
            ))}
            <input
              type="text"
              placeholder="Search"
              className="border-[0.5px] border-[#5B5853] px-5 py-1 placeholder:text-grey placeholder:text-xs rounded-sm outline-none"
            />
          </div>

          {/* Profile and Cart Icons */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-2">
              <img src={profile} alt="Profile" />
              <h1 className="hidden md:block font-semibold text-greyTitle">
                Account
              </h1>
            </div>
            <Link to="/cart">
              <div className="flex items-center gap-2">
                <img src={cart} alt="Cart" />
                <h1 className="hidden md:block font-semibold text-greyTitle">
                  Cart
                </h1>
              </div>
            </Link>
          </div>
        </div>
        {/* Search input- Mobile */}
        <div className=" w-full flex items-center justify-center bg-emerald-500  relative">
          {/* <h1 className=" md:hidden w-full text-greycaption text-sm">
            What can we help you find?
          </h1> */}
          <input
            type="text"
            placeholder="What can we help you with?"
            className=" w-full md:hidden placeholder:text-grey  placeholder: placeholder:left-0 placeholder:top-0 placeholder:-x-1/2 outline-none focus:outl  "
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="origin-top md:hidden fixed z-50 top-0 left-0 w-full h-screen bg-[#D2B289] flex flex-col items-center justify-center space-y-6"
          >
            {/* Logo and Close Button */}
            <motion.div
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              className="absolute top-4 px-4 flex items-center justify-between w-full"
            >
              <X onClick={toggleMenu} className="cursor-pointer text-" />
              {/* <img
                src={hamburger}
                onClick={toggleMenu}
                alt="Close Menu"
                className="cursor-pointer"
              /> */}
              <h1 className=" text-burgundy text-xl font-semibold">
                SHEDA MART
              </h1>
            </motion.div>

            {/* Animated Links */}
            {links.map((link, index) => (
              <Link key={index} to={link.path} onClick={toggleMenu}>
                <motion.div
                  custom={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="text-burgundy text-3xl font-medium cursor-pointer"
                >
                  {link.name}
                </motion.div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
