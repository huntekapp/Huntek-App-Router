import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const loginDB = createApi({
  reducerPath: "loginDB",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/auth/login",
  }),
  endpoints: (builder) => ({
    postLogin: builder.mutation({
      query: (data) => ({
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {usePostLoginMutation} = loginDB;
