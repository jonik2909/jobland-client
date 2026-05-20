import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { HomePageState } from "../../types/screen";
import type { Job } from "../../types/job";
import type { Member } from "../../types/member";

const initialState: HomePageState = {
  featuredJobs: [],
  topCompanies: [],
};

export const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setFeaturedJobs: (state: HomePageState, action: PayloadAction<Job[]>) => {
      state.featuredJobs = action.payload;
    },

    setTopCompanies: (
      state: HomePageState,
      action: PayloadAction<Member[]>,
    ) => {
      state.topCompanies = action.payload;
    },
  },
  selectors: {
    selectFeaturedJobs: (state) => state.featuredJobs,
    selectTopCompanies: (state) => state.topCompanies,
  },
});

export const { setFeaturedJobs, setTopCompanies } = homePageSlice.actions;

export const { selectFeaturedJobs, selectTopCompanies } =
  homePageSlice.selectors;

export default homePageSlice.reducer;
