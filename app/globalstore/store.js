import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import emailReducer from "./features/emailSlice";
import { registerDB } from "./services/useRegister";
import { verifDB } from "./services/useVerifCode";
import { loginDB } from "./services/useLogin";
import { recoverDB } from "./services/useRecoverPw";
import { resendCodeDB } from "./services/useResendCode";
import { newPasswordDB } from "./services/useNewPassword";
import { messagesDB } from "./services/useMessages";

export const store = configureStore({
  reducer: {
    email: emailReducer,
    [registerDB.reducerPath]: registerDB.reducer,
    [verifDB.reducerPath]: verifDB.reducer,
    [loginDB.reducerPath]: loginDB.reducer,
    [recoverDB.reducerPath]: recoverDB.reducer,
    [resendCodeDB.reducerPath]: resendCodeDB.reducer,
    [newPasswordDB.reducerPath]: newPasswordDB.reducer,
    [messagesDB.reducerPath]: messagesDB.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      registerDB.middleware,
      verifDB.middleware,
      loginDB.middleware,
      recoverDB.middleware,
      resendCodeDB.middleware,
      newPasswordDB.middleware,
      messagesDB.middleware,
    ]),
});
setupListeners(store.dispatch);
