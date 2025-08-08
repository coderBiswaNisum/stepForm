import { configureStore } from '@reduxjs/toolkit'
import formDataReducer from '../featuresRedux/formData/formDataSlice'
import formValueReducer from '../featuresRedux/formValues/formValueSlice'

export const store = configureStore({
  reducer: {
    formData:formDataReducer,
    formValue:formValueReducer,
  },
})