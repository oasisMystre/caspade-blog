"use client";
import { useParams } from "next/navigation";

import { useEffect, useState } from "react";
import { MdArrowUpward } from "react-icons/md";
import { ISbStoryData } from "@storyblok/react";

import useStoryBlok from "@/composables/useStoryBlok";

import { fetchStory } from "@/store/slices/feature";
import { StoryContent } from "@/store/models/story.model";

import StoryUser from "@/components/StoryUser";
import StoryHeader from "@/components/StoryHeader";
import LayoutBackNavigation from "@/components/LayoutBackNavigation";
import BlogSubscribeBanner from "@/components/BlogSubscribeBanner";
import StoryRecommendation from "@/components/StoryRecommedation";
import RichText from "@/components/RichText";

function useStory(uuid: string) {
  const { api } = useStoryBlok();
  const [story, setStory] = useState<ISbStoryData | null>(null);
  useEffect(() => {
    fetchStory(api, uuid, { find_by: "uuid" }).then(setStory);
  }, [uuid]);

  return story;
}

function BlogDetail({ story }: { story: ISbStoryData }) {
  const content = story.content as StoryContent;

  return (
    <div className="flex flex-col space-y-32 ">
      <div className="2xl:w-7xl lt-md:px-8 flex flex-col space-y-8 md:px-16 2xl:self-center 2xl:px-0">
        <LayoutBackNavigation title={content.title} />
        <div className="flex flex-col space-y-4">
          <h1 className="text-4xl font-medium">{content.title}</h1>
          <StoryHeader
            createdAt={story.created_at}
            categories={story.tag_list}
          />
        </div>
        <StoryUser user={content.user} />
        <div className="flex flex-col space-y-8">
          <div className="flex items-center">
            <b className="flex-1 font-medium">Share article</b>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-yellow-500">
                <span>Twitter</span>
                <MdArrowUpward className="rotate-45 text-xl" />
              </button>
              <button className="flex items-center space-x-2 text-yellow-500">
                <span>LinkedIn</span>
                <MdArrowUpward className="rotate-45 text-xl" />
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-32">
            <div className="flex flex-col text-base prose prose-white xl:text-xl">
              <RichText document={content.content} />
            </div>
            <BlogSubscribeBanner />
          </div>
        </div>
      </div>
      <StoryRecommendation
        tagList={story.tag_list}
        excludeStory={story.id}
      />
    </div>
  );
}

export default function BlogDetailPage() {
  const params = useParams();
  const story = useStory(params.uuid as string);

  return story && <BlogDetail story={story} />;
}
