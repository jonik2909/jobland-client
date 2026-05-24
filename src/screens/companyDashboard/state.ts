import type { CompanyDashboardState } from "../../types/screen";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Job } from "../../types/job";
import type { TResponse } from "../../types/response";
import type { TApplicationResponse } from "../../types/application";

const initialState: CompanyDashboardState = {
  companyJob: {
    list: [],
    total: 0,
  },
  companyApplicants: {
    list: [],
    total: 0,
    stats: {
      applied: 0,
      approved: 0,
      rejected: 0,
    },
  },
};

export const companyDashboardSlice = createSlice({
  name: "companyDashboard",
  initialState,
  reducers: {
    setCompanyJobs: (
      state: CompanyDashboardState,
      action: PayloadAction<TResponse<Job>>,
    ) => {
      state.companyJob = action.payload;
    },

    setCompanyApplicants: (
      state: CompanyDashboardState,
      action: PayloadAction<TApplicationResponse>,
    ) => {
      state.companyApplicants = action.payload;
    },
  },
  selectors: {
    selectCompanyJobs: (state: CompanyDashboardState) => state.companyJob,
    selectCompanyApplicants: (state: CompanyDashboardState) =>
      state.companyApplicants,
  },
});

export const { setCompanyJobs, setCompanyApplicants } =
  companyDashboardSlice.actions;

export const { selectCompanyJobs, selectCompanyApplicants } =
  companyDashboardSlice.selectors;

export default companyDashboardSlice.reducer;
