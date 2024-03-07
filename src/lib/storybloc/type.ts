import { StoryContent } from "@/store/models/story.model";
import { ISbStoryData } from "@storyblok/react";

export type OmitFirstParameter<T> = T extends (...args: infer P) => infer R
  ? P extends [any, ...infer U]
    ? (...args: U) => R
    : never
  : never;

export interface StoryData extends ISbStoryData {
  content: StoryContent;
}
