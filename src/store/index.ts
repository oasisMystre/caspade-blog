import { configureStore } from "@reduxjs/toolkit";

import { feedReducer } from "./slices/feed";
import { featureReducer } from "./slices/feature";

export const store = configureStore({
  reducer: {
    feed: feedReducer,
    feature: featureReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
