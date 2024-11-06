import Hero from "../../components/Hero";
import Nav from "../../components/Nav";
import Selections from "../../components/Selections";
import TopNav from "../../components/TopNav";

const Homepage = () => {
  return (
    <div className=" w-full">
      <TopNav />
      <Nav />
      <Hero />
      <Selections />
    </div>
  );
};

export default Homepage;
