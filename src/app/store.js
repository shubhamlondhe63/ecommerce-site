import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/Product-Lists/ProductSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
