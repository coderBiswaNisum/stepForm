import { configureStore } from '@reduxjs/toolkit'
import formDataReducer from '../features/formData/formDataSlice'
import formValueReducer from '../features/formValues/formValueSlice'

export const store = configureStore({
  reducer: {
    formData:formDataReducer,
    formValue:formValueReducer,
  },
})