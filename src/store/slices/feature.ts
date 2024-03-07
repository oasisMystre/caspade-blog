import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ISbStoryData } from "@storyblok/react";

import { LoadingState } from "../models";
import { StoryParams } from "../models/story.model";
import Cache from "@/lib/cache";

export const fetchStory = (
  api: StoryParams["api"],
  ...params: Parameters<StoryParams["api"]["getStory"]>
) =>
  api.getStory(...params).then(async ({ data: { story } }) => {
    story.content.user = await Cache.instance.getUser(story.content.author);
    return story;
  });

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
      story.content.user = await Cache.instance.getUser(content.author);

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
