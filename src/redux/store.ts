import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slice/productSlice'
import userSlice from './slice/userSlice'
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

import storage from 'redux-persist/lib/storage'

const productPersistConfig = {
  key: 'products',
  storage,
};

const userPersistConfig = {
  key: 'users',
  storage,
};

const persistedProductReducer = persistReducer(productPersistConfig, productsSlice);
const persistedUserReducer = persistReducer(userPersistConfig, userSlice);


export const store = configureStore({
  reducer: {
    products: persistedProductReducer,
    users:persistedUserReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store);