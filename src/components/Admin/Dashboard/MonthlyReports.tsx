import MonthlyBarChart from "./MonthlyBarChart";
import ReportsPreview from "./ReportsPreview";

const MonthlyReports = () => {
  return (
    <div className=" flex flex-col md:flex-row gap-6 md:justify-between w-full custom-shadow p-4 md:p-6">
      <MonthlyBarChart />
      <ReportsPreview />
    </div>
  );
};

export default MonthlyReports;
