import { configureStore } from "@reduxjs/toolkit";
import trackerReducer from "./trackerSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        tracker: trackerReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); //ensures type safety during development
