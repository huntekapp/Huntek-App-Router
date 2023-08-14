import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const deleteCVDB = createApi({
  reducerPath: "deleteCVDB",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev.api.app.huntek.com/api/v1/userfiles/cv",
  }),
  endpoints: (builder) => ({
    deleteCV: builder.mutation({
      query: (user_id) => `/${user_id}`,
      method: "DELETE",
    }),
  }),
});

export const { useDeleteCVMutation } = deleteCVDB;
