import cardImg1 from "../../assets/latest-img-1.png";
import cardImg2 from "../../assets/latest-img-2.png";
import cardImg3 from "../../assets/latest-img-3.png";
interface Latests {
  title: string;
  description: string;
  img: string;
}
const Latests = () => {
  const latests: Latests[] = [
    {
      title: "Tolu Ade For Sheda",
      description:
        "Explore new hair & skin care products with the founder as she tells us more about how she navigates her multi-faceted career with motherhood....",
      img: cardImg1,
    },
    {
      title: "Here Comes The Sun",
      description:
        "Each season corresponds to a special balance, and this year especially fall has us dreaming of cozy sweaters, comfy knits, warm spicesEach season comes with it’s ups and downs, and the rainy season isn’t left out. Sunscreen, good moisturizer, and a pair of sunglasses are a must-have to protect your skin from the harsh effects of the sun.  Kids also need to be protected as studies...",
      img: cardImg2,
    },
    {
      title: "Back To School",
      description:
        "Get ready with me by checking out lunchboxes from our curated list of school essentials. Even the most picky eaters get excited at the sight of a well plated meal.  Don’t forget to include seasonal fruits in your meal preps...",
      img: cardImg3,
    },
  ];
  return (
    <div className=" py md:px-20 mb-4">
      <div>
        <div className="latest-gradient rounded-[12px] text-white p-6 mb-6 flex items-center justify-around">
          <h2 className=" text-6xl font-bold">The Latest</h2>
          <p className=" text-2xl ">Discover what's new at Sheda Mart</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {latests.map((article, index) => (
            <div
              key={index}
              className="cursor-pointer border border-greyBorder rounded-[20px] shadow-lg shadow-[#00000040] flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="py-[10px] px-5">
                <h3 className="font-bold text-3xl mb-2">{article.title}</h3>
                <p className="text-sm text-black">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latests;
