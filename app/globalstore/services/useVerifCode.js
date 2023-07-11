import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const verifDB = createApi({
  reducerPath: "verifDB",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/users/account-activation",
  }),
  endpoints: (builder) => ({
    postVerif: builder.mutation({
      query: (data) => ({
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {usePostVerifMutation} = verifDB;
