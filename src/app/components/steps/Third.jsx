import MyDropzone from "../App";
import { Tseg } from "./Tseg";

export const Third = ({ handleChange, formValues }) => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <div className="flex gap-0">
          <p>Date of birth </p>
          <Tseg></Tseg>
        </div>
        <input
          value={formValues.date}
          onChange={handleChange}
          name="date"
          type="date"
          className="border-[1px] border-[#CBD5E1] rounded-[8px] p-3 w-[100%] drag-files"
        />
      </div>

      <div>
        <div className="flex gap-0">
          <p>Profile image </p>
          <Tseg></Tseg>
        </div>
        <input
          value={formValues.file}
          onChange={handleChange}
          name="file"
          type="file"
          className="border-[1px] border-[#CBD5E1] rounded-[8px] p-3 w-[100%]"
          draggable="true"
        />
      </div>
      <MyDropzone />
    </div>
  );
};
