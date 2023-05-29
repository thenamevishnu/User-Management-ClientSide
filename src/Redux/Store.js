import { configureStore } from "@reduxjs/toolkit";
import userReducer from  './User/UserSlice'
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import adminReducer from "./Admin/AdminSlice";
import adminEditReducer from "./AdminEdit/AdminEditSlice"

const persistConfig={
    key:'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, userReducer)
const persistedAdminReducer = persistReducer(persistConfig, adminReducer)
const persistedAdminEditReducer = persistReducer(persistConfig, adminEditReducer)

export const Store = configureStore({
    reducer: {
        user: persistedReducer,
        admin:persistedAdminReducer,
        edit:persistedAdminEditReducer
    }
})

export const persistor = persistStore(Store)