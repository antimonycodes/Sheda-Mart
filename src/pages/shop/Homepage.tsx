import NewArrival from "@/components/Homepage/NewArrival";
import Hero from "../../components/Homepage/Hero";
import Selections from "../../components/Homepage/Selections";
import ShedaTribeDeals from "@/components/Homepage/ShedaTribeDeals";
import Latests from "@/components/Homepage/Latests";
import FeaturedProducts from "@/components/Homepage/FeaturedProducts";
import FeaturedUsers from "@/components/Homepage/FeaturedUsers";
import PromoBanner from "@/components/Homepage/PromoBanner";
// import Newsletter from "@/components/Homepage/Newsletter";

const Homepage = () => {
  return (
    <div className=" w-full">
      <Hero />
      <div className=" py-6 md:py-12 px-4 md:px-12 xl:px-24 space-y-20 ">
        <Selections />
        <NewArrival />
        <ShedaTribeDeals />
        <Latests />
        <FeaturedProducts />
        <FeaturedUsers />
        <PromoBanner />
      </div>
    </div>
  );
};

export default Homepage;
