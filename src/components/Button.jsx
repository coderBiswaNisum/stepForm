import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useErrorMsg from "../utils/useErrorMsg";
import { updateColor } from "../featuresRedux/formData/formDataSlice";
// import useErrorMsg from "../utils/useErrorMsg";

function Button(props) {
  const fullObj = useSelector((e) => e.formValue);
  const dispatch = useDispatch();

  const submitForm = () => {
    const permAddressFormStatus = useErrorMsg(
      fullObj.permanentAddress,
      "Address Tab : Permanent Address"
    );
    permAddressFormStatus && props.setErrMsg(permAddressFormStatus);

    const resiAddressFormStatus = useErrorMsg(
      fullObj.residenceAddress,
      "Address Tab : Residence Address"
    );
    resiAddressFormStatus && props.setErrMsg(resiAddressFormStatus);
    (permAddressFormStatus || resiAddressFormStatus) &&
      dispatch(updateColor(1));

    const profileFormStatus = useErrorMsg(fullObj.profile, "Profile Tab");
    if (profileFormStatus) {
      props.setErrMsg(profileFormStatus);
      dispatch(updateColor(0));
    }

    if (
      !profileFormStatus &&
      !resiAddressFormStatus &&
      !permAddressFormStatus
    ) {
      if (fullObj.techStack.length === 0) {
        props.setErrMsg("Please enter atleast 1 Tech Stack");
      } else {
        props.setErrMsg("");
        console.log(fullObj);
         alert(
      "Form Submitted Successfully! Check your console for form data."
    );
      }
    }
   
  };
  return (
    <div className="w-fit mx-auto">
      <button
        className={`${props.bgColor} text-white px-2 py-2 border-0 rounded cursor-pointer`}
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
