import React, { useState } from "react";
import InputField from "./InputField";
import {
  addressFields,
  permanentAddressNames,
  residenceAddressNames,
} from "../assets/objectsList";
import { useSelector, useDispatch } from "react-redux";
import { updateSameAddress } from "../features/formValues/formValueSlice";

function AddressForm() {
  const formLabel = useSelector((c) => c.formData.value);
  console.log(formLabel);
  const dispatch = useDispatch();
  const [same, setSame] = useState(false);

  const sameAsAbove = () => {
    // const allFieldsFilled = formLabel.residenceAddress.every(
    //   (field) => fullObj.residenceAddress?.[field]
    // );
    dispatch(updateSameAddress(!same));
    setSame(!same);
  };

  return (
    <div className="container">
      <h2 className="text-2xl py-3 pt-5 pl-2 font-bold">Residence Address: </h2>
      {addressFields.map((val, i) => (
        <InputField name={val} objKey={residenceAddressNames[i]} key={val} />
      ))}
      <h2 className="text-2xl py-3 pl-2 font-bold mt-5">Permanent Address:</h2>
      <div className="flex flex-row items-center">
        <input
          type="checkbox"
          name="sameAsResidence"
          className="ml-2"
          onClick={sameAsAbove}
        />
        <h3 className="pl-3">Same as above</h3>
      </div>

      {!same &&
        addressFields.map((val, i) => (
          <InputField name={val} objKey={permanentAddressNames[i]} key={val} />
        ))}
    </div>
  );
}

export default AddressForm;
