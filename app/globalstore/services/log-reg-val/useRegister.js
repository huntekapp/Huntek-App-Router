import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const registerDB = createApi({
  reducerPath: "registerDB",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev.api.app.huntek.com/api/v1/users/create",
  }),
  endpoints: (builder) => ({
    postUsers: builder.mutation({
      query: (data) => ({
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {usePostUsersMutation} = registerDB;
