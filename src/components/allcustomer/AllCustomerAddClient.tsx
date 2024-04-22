import AllCustomerModal from "../common/AddNewClientHeaderBtn";

const Allcustomeraddclient = () => {
  return (
    <>
      <div className="max-w-[1244px] w-full mx-auto flex px-3 max-sm:flex-col gap-4 justify-between items-center">
        <p className="text-[#19213D] max-md:text-[36px] max-sm:text-[26px] font-DMSans text-[40px] font-bold leading-[120%]">
          Welcome back, Andrew
        </p>
        <div className="max-w-[194px] w-full">
          <AllCustomerModal />
        </div>
      </div>
    </>
  );
};

export default Allcustomeraddclient;
