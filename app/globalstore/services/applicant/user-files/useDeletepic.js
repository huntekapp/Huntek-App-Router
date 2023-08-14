import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const deletePicDB = createApi({
  reducerPath: "deletePicDB",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev.api.app.huntek.com/api/v1/userfiles/profile-picture",
  }),
  endpoints: (builder) => ({
    deletePic: builder.mutation({
      query: (user_id) => `/${user_id}`,
      method: "DELETE",
    }),
  }),
});

export const { useDeletePicMutation } = deletePicDB;