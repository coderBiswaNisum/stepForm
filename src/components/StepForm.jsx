import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../featuresRedux/formData/formDataSlice";
import Button from "./Button";
import ProfileForm from "./ProfileForm";
import AddressForm from "./AddressForm";
import TechStackForm from "./TechStackForm";
import useErrorMsg from "../utils/useErrorMsg";

function StepForm() {
  const [errorMsg, setErrMsg] = useState("");
  const formLabel = useSelector((c) => c.formData.value);
  const formValue = useSelector((c) => c.formValue);
  // console.log('from step from',formValue);
  const dispatch = useDispatch();

  const increaseFormValue = () => {
    if (formLabel == 0) {
      const err = useErrorMsg(formValue.profile, "Profile Tab");
      if (err) {
        setErrMsg(err);
      } else {
        setErrMsg(err);
        dispatch(increment());
      }
    }
    if (formLabel == 1) {
      let err = useErrorMsg(
        formValue.residenceAddress,
        "Address Tab: Residence Address"
      )
    if(err==='') {
      err = useErrorMsg(
        formValue.permanentAddress,
        "Address Tab: Permanent Address"
      );
      }
      if (err) {
        setErrMsg(err);
      } else {
        setErrMsg(err);
        dispatch(increment());
      }
    }
  };

  return (
    <div className="pt-5 pb-5">
      {formLabel == 0 && <ProfileForm />}
      {formLabel == 1 && <AddressForm />}
      {formLabel == 2 && <TechStackForm />}
      <h3 className="text-red-500 pl-2" id="errMsg">{errorMsg}</h3>

      <div className="flex flex-row justify-around mt-5">
        <div onClick={() => dispatch(decrement())}>
          {formLabel != 0 && <Button value="Back" bgColor="bg-gray-600" />}
        </div>
        <div onClick={increaseFormValue}>
          {formLabel == 2 ? (
            <Button
              value="Submit"
              bgColor="bg-blue-700"
              setErrMsg={setErrMsg}
            />
          ) : (
            <Button value="Next" bgColor="bg-green-700" />
          )}
        </div>
      </div>
    </div>
  );
}

export default StepForm;
