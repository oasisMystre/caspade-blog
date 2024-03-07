"use client";
import { useState, useEffect } from "react";
import { Category } from "@/data/categories";

import { getFeature } from "@/store/slices/feature";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  feedActions,
  feedSelectors,
  fetchStories,
  getStories,
} from "@/store/slices/feed";

import StoryItem from "@/components/StoryItem";
import StoryFilter from "@/components/StoryFilter";
import StoryFeature from "@/components/StoryFeature";
import ListPagination from "@/components/ListPagination";
import HomeSubscribeBanner from "@/components/HomeSubscribeBanner";

import useStoryBlok from "@/composables/useStoryBlok";

export default function HomePage() {
  const { api } = useStoryBlok();
  const dispatch = useAppDispatch();

  const { feature } = useAppSelector((state) => state.feature);
  const { loadingState, ...feedState } = useAppSelector((state) => state.feed);

  const feeds = feedSelectors.selectAll(feedState);

  const [page, setPage] = useState(0);
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    dispatch(
      getStories({
        api,
        params: {
          version: "draft",
          with_tag: category?.href ?? undefined,
        },
      }),
    )
      .unwrap()
      .catch(console.log);
  }, [api, dispatch, category]);

  useEffect(() => {
    dispatch(getFeature(api)).unwrap().catch(console.log);
  }, [api, dispatch]);

  return (
    <div className="flex flex-1 flex-col space-y-48">
      <div className="flex flex-1 flex-col space-y-16 self-center px-8 lg:px-24 2xl:max-w-7xl">
        {feature && <StoryFeature story={feature} />}
        <div className="flex flex-col space-y-16">
          <StoryFilter
            value={category}
            onSelect={(value) => setCategory(value)}
          />
          <div className="flex flex-col space-y-16">
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

              dispatch(
                feedActions.addMany(
                  await fetchStories({
                    api,
                    params: { page: page + 1, version: "draft" },
                  }),
                ),
              );
            }}
          />
        </div>
      </div>
      <HomeSubscribeBanner />
    </div>
  );
}
