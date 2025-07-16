import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const postApi = createApi({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => `posts`
        }),
        dropPost: builder.mutation({
            query: (id: number) => ({
                url: `posts/${id}`,
                method: 'DELETE',
            })
        }),
        getPost: builder.query({
            query: (id) => `posts/${id}`
        }),
        addPost: builder.mutation({
            query: (newPost) => ({
                url: `posts/add`,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newPost)
            })
        })
    })
});


export default postApi;
export const { useGetPostsQuery, useDropPostMutation, useGetPostQuery, useAddPostMutation } = postApi