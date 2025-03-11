import { Tseg } from "./Tseg";

export const Second = ({}) => {
  return (
    <form autoComplete="on" className="flex flex-col gap-3">
      <fieldset>
        <div className="flex gap-0">
          <p>Email </p>
          <Tseg></Tseg>
        </div>
        <input
          type="email"
          placeholder="Your email"
          className="border-[1px] border-[#CBD5E1] rounded-[8px] p-3 w-[100%]"
        />
      </fieldset>

      <div>
        <div className="flex gap-0">
          <p>Phone number</p>
          <Tseg></Tseg>
        </div>
        <input
          type="number"
          placeholder="Your phone number"
          className="border-[1px] border-[#CBD5E1] rounded-[8px] p-3 w-[100%]"
        />
      </div>

      <div>
        <div className="flex gap-0">
          <p>Password </p>
          <Tseg></Tseg>
        </div>
        <input
          type="password"
          placeholder="Your password"
          className="border-[1px] border-[#CBD5E1] rounded-[8px] p-3 w-[100%]"
        />
      </div>

      <div>
        <div className="flex gap-0">
          <p>Confirm password </p>
          <Tseg></Tseg>
        </div>
        <input
          type="password"
          placeholder="Confirm password"
          className="border-[1px] border-[#CBD5E1] rounded-[8px] p-3 w-[100%]"
        />
      </div>
    </form>
  );
};
