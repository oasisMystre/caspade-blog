import { ISbStoryData } from "@storyblok/react";

import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

import { LoadingState } from "../models";
import { StoryParams } from "../models/story.model";
import { toNonNull } from "@/lib/object";

export const fetchStories = ({ api, params }: StoryParams) =>
  api.getAll(
    "cdn/stories",
    Object.assign(toNonNull(params), {
      by_slugs: "posts/*",
    }),
  ) as unknown as Promise<ISbStoryData[]>;

export const getStories = createAsyncThunk("feed/getStories", fetchStories);

export const feedAdapter = createEntityAdapter({
  selectId: (story: ISbStoryData) => story.id,
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
