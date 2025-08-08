import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateObject } from "../featuresRedux/formValues/formValueSlice";

function CheckBoxField({ name, objKey }) {
  const checkbox = useSelector((c) => c.formValue.techStack);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row items-center">
      <input
        type="checkbox"
        name="sameAsResidence"
        id={name.replace(/[^\w]/g,'')}
        className="ml-2 cursor-pointer"
        checked = {checkbox.includes(name)}
        onChange={(e) =>
          dispatch(updateObject({ key: objKey, values: checkbox }))
        }
      />
      <h4 className="pl-3">{name}</h4>
    </div>
  );
}

export default CheckBoxField;
