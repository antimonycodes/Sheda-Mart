import revenueIcon from "../../../assets/revenueIcon.svg";
import transactionsIcon from "../../../assets/transactionsIcon.svg";
import totalsalesIcon from "../../../assets/totalSalesIcon.svg";
import reportsIcon from "../../../assets/reportsIcon.svg";
import logisticsIcon from "../../../assets/logisticsIcon.svg";
import { Info } from "lucide-react";

interface StatCards {
  icon: string;
  title: string;
  numbers: string;
  Percentage: string;
  subtext?: string;
}

const StatsCards = () => {
  const statCards: StatCards[] = [
    {
      icon: revenueIcon,
      title: "Revenue",
      numbers: "#400,000",
      Percentage: "+12",
      subtext: "Revenue Increase",
    },
    {
      icon: transactionsIcon,
      title: "Transactions",
      numbers: "10.1k",
      Percentage: "+32%",
      subtext: "Daily  Transactions",
    },
    {
      icon: totalsalesIcon,
      title: "Total Sales",
      numbers: "120k",
      Percentage: "65%",
      //   subtext: "",
    },
    {
      icon: reportsIcon,
      title: "Reports",
      numbers: "150",
      Percentage: "-28%",
      subtext: "System Bugs",
    },
    {
      icon: logisticsIcon,
      title: "Logistics",
      numbers: "#400,000",
      Percentage: "+32%",
      subtext: "Revenue Increase",
    },
  ];
  return (
    <div className=" w-full">
      <div className=" w-full grid gap-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {statCards.map(
          ({ icon, title, numbers, Percentage, subtext }, index) => (
            <div
              key={index}
              className=" w-full py-2.5 px-3 rounded-xl space-y-2"
              style={{
                boxShadow: " 0px 0px 12px 0px #8000201A",
              }}
            >
              <div className=" flex items-center justify-between">
                <img src={icon} alt="" className=" size-7" />
                <div>...</div>
              </div>
              {/*  */}
              <h2 className=" text-sm text-greySubtitle">{title}</h2>
              {/* numbers */}
              <div className=" flex justify-between ">
                <h1 className=" text-greyBody font-medium">{numbers}</h1>
                <h3
                  className={` text-[11px] font-semibold ${
                    Percentage.startsWith("+")
                      ? "text-[#005A00]"
                      : "text-[#FF0000]"
                  }`}
                >
                  {Percentage}
                </h3>
              </div>
              {/* sub */}
              <p className=" text-[10px] text-greySubtitle">{subtext}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default StatsCards;
