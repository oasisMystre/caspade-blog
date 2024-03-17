"use client";

import { useState } from "react";

import { StoryData } from "@/lib/storybloc/type";

import StoryItem from "@/components/StoryItem";
import ListPagination from "@/components/ListPagination";

export type CategoryPageProps = {
  stories: StoryData[];
};

export default function CategoryPage({ stories }: CategoryPageProps) {
  const [page, setPage] = useState(0);

  return (
    <div className="flex flex-col space-y-16">
      <div className="flex flex-col space-y-16">
        {stories.map((story) => (
          <StoryItem
            key={story.id}
            story={story}
          />
        ))}
      </div>
      <ListPagination
        totalPage={5}
        selectedPage={page}
        onChange={(page) => setPage(page)}
      />
    </div>
  );
}
