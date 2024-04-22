import { profitSalesCard } from "../common/Helper";

const SalesandProfitCards = () => {
  return (
    <div className="max-sm:w-full flex gap-3 sm:gap-6 justify-between">
      {profitSalesCard.map((card, index) => (
        <div
          key={index}
          className="p-3 xl:p-6 flex flex-col items-start gap-[14px] w-full sm:w-[166px] h-auto sm:h-[219px] bg-white rounded-xl shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10),0px_4px_6px_-1px_rgba(0,0,0,0.10)]"
        >
          <div
            className="p-2 rounded-lg flex items-start "
            style={{ backgroundColor: `${card.bgColor}` }}
          >
            {card.icon}
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#353E5C] font-DMSans text-xl font-normal leading-6">
              {card.title}
            </p>
            <p className="text-[#6D758F] font-Manrope text-sm font-normal leading-[17px]">
              {card.duration}
            </p>
            <p className="text-[#353E5C] font-Manrope text-[16px] font-normal leading-5">
              {card.amount}
            </p>
          </div>
          <div className="flex items-center gap-[10px] py-1 px-2 justify-center rounded-s bg-[rgba(168,170,174,0.16)]">
            <p className="text-[#A8AAAE] font-PublicSans text-[13px] font-medium leading-[14px]">
              {card.percentage}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SalesandProfitCards;
