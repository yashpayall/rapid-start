import { recentdeals } from "../common/Helper";

const RecentDeals = () => {
  return (
    <div className="xl:w-[50%] w-full rounded-xl shadow-[0px_4px_18px_0px_rgba(75,70,92,0.10)] sm:p-5 p-3">
      <div className="flex items-center justify-between mb-[25px]">
        <p className="text-[#353E5C] font-DMSans text-[20px] font-normal leading-[120%]">
          Recent Deals
        </p>
        <button
          type="submit"
          className="text-[#8C39FF] font-Manrope font-bold text-[14px]"
        >
          View all
        </button>
      </div>
      {recentdeals.map((item, index) => (
        <div key={index} className="flex justify-between py-3">
          <div className="flex gap-3 items-start">
            <img src={item.img} alt="img" width={48} height={48} />
            <div>
              <p className="text-[#353E5C] font-Manrope text-[12px] sm:text-[16px] leading-4 sm:leading-[120%] font-bold line-clamp-1">
                {item.address}
              </p>
              <p className="text-[#6D758F] pt-1 font-Manrope text-[10px] sm:text-[16px] leading-4 sm:leading-[120%] font-normal">
                {item.name}
              </p>
            </div>
          </div>
          <div>
            <p className="text-[#353E5C] pl-1 text-right font-Manrope text-[10px] sm:text-[16px] leading-4 sm:leading-[120%] font-bold ">
              {item.amount}
            </p>
            <p className="max-sm:text-[12px] text-[#6D758F] font-Manrope font-normal text-[12px] line-clamp-1">
              {item.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentDeals;
