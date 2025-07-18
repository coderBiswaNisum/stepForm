import React from "react";
import { useDispatch } from "react-redux";
import { updateState } from "../features/formData/formDataSlice";

function DependentTabButton({value = "NA",bgColor='bg-green-600',index}) {

const dispatch = useDispatch();

  return (
    <button className={`${bgColor} text-white border border-blue-400 font-bold py-2`} onClick={() => dispatch(updateState(index))}>
      {value}
    </button>
  );
}

export default DependentTabButton;
