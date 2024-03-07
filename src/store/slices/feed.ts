import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

import { LoadingState } from "../models";
import { StoryData } from "@/lib/storybloc/type";

export const getStories = createAsyncThunk(
  "feed/getStories",
  (stories: Promise<StoryData[]>) => stories,
);

export const feedAdapter = createEntityAdapter({
  selectId: (story: StoryData) => story.id,
});

export const feedSlice = createSlice({
  name: "feed",
  initialState: feedAdapter.getInitialState<LoadingState>({
    loadingState: "idle",
  }),
  reducers: {
    addMany: feedAdapter.addMany,
  },
  extraReducers(builder) {
    builder
      .addCase(getStories.pending, (state) => {
        state.loadingState = "pending";
      })
      .addCase(getStories.rejected, (state) => {
        state.loadingState = "failed";
      })
      .addCase(getStories.fulfilled, (state, { payload }) => {
        feedAdapter.setAll(state, payload);
        state.loadingState = "success";
      });
  },
});

export const feedActions = feedSlice.actions;
export const feedReducer = feedSlice.reducer;
export const feedSelectors = feedAdapter.getSelectors();
