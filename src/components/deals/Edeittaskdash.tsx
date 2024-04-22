import { CrossIcons } from "../common/Icons";

const Edeittaskdash = () => {
  return (
    <>
      <div className="flex w-full p-4 md:p-8 items-center justify-between border-b border-b-[#DBDADE]">
        <p className="text-[20px] font-normal leading-[120%] text-[#19213D] font-DMSans">
          Edit Task
        </p>
        <div className="hover:scale-110">
          <CrossIcons />
        </div>
      </div>
    </>
  );
};

export default Edeittaskdash;
