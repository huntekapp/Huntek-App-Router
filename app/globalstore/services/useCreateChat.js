import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const createChatDB = createApi({
  reducerPath: "createChatDB",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev.api.app.huntek.com/api/v1/chats/create-chat",
  }),
  endpoints: (builder) => ({
    createChat: builder.mutation({
      query: (data) => ({
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {useCreateChatMutation} = createChatDB;