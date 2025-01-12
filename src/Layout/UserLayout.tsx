import Footer from "@/components/Footer";
import Newsletter from "@/components/Homepage/Newsletter";
import Nav from "@/components/Nav";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      {/* <div>Side NAv</div> */}
      <Nav />
      <div className="">
        <Outlet />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default UserLayout;
