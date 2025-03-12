import { Tseg } from "./Tseg";

export const First = ({ handleChange, formValues }) => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <div className="flex gap-0">
          <p>First name </p>
          <Tseg></Tseg>
        </div>
        <input
          value={formValues.firstName}
          onChange={handleChange}
          type="text"
          name="firstName"
          placeholder="Your first name"
          className="border-[1px] border-[#CBD5E1] rounded-[8px] p-3 w-[100%]"
        />
      </div>

      <div>
        <div className="flex gap-0">
          <p>Last name </p>
          <Tseg></Tseg>
        </div>
        <input
          onChange={handleChange}
          value={formValues.lastName}
          name="lastName"
          type="text"
          placeholder="Your last name"
          className="border-[1px] border-[#CBD5E1] rounded-[8px] p-3 w-[100%]"
        />
      </div>

      <div>
        <div className="flex gap-0">
          <p>Username </p>
          <Tseg></Tseg>
        </div>
        <input
          onChange={handleChange}
          value={formValues.userName}
          name="userName"
          type="text"
          placeholder="Your username"
          className="border-[1px] border-[#CBD5E1] rounded-[8px] p-3 w-[100%]"
        />
      </div>
    </div>
  );
};
