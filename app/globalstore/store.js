import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import emailReducer from "./features/emailSlice";
import {registerDB} from "./services/useRegister";
import {setupListeners} from "@reduxjs/toolkit/dist/query";
import {verifDB} from "./services/useVerifCode";
import {loginDB} from "./services/useLogin";
import {recoverDB} from "./services/useRecoverPw";
import { resendCodeDB } from "./services/useResendCode";


export const store = configureStore({
  reducer: {
    email: emailReducer,
    [registerDB.reducerPath]: registerDB.reducer,
    [verifDB.reducerPath]: verifDB.reducer,
    [loginDB.reducerPath]: loginDB.reducer,
    [recoverDB.reducerPath]: recoverDB.reducer,
    [resendCodeDB.reducerPath]: resendCodeDB.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      registerDB.middleware,
      verifDB.middleware,
      loginDB.middleware,
      recoverDB.middleware,
      resendCodeDB.middleware
    ]), 
  });
setupListeners(store.dispatch);
