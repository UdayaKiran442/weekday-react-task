import { createSlice } from "@reduxjs/toolkit";

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
export default jobsReducer.reducer;
