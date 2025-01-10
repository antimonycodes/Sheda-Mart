import igIcon from "../assets/IG-Icon.svg";
import fbIcon from "../assets/FB-icon.svg";
import xIcon from "../assets/X-icon.svg";
import linkedIcon from "../assets/LinkedIn-icon.svg";

interface array {
  name?: string;
  path: string;
  img?: string;
}

const Footer: React.FC = () => {
  const aboutUs: array[] = [
    { name: "About Sheda Mart", path: "" },
    { name: "News & Blog", path: "" },
    { name: "Advertise with Us", path: "" },
    { name: "Affilates & Partners", path: "" },
    { name: "Sheda Community", path: "" },
    { name: "", path: "" },
  ];

  const help: array[] = [
    { name: "Sheda Help", path: "" },
    { name: "Track Orders", path: "" },
    { name: "Returns", path: "" },
    { name: "Contact Us", path: "" },
    { name: "Same Day Delivery", path: "" },
    { name: "Order Pick Up", path: "" },
    { name: "Registry", path: "" },
    { name: "", path: "" },
  ];

  const stores: array[] = [
    { name: "Sheda Studios", path: "" },
    { name: "Academy", path: "" },
    { name: "Rent Trust", path: "" },
    { name: "Reni Mail", path: "" },
    { name: "FireSwitch Technologies", path: "" },
  ];
  const icons: array[] = [
    { img: igIcon, path: "" },
    { img: fbIcon, path: "" },
    { img: xIcon, path: "" },
    { img: linkedIcon, path: "" },
  ];

  return (
    <footer className="bg-[#2D2821] text-white px-4 md:px-24 py-12 ">
      <div>
        <div className="grid grid-cols-2 lg:grid-cols-4 justify-between gap-y-4 text-sm">
          <div>
            <h4 className="font-bold text-cream50 mb-4">About Us</h4>
            <ul>
              {aboutUs.map((item, index) => (
                <li
                  key={index}
                  className=" mb-4 text-cream50 font-medium text-xs"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Help</h4>
            <ul>
              {help.map((item, index) => (
                <li
                  key={index}
                  className=" mb-4 text-cream50 font-medium text-xs"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Stores</h4>
            <ul>
              <li className=" mb-4 text-cream50 font-medium text-xs">
                In-store Services
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul>
              {stores.map((item, index) => (
                <li
                  key={index}
                  className=" mb-4 text-cream50 font-medium text-xs"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/*  */}

        <div className=" flex items-center flex-col gap-4 md:flex-row md:justify-between mt-4">
          {/* social links */}
          <div className=" flex gap-2">
            {icons.map((icon, index) => (
              <div
                key={index}
                className=" border bg-[#3F3D3E] p-1 rounded-full"
              >
                <img src={icon.img} alt="" />
              </div>
            ))}
          </div>
          {/* logo */}
          <div>
            <h1 className=" text-2xl md:text-3xl font-semibold text-cream50">
              SHEDA MART
            </h1>
          </div>
          {/* Year */}
          <div>
            <p className="text-center font-medium text-cream50 text-xs">
              &copy;2025 CompanyName Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
