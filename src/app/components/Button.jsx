import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";

export const Button = ({ nuur }) => {
  return (
    <div className="flex items-start gap-2 w-[100%]">
      <button className="flex w-42 py-2.5 px-3 justify-center items-center gap-1 rounded-[6px] border-[1px] border-[#CBD5E1]">
        <RiArrowLeftSLine size={24} />
        <p className="text-[#202124] text-[16px] font-500">Back </p>
      </button>

      <button className="flex w-[100%] py-2.5 px-3 justify-center items-center gap-1 rounded-[6px] border-[1px] border-[#CBD5E1] bg-[#121316]">
        <p className="text-[#FFF] text-[16px] font-500">{`Continue ${nuur}`}</p>{" "}
        <RiArrowRightSLine size={24} color="#FFF" />
      </button>
    </div>
  );
};
