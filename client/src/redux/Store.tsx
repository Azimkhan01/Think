import { configureStore } from "@reduxjs/toolkit";
import WorkReducer from './Slicer/Work'
export const Store  = configureStore({
    reducer:{
        work:WorkReducer
    }
});
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;