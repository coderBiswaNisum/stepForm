import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/formData/formDataSlice";
import Button from "./Button";
import ProfileForm from "./ProfileForm";
import AddressForm from "./AddressForm";
import TechStackForm from "./TechStackForm";

function StepForm() {
  const formLabel = useSelector((c) => c.formData.value);
  const dispatch = useDispatch();
  return ( 
    <div className="pt-5 pb-5">
      {formLabel == 0 && <ProfileForm />}
      {formLabel == 1 && <AddressForm />}
      {formLabel == 2 && <TechStackForm />}

      <div className="flex flex-row justify-around mt-5">
        <div onClick={() => dispatch(decrement())}>
          {formLabel != 0 && <Button value="Back" bgColor="bg-gray-600" />}
        </div>
        <div
          onClick={() =>
            formLabel != 2 && dispatch(increment())
          }
        >
          {formLabel == 2 ? <Button value="Submit" bgColor="bg-blue-700" /> : <Button value="Next" bgColor="bg-green-700" />}
        </div>
      </div>
    </div>
  );
}

export default StepForm;
