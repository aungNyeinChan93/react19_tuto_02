import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    count: number
}

const initialState: InitialState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count = state.count + 1
        },
        decrement: (state) => {
            state.count--
        },
        reset(state) {
            state.count = 0
        }
    }
});

export default counterSlice;
export const { decrement, increment, reset } = counterSlice.actions

