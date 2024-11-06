import cardImg1 from "../assets/jewellery.png";
import cardImg2 from "../assets/scented-candle.png";
import cardImg3 from "../assets/storage.png";
import cardImg4 from "../assets/girl-with-bag.png";

const Selections = () => {
  const cards = [
    {
      img: cardImg1,
      description: "Elegant Jewellery",
    },
    {
      img: cardImg2,
      description: "Scented Candles",
    },
    {
      img: cardImg3,
      description: "Stylish Storage Solutions",
    },
    {
      img: cardImg4,
      description: "Trendy Bag",
    },
  ];

  return (
    <section className="py-8 md:px-12 bg-[#D2B28947] px-4">
      <h1 className="text-center text-gray-700 leading-[24px] font-medium mb-6">
        Top Selections for Today
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-auto">
        {cards.map(({ img, description }, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-[#D2B289] shadow-lg rounded-lg overflow-hidden"
          >
            <div className=" h-[200px]">
              <img
                src={img}
                alt={description}
                className="w-full h-full object-cover "
              />
            </div>
            <h2 className="bg-[#FFFFF0] py-3 text-center w-full font-semibold text-gray-800">
              {description}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Selections;
