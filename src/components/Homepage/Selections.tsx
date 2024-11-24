// import cardImg1 from "../assets/jewellery.png";
import cardImg2 from "../../assets/scented-candle.png";
import cardImg3 from "../../assets/storage.png";
// import cardImg4 from "../assets/girl-with-bag.png";
import { Card, CardContent } from "@/components/ui/card";
import HeaderText from "@/Shared/HeaderText";

const Selections = () => {
  const cards = [
    {
      img: cardImg3,
      description: "Jewellery",
    },
    {
      img: cardImg2,
      description: "Decor",
    },
    {
      img: cardImg3,
      description: "Storage",
    },
    {
      img: cardImg3,
      description: "School Essentials",
    },
  ];

  return (
    <section className="py-6 md:py-12 px-6 md:px-12 mx-0  lg:mx-20 xl:mx-24 bg-[#D2B28947]">
      <div className="max-w-7xl mx-auto">
        <HeaderText text="Top Selections for Today"></HeaderText>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={card.img}
                  alt={card.description}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                />
                {/* <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-gray-700">
                    {card.category}
                  </span>
                </div> */}
              </div>

              <CardContent
                className={`p-4 ${
                  index === 0 || index === cards.length - 1
                    ? "bg-[#D2B289]"
                    : "bg-cream500"
                }`}
              >
                <div className="flex justify-center items-center">
                  <h2 className="text-sm md:text-base xl:text-lg font-semibold text-greyTitle">
                    {card.description}
                  </h2>
                  <button
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label={`View ${card.description}`}
                  >
                    {/* <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg> */}
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Selections;
