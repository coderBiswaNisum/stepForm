import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateObject } from "../features/formValues/formValueSlice";

function RadioButton({ name }) {
  const genderItem = useSelector((c) => c.formValue.profile.gender);

  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-x-3">
           <label
        htmlFor={name}
        className="block text-sm/6 font-medium text-gray-900"
      >
      <input
        id={name}
        name="gender"
        type="radio"
        checked={genderItem === name}
        onChange={(e) => {
          dispatch(updateObject({ key: "gender", values: name }));
        }}
        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
      />
 
        {name}
      </label>
    </div>
  );
}

export default RadioButton;
