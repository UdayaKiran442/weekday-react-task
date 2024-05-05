import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "./store";

// initial state type
interface InitialState {
  jobs: [];
}

// initial state
const initialState: InitialState = {
  jobs: [],
};

// jobs reducer
export const jobsReducer = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    loadJobs: (state, action) => {
      state.jobs = action.payload;
    },
  },
});

// export jobs action
export const { loadJobs } = jobsReducer.actions;
// export jobs selector
export const selectJobs = (state: RootState) => state.jobs.jobs;
// export jobs reducer
export default jobsReducer.reducer;
