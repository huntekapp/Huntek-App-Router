import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const infoResumeDB = createApi({
  reducerPath: "infoResumeDB",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev.api.app.huntek.com/api/v1/profile/user-profiles/me",
    prepareHeaders: (headers) => {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("kTnKETkt="))
        .split("=")[1];
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getResume: builder.query({
      query: () => "",
      method: "GET",
    }),
  }),
});

export const { useGetResumeQuery } = infoResumeDB;
