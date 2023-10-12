import { configureStore } from '@reduxjs/toolkit';
import deliveryReducer from './slices/deliveryFormSlice';
import paymentReducer from './slices/paymentFormSlice'
export const store = configureStore({
  reducer: {
    deliveryFormData: deliveryReducer,
    paymentFormData: paymentReducer
  },
});
