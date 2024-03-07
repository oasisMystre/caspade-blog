import type { User } from "@/store/models/user.model";
import { StoryData } from "./type";

export default class Cache {
  public readonly userCache: Map<string, User>;
  public readonly storyCache: Map<string, StoryData>;

  constructor() {
    this.userCache = new Map();
    this.storyCache = new Map();
  }
}
