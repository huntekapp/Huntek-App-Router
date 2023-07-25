import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const resendCodeDB = createApi({
  reducerPath: "resendCodeDB", 
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev.api.app.huntek.com/api/v1/tokens/newcode",
  }),
  endpoints: (builder) => ({
    putResendCode: builder.mutation({
      query: (data) => ({
        method: 'POST',
        body: data,
      })
    })
  })
})

export const { usePutResendCodeMutation } = resendCodeDB;
