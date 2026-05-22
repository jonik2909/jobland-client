import type { CandidatesPageState } from "../../types/screen";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TResponse } from "../../types/response";
import type { Member } from "../../types/member";

const initialState: CandidatesPageState = {
  candidants: {
    list: [],
    total: 0,
  },
  candidantDetail: null,
};

export const candidatesPageSlice = createSlice({
  name: "candidatesPage",
  initialState,
  reducers: {
    setCandidants: (
      state: CandidatesPageState,
      action: PayloadAction<TResponse<Member>>,
    ) => {
      state.candidants = action.payload;
    },

    setCandidantDetail: (
      state: CandidatesPageState,
      action: PayloadAction<Member | null>,
    ) => {
      state.candidantDetail = action.payload;
    },
  },
  selectors: {
    selectCandidants: (state: CandidatesPageState) => state.candidants,
    selectCandidantDetail: (state: CandidatesPageState) =>
      state.candidantDetail,
  },
});

export const { setCandidants, setCandidantDetail } =
  candidatesPageSlice.actions;

export const { selectCandidants, selectCandidantDetail } =
  candidatesPageSlice.selectors;

export default candidatesPageSlice.reducer;
