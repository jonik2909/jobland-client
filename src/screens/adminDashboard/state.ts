import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TResponse } from "../../types/response";
import type { Job } from "../../types/job";
import type { Member } from "../../types/member";
import type { AdminDashboardState } from "../../types/screen";

const initialState: AdminDashboardState = {
  adminMembers: {
    list: [],
    total: 0,
  },
  adminJobs: {
    list: [],
    total: 0,
  },
};

export const adminDashboardSlice = createSlice({
  name: "adminDashboard",
  initialState,
  reducers: {
    setAdminMembers: (
      state: AdminDashboardState,
      action: PayloadAction<TResponse<Member>>,
    ) => {
      state.adminMembers = action.payload;
    },
    setAdminJobs: (
      state: AdminDashboardState,
      action: PayloadAction<TResponse<Job>>,
    ) => {
      state.adminJobs = action.payload;
    },
  },
  selectors: {
    selectAdminMembers: (state: AdminDashboardState) => state.adminMembers,
    selectAdminJobs: (state: AdminDashboardState) => state.adminJobs,
  },
});

export const { setAdminMembers, setAdminJobs } = adminDashboardSlice.actions;

export const { selectAdminMembers, selectAdminJobs } =
  adminDashboardSlice.selectors;

export default adminDashboardSlice.reducer;
