"use client";

import { useEffect, useState } from "react";
import { ISbStoryData } from "@storyblok/react";

import StoryItem from "./StoryItem";
import { fetchStories } from "@/store/slices/feed";
import useStoryBlok from "@/composables/useStoryBlok";

type StoryRecommendationProps = {
  excludeStory?: number;
  tagList: string[];
};

export default function StoryRecommendation({
  tagList,
  excludeStory,
}: StoryRecommendationProps) {
  const { api } = useStoryBlok();
  const [stories, setStories] = useState<ISbStoryData[] | null>(null);

  useEffect(() => {
    fetchStories({
      api,
      params: { with_tag: tagList.join(","), excluding_ids: excludeStory?.toString() },
    }).then(setStories);
  }, [tagList]);

  return (
    stories && (
      <section className="flex flex-col space-y-32 bg-stone-800/50 p-16 2xl:p-32">
        <div className="2xl:w-7xl flex flex-col space-y-16 2xl:self-center">
          <h1 className="text-3xl font-medium">Next Read</h1>
          <div className="flex flex-col space-y-8">
            {stories.map((story) => (
              <StoryItem
                key={story.uuid}
                story={story}
                hideDescription={true}
                className="bg-dark-700/90 rounded-xl p-16 pb-0"
              />
            ))}
          </div>
        </div>
      </section>
    )
  );
}
