import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const messagesDB = createApi({
  reducerPath: "messagesDB",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev.api.app.huntek.com/api/v1/chats/chats-user",
  }),
  endpoints: (builder) => ({
    getMessages: builder.mutation({
      query: (user_id) => `?user_id=${user_id}`,
      method: "GET",
    }),
  }),
});

export const {useGetMessagesMutation} = messagesDB;