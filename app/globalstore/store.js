import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import emailReducer from "./features/emailSlice";
import { registerDB } from "./services/both/log-reg-val/useRegister";
import { verifDB } from "./services/both/log-reg-val/useVerifCode";
import { loginDB } from "./services/both/log-reg-val/useLogin";
import { recoverDB } from "./services/both/reco-pw/useRecoverPw";
import { resendCodeDB } from "./services/both/log-reg-val/useResendCode";
import { newPasswordDB } from "./services/both/reco-pw/useNewPassword";
import { chatsDB } from "./services/both/chats-msg/useChats";
import { createChatDB } from "./services/both/chats-msg/useCreateChat";
import { messagesDB } from "./services/both/chats-msg/useMessages";
import { postMessagesDB } from "./services/both/chats-msg/usePostMessage";
import { interviewsDB } from "./services/applicant/user-info/useInterviews";
import { infoUserDB } from "./services/applicant/user-info/useInfoUser";
import { newFilesDB } from "./services/applicant/user-files/useNewFiles";
import { filesUserDB } from "./services/applicant/user-files/useFiles";
import { deletePicDB } from "./services/applicant/user-files/useDeletepic";
import { deleteCVDB } from "./services/applicant/user-files/useDeleteFiles";
import { editFilesDB } from "./services/applicant/user-files/useEditFiles";
import { resumeDB } from "./services/applicant/user-profile/useResume";
import { infoResumeDB } from "./services/applicant/user-profile/useGetResume";
import { editResumeDB } from "./services/applicant/user-profile/useEditResume";

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
    [deleteCVDB.reducerPath]: deleteCVDB.reducer,
    [deletePicDB.reducerPath]: deletePicDB.reducer,
    [editFilesDB.reducerPath]: editFilesDB.reducer,
    [resumeDB.reducerPath]: resumeDB.reducer,
    [infoResumeDB.reducerPath]: infoResumeDB.reducer,
    [editResumeDB.reducerPath]: editResumeDB.reducer,
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
      deleteCVDB.middleware,
      deletePicDB.middleware,
      editFilesDB.middleware,
      resumeDB.middleware,
      infoResumeDB.middleware,
      editResumeDB.middleware,
    ]),
});
setupListeners(store.dispatch);
