import React from "react";
import InputField from "./InputField";
import InputRadio from "./InputRadio";

function ProfileForm() {
  return (
    <>
      <InputField type="text" name="First Name" objKey="firstName" />
      <InputField type="text" name="Last Name" objKey="lastName" />
      <InputRadio objKey="gender" />
    </>
  );
}

export default ProfileForm;
