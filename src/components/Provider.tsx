"use client";
import { Provider } from "react-redux";
import { apiPlugin } from "@storyblok/react";

import { store } from "@/store";
import StoryBlokProvider from "@/providers/StoryBlokProvider";

export default function _Provider({ children }: React.PropsWithChildren) {
  return (
    <StoryBlokProvider
      apiOptions={{ region: "us" }}
      accessToken={process.env.NEXT_PUBLIC_STORY_BLOC_API_KEY}
      use={[apiPlugin]}
    >
      <Provider store={store}> {children} </Provider>;
    </StoryBlokProvider>
  );
}
