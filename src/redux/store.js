import { configureStore } from '@reduxjs/toolkit'
import menuReducer from "../features/active/activeSlice"

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
})