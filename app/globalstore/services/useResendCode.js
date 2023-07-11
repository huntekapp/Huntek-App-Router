import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const resendCodeDB = createApi({
  reducerPath: "resendCodeDB", 
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/users/newcode",
  }),
  endpoints: (builder) => ({
    putResendCode: builder.mutation({
      query: (data) => ({
        method: 'PUT',
        body: data,
      })
    })
  })
})

export const { usePutResendCodeMutation } = resendCodeDB;
