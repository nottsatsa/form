"use client";

import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { First } from "./components/steps/First";
import { Second } from "./components/steps/Second";
import { useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <div className="flex w-120 h-164 p-8 flex-col justify-between items-start rounded-[8px] bg-[#FFF]">
        <div className="flex flex-col gap-7">
          <Header></Header>
          {currentStep === 1 && <First></First>}
          {currentStep === 2 && <Second></Second>}
        </div>

        <Button nuur={"2/3"}></Button>
      </div>
    </div>
  );
}
