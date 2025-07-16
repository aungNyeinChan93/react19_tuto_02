import { createSlice } from "@reduxjs/toolkit";

export type Theme = 'light' | 'dark';

export interface InitialState {
    theme: Theme
};

const initialState: InitialState = {
    theme: 'light',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light'
        }
    }
});


export default themeSlice;
export const { changeTheme } = themeSlice.actions;