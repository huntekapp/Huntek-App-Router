import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {Slice} from "./features/slice";
import {userDb} from "./services/userDb";
import {setupListeners} from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    Slice,
    [userDb.reducerPath]: userDb.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([userDb.middleware]),
});

setupListeners(store.dispatch);
