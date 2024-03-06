import { ISbRichtext, ISbSchema, ISbStoriesParams } from "@storyblok/react";
import { StoryBlokContextValue } from "@/providers/StoryBlokProvider";
import { User } from "./user.model";

export type StoryParams = {
  api: StoryBlokContextValue["api"];
  params: ISbStoriesParams;
};

export type StoryAsset = {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  source: string;
  filename: string;
  copyright: string;
  fieldtype: "asset";
  meta_data: Record<string, any>;
  is_private: false;
  is_external_url: false;
};

export type StoryContent = {
  title: string;
  author: string;
  description: string;
  content: ISbRichtext;
  illustration: StoryAsset;
  socials: ISbSchema[];
} & { user: User };
