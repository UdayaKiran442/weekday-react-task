import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "./store";

interface InitialState {
  jobs: [];
}

const initialState: InitialState = {
  jobs: [],
};

export const jobsReducer = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    loadJobs: (state, action) => {
      state.jobs = action.payload;
    },
  },
});

export const { loadJobs } = jobsReducer.actions;
export const selectJobs = (state: RootState) => state.jobs.jobs;
export default jobsReducer.reducer;
