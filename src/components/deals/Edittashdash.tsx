import {
  AssignedplusIcon,
  BIcons,
  BulletpointlistIcons,
  GallryIcons,
  IIcons,
  LinkIcons,
  OrderlistIcons,
  UIcons,
} from "../common/Icons";
import Assignedimg from "../../assets/img/Assignedimg.png";
import Input from "../common/Input";
import PurpleAddBtn from "../common/PurpleAddBtn";
import LightPurpleAddBtn from "../common/LightPurpleAddBtn";

interface Props {
  edeit: any;
}

const Edittashdash: React.FC<Props> = ({ edeit }) => {
  return (
    <>
      <div
        className={` mt-6 pb-6 px-4 lg:px-8  w-full flex flex-col gap-y-4 ${
          edeit === "penedeit" ? "" : ""
        }`}
      >
        <div className=" flex flex-col gap-y-1">
          <h2 className=" font-Manrope text-[14px] font-normal text-[#353E5C] leading-[120%]">
            Title
          </h2>
          <div className=" text-[#353E5C] font-normal text-[16px] font-Manrope leading-[125%] py-3 px-6 border border-[#B4B9C9] rounded-lg">
            <Input
              type="text"
              placeholder="Forms & Tables section"
              id=""
              name=""
            />
          </div>
        </div>
        <div className=" flex flex-col gap-y-1">
          <h2 className=" font-Manrope text-[14px] font-normal text-[#353E5C] leading-[120%]">
            Due Date
          </h2>
          <div className=" text-[#353E5C] font-normal text-[16px] font-Manrope leading-[125%] py-3 px-6 border border-[#B4B9C9] rounded-lg">
            <Input type="text" placeholder="7 April, 2022" id="" name="" />
          </div>
        </div>
        {/* edeit this ya sa */}
        <div className=" flex flex-col gap-y-1">
          <h2 className=" font-Manrope text-[14px] font-normal text-[#353E5C] leading-[120%]">
            Label
          </h2>
          <div className="  text-[#353E5C] font-normal text-[16px] font-Manrope leading-[125%] py-3 px-6 border border-[#B4B9C9] rounded-lg">
            <Input type="text" placeholder="Charts & Map" id="" name="" />
          </div>
        </div>
        {/* ya tak */}
        <div className=" flex flex-col gap-y-1">
          <h2 className=" font-Manrope text-[14px] font-normal text-[#353E5C] leading-[120%]">
            Assigned
          </h2>
          <div className=" flex items-center gap-x-1">
            <img
              className=" cursor-pointer w-[26px]"
              src={Assignedimg}
              alt="Imgage"
            />
            <img
              className=" cursor-pointer w-[26px]"
              src={Assignedimg}
              alt="Imgage"
            />
            <img
              className=" cursor-pointer w-[26px]"
              src={Assignedimg}
              alt="Imgage"
            />
            <div className=" cursor-pointer rounded-full bg-[#F6F7F9] p-1">
              <AssignedplusIcon />
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-y-1">
          <h2 className=" font-Manrope text-[14px] font-normal text-[#353E5C] leading-[120%]">
            Attachment
          </h2>
          <div className=" border border-[#B4B9C9] rounded-lg  text-[#353E5C] font-normal text-[16px] font-Manrope leading-[125%] py-3 px-6">
            <Input type="file" placeholder="" id="" name="" />
          </div>
        </div>
        <div className=" flex flex-col gap-y-1">
          <h2 className=" font-Manrope text-[14px] font-normal text-[#353E5C] leading-[120%]">
            Comment
          </h2>
          <div className=" py-4">
            <textarea
              className=" outline-none resize-none text-[#353E5C] font-normal text-[16px] font-Manrope leading-[125%] p-6 border border-[#B4B9C9] min-h-[125px] rounded-lg  w-full"
              placeholder="Write a comment..."
              name=""
              id=""
            ></textarea>
          </div>
          <div className=" mt-2 flex  items-center gap-x-2">
            <div className=" cursor-pointer hover:scale-110">
              <BIcons />
            </div>
            <div className=" cursor-pointer hover:scale-110">
              <IIcons />
            </div>
            <div className=" cursor-pointer hover:scale-110">
              <UIcons />
            </div>
            <div className=" cursor-pointer hover:scale-110">
              <OrderlistIcons />
            </div>
            <div className=" cursor-pointer hover:scale-110">
              {" "}
              <BulletpointlistIcons />
            </div>
            <div className=" cursor-pointer hover:scale-110">
              {" "}
              <LinkIcons />
            </div>
            <div className=" cursor-pointer hover:scale-110">
              <GallryIcons />
            </div>
          </div>
        </div>
        <div className=" flex items-center gap-x-6 justify-end">
          <PurpleAddBtn
            btnIcon=""
            btnText="Delete"
            btnClickFunction={() => console.log("clicked!")}
          />
          <LightPurpleAddBtn
            btnIcon=""
            btnText="Update"
            btnClickFunction={() => console.log("clicked!")}
          />
        </div>
      </div>
    </>
  );
};

export default Edittashdash;
