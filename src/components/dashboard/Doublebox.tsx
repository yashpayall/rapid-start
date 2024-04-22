import { customerandprojects } from "../common/Helper";

const Doublebox = () => {
  return (
    <div className="w-full flex max-sm:flex-col gap-6 mx-auto">
      {customerandprojects.map((item, index) => (
        <div
          key={index}
          className="max-sm:w-full w-[50%] rounded-xl h-[100px] xl:h-[171px] bg-white px-4 xl:p-6 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.10),0px_2px_4px_-2px_rgba(0,0,0,0.10)] flex justify-between items-center"
        >
          <div>
            <p className="text-[#6D758F] font-DMSans text-sm xl:text-[20px] font-normal leading-4 xl:leading-7">
              {item.heading}
            </p>
            <p className="text-[#353E5C] leading-[54px] xl:leading-[80px] text-[50px] xl:text-[76px] font-DMSans font-normal mt-2">
              {item.amount}
            </p>
          </div>
          <div
            className="xl:max-w-[96px] w-[70px] xl:w-full h-[70px] xl:h-[96px]  rounded-full flex justify-center items-center"
            style={{ background: `${item.bg}` }}
          >
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Doublebox;
