import { getStoryblokApi } from "@storyblok/react";
import { StoryBlokContextValue } from "@/providers/StoryBlokProvider";
import { User } from "@/store/models/user.model";

export default class Cache {
  static _instance?: Cache;

  static get instance() {
    if (!Cache._instance) Cache._instance = new Cache();

    return Cache._instance!;
  }

  private api: StoryBlokContextValue["api"];
  private userCache: Map<string, User>;

  constructor() {
    this.userCache = new Map();
    this.api = getStoryblokApi();
  }

  async getUser(id: string) {
    const user = this.userCache.get(id);
    if (user) return user;

    const response = await this.api.getStory(id, {
      find_by: "uuid",
      version: "published",
    });

    const content = response.data.story.content as User;

    this.userCache.set(id, content);

    return content;
  }
}
