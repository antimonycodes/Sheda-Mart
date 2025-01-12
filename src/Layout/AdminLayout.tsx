import AdminTopNav from "@/components/Admin/AdminTopNav";
import SideNav from "@/components/Admin/SideNav";
import { Outlet } from "react-router-dom";
const AdminLayout = () => {
  return (
    <div className=" h-screen w-full">
      <div>
        <AdminTopNav />
      </div>
      <div className=" flex">
        <div className=" hidden md:block ">
          <SideNav />
        </div>
        <div className=" flex-1 px-4 w-full ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
