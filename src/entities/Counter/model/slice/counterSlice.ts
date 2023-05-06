import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/counterSchema';

const initialState: CounterSchema = {
    count: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
    },
});

export const { actions: counterActions, reducer: counterReducer } = counterSlice;
