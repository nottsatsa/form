"use client";

import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { First } from "./components/steps/First";
import { Second } from "./components/steps/Second";
import { useState } from "react";
import { Third } from "./components/steps/Third";
import { initialFormValues } from "./constants/values";
import { Done } from "./components/Done";
import { Aldaa } from "./components/Error";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const [formValues, setFormValues] = useState(initialFormValues);
  const [errorValues, setErrorValues] = useState(initialFormValues);

  function continueBtn() {
    console.log(formValues.firstName.length, "urt");

    {
      console.log("y");

      if (currentStep === 0) {
        console.log("e");

        if (formValues.firstName.length === 0) {
          console.log("s");

          setErrorValues((prev) => ({ ...prev, firstName: "aldaa" }));
        } else {
          setCurrentStep(currentStep + 1);
        }
      }
    }
    {
      if (FormNo === 1) {
        if (
          !(formValues.email.includes("@") && formValues.email.includes("."))
        ) {
          console.log("buruu");
          <Aldaa />;
        } else if (!(formValues.number.length === 8)) {
          <Aldaa />;
          <h1>aaa</h1>;
        } else {
          setCurrentStep(currentStep + 1);
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
