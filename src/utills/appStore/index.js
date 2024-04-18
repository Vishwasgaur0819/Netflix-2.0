import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { persistReducer, persistStore } from "redux-persist";
import { setupListeners } from '@reduxjs/toolkit/query/react';
import storage from 'redux-persist/lib/storage'

const config = {
    key: 'root',
    storage,
    whitelist: []
}

const persistedReducer = persistReducer(config, rootReducer)

const store = configureStore({
    reducer: persistedReducer, middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat()
})

const persister = persistStore(store);

export { store, persister }

setupListeners(store.dispatch)