import React from "react";
import { useSelector } from "react-redux";

function Button(props) {
  const fullObj = useSelector((e) => e.formValue);

  const submitForm = () => {
    // localStorage.setItem("totalFormValue", fullObj);
    if(fullObj.residenceAddress.address&&fullObj.residenceAddress.cityfullObj.residenceAddress.country
      &&fullObj.residenceAddress.pinCode&&fullObj.residenceAddress.state){}
    console.log(fullObj);
  };
  return (
    <div className="w-fit mx-auto">
      <button
        className={`${props.bgColor} text-white px-2 py-2 border-0 rounded`}
        onClick={() => {
          props.value == "Submit" && submitForm();
        }}
      >
        {props.value}
      </button>
    </div>
  );
}

export default Button;
