import type { MyPageState } from "../../types/screen";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TResponse } from "../../types/response";
import type { Application } from "../../types/application";
import type { Background } from "../../types/background";

const initialState: MyPageState = {
  myApplications: {
    list: [],
    total: 0,
  },
  myBackgrounds: [],
};

export const myPageSlice = createSlice({
  name: "myPage",
  initialState,
  reducers: {
    setMyApplications: (
      state: MyPageState,
      action: PayloadAction<TResponse<Application>>,
    ) => {
      state.myApplications = action.payload;
    },

    setMyBackgrounds: (
      state: MyPageState,
      action: PayloadAction<Background[]>,
    ) => {
      state.myBackgrounds = action.payload;
    },
  },
  selectors: {
    selectMyApplications: (state: MyPageState) => state.myApplications,
    selectMyBackgrounds: (state: MyPageState) => state.myBackgrounds,
  },
});

export const { setMyApplications, setMyBackgrounds } = myPageSlice.actions;

export const { selectMyApplications, selectMyBackgrounds } =
  myPageSlice.selectors;

export default myPageSlice.reducer;
