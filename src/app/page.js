// "use client";

// import { useState } from "react";
// import { initialFormValues } from "./constants/values";

// import {
//   Header,
//   Button,
//   First,
//   Second,
//   Third,
//   Done,
//   Aldaa,
// } from "@/app/components";

// export default function Home() {
//   const [currentStep, setCurrentStep] = useState(0);

//   const [formValues, setFormValues] = useState(initialFormValues);
//   const [errorValues, setErrorValues] = useState(initialFormValues);
//   let firstNameAldaa = 0;

//   function continueBtn() {
//     console.log(formValues.firstName.length, "urt");

//     {
//       console.log("y");

//       if (currentStep === 0) {
//         console.log("e");

//         if (formValues.firstName.length === 0) {
//           console.log("s");
//           firstNameAldaa = 1;
//           setErrorValues((prev) => ({ ...prev, firstName: "aldaa" }));
//         } else {
//           setCurrentStep(currentStep + 1);
//         }
//       }
//     }
//     {
//       if (currentStep === 1) {
//         if (
//           !(formValues.email.includes("@") && formValues.email.includes("."))
//         ) {
//           console.log("buruu");
//           <Aldaa />;
//         } else if (!(formValues.number.length === 8)) {
//           <Aldaa />;
//           <h1>aaa</h1>;
//         } else {
//           setCurrentStep(currentStep + 1);
//         }
//       }
//     }
//   }

//   function backBtn() {
//     setCurrentStep(currentStep - 1);
//   }

//   const FormNo = [First, Second, Third, Done][currentStep];

//   const handleChange = (event) => {
//     const { value, name } = event.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   console.log(formValues, "values");

//   return (
//     <div className="flex w-screen h-screen items-center justify-center">
//       {currentStep < 3 && (
//         <div className="flex w-120 h-164 p-8 flex-col justify-between items-start rounded-[8px] bg-[#FFF]">
//           <div className="flex flex-col gap-7">
//             <Header yetDone={true} />
//             {/* {currentStep === 1 && <First />}
//             {currentStep === 2 && <Second />}
//             {currentStep === 3 && <Third />} */}
//             <FormNo
//               formValues={formValues}
//               handleChange={handleChange}
//               firstNameAldaa={firstNameAldaa}
//             />
//           </div>

//           <Button
//             nuur={currentStep + 1}
//             one={currentStep + 1}
//             onClick={continueBtn}
//             backOnClick={backBtn}
//           />
//         </div>
//       )}
//       {currentStep === 3 && (
//         <div className="flex w-120 h-100% p-8 flex-col justify-between items-start rounded-[8px] bg-[#FFF]">
//           <Header yetDone={false} />
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { initialFormValues } from "./constants/values";

import {
  Header,
  Button,
  First,
  Second,
  Third,
  Done,
  Aldaa,
} from "@/app/components";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errorValues, setErrorValues] = useState({});

  const validateStep = () => {
    let errors = {};

    if (currentStep === 0) {
      if (!formValues.firstName.trim()) {
        errors.firstName = "First name is required";
      }
    }

    if (currentStep === 1) {
      if (!formValues.email.includes("@") || !formValues.email.includes(".")) {
        errors.email = "Invalid email format";
      }
      if (formValues.number.length !== 8) {
        errors.number = "Phone number must be 8 digits";
      }
    }

    setErrorValues(errors);
    return Object.keys(errors).length === 0;
  };

  function continueBtn() {
    if (validateStep()) {
      setCurrentStep(currentStep + 1);
    }
  }

  function backBtn() {
    setCurrentStep(currentStep - 1);
  }

  const FormNo = [First, Second, Third, Done][currentStep];

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="flex w-screen h-screen items-center justify-center">
      {currentStep < 3 && (
        <div className="flex w-120 h-164 p-8 flex-col justify-between items-start rounded-[8px] bg-[#FFF]">
          <div className="flex flex-col gap-7">
            <Header yetDone={true} />

            <FormNo
              formValues={formValues}
              handleChange={handleChange}
              errorValues={errorValues}
            />
          </div>

          <Button
            nuur={currentStep + 1}
            one={currentStep + 1}
            onClick={continueBtn}
            backOnClick={backBtn}
          />
        </div>
      )}

      {currentStep === 3 && (
        <div className="flex w-120 h-100% p-8 flex-col justify-between items-start rounded-[8px] bg-[#FFF]">
          <Header yetDone={false} />
          <Done />
        </div>
      )}
    </div>
  );
}
