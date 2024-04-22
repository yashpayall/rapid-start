import Progress from "./Progress";
import Review from "./Review";
import Done from "./Done";
import Live from "./Live";
import Failed from "./Failed";

const DealsAndRewarDasboard = () => {
  return (
    <div className="bg-[#F6F7F9]">
      <div className="max-w-[1599px] w-full mx-auto flex flex-wrap justify-center xl:justify-between gap-6">
        <Progress />
        <Review />
        <Done />
        <Live />
        <Failed />
      </div>
    </div>
  );
};

export default DealsAndRewarDasboard;
