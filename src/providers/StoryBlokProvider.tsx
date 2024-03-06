"use client";

import { createContext, useEffect, useRef, useState } from "react";
import { storyblokInit, getStoryblokApi } from "@storyblok/react";

export type StoryBlokContextValue = {
  api: ReturnType<typeof getStoryblokApi>;
};

export const StoryBlokContext = createContext<StoryBlokContextValue>({
  api: null as any,
});

type StoryBlokProviderProps = Parameters<typeof storyblokInit>[number] &
  React.PropsWithChildren;

export default function StoryBlokProvider({
  children,
  ...props
}: StoryBlokProviderProps) {
  const [api, setApi] = useState<StoryBlokContextValue["api"] | null>(null);

  useEffect(() => {
    storyblokInit(props);
    setApi(getStoryblokApi());
  }, []);

  return (
    <StoryBlokContext.Provider
      value={{ api: api as StoryBlokContextValue["api"] }}
    >
      {api ? children : <> </>}
    </StoryBlokContext.Provider>
  );
}
