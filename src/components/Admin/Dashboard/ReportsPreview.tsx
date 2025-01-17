import profitIcon from "../../../assets/profitIcon.svg";
import nairaIcon from "../../../assets/nairaIncome.svg";
import totalExpenseIcon from "../../../assets/totalExpense.svg";

const ReportsPreview = () => {
  const data = [
    { icon: profitIcon, title: "Total Profit", amount: "350,000" },
    { icon: nairaIcon, title: "Total Income", amount: "1,000,000" },
    { icon: totalExpenseIcon, title: "Total Expense", amount: "550,000" },
  ];
  return (
    <div className=" space-y-4  pt-3 w-full md:w-56">
      {/* Balance */}
      <div className=" flex justify-between">
        <div className=" text-greySubtitle">
          <h3 className="  text-xs md:text-sm">This month balance</h3>
          <h2 className=" font-medium text-sm md:text-base">2,400,000</h2>
        </div>
        <div>...</div>
      </div>
      {/* Breakdown */}
      <div className=" space-y-4">
        {data.map(({ icon, title, amount }, index) => (
          <div key={index} className=" flex items-center gap-6">
            <div>
              <img src={icon} alt="" />
            </div>
            {/*  */}
            <div>
              <h2 className=" text-greyBody font-semibold text-xs md:text-sm">
                #{amount}
              </h2>
              <p className=" text-greySubtitle text-xs md:text-sm">{title}</p>
            </div>
          </div>
        ))}
      </div>
      <button className=" py-2 px-2.5 rounded-[8px] bg-surfaceLighter w-full text-[#F5F5F5] font-medium text-sm">
        View Report
      </button>
    </div>
  );
};

export default ReportsPreview;
