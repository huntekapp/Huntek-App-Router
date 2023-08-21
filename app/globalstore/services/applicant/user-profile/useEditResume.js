import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const editResumeDB = createApi({
  reducerPath: "editResumeDB",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev.api.app.huntek.com/api/v1/profile/user-profiles",
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
    putResume: builder.mutation({
      query: ({ user_id, data }) => ({
        url: `/${user_id}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const { usePutResumeMutation } = editResumeDB;