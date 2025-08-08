import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {
    firstName: "",
    lastName: "",
    gender: "",
  },
  residenceAddress: {
    address: "",
    city: "",
    state: "",
    pinCode: "",
    country: "",
  },
  permanentAddress: {
    address2: "",
    city2: "",
    state2: "",
    pinCode2: "",
    country2: "",
  },
  techStack: [],
};

export const formValueSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    updateSameAddress: (state, action) => {
      if (action.payload) {
        state.permanentAddress = {
          address2: state.residenceAddress.address,
          city2: state.residenceAddress.city,
          state2: state.residenceAddress.state,
          pinCode2: state.residenceAddress.pinCode,
          country2: state.residenceAddress.country,
        };
      } else {
        state.permanentAddress = {
          address2: "",
          city2: "",
          state2: "",
          pinCode2: "",
          country2: "",
        };
      }
    },
    updateObject: (state, action) => {
      let { key, values } = action.payload;
      if (state.profile.hasOwnProperty(key)) {
        state.profile[key] = values;
      } else if (state.residenceAddress.hasOwnProperty(key)) {
        state.residenceAddress[key] = values;
      } else if (state.permanentAddress.hasOwnProperty(key)) {
        state.permanentAddress[key] = values;
      } else {
        if (state.techStack.includes(key)) {
          const tempTechStack = [...state.techStack];
          state.techStack = tempTechStack.filter(val => val!=key);
        } else {
          state.techStack = [...state.techStack, key];
        }
        // console.log(state.techStack);
      }
    },
  },
});

export const { updateSameAddress, updateObject } = formValueSlice.actions;

export default formValueSlice.reducer;
