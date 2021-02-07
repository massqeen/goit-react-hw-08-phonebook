import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from 'redux/auth/authSlice';

import phonebookSlice from 'redux/phonebook/phonebookSlice';

const authPersistConfig = {
  key: 'authToken',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    phonebook: phonebookSlice,
  },
});

const persistor = persistStore(store);

export { store, persistor };
