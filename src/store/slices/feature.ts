import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ISbNode, ISbStoryData } from "@storyblok/react";

import { LoadingState } from "../models";
import { StoryContent, StoryParams } from "../models/story.model";

export const getFeature = createAsyncThunk(
  "feature/getFeature",
  (api: StoryParams["api"]) =>
    api.getStory("feed-featured", {}).then(async ({ data: { story } }) => {
      const {
        data: {
          story: { content },
        },
      } = await api.getStory(story.content.story, {
        find_by: "uuid",
      });

      story.content = content;

      return story;
    }),
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
