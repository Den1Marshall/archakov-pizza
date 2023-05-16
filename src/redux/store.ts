import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import cartSlice from './slices/cartSlice';
import thunk from 'redux-thunk';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const cartSlicePersistedReducer = persistReducer(persistConfig, cartSlice);
const filterSlicePersistedReducer = persistReducer(persistConfig, filterSlice);

const store = configureStore({
  reducer: {
    filterSlicePersistedReducer,
    cartSlicePersistedReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export default store;
