import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const filesUserDB = createApi({
  reducerPath: "filesUserDB",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev.api.app.huntek.com/api/v1/userfiles",
  }),
  endpoints: (builder) => ({
    getFiles: builder.query({
      query: (user_id) => `/${user_id}`,
      method: "GET",
    }),
  }),
});

export const { useGetFilesQuery } = filesUserDB;
