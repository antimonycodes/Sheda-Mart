import HeaderText from "@/Shared/HeaderText";
import img1 from "../../assets/tribe-img1.png";
import img2 from "../../assets/tribe-img2.png";
import img3 from "../../assets/tribe-img3.png";
import img4 from "../../assets/tribe-img4.png";

interface Deal {
  discount: string;
  title?: string;
  description: string;
  img: string;
}

const ShedaTribeDeals = () => {
  const deals: Deal[] = [
    {
      discount: "15% off",
      // title: "First Discount",
      description:
        "tees, dresses, shoes for all ShedaTribe  + more  clothing deals",
      img: img1,
    },
    {
      discount: "20% off",
      // title: "NG2,000",
      description:
        "skin care consultation for all ShedaTribe  + more  beauty deals",
      img: img2,
    },
    {
      discount: "#10,000",
      title: "Gift Card",
      description:
        " when you spend 100,000 on household essentials with ReniTrust ",
      img: img3,
    },
    {
      discount: "10% off",
      // title: "Solar Deal",
      description: "solar essentials for all ShedaTribe + more deals",
      img: img4,
    },
  ];

  return (
    <div className="py md:px-20">
      {/* Tribe Banner */}
      <div className="bg-[#800020] text-white mx-auto py-12 w-full px-3 rounded-lg mb-8 flex items-center justify-center">
        <div className=" flex gap-4 items-center mx-auto px-32">
          <h2 className=" md:text-lg xl:text-xl font-semibold">
            Be a part of Sheda Tribe
          </h2>
          <p className="text-sm md:text-base opacity-90 max-w-[60%]  inline">
            Join today to get access to exclusive deals hand fed with stories
            spice & trending lifestyle, gifts and more
          </p>
        </div>
      </div>

      {/* Deals Section */}
      <div className="mb-12">
        <HeaderText text="Top Sheda Tribe Week Deals"></HeaderText>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="relative group bg-[#F5DDD147] p-4 mx-auto flex flex-col items-center"
            >
              <div>
                <h1 className=" md:text-[32px] font-bold text-[#CB3846]">
                  {deal.discount}
                </h1>
                <h3 className=" font-bold text-sm text-greyTitle">
                  {deal.title}
                </h3>
                <p className="text-greyTitle text-sm">{deal.description}</p>
              </div>
              <div className=" w-[241px] h-[241px] rounded-full bg-[#F28F77] mt-8"></div>
              <div className=" absolute bottom-0">
                <img
                  src={deal.img}
                  alt=""
                  className=" h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShedaTribeDeals;
