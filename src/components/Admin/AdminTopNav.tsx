import { Menu } from "lucide-react";
import notificationIcon from "../../assets/adminAssests/notification.svg";
import profle from "../../assets/adminAssests/AdminProfile.svg";
import settingsIcon from "../../assets/adminAssests/settingsIcon.svg";

const AdminTopNav = () => {
  return (
    <div className=" py-4 px-1 xs:px-4 flex items-center justify-between w-full">
      <div className=" md:hidden">
        <Menu />
      </div>
      <h1>SHEDA MART</h1>
      <div className=" hidden md:block">
        <input
          type="text"
          className="w-40 h-8 rounded-md p-2 border border-gray-400 text
        -gray-600 placeholder:text-gray-400"
          placeholder="Search..."
        />
      </div>
      <div className=" flex items-cente gap-1 mobile:gap-4 ">
        <img src={notificationIcon} alt="" className=" w-5 " />
        <img src={profle} alt="" className=" w-5 mobile:w-6 md:w-7 " />
        <img src={settingsIcon} alt="" className=" w-5 " />
      </div>
    </div>
  );
};

export default AdminTopNav;
