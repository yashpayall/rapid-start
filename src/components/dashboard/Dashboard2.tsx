import Appointment from "./Appointment";
import Customer from "./Customer";
import Doublebox from "./Doublebox";
import ProjectCards from "./ProjectCards";
import RecentDeals from "./RecentDeals";
import SalesOverview from "./SalesOverview";

const Dashboard2 = () => {
  return (
    <div className="w-full ">
      <div className="flex flex-col lg:flex-row gap-4 justify-center w-full">
        <div className="flex flex-col gap-10 w-full">
          <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-4 w-full">
            <Appointment />
            <RecentDeals />
          </div>
          <SalesOverview />
        </div>
        <Customer />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 mt-6 justify-center w-full">
        <Doublebox />
        <ProjectCards />
      </div>
    </div>
  );
};

export default Dashboard2;
