import { ISbStory } from "@storyblok/react";
import { useState, useEffect } from "react";

import useStoryBlok from "./useStoryBlok";
import { User } from "@/store/models/user.model";

export default function useUser(id: string) {
  const { api } = useStoryBlok();
  const [user, setUser] = useState<ISbStory | null>(null);

  useEffect(() => {
    api
      .getStory(id, {
        find_by: "uuid",
        version: "published",
      })
      .then(setUser);
  }, [api, id]);

  return user ? (user.data.story.content as User) : undefined;
}
