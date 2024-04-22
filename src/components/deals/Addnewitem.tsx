import { Plusprogress } from "../common/Icons";

const Addnewitem = () => {
  return (
    <div className=" cursor-pointer flex items-center p-3 gap-x-2">
      <Plusprogress />
      <p className="  text-[#6D758F] font-Manrope text-[16px] font-bold leading-[125%]">
        Add new Item
      </p>
    </div>
  );
};

export default Addnewitem;
