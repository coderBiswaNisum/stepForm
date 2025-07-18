import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    increment: (state) => { 
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1 
    },
    updateState: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { increment, decrement, updateState } = formDataSlice.actions

export default formDataSlice.reducer