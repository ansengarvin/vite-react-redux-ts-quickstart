import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        count: countReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); //ensures type safety during development
