import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";

export const Button = ({ nuur, one, onClick, backOnClick }) => {
  return (
    <div className="flex items-start gap-2 w-[100%]">
      {one > 1 && (
        <span className="flex items-start gap-2 w-[100%]">
          <button
            onClick={backOnClick}
            className="flex w-42 py-2.5 px-3 justify-center items-center gap-1 rounded-[6px] border-[1px] border-[#CBD5E1]">
            <RiArrowLeftSLine size={24} />
            <p className="text-[#202124] text-[16px] font-500">Back </p>
          </button>

          <button
            onClick={onClick}
            className="flex w-[100%] py-2.5 px-3 justify-center items-center gap-1 rounded-[6px] border-[1px] border-[#CBD5E1] bg-[#121316]">
            <p className="text-[#FFF] text-[16px] font-500">{`Continue ${nuur}/3`}</p>{" "}
            <RiArrowRightSLine size={24} color="#FFF" />
          </button>
        </span>
      )}
      {one === 1 && (
        <button
          onClick={onClick}
          className="flex w-[100%] py-2.5 px-3 justify-center items-center gap-1 rounded-[6px] border-[1px] border-[#CBD5E1] bg-[#121316]">
          <p className="text-[#FFF] text-[16px] font-500">{`Continue ${nuur}/3`}</p>{" "}
          <RiArrowRightSLine size={24} color="#FFF" />
        </button>
      )}
    </div>
  );
};
