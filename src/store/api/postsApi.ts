import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../baseQuery";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getPosts: builder.query<any[], void>({
      query: () => "/posts",
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
