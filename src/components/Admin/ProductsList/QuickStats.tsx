import storeIcon from "../../../assets/store.svg";
import websiteIcon from "../../../assets/websiteSales.svg";
import discountIcon from "../../../assets/discount.svg";
const QuickStats = () => {
  const metrics = [
    {
      title: "In store sales",
      icon: storeIcon,
      amount: "600,000",
      orders: "5k",
      percentage: "8%",
    },
    {
      title: "Website sales",
      icon: websiteIcon,
      amount: "360,000",
      orders: "25k",
      percentage: "68%",
    },
    {
      title: "Discounts",
      icon: discountIcon,
      amount: "60,000",
      orders: "5k",
      percentage: "24%",
    },
  ];
  return (
    <div className=" grid grid-cols-1 mobile:grid-cols-2 sm:grid-cols-3 gap-4 w-full">
      {metrics.map(({ title, icon, amount, orders, percentage }, index) => (
        <div key={index} className=" custom-shadow py-4 px-2.5">
          <div className=" flex justify-between">
            <h2 className=" text-greySubtitle text-sm">{title}</h2>
            <img src={icon} alt="" />
          </div>
          {/*  */}
          <h2 className=" text-greyBody font-medium text-sm">{amount}</h2>
          <div className=" flex gap-6 mt-2">
            <h3 className=" text-greySubtitle text-xs">{orders} Orders</h3>
            <p className=" bg-[#E7F6EC] px-2.5 rounded-xl text-xs text-[#036B26] ">
              {percentage}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickStats;
