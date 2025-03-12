"use client";

import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { First } from "./components/steps/First";
import { Second } from "./components/steps/Second";
import { useState } from "react";
import { Third } from "./components/steps/Third";
import { initialFormValues } from "./constants/values";
import { Done } from "./components/Done";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const [formValues, setFormValues] = useState(initialFormValues);
  let check = false;

  function continueBtn() {
    setCurrentStep(currentStep + 1);
    {
      currentStep === 2 &&
        (check = formValues.email.includes("@")) === false &&
        console.log("aldaa");

      if (FormNo === 1) {
        if (formValues.email.includes("@") && formValues.email.includes(".")) {
          console.log("zuv");
        } else {
          console.log("buruu");
        }
      }
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

  console.log(formValues, "values");

  return (
    <div className="flex w-screen h-screen items-center justify-center">
      {currentStep < 3 && (
        <div className="flex w-120 h-164 p-8 flex-col justify-between items-start rounded-[8px] bg-[#FFF]">
          <div className="flex flex-col gap-7">
            <Header yetDone={true} />
            {/* {currentStep === 1 && <First />}
            {currentStep === 2 && <Second />}
            {currentStep === 3 && <Third />} */}
            <FormNo formValues={formValues} handleChange={handleChange} />
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
        </div>
      )}
    </div>
  );
}
