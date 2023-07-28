import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const resumeDB = createApi({
  reducerPath: "resumeDB",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev.api.app.huntek.com/api/v1/profile/me/add-resume",
    prepareHeaders: (headers) => {
      const token = document.cookie.split("; ").find((row) => row.startsWith("kTnKETkt=")).split("=")[1];
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    postResume: builder.mutation({
      query: (data) => ({
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { usePostResumeMutation } = resumeDB;