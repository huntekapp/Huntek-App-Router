import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const postMessagesDB = createApi({
  reducerPath: "postMessagesDB",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev.api.app.huntek.com/api/v1/messages/send-message",
  }),
  endpoints: (builder) => ({
    postMessage: builder.mutation({
      query: (data) => ({
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {usePostMessageMutation} = postMessagesDB;