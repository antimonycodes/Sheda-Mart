import { useState, useRef, useEffect } from "react";
import dashboardIcon from "../../assets/adminAssests/dashboard.svg";
import productIcon from "../../assets/adminAssests/people.svg";
import orderIcon from "../../assets/carticon.svg";
import customerIcon from "../../assets/adminAssests/people.svg";
import manageReviewsIcon from "../../assets/adminAssests/edit.svg";
import settingsIcon from "../../assets/adminAssests/settingsIcon.svg";
import { Link } from "react-router-dom";

interface NavItem {
  name: string;
  icon: string;
  path?: string;
  subMenus?: SubItem[];
}

interface SubItem {
  title: string;
  path: string;
}

interface OpenMenus {
  [key: string]: boolean;
}

interface TooltipProps {
  content: string;
  isMobile: boolean;
}

const Tooltip = ({ content, isMobile }: TooltipProps) => (
  <div
    className={`
      absolute z-50 
      ${isMobile ? "left-14" : "left-full ml-2"}
      top-1/2 -translate-y-1/2
      px-3 py-2
      bg-gray-800 
      text-white 
      text-sm
      rounded-md
      whitespace-nowrap 
      opacity-0
      group-hover:opacity-100
      transition-opacity
      duration-200
      shadow-lg
      before:content-['']
      before:absolute
      ${
        isMobile
          ? "before:right-full before:border-r-gray-800"
          : "before:left-0 before:border-l-gray-800"
      }
      before:border-solid
      before:border-8
      before:border-transparent
      before:top-1/2
      before:-translate-y-1/2
    `}
  >
    {content}
  </div>
);

const SideNav = () => {
  const [openMenus, setOpenMenus] = useState<OpenMenus>({
    products: false,
    orders: false,
    customers: false,
  });
  const [activeMenu, setActiveMenu] = useState<string>("dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      // Auto-collapse on mobile
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const navMenus: NavItem[] = [
    { name: "Dashboard", path: "", icon: dashboardIcon },
    {
      name: "Products",
      path: "/Products",
      icon: productIcon,
      subMenus: [
        { title: "List of Products", path: "products/list" },
        { title: "Add Products", path: "products/add" },
        { title: "Category", path: "products/category" },
      ],
    },
    {
      name: "Orders",
      path: "",
      icon: orderIcon,
      subMenus: [
        { title: "List of Orders", path: "orders/list" },
        { title: "Details", path: "orders/details" },
      ],
    },
    {
      name: "Customers",
      path: "",
      icon: customerIcon,
      subMenus: [
        { title: "list", path: "customers/list" },
        { title: "Details", path: "customers/details" },
      ],
    },
    { name: "Manage reviews", path: "", icon: manageReviewsIcon },
    { name: "Settings", path: "", icon: settingsIcon },
  ];

  // const isMenuActive = (menu: NavItem): boolean => {
  //   if (isCollapsed) {
  //     // When collapsed, check if any submenu item is active
  //     return menu.subMenus
  //       ? menu.subMenus.some((subItem) => subItem.title === activeMenu)
  //       : menu.name === activeMenu;
  //   } else {
  //     // When expanded, check the direct active state
  //     return menu.name === activeMenu;
  //   }
  // };

  useEffect(() => {
    const currentPath = location.pathname;
    let matchedMenu = activeMenu; // Initialize with the current activeMenu

    navMenus.forEach((menu) => {
      if (menu.path === currentPath) {
        matchedMenu = menu.name;
      } else if (menu.subMenus) {
        const subMenuMatch = menu.subMenus.find(
          (sub) => sub.path === currentPath
        );
        if (subMenuMatch) {
          matchedMenu = subMenuMatch.title;
          // Update parent menu's open state if necessary
          // if (menu.name === "User Management") {
          //   setIsUserManagementOpen(true);
          // } else if (menu.name === "Phishing Simulation") {
          //   setIsPhishingOpen(true);
          // }
        }
      }
    });

    // Update the activeMenu state
    setActiveMenu(matchedMenu);
    localStorage.setItem("activeMenu", matchedMenu);
  }, [location.pathname]);

  return (
    <div
      className={`
        transition-all duration-300 ease-in-out 
        ${isCollapsed ? "w-16" : "w-[242px]"} 
        h-full px-2 relative
      `}
    >
      {/* Nav List */}
      <div className="mt-4">
        {/* Toggle button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className=" bg-white rounded-full p-1.5 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-50"
        >
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              isCollapsed ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        {navMenus.map((item, index) => (
          <div
            key={index}
            ref={(el) => (navRefs.current[index] = el)}
            className={`
              group relative flex flex-col cursor-pointer  `}
            style={
              {
                // background: isMenuActive(navMenus) ? "red" : "yellow",
              }
            }
          >
            <div
              className="flex items-center justify-between py-3 px-4 hover:bg-[#DBB8C1] transition duration-300 rounded-md"
              onClick={() =>
                item.subMenus && toggleMenu(item.name.toLowerCase())
              }
            >
              <Link to={item.subMenus ? "#" : item.path || "#"}>
                <div className="flex items-center min-w-0">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-5 h-5 mr-2 flex-shrink-0"
                  />
                  {!isCollapsed && (
                    <p className="text-greyBody font-medium text-sm truncate">
                      {item.name}
                    </p>
                  )}
                </div>
              </Link>

              {isCollapsed && (
                <Tooltip content={item.name} isMobile={isMobile} />
              )}

              {item.subMenus && !isCollapsed && (
                <svg
                  className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 ${
                    openMenus[item.name.toLowerCase()] ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </div>

            {/* Submenu with animation */}
            {item.subMenus && !isCollapsed && (
              <div
                className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${
                    openMenus[item.name.toLowerCase()]
                      ? "max-h-48 opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                {item.subMenus.map((subItem, subIndex) => (
                  <Link to={subItem.path}>
                    <div
                      key={subIndex}
                      className="pl-7 py-2 text-sm text-gray-600 hover:bg-gray-100 transition duration-300 rounded-md"
                    >
                      {subItem.title}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
