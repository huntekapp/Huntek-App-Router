import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import emailReducer from "./features/emailSlice";
import { registerDB } from "./services/useRegister";
import { verifDB } from "./services/useVerifCode";
import { loginDB } from "./services/useLogin";
import { recoverDB } from "./services/useRecoverPw";
import { resendCodeDB } from "./services/useResendCode";
import { newPasswordDB } from "./services/useNewPassword";
import { chatsDB } from "./services/useChats";
import { createChatDB } from "./services/useCreateChat";
import { messagesDB } from "./services/useMessages";
import { postMessagesDB } from "./services/usePostMessage";

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
    ]),
});
setupListeners(store.dispatch);
