import React from "react";
import RadioButton from "./RadioButton";

function InputRadio({objKey}) {
  return (
    <div className="flex items-center px-2 py-2 mb-4">
      <label htmlFor="FirstName" className="w-1/3 text-gray-700 font-medium">
        Gender :
      </label>
      <div className="w-4/5 flex flex-row gap-5 ml-5">
        <RadioButton name="Female" />
        <RadioButton name="Male" />
      </div>
    </div>
  );
}

export default InputRadio;
