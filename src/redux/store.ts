import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slice/productSlice'

import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

import storage from 'redux-persist/lib/storage'

const persistConfig={
  key:'root',
  storage
}
const persistedReducer=persistReducer(persistConfig,productsSlice)
export const store = configureStore({
  reducer: {
    products: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store);