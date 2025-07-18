import React from "react";
import CheckBoxField from "./CheckBoxField";
import { techStack } from "../assets/objectsList";

function TechStackForm() {
  return (
    <div className="w-full flex align-center">
      <div className="w-1/2 ml-5">
        <h2 className="text-2xl py-3 pl-2 font-bold mt-5">Frontend :</h2>
        {techStack.Frontend.map((val, i) => (
          <CheckBoxField
            name={val}
            objKey={techStack.FrontendNames[i]}
            key={val}
          />
        ))}
      </div>
      <div className="w-1/2">
        <h2 className="text-2xl py-3 pl-2 font-bold mt-5">Backend :</h2>
        {techStack.Backend.map((val, i) => (
          <CheckBoxField
            name={val}
            objKey={techStack.BackendNames[i]}
            key={val}
          />
        ))}
      </div>
    </div>
  );
}

export default TechStackForm;
