import NewArrival from "@/components/Homepage/NewArrival";
import Hero from "../../components/Homepage/Hero";
import Selections from "../../components/Homepage/Selections";
import ShedaTribeDeals from "@/components/Homepage/ShedaTribeDeals";
import Latests from "@/components/Homepage/Latests";
import FeaturedProducts from "@/components/Homepage/FeaturedProducts";
import FeaturedUsers from "@/components/Homepage/FeaturedUsers";
import PromoBanner from "@/components/Homepage/PromoBanner";

const Homepage = () => {
  return (
    <div>
      <div className=" w-full">
        <Hero />
        <div className="  lg:px-20 space-y-20 ">
          <Selections />
          <NewArrival />
          <ShedaTribeDeals />
          <Latests />
          <FeaturedProducts />
          <FeaturedUsers />
          <PromoBanner />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
