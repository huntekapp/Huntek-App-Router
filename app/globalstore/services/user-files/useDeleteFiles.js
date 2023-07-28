import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const deleteFilesDB = createApi({
  reducerPath: "deleteFilesDB",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev.api.app.huntek.com/api/v1/files",
  }),
  endpoints: (builder) => ({
    deleteFiles: builder.mutation({
      query: (user_id) => `/${user_id}`,
      method: "DELETE",
    }),
  }),
});

export const { useDeleteFilesMutation } = deleteFilesDB;
