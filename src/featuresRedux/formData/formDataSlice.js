import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  color: [],
};

export const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    updateState: (state, action) => {
      state.value = action.payload;
    },
    updateColor: (state, action) => {
      // if(state.color.includes(action.payload)){
      // state.color = state.color.filter(val=> val!=action.payload)
      // }else {
      // state.color=[...state.color,action.payload]
      // }
      // console.log(state.color);
    },
  },
});

export const { increment, decrement, updateState, updateColor } =
  formDataSlice.actions;

export default formDataSlice.reducer;
