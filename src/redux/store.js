import { combineReducers } from "redux";
import User from "./reducers/User";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const rootReducer = combineReducers({
    user:User,
})

const config = {
    key:'root',
    storage:AsyncStorage,
    version:1,
}

const persistedReducer = persistReducer(config,rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export default store;

export const persistor = persistStore(store)