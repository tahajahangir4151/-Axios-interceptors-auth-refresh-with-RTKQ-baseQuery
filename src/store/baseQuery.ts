import { getCookies } from "@/lib/cookies";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: "https://jsonplaceholder.typicode.com/",
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = getCookies("accessToken");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth = async (
  args: any,
  api: any,
  options: any
) => {
  let result = await rawBaseQuery(args, api, options);
  if (result.error?.status === 401) {
    const refreshResult = await rawBaseQuery(
      { url: "/auth/refresh", method: "POST" },
      api,
      options
    );

    if (refreshResult.data) {
      result = await rawBaseQuery(args, api, options);
    }
  }

  return result;
};
