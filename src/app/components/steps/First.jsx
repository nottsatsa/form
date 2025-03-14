// import { FormProvider, useForm, useFormContext } from "react-hook-form";
// import { Aldaa } from "../Error";
// import { Tseg } from "./Tseg";

// export const First = ({
//   handleChange,
//   formValues,
//   aldaa,
//   errorValues,
//   firstNameAldaa,
// }) => {
//   // const methods = useForm();
//   const methods = useForm();
//   const onSubmit = methods.handleSubmit((data) => {
//     console.log(data);
//   });

//   const { register } = useFormContext();

//   return (
//     <FormProvider {...methods}>
//       <form
//         onSubmit={(e) => e.preventDefault()}
//         className="flex flex-col gap-3">
//         <div>
//           <div className="flex gap-0">
//             <p>First name </p>
//             <Tseg></Tseg>
//           </div>
//           <input
//             value={formValues.firstName}
//             onChange={handleChange}
//             type="text"
//             name="firstName"
//             placeholder="Your first name"
//             className="border-[1px] border-[#CBD5E1] rounded-[8px] p-3 w-[100%]"
//           />
//           {firstNameAldaa > 0 && <Aldaa name={`${errorValues}`} />}
//         </div>

//         <div>
//           <div className="flex gap-0">
//             <p>Last name </p>
//             <Tseg></Tseg>
//           </div>
//           <input
//             onChange={handleChange}
//             value={formValues.lastName}
//             name="lastName"
//             type="text"
//             placeholder="Your last name"
//             className="border-[1px] border-[#CBD5E1] rounded-[8px] p-3 w-[100%]"
//             {...register(label, {
//               required: { value: true, message: "required" },
//             })}
//           />
//         </div>

//         <div>
//           <div className="flex gap-0">
//             <p>Username </p>
//             <Tseg></Tseg>
//           </div>
//           <input
//             onChange={handleChange}
//             value={formValues.userName}
//             name="userName"
//             type="text"
//             placeholder="Your username"
//             className="border-[1px] border-[#CBD5E1] rounded-[8px] p-3 w-[100%]"
//             {...register(label, {
//               required: { value: true, message: "required" },
//             })}
//           />
//         </div>

//         <button
//           onClick={onSubmit}
//           className="flex w-42 py-2.5 px-3 justify-center items-center gap-1 rounded-[6px] border-[1px] border-[#CBD5E1]">
//           submit
//         </button>
//       </form>
//     </FormProvider>
//   );
// };

// =================================================================================================

// const InputError = ({ message }) => {
//   return (
//     <motion.p
//       className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
//       {...framer_error}>
//       <MdError />
//       {message}
//     </motion.p>
//   );
// };

// const framer_error = {
//   initial: { opacity: 0, y: 10 },
//   animate: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: 10 },
//   transition: { duration: 0.2 },
// };

// =================================================================================================

import { Aldaa } from "../Error";
import { Tseg } from "./Tseg";

export const First = ({
  handleChange,
  formValues,
  aldaa,
  errorValues,
  firstNameAldaa,
}) => {
  // const methods =useFrom()

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
        {firstNameAldaa > 0 && <Aldaa name={`${errorValues}`} />}
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
