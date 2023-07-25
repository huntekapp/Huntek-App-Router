import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const verifDB = createApi({
  reducerPath: "verifDB",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev.api.app.huntek.com/api/v1/users/account-activation",
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
