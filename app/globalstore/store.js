import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import emailReducer from "./features/emailSlice";
import { registerDB } from "./services/log-reg-val/useRegister";
import { verifDB } from "./services/log-reg-val/useVerifCode";
import { loginDB } from "./services/log-reg-val/useLogin";
import { recoverDB } from "./services/reco-pw/useRecoverPw";
import { resendCodeDB } from "./services/log-reg-val/useResendCode";
import { newPasswordDB } from "./services/reco-pw/useNewPassword";
import { chatsDB } from "./services/chats-msg/useChats";
import { createChatDB } from "./services/chats-msg/useCreateChat";
import { messagesDB } from "./services/chats-msg/useMessages";
import { postMessagesDB } from "./services/chats-msg/usePostMessage";
import { interviewsDB } from "./services/user-info/useInterviews";
import { infoUserDB } from "./services/user-info/useInfoUser";
import { newFilesDB } from "./services/user-info/useNewFiles";
import { filesUserDB } from "./services/user-info/useFiles";
import { deleteFilesDB } from "./services/user-info/useDeleteFiles";
import { editFilesDB } from "./services/user-info/useEditFiles";

export const store = configureStore({
  reducer: {
    email: emailReducer,
    [registerDB.reducerPath]: registerDB.reducer,
    [verifDB.reducerPath]: verifDB.reducer,
    [loginDB.reducerPath]: loginDB.reducer,
    [recoverDB.reducerPath]: recoverDB.reducer,
    [resendCodeDB.reducerPath]: resendCodeDB.reducer,
    [newPasswordDB.reducerPath]: newPasswordDB.reducer,
    [chatsDB.reducerPath]: chatsDB.reducer,
    [createChatDB.reducerPath]: createChatDB.reducer,
    [messagesDB.reducerPath]: messagesDB.reducer,
    [postMessagesDB.reducerPath]: postMessagesDB.reducer,
    [interviewsDB.reducerPath]: interviewsDB.reducer,
    [infoUserDB.reducerPath]: infoUserDB.reducer,
    [newFilesDB.reducerPath]: newFilesDB.reducer,
    [filesUserDB.reducerPath]: filesUserDB.reducer,
    [deleteFilesDB.reducerPath]: deleteFilesDB.reducer,
    [editFilesDB.reducerPath]: editFilesDB.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      registerDB.middleware,
      verifDB.middleware,
      loginDB.middleware,
      recoverDB.middleware,
      resendCodeDB.middleware,
      newPasswordDB.middleware,
      chatsDB.middleware,
      createChatDB.middleware,
      messagesDB.middleware,
      postMessagesDB.middleware,
      interviewsDB.middleware,
      infoUserDB.middleware,
      newFilesDB.middleware,
      filesUserDB.middleware,
      deleteFilesDB.middleware,
      editFilesDB.middleware
    ]),
});
setupListeners(store.dispatch);
