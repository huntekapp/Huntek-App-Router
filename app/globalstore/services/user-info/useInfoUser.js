import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const infoUserDB = createApi({
  reducerPath: "infoUserDB",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev.api.app.huntek.com/api/v1/users/me",
    prepareHeaders: (headers) => {
      const token = document.cookie.split("; ").find((row) => row.startsWith("kTnKETkt=")).split("=")[1];
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }), 
  endpoints: (builder) => ({
    getInfoUser: builder.query({
      query: () => '',
    }),
  }),
});

export const {useGetInfoUserQuery} = infoUserDB;