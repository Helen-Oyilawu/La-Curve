import { configureStore } from '@reduxjs/toolkit'
// import features from './GLOBAL/features'
import features from "./GLOBAL/features"

export const store = configureStore({
  reducer: {
    Cart: features,
  },
})