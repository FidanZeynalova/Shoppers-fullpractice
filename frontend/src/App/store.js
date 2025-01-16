import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { shopperApi } from './Slices/slice'

export const store = configureStore({
  reducer: {
    [shopperApi.reducerPath]: shopperApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopperApi.middleware),
})

setupListeners(store.dispatch)