import type { CompaniesPageState } from "../../types/screen";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Job } from "../../types/job";
import type { TResponse } from "../../types/response";
import type { Member } from "../../types/member";

const initialState: CompaniesPageState = {
  companies: {
    list: [],
    total: 0,
  },
  companyDetail: null,
  companyJobs: [],
};

export const companiesPageSlice = createSlice({
  name: "companiesPage",
  initialState,
  reducers: {
    setCompanies: (
      state: CompaniesPageState,
      action: PayloadAction<TResponse<Member>>,
    ) => {
      state.companies = action.payload;
    },

    setCompanyDetail: (
      state: CompaniesPageState,
      action: PayloadAction<Member | null>,
    ) => {
      state.companyDetail = action.payload;
    },

    setCompanyJobs: (
      state: CompaniesPageState,
      action: PayloadAction<Job[]>,
    ) => {
      state.companyJobs = action.payload;
    },
  },
  selectors: {
    selectCompanies: (state: CompaniesPageState) => state.companies,
    selectCompanyDetail: (state: CompaniesPageState) => state.companyDetail,
    selectCompanyJobs: (state: CompaniesPageState) => state.companyJobs,
  },
});

export const { setCompanies, setCompanyDetail, setCompanyJobs } =
  companiesPageSlice.actions;

export const { selectCompanies, selectCompanyDetail, selectCompanyJobs } =
  companiesPageSlice.selectors;

export default companiesPageSlice.reducer;
