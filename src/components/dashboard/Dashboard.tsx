import ActiveProjects from "./ActiveProjects";
import ActivityTimeline from "./ActivityTimeline";
import BrowserStates from "./BrowserStates";
import EarningReport from "./EarningReport";
import LastTransactions from "./LastTransactions";
import ProjectStatus from "./ProjectStatus";
import RevenueGroth from "./RevenueGroth";
import Sales from "./Sales";
import SalesandProfitCards from "./SalesandProfitCards";
import Salestwo from "./Salestwo";
import Sessions from "./Sessions";

const Dashboard = () => {
  return (
    <div className="w-full mx-auto">
      <div className="w-full flex flex-wrap xl:flex-nowrap gap-x-2 gap-y-4 sm:gap-4 xl:gap-6 justify-center">
        <Sales />
        <RevenueGroth />
        <Sessions />
        <SalesandProfitCards />
      </div>
      <div className="mt-6 flex gap-6 w-full flex-wrap lg:flex-nowrap mx-auto justify-center">
        <Salestwo />
        <EarningReport />
      </div>
      <div className="mt-6 flex gap-3 lg:gap-6 flex-wrap xl:flex-nowrap justify-between xl:justify-center">
        <BrowserStates />
        <ProjectStatus />
        <ActiveProjects />
      </div>
      <div className="mt-6 flex gap-3 lg:gap-6 flex-wrap xl:flex-nowrap justify-center">
        <LastTransactions />
        <ActivityTimeline />
      </div>
    </div>
  );
};

export default Dashboard;
