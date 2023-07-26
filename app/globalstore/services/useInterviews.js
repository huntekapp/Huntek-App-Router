import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const interviewsDB = createApi({
  reducerPath: "interviewsDB",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev.api.app.huntek.com/api/v1/interviews/user_interviews",
  }),
  endpoints: (builder) => ({
    getInterviews: builder.mutation({
      query: (user_id) => `/${user_id}`,
      method: "GET",
    }),
  }),
});

export const {useGetInterviewsMutation} = interviewsDB;