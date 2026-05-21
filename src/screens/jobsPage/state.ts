import type { JobsPageState } from "../../types/screen";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Job } from "../../types/job";
import type { TResponse } from "../../types/response";

const initialState: JobsPageState = {
  jobs: {
    list: [],
    total: 0,
  },
  jobDetail: null,
  relatedJobs: [],
};

export const jobsPageSlice = createSlice({
  name: "jobsPage",
  initialState,
  reducers: {
    setJobs: (state: JobsPageState, action: PayloadAction<TResponse<Job>>) => {
      state.jobs = action.payload;
    },

    setJobDetail: (state: JobsPageState, action: PayloadAction<Job | null>) => {
      state.jobDetail = action.payload;
    },

    setRelatedJobs: (state: JobsPageState, action: PayloadAction<Job[]>) => {
      state.relatedJobs = action.payload;
    },
  },
  selectors: {
    selectJobs: (state: JobsPageState) => state.jobs,
    selectJobDetail: (state: JobsPageState) => state.jobDetail,
    selectRelatedJobs: (state: JobsPageState) => state.relatedJobs,
  },
});

export const { setJobs, setJobDetail, setRelatedJobs } = jobsPageSlice.actions;

export const { selectJobs, selectJobDetail, selectRelatedJobs } =
  jobsPageSlice.selectors;

export default jobsPageSlice.reducer;
