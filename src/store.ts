import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import homePageReducer from "./screens/homePage/state";
import jobsPageReducer from "./screens/jobsPage/state";
import companiesPageReducer from "./screens/companiesPage/state";
import candidatesPageReducer from "./screens/candidatesPage/state";
import myPageReducer from "./screens/myPage/state";

const logger = createLogger();

export const store = configureStore({
  reducer: {
    homePage: homePageReducer,
    jobsPage: jobsPageReducer,
    companiesPage: companiesPageReducer,
    candidatesPage: candidatesPageReducer,
    myPage: myPageReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
