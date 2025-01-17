import DeliveryTable from "@/components/Admin/Dashboard/DeliveryTable";
import MonthlyReports from "@/components/Admin/Dashboard/MonthlyReports";
import PerformanceNotification from "@/components/Admin/Dashboard/PerformanceNotification";
import StatsCards from "@/components/Admin/Dashboard/StatsCards";

const Dashboard = () => {
  return (
    <div className=" space-y-6">
      <PerformanceNotification />
      <StatsCards />
      <MonthlyReports />
      <DeliveryTable />
    </div>
  );
};

export default Dashboard;
