import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import authSlice from "./features/auth/authSlice";
import postSlice from "./features/post/postSlice";
import themeSlice from "./features/Theme/themeSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import postApi from "./service/postApi";
import quoteApi from "./service/quoteApi";


const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
        posts: postSlice.reducer,
        theme: themeSlice.reducer,
        [postApi.reducerPath]: postApi.reducer,
        [quoteApi.reducerPath]: quoteApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([postApi.middleware, quoteApi.middleware])
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
