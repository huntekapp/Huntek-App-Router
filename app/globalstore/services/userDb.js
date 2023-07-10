import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const userDb = createApi({
  reducerPath: "userDb",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users",
    }),
  }),
});

export const {useGetUsersQuery} = userDb;
