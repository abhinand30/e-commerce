import { configureStore } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import productsSlice from './slice/productSlice';
import authReducer from "./slice/authSlice";
import userSlice from './slice/userSlice';
import cartSlice from './slice/cartSlice';
import orderSlice from './slice/orderSlice'
import favoriteSlice from './slice/favoriteSlice'

const productPersistConfig = {
  key: 'products',
  storage,
};

const userPersistConfig = {
  key: 'users',
  storage,
};
const cartPersistConfig = {
  key: 'carts',
  storage,
};
const orderPersistConfig = {
  key: 'orders',
  storage,
};

const persistedProductReducer = persistReducer(productPersistConfig, productsSlice);
const persistedUserReducer = persistReducer(userPersistConfig, userSlice);
const persistedCartReducer = persistReducer(cartPersistConfig, cartSlice);
const persistedorderReducer = persistReducer(orderPersistConfig, orderSlice);

export const store = configureStore({
  reducer: {
    products: persistedProductReducer,
    users:persistedUserReducer,
    auth: authReducer,
    favorite:favoriteSlice,
    carts:persistedCartReducer,
    orders:persistedorderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store);