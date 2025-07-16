import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface User {
    name: string,
    email: string,
    password: string | number
}

export interface InitialState {
    user: User
};

const initialState: InitialState = {
    user: {
        name: '',
        email: '',
        password: ''
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },
        changePassword: (state, action: PayloadAction<string | number>) => {
            state.user = { ...state.user, password: action.payload }
        }
    }
});


export default authSlice;
export const { setUser, changePassword } = authSlice.actions