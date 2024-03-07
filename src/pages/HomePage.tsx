"use client";

import { useState } from "react";

import StoryItem from "@/components/StoryItem";
import StoryFilter from "@/components/StoryFilter";
import StoryFeature from "@/components/StoryFeature";
import ListPagination from "@/components/ListPagination";
import HomeSubscribeBanner from "@/components/HomeSubscribeBanner";

import Storyblok from "@/lib/storybloc";
import { StoryData } from "@/lib/storybloc/type";

export type HomePageProps = {
  stories: StoryData[];
  featured: StoryData;
  category?: string;
};

export default function HomePage({
  stories,
  featured,
  category,
}: HomePageProps) {
  const [page, setPage] = useState(0);
  const [feeds, setFeeds] = useState<StoryData[]>(stories);

  return (
    <div className="flex flex-1 flex-col space-y-48">
      <div className="flex flex-1 flex-col space-y-16 self-center px-8 lg:px-24 2xl:max-w-7xl">
        <StoryFeature story={featured} />
        <div className="flex flex-col space-y-16">
          <StoryFilter />
          <div
            key={category}
            className="flex flex-col space-y-16"
          >
            {feeds.map((feed) => (
              <StoryItem
                key={feed.id}
                story={feed}
              />
            ))}
          </div>
          <ListPagination
            totalPage={5}
            selectedPage={page}
            onChange={async (page) => {
              setPage(page);

              const response = await Storyblok.instance.fetchPosts({
                page: page + 1,
                version: "draft",
              });

              setFeeds(feeds.concat(response));
            }}
          />
        </div>
      </div>
      <HomeSubscribeBanner />
    </div>
  );
}
