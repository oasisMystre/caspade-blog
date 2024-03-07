import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ISbStoryData } from "@storyblok/react";

import { LoadingState } from "../models";
import { StoryData } from "@/lib/storybloc/type";

export const getFeature = createAsyncThunk(
  "feature/getFeature",
  (story: Promise<StoryData>) => story,
);

export const featureSlice = createSlice({
  name: "feature",
  initialState: {
    feature: null as ISbStoryData | null,
    loadingState: "idle" as LoadingState["loadingState"],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getFeature.pending, (state) => {
        state.loadingState = "idle";
      })
      .addCase(getFeature.rejected, (state) => {
        state.loadingState = "failed";
      })
      .addCase(getFeature.fulfilled, (state, { payload }) => {
        state.feature = payload;
        state.loadingState = "success";
      });
  },
});

export const featureReducer = featureSlice.reducer;
