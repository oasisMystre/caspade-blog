import {
  ISbStoriesParams,
  StoryblokClient,
  apiPlugin,
  getStoryblokApi,
  storyblokInit,
} from "@storyblok/react";

import Cache from "./cache";
import type { StoryData } from "./type";
import { User } from "@/store/models/user.model";
import { toNonNull } from "../object";

storyblokInit({
  accessToken:
    process.env.NEXT_STORY_BLOK_API_KEY ??
    process.env.NEXT_PUBLIC_STORY_BLOK_API_KEY,
  use: [apiPlugin],
  apiOptions: {
    region: "us",
  },
});

export abstract class StoryblokApiImpl {
  constructor(
    protected api: StoryblokClient,
    protected cache: Cache,
  ) {}
}

export default class Storyblok extends StoryblokApiImpl {
  private static _instance: Storyblok;

  static get instance() {
    if (!Storyblok._instance) {
      const cache = new Cache();

      const api = getStoryblokApi();
      Storyblok._instance = new Storyblok(api, cache);
    }

    return Storyblok._instance;
  }

  async getFeatured() {
    const {
      data: { story },
    } = await this.api.getStory("feed-featured", {});
    const {
      data: {
        story: { content },
      },
    } = await this.api.getStory(story.content.story, {
      find_by: "uuid",
    });

    story.content = content;
    story.content.user = await this.getUser(content.author);

    return story as StoryData;
  }

  async fetchPosts(params: Omit<ISbStoriesParams, "by_slugs">) {
    const stories = (await this.api.getAll(
      "cdn/stories",
      Object.assign(toNonNull(params), {
        content_type: "post",
      }),
    )) as unknown as StoryData[];

    return Promise.all(
      stories.map(async (story) => {
        story.content.user = await this.getUser(story.content.author);

        return story as StoryData;
      }),
    );
  }

  async fetchPost(...params: Parameters<StoryblokClient["getStory"]>) {
    const cachedStory = this.cache.storyCache.get(params[0]);
    if (cachedStory) return cachedStory;
    const {
      data: { story },
    } = await this.api.getStory(...params);

    story.content.user = await this.getUser(story.content.author);
    this.cache.storyCache.set(params[0], story as StoryData);

    return story as StoryData;
  }

  async getUser(id: string) {
    const user = this.cache.userCache.get(id);
    if (user) return user;

    const response = await this.api.getStory(id, {
      find_by: "uuid",
      version: "published",
    });

    const content = response.data.story.content as User;

    this.cache.userCache.set(id, content);

    return content;
  }
}
