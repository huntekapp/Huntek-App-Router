import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const companyInfoDB = createApi({
  reducerPath: "companyInfoDB",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev.api.app.huntek.com/api/v1/companyprofile/company-profiles",
    prepareHeaders: (headers) => {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("kTnKETkt="))
        .split("=")[1];
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getcompanyInfo: builder.query({
      query: (user_id) => `/${user_id}`,
      method: "GET",
    }),
  }),
});

export const { useGetcompanyInfoQuery } = companyInfoDB;
