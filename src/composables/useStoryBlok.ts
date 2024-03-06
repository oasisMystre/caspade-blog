import { useContext } from "react";

import { StoryBlokContext } from "@/providers/StoryBlokProvider";

export default function useStoryBlok() {
  return useContext(StoryBlokContext);
}
