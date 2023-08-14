import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const editFilesDB = createApi({
  reducerPath: "editFilesDB",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev.api.app.huntek.com/api/v1/userfiles",
  }),
  endpoints: (builder) => ({
    editFiles: builder.mutation({
      query: (user_id) => `/${user_id}`,
      method: "PUT",
    }),
  }),
});

export const { useEditFilesMutation } = editFilesDB;