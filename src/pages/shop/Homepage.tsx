import NewArrival from "@/components/Homepage/NewArrival";
import Hero from "../../components/Homepage/Hero";
import Selections from "../../components/Homepage/Selections";
import ShedaTribeDeals from "@/components/Homepage/ShedaTribeDeals";
import Latests from "@/components/Homepage/Latests";
import FeaturedProducts from "@/components/Homepage/FeaturedProducts";
import FeaturedUsers from "@/components/Homepage/FeaturedUsers";
import PromoBanner from "@/components/Homepage/PromoBanner";
import Newsletter from "@/components/Homepage/Newsletter";

const Homepage = () => {
  return (
    <div className=" w-full">
      <Hero />
      <Selections />
      <NewArrival />
      <ShedaTribeDeals />
      <Latests />
      <FeaturedProducts />
      <FeaturedUsers />
      <PromoBanner />
      <Newsletter />
    </div>
  );
};

export default Homepage;
