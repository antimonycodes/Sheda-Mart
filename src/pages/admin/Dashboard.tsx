import PerformanceNotification from "@/components/Admin/Dashboard/PerformanceNotification";
import StatsCards from "@/components/Admin/Dashboard/StatsCards";

const Dashboard = () => {
  return (
    <div className=" space-y-6">
      <PerformanceNotification />
      <StatsCards />
    </div>
  );
};

export default Dashboard;
