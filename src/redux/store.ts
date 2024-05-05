import { configureStore } from "@reduxjs/toolkit";

import jobsReducer from "./jobsReducer";

// configure reducers in store
export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
