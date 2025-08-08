import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateObject } from "../featuresRedux/formValues/formValueSlice";

function InputField({ name = "Dummy", objKey }) {
  const dispatch = useDispatch();
  const fieldValues = useSelector((c) => c.formValue);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (fieldValues.profile.hasOwnProperty(objKey)) {
      setInputValue(fieldValues.profile[objKey]);
    } else if (fieldValues.residenceAddress.hasOwnProperty(objKey)) {
      setInputValue(fieldValues.residenceAddress[objKey]);
    } else if (fieldValues.permanentAddress.hasOwnProperty(objKey)) {
      setInputValue(fieldValues.permanentAddress[objKey]);
    } else {
      setInputValue(fieldValues.techStack[objKey]);
    }
  }, [fieldValues,objKey]);

  return (
    <div className="flex items-center mt-5 px-2">
      <label htmlFor="FirstName" className="w-1/3 text-gray-700 font-medium">
        {`${name} :`}
      </label>
      <div className="w-4/5">
        <input
          type="text"
          required
          className="bg-transparent border-1 rounded-sm text-gray-500 px-2 py-2 w-full"
          value={inputValue}
          placeholder={name}
          onChange={(e) => {
            setInputValue(e.target.value);
            dispatch(updateObject({ key: objKey, values: e.target.value }));
            // console.log(objKey,e.target.value);
            
          }}
        />
      </div>
    </div>
  );
}

export default InputField;
