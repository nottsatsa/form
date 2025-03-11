import { Tseg } from "./Tseg";

export const Third = ({}) => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <div className="flex gap-0">
          <p>Date of birth </p>
          <Tseg></Tseg>
        </div>
        <input
          type="date"
          className="border-[1px] border-[#CBD5E1] rounded-[8px] p-3 w-[100%]"
        />
      </div>

      <div>
        <div className="flex gap-0">
          <p>Profile image </p>
          <Tseg></Tseg>
        </div>
        <input
          type="file"
          className="border-[1px] border-[#CBD5E1] rounded-[8px] p-3 w-[100%]"
          draggable="true"
        />
      </div>
    </div>
  );
};
