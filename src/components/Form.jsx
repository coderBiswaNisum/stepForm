import React from "react";
import StepForm from "./StepForm";
import DependentTabButton from "./DependentTabButton";
import { useSelector } from "react-redux";

function Form() {
  const selectedTab = useSelector((stateVal) => stateVal.formData.value);
  const missedTabColor = useSelector((s) => s.formData.color);
  
  const formHeaders = ["Profile", "Address", "Tech Stack"];
  // console.log(missedTabColor)
  
  return (
    <div className="flex items-center flex-col mt-5">
      <div className="grid grid-cols-3 text-center w-1/2">
        {formHeaders.map((val,i) => (
          <DependentTabButton value={val} key={val} bgColor={val==formHeaders[selectedTab]?'bg-green-800':'bg-green-600'} index={i} />
        ))}
      </div>

      <div className="w-1/2 border border-blue-800 rounded">
        <StepForm />
      </div>
    </div>
  );
}

export default Form;
