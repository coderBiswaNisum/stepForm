import React from "react";
import InputField from "./InputField";
import InputRadio from "./InputRadio";

function ProfileForm() {
  return (
    <>
      <InputField name="First Name" objKey='firstName' />
      <InputField name="Last Name" objKey='lastName' />
      <InputRadio objKey="gender"/>
    </>
  );
}

export default ProfileForm;
