import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const chatsDB = createApi({
  reducerPath: "chatsDB",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev.api.app.huntek.com/api/v1/chats/chats-user",
  }),
  endpoints: (builder) => ({
    getChats: builder.mutation({
      query: (user_id) => `?user_id=${user_id}`,
      method: "GET",
    }),
  }),
});

export const {useGetChatsMutation} = chatsDB;