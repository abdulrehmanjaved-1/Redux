import { configureStore } from '@reduxjs/toolkit'
import counterreducer from '../redux/slices/couter/counter'

export const store = configureStore({
  reducer: {
    counter:counterreducer,
  }, //pass a slice as a reducer
})