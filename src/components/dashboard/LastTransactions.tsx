import { lastTrnasaction } from "../common/Helper";
import { ThreedotsIcon } from "../common/Icons";

const LastTransactions = () => {
  return (
    <div className="rounded-xl h-[423px] shadow-[0px_4px_18px_0px_rgba(75,70,92,0.10)] xl:max-w-[612px] w-full">
      <div className="flex justify-between p-6">
        <p className="text-[#353E5C] font-DMSans text-[20px] font-normal leading-6">
          Last Transactions
        </p>
        <button type="submit">
          <ThreedotsIcon />
        </button>
      </div>
      <div className="overflow-auto w-full">
        <table className="mt-4 w-[616px] sm:max-w-[1215px] sm:w-full flex flex-col gap-4 pb-6">
          <thead>
            <tr className="flex gap-[41px] max-xl:justify-between py-[14px] px-6 w-full border-y border-y-[#DBDADE]">
              <th className="text-[#6D758F] text-left font-Manrope text-[14px] leading-4 font-normal w-[152px]">
                Card
              </th>
              <th className="text-[#6D758F] text-left font-Manrope text-[14px] leading-4 font-normal w-[120px]">
                Date
              </th>
              <th className="text-[#6D758F] text-center font-Manrope text-[14px] leading-4 font-normal w-[69px]">
                Status
              </th>
              <th className="text-[#6D758F] text-right font-Manrope text-[14px] leading-4 font-normal w-[99px]">
                Trend
              </th>
            </tr>
          </thead>
          <tbody className="flex flex-col gap-4">
            {lastTrnasaction.map((item, index) => (
              <tr
                key={index}
                className="flex gap-[41px] px-6 w-full max-xl:justify-between"
              >
                <td className="flex gap-4 w-[152px]">
                  <img src={item.img} alt="img" width={50} height={30} />
                  <span className="text-[#6D758F] leading-5 flex flex-col font-Manrope text-[16px] font-normal">
                    {item.amount}
                    <span className="text-[14px] leading-4">
                      {item.account}
                    </span>
                  </span>
                </td>
                <td className="text-[#6D758F] w-[120px] leading-5 flex flex-col font-Manrope text-[16px] font-normal">
                  {item.sent}
                  <span className="text-[14px] leading-4">{item.date}</span>
                </td>
                <td className="w-[69px] flex justify-center">
                  <span
                    className="px-2 py-1 font-Manrope w-fit h-fit bg-[#EEF9F5] rounded text-[14px] font-bold leading-4"
                    style={{ background: `${item.bg}`, color: `${item.color}` }}
                  >
                    {item.statuss}
                  </span>
                </td>
                <td className="text-[#6D758F] text-right w-[99px] leading-5 font-Manrope text-[16px] font-normal">
                  {item.trend}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LastTransactions;
