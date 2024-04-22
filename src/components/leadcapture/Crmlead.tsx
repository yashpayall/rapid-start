import Embedcode from "./Embedcode";
import Recentdeal from "./Recentdeal";
import Preview from "./Preview";

const Crmlead = () => {
  return (
    <div className="max-w-[1244px] w-full mx-auto flex mt-8 md:flex-row flex-col gap-6">
      <div className="flex md:max-w-[293px] w-full flex-col gap-6">
        <Embedcode />
        <Recentdeal />
      </div>
      <div className="max-w-[927px] w-full">
        <Preview />
      </div>
    </div>
  );
};

export default Crmlead;
