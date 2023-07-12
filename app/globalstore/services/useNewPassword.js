import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newPasswordDB = createApi({
  reducerPath: "newPasswordDB",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/auth/password/reset",
  }),
  endpoints: (builder) => ({
    postNewPassword: builder.mutation({
      query: (data) => ({
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { usePostNewPasswordMutation } = newPasswordDB;