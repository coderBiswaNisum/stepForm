import React from "react";
import { useDispatch } from "react-redux";
import { updateObject } from "../features/formValues/formValueSlice";

function CheckBoxField({ name, objKey }) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row items-center">
      <input
        type="checkbox"
        name="sameAsResidence"
        className="ml-2"
        onClick={(e) =>
          dispatch(updateObject({ key: objKey, values: e.target.checked }))
        }
      />
      <h3 className="pl-3">{name}</h3>
    </div>
  );
}

export default CheckBoxField;
