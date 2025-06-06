import { createSlice } from "@reduxjs/toolkit";

export interface TrackerState {
    count: number;
}

const initialState: TrackerState = {
    count: 0,
};

export const trackerSlice = createSlice({
    name: "tracker",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        clear: (state) => {
            state.count = 0;
        },
    },
});

const { increment, decrement, clear } = trackerSlice.actions;
export const trackerDispatch = {
    increment,
    decrement,
    clear,
};
export default trackerSlice.reducer;
