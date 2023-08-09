import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newFilesDB = createApi({
  reducerPath: "newFilesDB",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev.api.app.huntek.com/api/v1/files",
  }),
  endpoints: (builder) => ({
    postNewFiles: builder.mutation({
      query: ({ user_id, data }) => ({
        url: `/${user_id}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { usePostNewFilesMutation } = newFilesDB;
