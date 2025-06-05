import { createSlice } from "@reduxjs/toolkit";

export interface CountState {
    count: number;
}

const initialState: CountState = {
    count: 0,
};

export const countSlice = createSlice({
    name: "count",
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

const { increment, decrement, clear } = countSlice.actions;
export const countDispatch = {
    increment,
    decrement,
    clear,
};
export default countSlice.reducer;
