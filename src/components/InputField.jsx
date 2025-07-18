import React from "react";
import { useDispatch } from "react-redux";
import { updateObject } from "../features/formValues/formValueSlice";

function InputField({ name = "Dummy", objKey }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center mt-5 px-2">
      <label htmlFor="FirstName" className="w-1/3 text-gray-700 font-medium">
        {`${name} :`}
      </label>
      <div className="w-4/5">
        <input
          type="text"
          className="bg-transparent border-1 rounded-sm text-gray-500 px-2 py-2 w-full"
          onChange={(e) => {
            dispatch(updateObject({key : objKey, values : e.target.value}));
            // console.log(objKey,e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default InputField;
