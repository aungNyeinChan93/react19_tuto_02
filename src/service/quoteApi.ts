import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const quoteApi = createApi({
    reducerPath: "quoteApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        getQuotes: builder.query({
            query: () => `quotes`
        })
    })
});

export default quoteApi;
export const { useGetQuotesQuery } = quoteApi;