import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const recoverDB = createApi({
  reducerPath: "recoverDB",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/auth/password/recovery",
  }),
  endpoints: (builder) => ({
    getRecovery: builder.mutation({
      query: (email) => `/${email}`,
      method: "GET",
    }),
  }),
});

export const {useGetRecoveryMutation} = recoverDB;
