import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetch('https://dummyjson.com/posts');
    const { posts } = await response.json();
    return posts
});

export interface Post {
    id: number,
    title: string,
    body: string,
    tags: string[],
    reactions: {
        likes: number,
        dislikes: number,
    },
    views: number,
    userId: number,
};

interface IntialState {
    posts: Post[],
    isLoading: boolean,
    error: string | undefined
};

const initialState: IntialState = {
    posts: [],
    isLoading: false,
    error: ''
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message
            })
    }
});

export default postSlice;